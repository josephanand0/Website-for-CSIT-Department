var cors= require('cors')
var http =require('http');
const {MongoClient} = require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url)

const databasename='Faculty';
async function Data()
{
    let result=await client.connect();
    db=result.db(databasename)
    
}
Data();
var express = require('express');
var app = express();
app.use(cors())
app.use(express.json());
app.get('/faculty',async (req,res)=>{
    const results = await db.collection('name').find().toArray()
    console.log(results)
    res.write(JSON.stringify(results))
    res.end()
    
});
app.listen(4000,()=>{
    console.log("Server started....");
 });