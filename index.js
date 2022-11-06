import express from 'express';
import cors from 'cors';
import getTweets from './getTweets.js';


const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];



app.post('/sign-up', (req, res)=>{
    const user = req.body;

    users.push(user);
    res.send('OK');

})


app.get('/tweets', (req, res)=>{

    const postTweets = getTweets(tweets,users);
    
    res.send(postTweets);

})
app.post('/tweets', (req, res)=>{
    const tweet = req.body;

    tweets.push(tweet);
    res.send('OK')
})


app.listen(5000);