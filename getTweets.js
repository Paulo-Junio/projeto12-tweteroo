
function getTweets(tweets,users){
    const lastTweets = [];
    const numberOfTweets = tweets.length; 
    let controlOfTweets =  10;
    let startRead = numberOfTweets-controlOfTweets;

    if (numberOfTweets <= 10){
        startRead = 0;
    };


    for (let i = startRead; i < numberOfTweets; i++){
        const tweetUser = tweets[i].username;
        const tweet = tweets[i].tweet;

        const avatar = users.find(user => user.username === tweetUser);

        const post ={...avatar, tweet};
        lastTweets.push(post);
    };

    const organizationOfTweets = lastTweets.reverse();
    return organizationOfTweets;
}


export default getTweets;