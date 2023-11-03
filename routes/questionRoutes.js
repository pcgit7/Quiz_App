const express = require("express");
const router = express.Router();
const { questions, answers} = require('../database/data');
const Quiz = require('../Models/quizModel');

router.get('/', async (req,res) => {
   try 
   {
    const queue = await Quiz.find();
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
        await Quiz.insertMany(req.body);
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
       await Quiz.deleteMany(); 
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