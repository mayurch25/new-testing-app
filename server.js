import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();


app.get('/', (req, res) => {
    res.send("this is backend server");
})

app.get('/twitter', (req, res) => {
    res.send("this is twitter route")
})

app.get('/login', (req, res) => {
    res.send("<h1>this is the login route</h1>")
})

app.get('/youtube', (req, res) => {
    res.send("<h2>This is the youtube.</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`server running at http://localhost:${process.env.PORT}`);
})