const express = require("express");
const router = express.Router();
const { questions, answers} = require('../database/data');
const Result = require('../Models/resultModel');

router.get('/', async (req,res) => {
    console.log("hi");
   try 
   {
    const r = await Result.find();
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
        const { username, result, attempts, points, achived } = req.body;

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
})

module.exports = router;