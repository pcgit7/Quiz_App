const express = require("express");
const router = express.Router();
const { questions, answers} = require('../database/data');
const Result = require('../Models/resultModel');

router.get('/', async (req,res) => {
   try 
   {
    const userId = req.body.username;
    console.log(req.body);
    const r = await Result.find(req.body);
    //console.log(r);
        res.json(r);
   } 
   catch (error) {
    res.status(500).send({
        message: "Error in getting data",
        success: false,
      });
   } 
});

router.post('/get-result' , async (req,res) => {
    try 
    {
     const userId = req.body.username;
    //console.log(req.body);
     const r = await Result.find(req.body);
         res.json(r);
    } 
    catch (error) {
     res.status(500).send({
         message: "Error in getting data",
         success: false,
       });
    } 
});

router.post('/' ,async (req,res) => {
    try 
    {
        //console.log(req.body);
        const { username, result, attempts, points, achived , quiz} = req.body;

        if(!username && !result) 
        throw new Error('Data Not Provided...!');

        const newResult = new Result(req.body);

        await newResult.save();

        res.status(200).json({
            msg :"questions data inserted successfully",
            success : true,
        });

    } catch (error)
    {
        console.log(error);
        res.status(500).json({
            msg : error.message,
            success : false,
        });
    }
});

router.delete('/',async(req,res) => {
    try 
    {
       await Result.deleteMany(); 
       res.status(200).json({
        msg : "data deleted success",
        success : true
       })  ;
    } catch (error) {
        res.status(404).json({
            msg : "Error in inserting data",
            success : false,
        });
    }
});

module.exports = router;