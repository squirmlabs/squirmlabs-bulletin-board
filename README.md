
# squirmlabs-bulletin-board

Squirmlabs - Bulletin Board
================================

TODO:
--------

Integrate

```
./src/component/grid3d/
```

Overview
--------

For this exercise, you will be rapidly developing a front-end prototype (HTML, JavaScript, CSS) for a brand new sticky note application. Functionality should include:
*	The ability to create and display one or more yellow sticky notes on the page
*	The ability to drag and drop sticky notes anywhere on the page
*	The ability to open sticky note:

*	When user clicks on the sticky note, it will have a “flip over” animation
*	As it flips over, the sticky note will animate to the front of the UI in one seamless motion, similar to a modal window 
*	The flipped sticky note will come to rest at the vertical and horizontal centers of the page
*	The backside of the sticky note will be blue
*	The ability to close an open sticky note:
*	When a user closes a sticky note, it will have a “flip back over” animation
As the sticky note flips back over to the yellow side, it will animate back to the exact position on the page where it was originally located before it was clicked

### Technologies Involved

This has been setup with the following (and other) technologies.

* node@4.4.3
* Webpack
* React
* Rxjs
* Less
* Sass


Installation & Setup
--------------------

Here is the basic setup for getting the bootstrap application up and running.

~~~sh
# from within the package directory
# file unarchived into
$ npm install
# will take a few minutes...
$ npm run start
~~~

Open `http://localhost:8085/` in Google Chrome to see the sample application.

Webpack will auto-rebuild any changes you make to UI code. If, for some reason
you need to rework the API code, you will have to kill the process (`Ctrl-c`)
and restart it (`npm run start`).


Package
----------

Create an archive of `NPM package`:

~~~sh
# from within the package/ directory
$ npm pack
~~~

Will produce a `squirmlabs-bulletin-board-x.x.x.tgz` file in that directory.

---

