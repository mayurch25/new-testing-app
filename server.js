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
const githubData = {
  "login": "mayurch25",
  "id": 100030651,
  "node_id": "U_kgDOBfZYuw",
  "avatar_url": "https://avatars.githubusercontent.com/u/100030651?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mayurch25",
  "html_url": "https://github.com/mayurch25",
  "followers_url": "https://api.github.com/users/mayurch25/followers",
  "following_url": "https://api.github.com/users/mayurch25/following{/other_user}",
  "gists_url": "https://api.github.com/users/mayurch25/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mayurch25/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mayurch25/subscriptions",
  "organizations_url": "https://api.github.com/users/mayurch25/orgs",
  "repos_url": "https://api.github.com/users/mayurch25/repos",
  "events_url": "https://api.github.com/users/mayurch25/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mayurch25/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-02-19T13:40:41Z",
  "updated_at": "2026-03-31T10:37:55Z"
}

app.get('/github', (req, res) => {
    res.send(githubData);
})

app.get('/youtube', (req, res) => {
    res.send("<h2>This is the youtube.</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`server running at http://localhost:${process.env.PORT}`);
})