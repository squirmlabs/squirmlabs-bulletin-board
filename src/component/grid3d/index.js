const grid3DModal = props => {

  const options = {};
  const gridWrap = this.props.el.querySelector('div.grid-wrap');
  const grid = gridWrap.querySelector('div.grid');
  const gridItems = [].slice.call(this.grid.children);
  const itemSize = {width: this.gridItems[0].offsetWidth, height: this.gridItems[0].offsetHeight};
  const contentEl = this.props.el.querySelector('div.content');
  const contentItems = [].slice.call(this.contentEl.children);
  const close = this.contentEl.querySelector('span.close-content');
  const loader = this.contentEl.querySelector('span.loading');
  const support = support.pointerevents && support.csstransitions && support.csstransforms3d;

  _initEvents();

  const _initEvents = () => {
    var self = this;
    this.gridItems.forEach(function( item, idx) {
      item.addEventListener('click', function() {
        self._showContent(idx);
      });
    });
    this.close.addEventListener('click', function() {
      self._hideContent();
    } );
    if(this.support) {
      window.addEventListener('resize', function() {self._resizeHandler();});
      window.addEventListener('scroll', function() {
        if(self.isAnimating) {
          window.scrollTo(self.scrollPosition ? self.scrollPosition.x: 0, self.scrollPosition ? self.scrollPosition.y : 0);
        }
        else {
          self.scrollPosition = {x: window.pageXOffset || docElem.scrollLeft, y: window.pageYOffset || docElem.scrollTop};
          self._scrollHandler();
        }
      });
    }
  };
  const classReg = (className) => {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  const hasClass, addClass, removeClass;

  if ('classList' in document.documentElement ) {
    hasClass = (elem, c) => {
      return elem.classList.contains(c);
    };
    addClass = function(elem, c) {
      elem.classList.add(c);
    };
    removeClass = function(elem, c) {
      elem.classList.remove(c);
    };
  }
  else {
    hasClass = function(elem, c) {
      return classReg(c).test(elem.className);
    };
    addClass = function( elem, c ) {
      if ( !hasClass( elem, c ) ) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function( elem, c ) {
      elem.className = elem.className.replace(classReg(c), ' ');
    };
  }

  const toggleClass = (elem, c) => {
    const fn = hasClass(elem, c) ? removeClass : addClass;
    fn(elem, c);
  }

  const classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };

  const _showContent = (pos) => {
    if(this.isAnimating) {
      return false;
    }
    this.isAnimating = true;
    var self = this,
    loadContent = function() {
      setTimeout( function() {
        classie.removeClass(self.loader, 'show');
        classie.addClass(self.contentItems[pos], 'show');
      }, 1000 );
      classie.addClass(self.contentEl, 'show');
      classie.addClass(self.loader, 'show');
      classie.addClass(document.body, 'noscroll');
      self.isAnimating = false;
    };

    if(!this.support) {
      loadContent();
      return false;
    }
    const currentItem = this.gridItems[pos],
    itemContent = currentItem.innerHTML;
    this.placeholder = this._createPlaceholder(itemContent);
    this.placeholder.style.left = currentItem.offsetLeft + 'px';
    this.placeholder.style.top = currentItem.offsetTop + 'px';
    this.grid.appendChild(this.placeholder);
    const animFn = function() {
      classie.addClass(currentItem, 'active');
      classie.addClass(self.gridWrap, 'view-full');
      self._resizePlaceholder();
      var onEndTransitionFn = function(ev) {
        if( ev.propertyName.indexOf('transform') === -1) return false;
        this.removeEventListener(transEndEventName, onEndTransitionFn);
        loadContent();
      };
      self.placeholder.addEventListener(transEndEventName, onEndTransitionFn);
    };
    setTimeout( animFn, 25);
  };

  const _hideContent = () => {
    const self = this,
    contentItem = this.props.el.querySelector('div.content > .show'),
    currentItem = this.gridItems[this.contentItems.indexOf(contentItem)];
    classie.removeClass(contentItem, 'show');
    classie.removeClass(this.contentEl, 'show');
    setTimeout(function() { classie.removeClass(document.body, 'noscroll');}, 25);
    if(!this.support) return false;
    classie.removeClass(this.gridWrap, 'view-full');
    this.placeholder.style.left = currentItem.offsetLeft + 'px';
    this.placeholder.style.top = currentItem.offsetTop + 'px';
    this.placeholder.style.width = this.itemSize.width + 'px';
    this.placeholder.style.height = this.itemSize.height + 'px';
    const onEndPlaceholderTransFn = function(ev) {
      this.removeEventListener(transEndEventName, onEndPlaceholderTransFn);
      self.placeholder.parentNode.removeChild(self.placeholder);
      classie.removeClass(currentItem, 'active');
    };
    this.placeholder.addEventListener(transEndEventName, onEndPlaceholderTransFn);
  }

  const _createPlaceholder = (content) => {
    const front = document.createElement('div');
    front.className = 'front';
    front.innerHTML = content;
    const back = document.createElement('div');
    back.className = 'back';
    back.innerHTML = '&nbsp;';
    const placeholder = document.createElement('div');
    placeholder.className = 'placeholder';
    placeholder.appendChild(front);
    placeholder.appendChild(back);
    return placeholder;
  };

  const _scrollHandler = () => {
    const self = this;
    if(!this.didScroll) {
      this.didScroll = true;
      setTimeout(function() {self._scrollPage(); }, 60);
    }
  };

  const _scrollPage = () =>{
    const perspY = scrollY() + getViewportH() / 2;
    this.gridWrap.style.WebkitPerspectiveOrigin = '50% ' + perspY + 'px';
    this.gridWrap.style.MozPerspectiveOrigin = '50% ' + perspY + 'px';
    this.gridWrap.style.perspectiveOrigin = '50% ' + perspY + 'px';
    this.didScroll = false;
  };

  const _resizeHandler = () => {
    const self = this;
    function delayed() {
      self._resizePlaceholder();
      self._scrollPage();
      self._resizeTimeout = null;
    }
    if (this._resizeTimeout) {
      clearTimeout(this._resizeTimeout);
    }
    this._resizeTimeout = setTimeout(delayed, 50);
  }

  const _resizePlaceholder = () => {
    this.itemSize = { width : this.gridItems[0].offsetWidth, height : this.gridItems[0].offsetHeight };
    if(this.placeholder) {
      const gridOffset = getOffset( this.grid );
      this.placeholder.style.left = Number( -1 * (gridOffset.left - scrollX())) + 'px';
      this.placeholder.style.top = Number( -1 * (gridOffset.top - scrollY())) + 'px';
      this.placeholder.style.width = getViewportW() + 'px';
      this.placeholder.style.height = getViewportH() + 'px';
    }
  }
}

export default grid3D;

