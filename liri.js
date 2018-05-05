// import { request } from "http";
console.log('workin');
require('dotenv').config();
const keys = require('./keys.js');
const request=require("request");
const fs = require("fs");
const Spotify = require ("node-spotify-api");
const spotify = new Spotify(keys.spotify);
const twit = new Twitter(keys.twitter);
const Twit = require ("twitter");
const movieGet = process.argv[2];
const userInput = process.argv(3);
const tweet =[];
// const inquirer = require ("inquirer");
// not using inquire
// slice vs spilt--
let userInput = String(process.argv.slice(3));
let comLine = String(process.argv[2]);
// switch case to test all: tweets, movies, music or default if there is no input
function comLines() {
    switch (comLine){
      case "movie":
      movie();
      break;
      case "my-tweets":
        tweet();
        break;
      case "spotify-this-song":
        spotifySearchin();
        break;
        case "do-what-this-says":
          doWhatitSays();
          break;
          default:
          console.log("Ace of Base")
    }
  };
// }
function tweet(){
  let parameter = { id: "983110935941230593" };
  client.get("statuses/user_timeline", parameter, function (error,tweet,response){
    if (err){
        console.log(error);
    };
  });


// spotify song search
function spotifySearchin(){
  if (!userInput) {
      spotfiy.search({type: 'track', query: "The Sign Ace of Base", limit: 1 }), function(err, data){
    
  if ( err ) {
      return console.log('err' + err);
  };
    
  data.tracks.items.forEach(function (body){
      let artist =body.album.artists[0].name;
      let title = body.name;
      let album= body.album.name;
      let songUrl=body.preview_url;
      let result = "\nArtist: " + artist + "\nTitle: "
+ title + "\nAblum: " + album;
      return console.log (result);
        if (songUrl){
          return console.log(`Preview URL: ${songUrl}`)
        }
        else{
          return console.log ("ace of base")

        }
    )};
      };

};
    fs.appendFile("random.txt", "\n" + comLine.trim() + " " + userInput + "\n" + result, function (err){
      if (err){
        console.log(err);
      }

    )};
    //     if (!error && response.statusCode === 200){
    //           for(i = 0: i< tweet.length; i++),
        
    //     };
    //       })
    //     })
    //   })
    // }
fs.appendFile("random.txt", function(err) {
  if (err) throw err;

  if(!error && response.statusCode === 200) {
    for(let i = 0; i < tweet.length; i++) {

    }
  }
} )
// accessing omdb api and returning movie info
function movie(){
var queryUrl ="http://www.omdbapi.com/?t=" + movieGet + "&y=&plot=short&apikey=eFlmhbxscK6iQuLGEDsiAK6GA";
request(queryUrl, function(error, response, body){

  if (!error && response.statusCode === 200) {
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    }
  });
};

omdb.search(userInput, function(err, movies) {
  if(err) {
      return console.error(err);
  }
// would i need math.random or math.floor here?
  if(movies.length < 1) {
      return console.log('No movies were found!');
  }

  movies.forEach(function(movie) {
      console.log('%s (%d)', movie.title, movie.year);
      
  });

function doWhatitSays(){
  if (err){
    console.log(error);
};
};


});






