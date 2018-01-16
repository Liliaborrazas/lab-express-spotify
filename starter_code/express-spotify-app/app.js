var SpotifyWebApi = require('spotify-web-api-node');

// Remember to paste here your credentials
var clientId = 'bab0458af8c342e89500b49582e078f5',
    clientSecret = '5c96a02aba534fc7896df7dfcedfc7ee';

var spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});
