const express = require("express");
const router = express.Router();
const event = require("../eventSchema/schema")
router.post("/v1/events", async (req,res)=>{
    try{
        // console.log(req.body);
        const data = await event.create(req.body)
        res.status(201).json({
            message:"posted successully",
            data
        })
    }
    catch{
        res.status(500).json({
            error:"server error",
            
        })
    }
    
})
router.get("/v1/events", async (req,res)=>{
    try{
        const data = await event.find()
        res.status(200).json({
            data
        })
    }
    catch{
        res.status(500).json({
            error:"server error",
            
        })
    }
    
})
router.get('/v1/events/:id', async (req,res)=>{
    try{
        const data = await event.findById({_id: req.params.id});
        return res.status(200).json({
            status: "success",            
            data,        
    })
    }
    catch{
        return res.status(402).json({    
                  
            error:"there is no event with this id"
        })
    }
})

router.delete("/v1/events/:id", async (req,res)=>{
    try{
        const data = await event.findByIdAndDelete({_id:req.params.id})
        res.status(204).json({
            message:"deleted successully",
        })
    }
    catch{
        res.status(404).json({
            error:"event not found",
            
        })
    }
    
})
router.put("/v1/events/:id", async (req,res)=>{
        try{
            const data = await event.findByIdAndUpdate({_id:req.params.id},req.body)
            const updatedData = await event.findOne({_id:req.params.id})
            res.status(200).json({
                message:"updated successully",
                updatedData
            })
        }
        catch{
            res.status(500).json({
                error:"server error",
                
            })
        }
        
    })
module.exports= router