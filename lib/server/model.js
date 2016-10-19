const R = require('ramda');
const Rx = require('rx');
const moment = require('moment');
const fs = require('fs');
const path = require('path');
const axios = require('axios')


const Observable = Rx.Observable;
const readdir = Observable.fromNodeCallback(fs.readdir);
const stat = Observable.fromNodeCallback(fs.stat);
const isEmpty = R.isEmpty;
const isNotEmpty = R.complement(isEmpty);
const isImage = R.pipe(R.match(/\.(jpe?g|png)$/), isNotEmpty);
const isThumbnail = R.both(isImage, R.pipe(R.match(/-tn/), isNotEmpty));

function isDirectory(filepath) {
  return stat(filepath).map(R.invoker(0, 'isDirectory'));
}

function dirnameOrEmpty(filepath) {
  return isDirectory(filepath)
    .flatMap(function(isdir) {
      return isdir ?
      Observable.just(path.basename(filepath)) :
      Observable.empty();
    });
}

function albums(data) {
  const request = axios.get('https://api.instagram.com/v1/tags/diplo/media/recent?access_token=2173723687.045bb6a.a1b87e36b84a481d9a2c48dd45c602ff')
  return request
    .flatMap(Observable.from)
    .flatMap(function(fn) {
      console.log('FN', fn)
      // return dirnameOrEmpty(path.join(dirpath, fn));
    })
    .toArray();
}
function tagResults() {
  const request = axios.get('https://api.instagram.com/v1/tags/diplo/media/recent?access_token=2173723687.045bb6a.a1b87e36b84a481d9a2c48dd45c602ff')
    .then(response => { return response })
    .catch(err => { return err.message });
}

module.exports = function(config) {
  return {
    getAlbums: function() {
      return albums(data);
    },
    getTagResults: function() {
      return tagResults();
    },
    getResultItems: function() {
      return this.getTagResults()
        .map(data => console.log(data))
        // .flatMap(function(name) {
        //   return name ? readdir(path.join(config.imageDirectory, name))
        //     .flatMap(Observable.from)
        //     .filter(isThumbnail)
        //     .map(function(fn) {
        //       return 'http://localhost:' + config.port + '/' + path.join('img', name, fn);
        //     }) : Observable.empty();
        // })
        // .toArray();
    },
    getAlbumItems: function(idx) {
      return this.getAlbums()
        .map(R.prop(idx))
        .flatMap(function(name) {
          return name ? readdir(path.join(config.imageDirectory, name))
            .flatMap(Observable.from)
            .filter(isThumbnail)
            .map(function(fn) {
              return 'http://localhost:' + config.port + '/' + path.join('img', name, fn);
            }) : Observable.empty();
        })
        .toArray();
    },

    getTime: function() {
      return { now: moment().format('MMMM Do YYYY, h:mm:ss a') };
    },
  };
};

