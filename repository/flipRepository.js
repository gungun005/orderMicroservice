let order_list=new Array;
const getFlipOrder=(body)=>{
    console.log("in repository");
    return("Getting Flip Order");
    };
    const postFlipOrder=(body)=>{
    console.log("in repository");
    console.log(body);
    console.log(body);
    order_list.push(body);
    return("Posting Flip Order");
    };
        
    const getFlipOrderById=(body)=>{
    console.log("in repository");
    console.log(body);
    return("Getting Flip Order by Id");
    };
    const postFlipOrderById=(body)=>{
    console.log("in repository");
    console.log(body);
    return(" Posting Flip Order by Id");
    };
        
    const getAllFlipOrder= (body)=>{
    console.log("in repository");
    console.log(body);
    return(order_list);
    };
        
    const cancelFlipOrder=(body)=>{
    console.log("in repository");
    console.log(body);
    return("Your order is cancelled!");
    };
    module.exports={
                getFlipOrder,
                postFlipOrder,
                getFlipOrderById,
                postFlipOrderById,
                getAllFlipOrder,
                cancelFlipOrder
        };