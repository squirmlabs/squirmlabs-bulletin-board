/*globals describe, it*/
const fs     = require('fs');
const config = require('../../../lib/config/server');
const model  = require('../../../lib/server/model')(config);

require('should');

describe('ServerModel', () => {
  describe('.getAlbums()', () => {
    it('should repesent the directory names in src/img', (done) => {
      model.
      getAlbums().
      subscribe(
        (list) => list.should.eql(['beach', 'forest', 'mountain', 'ocean']),
        (error) => { throw error; },
        done
      );
    });
  });

  describe('.getAlbumItems(idx)', () => {
    const albums = ['beach', 'forest', 'mountain', 'ocean'];

    albums.
    forEach((name, index) => {
      it(`should match the items in the src/img/${name} directory`, (done) => {
        model.
        getAlbumItems(index).
        map((list) => ({ name, index, list })).
        subscribe(
          (item) => {
            var items =
            fs.readdirSync('src/img/' + item.name).
            filter((f) => {
              return /-tn\.jpg$/.test(f);
            }).
            map((f) => (
              'http://localhost:8081/img/' + item.name +
              '/' + f
            ));

            item.name.should.equal(albums[item.index]);
            item.list.should.eql(items);
          },
          (error) => { throw error; },
          done
        );
      });
    });
  });
});
