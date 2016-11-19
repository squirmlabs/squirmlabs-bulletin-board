
# squirmlabs-bulletin-board

Squirmlabs - Bulletin Board
================================

Overview
--------

Overview goes here....

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

