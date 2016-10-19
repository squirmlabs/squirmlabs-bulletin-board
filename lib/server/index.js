const express = require('express');
const nutil = require('util');
const config = require('../config/server');
const fmt = nutil.format;
const RequestPromise = require('request-promise');


const app = express();
const INSTAGRAM_API_HOST = 'https://api.instagram.com/v1';
const INSTAGRAM_URI_TAGS = '/tags';
const INSTAGRAM_URI_TAGS_SEARCH = '/tags/search';
const INSTAGRAM_URI_TAGS_MEDIA_RECENT = '/media/recent';

app.use('/*', function(req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

// app.get('/api/instagram', function(req, res, next) {
//   axios.get('https://api.instagram.com/v1/tags/diplo/media/recent?access_token=2173723687.045bb6a.a1b87e36b84a481d9a2c48dd45c602ff', {
//     // params: {
//     //   ID: 12345
//     // }
//   })
//   .then((response) => {
//     res.send(response)
//     next();
//   })
//   return next;
// });

// app.get('/api/instagram', function(req, res, next) {
//   const responseBack = (data) => {
//     console.log('DATA', data)
//     res.send(data)
//     next();
//   }
//
//   getInstagramResults(responseBack);
// });

app.get('/api/instagram', (req, res, next) => {
  const options = {
    method: 'GET',
    uri: 'https://api.instagram.com/v1/tags/diplo/media/recent?access_token=2173723687.045bb6a.a1b87e36b84a481d9a2c48dd45c602ff',
    json: true,
    headers: {
      'Content-Type': 'application/json',
    }
  };
  RequestPromise.get(options)
  .then(function (body) {
    res.send(body);
    next();
  })
  .catch(function (err) {
    // TODO: HANDLE ERR
  });
});



app.get('/api/tags/:tag', (req, res, next) => {
  const tagName = req.params.tag;
  const routeChar = '/';

  const options = {
    method: 'GET',
    uri: INSTAGRAM_API_HOST + INSTAGRAM_URI_TAGS + routeChar + tagName + INSTAGRAM_URI_TAGS_MEDIA_RECENT,
    qs: {
      access_token: '2173723687.045bb6a.a1b87e36b84a481d9a2c48dd45c602ff',
    },
    json: true,
    headers: {
      'Content-Type': 'application/json',
    }
  };

  RequestPromise.get(options)
  .then(function (body) {
    console.log('BODY', body)
    res.send(body);
    next();
  })
  .catch(function (err) {
    // TODO: HANDLE ERR
  });
});

// app.get('/api/tags/:tag', (req, res, next) => {
//   const tagName = req.params.tag;
//
//   const options = {
//     method: 'GET',
//     uri: INSTAGRAM_API_HOST + INSTAGRAM_URI_TAGS_SEARCH,
//     qs: {
//       q: tagName,
//       access_token: '2173723687.045bb6a.a1b87e36b84a481d9a2c48dd45c602ff',
//     },
//     json: true,
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   };
//
//   RequestPromise.get(options)
//   .then(function (body) {
//     console.log('BODY', body)
//     res.send(body);
//     next();
//   })
//   .catch(function (err) {
//     // TODO: HANDLE ERR
//   });
// });

// app.get('/api/tags/:tag', (req, res, next) => {
//   const tagName = req.params.tag;
//
//   const options = {
//     method: 'GET',
//     uri: INSTAGRAM_API_HOST + INSTAGRAM_URI_TAGS,
//     qs: {
//       q: tagName,
//       access_token: '2173723687.045bb6a.a1b87e36b84a481d9a2c48dd45c602ff',
//     },
//     json: true,
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   };
//
//   RequestPromise.get(options)
//   .then(function (body) {
//     console.log('BODY', body)
//     res.send(body);
//     next();
//   })
//   .catch(function (err) {
//     // TODO: HANDLE ERR
//   });
// });

app.listen(config.port, function () {
  console.log(fmt('Server app listening on %s', config.port))
});
