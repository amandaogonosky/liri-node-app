
console.log('workin');
// const spotify = new Spotify(keys.spotify);
// const twit = new Twitter(keys.twitter);

exports.twitter = {
consumer_key: process.env.TWITTER_CONSUMER_KEY,
consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
acces_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
id: process.env.SPOTIFY_ID,
secret: process.env.SPOTIFY_SECRET
};


// secret token keys prompts.store answer in envfiles

