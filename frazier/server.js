'use strict';

const express = require('express');
let app = express();

app.use('/', express.static(__dirname + '/build'));

app.listen(3000, () => {
  console.log('listening on 3000');
});
