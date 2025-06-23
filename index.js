const express = require('express');
const request = require('request');
const app = express();

app.get('/aajtak', (req, res) => {
  const url = "https://z5ak-cmaflive.zee5.com/cmaf/live/2105503/AAJTAKHDNEWSELE/index-connected.m3u8?hdntl=exp=1750731717~acl=%2f*~data=hdntl~hmac=e716a58095d38ccf29ffa4245a1fae16148e78325c21f322f5978c68b240cf56";

  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 ygx/69.1 Safari/537.36'
  };

  request({ url, headers }).pipe(res);
});

app.listen(3000, () => {
  console.log('Proxy server running at http://localhost:3000/aajtak');
});
