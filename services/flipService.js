const flipRepository=require('../repository/flipRepository');


const getFlipOrder=(body)=>{
let getFlipOrder=flipRepository.getFlipOrder(body);
return(getFlipOrder);
};
const getFlipOrderBySearch =(body)=>{
let getFlipOrderBySearch=flipRepository.getFlipOrderBySearch(body);
return(getFlipOrderBySearch);
};

const postFlipOrder=(body)=>{
let postFlipOrder=flipRepository.postFlipOrder(body);
return(postFlipOrder);
};

const getFlipOrderById=(body)=>{
let getFlipOrderById=flipRepository.getFlipOrderById(body);
return(getFlipOrderById);
};
const postFlipOrderById=(body)=>{
let postFlipOrderById=flipRepository.postFlipOrderById(body);
return(postFlipOrderById);
};

const getAllFlipOrder= (body)=>{
let getAllFlipOrder=flipRepository.getAllFlipOrder(body); 
return(getAllFlipOrder);
};

const cancelFlipOrder=(body)=>{
let cancelFlipOrder=flipRepository.cancelFlipOrder(body);
return(cancelFlipOrder);
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