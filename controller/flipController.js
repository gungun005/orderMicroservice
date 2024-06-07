const flipService=require('../services/flipService');

const getFlipOrder=async(req,res)=>{
let getFlipOrder=await flipService.getFlipOrder(req.body);
res.send(getFlipOrder);
};

const getFlipOrderBySearch =async(req,res)=>{
let getFlipOrderBySearch=await flipService.getFlipOrderBySearch(req.body);
res.send(getFlipOrderBySearch);
};

const postFlipOrder=async(req,res)=>{
let postFlipOrder=await flipService.postFlipOrder(req.body);
res.send(postFlipOrder);
};

const getFlipOrderById=async(req,res)=>{
let getFlipOrderById=await flipService.getFlipOrderById(req.body);
res.send(getFlipOrderById);
};
const postFlipOrderById=async(req,res)=>{
let postFlipOrderById=await flipService.postFlipOrderById(req.body);
res.send(postFlipOrderById);
};

const getAllFlipOrder=async (req,res)=>{
let getAllFlipOrder=await flipService.getAllFlipOrder(req.body); 
res.send(getAllFlipOrder);
};

const cancelFlipOrder=async (req,res)=>{
let cancelFlipOrder=await flipService.cancelFlipOrder(req.body);
res.send(cancelFlipOrder);
};
module.exports={
    getFlipOrder,
    getFlipOrderBySearch,
    postFlipOrder,
    getFlipOrderById,
    postFlipOrderById,
    getAllFlipOrder,
    cancelFlipOrder
};