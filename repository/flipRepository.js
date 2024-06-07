if(process.env.NODE_ENV !== 'production'){
    const dotenv = require('dotenv').config({path : `${__dirname}/../.env`});
}

const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
//const { resolve } = require('promise');

const client = new MongoClient(process.env.DATABASE_URL, {
    useNewUrlParser: true, useUnifiedTopology: true 
});
let order_list=new Array;
const getFlipOrder=async(body)=>{
    console.log("in repository");
   console.log("Getting Flip Order");
   try{
    await client.connect()
    const db = client.db("orderMicro");
    const coll = db.collection("orderMicro");
    const data = await coll.find().toArray()
    console.log(data)
    return data
}
catch(err){
    console.log("Error occurred")
    return err;
}
finally{
    await client.close()
} 

};
const getFlipOrderBySearch=async(body)=>{
    console.log("in repository");
   console.log("Getting Flip Order");
   searchOptions={};
   if(body.product != null && body.product !== "" ){
    searchOptions.product = body.product;
}
   try{
    await client.connect()
    const db = client.db("orderMicro");
    const coll = db.collection("orderMicro");
    const data = await coll.find(searchOptions)
    console.log(data)
    return data
}
catch(err){
    console.log("Error occurred")
    return err;
}
finally{
    await client.close()
} 
};
const postFlipOrder=async(body)=>{
    console.log("in repository");
    console.log(body);
    order_list.push(body);
    console.log("Posting Flip Order");
    var item = {
        name:body.name,
        product: body.product,
        units: body.units,
        price:body.price,
        id:body.id,
        email:body.email,
    };
    try{
        await client.connect()
        const db = client.db("orderMicro");
        const coll = db.collection("orderMicro");
        const data = await coll.insertOne(item);
        // const data2 = await coll.find().toArray();
        console.log(data)
        return data.acknowledged == true
    }
    catch(err){
        console.log(err);
        console.log("Error occurred")
        return err;
    }
    finally{
        await client.close()
    } 
};
const getFlipOrderById=async(body)=>{
    // console.log("in repository");
    // console.log(body);
    // console.log("Getting Flip Order by Id");
    let searchOptions = {};
    if(body.id != null && body.id !== ''){
        searchOptions.id = body.id;
    }
    console.log(body, searchOptions,"repo");
    try{
        await client.connect()
        const db = client.db("orderMicro");
        const coll = db.collection("orderMicro");
        const data = await coll.find(searchOptions).toArray();
        console.log(data);
    }catch(err){
        console.log(err)
        console.log("Error in promise")
    }
    finally{
        await client.close()
    }
    };
    const postFlipOrderById=async(body)=>{
    console.log("in repository");
    console.log(body);
    console.log(" Posting Flip Order by Id");
    var item = {
        name:body.name,
        product: body.product,
        units: body.units,
        price:body.price,
        id:body.id,
        email:body.email,
    };
    try{
        await client.connect()
        const db = client.db("orderMicro");
        const coll = db.collection("orderMicro");
        const data = await coll.insertOne(item);
        // const data2 = await coll.find().toArray();
        console.log(data)
        return data.acknowledged == true
    }
    catch(err){
        console.log("Error occurred")
        return err;
    }
    finally{
        await client.close()
    } 
    };
        
    const getAllFlipOrder=async (body)=>{
    // console.log("in repository");
    // console.log(body);
    // console.log(order_list);
    let searchOptions = {};
    console.log(body, searchOptions);
    if(body.name != null && body.name !== ''){
        searchOptions.name = new RegExp(body.name, 'i');
    }
    if(body.product!= null && body.product !== ''){
        searchOptions.product = new RegExp(body.product, 'i');
    }
    if(body.price != null && body.price !== ''){
        searchOptions.price = new RegExp(body.price, 'i');
    }
    if(body.units!= null && body.units !== ''){
        searchOptions.units = new RegExp(body.units, 'i');
    }
    if(body.id != null && body.id !== ''){
        searchOptions.id = new RegExp(body.id, 'i');
    }
    if(body.email!= null && body.email !== ''){
        searchOptions.email = new RegExp(body.email, 'i');
    }
    const employeeCollection = client.db("orderMicro").collection("orderMicro");
    try{
        const employee = await employeeCollection.find(searchOptions).toArray();
        console.log(employee);
       
    }catch{
        console.log(err);
        console.log("Error in promise")
    }
    finally{
        await client.close()
    }
    };
        
    const cancelFlipOrder=async(body)=>{
    console.log("in repository");
    console.log(body);
    console.log("Your order is cancelled!");
    let searchOptions = {};
    if(body.product != null && body.product !== ""){
        searchOptions.product = body.product;
    }
    try{
        await client.connect()
        const db = client.db("orderMicro");
        const coll = db.collection("orderMicro");
        const data = await coll.deleteOne(searchOptions)
        console.log(data)
    }
    catch(err){
        console.log("Error occurred")
        return err;
    }
    finally{
        await client.close()
    } 

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