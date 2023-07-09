const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
require('dotenv').config();

const port = process.env.PORT || 8080;

app.get('/',(req,res) => {
    try 
    {
      res.json("Get Request");    
    } catch (error) {
        console.log(error);
    }
});

app.listen(port , () => {
    console.log(`server is running on port ${port}`);
});

