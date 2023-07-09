const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

const dbConfig = require('./config/dbConfig');

app.use(cors());
app.use(express.json());


const port = process.env.PORT || 8080;

const questionRoutes = require('./routes/questionRoutes.js');
const resultRoutes = require('./routes/resultRoutes.js');

app.use('/api/question',questionRoutes);
app.use('/api/result',resultRoutes);

app.listen(port , () => {
    console.log(`server is running on port ${port}`);
});

