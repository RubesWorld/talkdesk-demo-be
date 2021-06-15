require("dotenv").config();
const express = require("express");
const axios = require("axios");
const qs = require("qs");

const router = express.Router();

router.get("/", (req, res) => {
  axios({
    method: "POST",
    url: "https://demoeng.talkdeskid.com/oauth/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic MGY0YmRiNWYxNTgyNDUyNmJmMjNkODZjMmQwYzlhYTc6amQ0c25LRU9xMmZ0WkNfaDdxWWthREtCYmo5SU93dEV4YVhLQ1RKWEt4RFczVi1lU0lMcVBEbm5Zb2hGbFIxVVZBQm1XS196NTNpeUZVNjdNc0RYemc",
    },
    data: qs.stringify({
      grant_type: "client_credentials",
      scope: "callback:write",
    }),
  })
    .then((response) => {
      res.status(201).json(response.data);
      console.log("OAUth response", response.data);
    })
    .catch((err) => {
      console.log("oAuth error", err);
    });
});

// (error, response, body) => {
//     //save token to session
//     req.session.token = JSON.parse(body).access_token;

//     //redirect to the react app
//     res.redirect(`http://localhost:${config.clientport}`);
//   };

module.exports = router;
