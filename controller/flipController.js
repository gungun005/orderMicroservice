const flipService=require('../services/flipService');

const getFlipOrder=(req,res)=>{
let getFlipOrder=flipService.getFlipOrder(req.body);
res.send(getFlipOrder);
};
const postFlipOrder=(req,res)=>{
let postFlipOrder=flipService.postFlipOrder(req.body);
res.send(postFlipOrder);
};

const getFlipOrderById=(req,res)=>{
let getFlipOrderById=flipService.getFlipOrderById(req.body);
res.send(getFlipOrderById);
};
const postFlipOrderById=(req,res)=>{
let postFlipOrderById=flipService.postFlipOrderById(req.body);
res.send(postFlipOrderById);
};

const getAllFlipOrder= (req,res)=>{
let getAllFlipOrder=flipService.getAllFlipOrder(req.body); 
res.send(getAllFlipOrder);
};

const cancelFlipOrder=(req,res)=>{
let cancelFlipOrder=flipService.cancelFlipOrder(req.body);
res.send(cancelFlipOrder);
};
module.exports={
    getFlipOrder,
    postFlipOrder,
    getFlipOrderById,
    postFlipOrderById,
    getAllFlipOrder,
    cancelFlipOrder
};