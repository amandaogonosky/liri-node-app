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
// const inquirer = require ("inquirer");
// not using inquire
let userInput = String(process.argv.slice(3));
let comLine = String(process.argv[2]);

function comLines() {
    swtich (comLine){
      case "movie";
      movie();
      break;
      case "my-tweets";
        tweets();
        break;
      case "spotify-this-song";
        spotifySearchin();
        break;
        case "do-what-this-says";
          doWhatitSays();
          break;
          default:
          console.log("Ace of Base")
    }
  };
// }
function tweet(){
  let parameter = { id: "983110935941230593" };
  client.get("statuses/user_timeline", parameter, functino (error,tweet,response){

    if (err){

        console.log(error);
    }
    if()

  }



}





// spotify song search
function spotifySearchin(){
  if (!userInput) {
      spotfiy.search({type: 'track', query: "The Sign Ace of Base", limit: 1 }, function(err, data){
    
  if ( err ) {
      return console.log('err' + err);
  }
}
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
    }

    fs.appendFile("random.txt", "\n" + comLine.trim() + " " + userInput + "\n" + result, function (err){
      if (err){
        console.log(err);
      }
        if (!error && response.statusCode === 200){
              for(i = 0: i< tweet.length; i++)
          
        
        }
          })
        })
      })
    }

// const movieGet = process.argv[2];
// const userInput = process.argv(3);
// var queryUrl ="http://www.omdbapi.com/?t=" + movieGet + "&y=&plot=short&apikey=eFlmhbxscK6iQuLGEDsiAK6GA";

// omdb.search(userInput, function(err, movies) {
//   if(err) {
//       return console.error(err);
//   }

//   if(movies.length < 1) {
//       return console.log('No movies were found!');
//   }

//   movies.forEach(function(movie) {
//       console.log('%s (%d)', movie.title, movie.year);
//   });

// request(queryUrl, function(error, response, body){

// if (!error && response.statusCode === 200) {
//   console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//   }
// })


