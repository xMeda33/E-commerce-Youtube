import express, { json } from 'express'
import data from './data.js'

const app = express()
app.get('/api/products', (req,res,next)=>{
    res.json(data.products)
})

const port = 5000
app.listen(port,()=>{
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
} )