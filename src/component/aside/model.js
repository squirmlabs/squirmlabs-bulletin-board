import Rx from 'rx';

const fromEvent = Rx.Observable.fromEvent;

export function delegate(wrapper, selector, eventName){
  return Rx.Observable.fromEvent(
    document.querySelector(wrapper),
    eventName,
    e => ({event:e,delegate:e.target.closest(selector)})
  ).filter(x => x.delegate !== null);
}
// click
delegate('.navi', 'li', 'click')
.subscribe(e => console.dir(e));
// mouseover
delegate('.navi', 'li', 'mouseover')
.subscribe(e => console.dir(e));
