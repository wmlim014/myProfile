const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.listen(8081, () => {
    console.log('Listening...');
})