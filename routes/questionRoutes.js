const express = require("express");
const router = express.Router();
const { questions, answers} = require('../database/data');
const Question = require('../Models/questionModel');

router.get('/', async (req,res) => {
    console.log("hi");
   try 
   {
    const queue = await Question.find();
    res.json(queue);
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
        await Question.insertMany({ questions, answers });
        res.status(200).json({
            msg :"questions data inserted successfully",
            success : true,
        });

    } catch (error)
    {
        res.status(500).json({
            msg : "Error in inserting data",
            success : false,
        });
    }
});

router.delete('/',async(req,res) => {
    try 
    {
       await Question.deleteMany(); 
       res.status(200).json({
        msg : "data deleted success",
        success : true
       })  ;
    } catch (error) {
        res.status(500).json({
            msg : "Error in inserting data",
            success : false,
        });
    }
})

module.exports = router;