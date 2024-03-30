const express=require('express')
const connectDb = require('./connectDb')
const morgan=require('morgan')
const cors=require('cors')

require('dotenv').config()
require("express-async-errors");
const Product=require('./models/product')
//routes
const userRoutes=require('./router/user')
const productRoutes=require('./router/product')
const cartRoutes=require('./router/cart')
const orderRoutes=require('./router/order')
const paymentRoute=require('./router/stripe')
//error handlermiddleware
const errorHandlerMiddleware = require('./middleware/error-handler')
const app=express()
app.use(morgan('combined'))
app.use(cors())
app.use(express.json())

app.use('/api/auth',userRoutes)
app.use('/api/product',productRoutes)
app.use('/api/cart',cartRoutes)
app.use('/api/order',orderRoutes)
app.use('/api/checkout/payment',paymentRoute)
app.get('/',(req, res) =>{
    res.send('Welcome to the first page')
})


app.use(errorHandlerMiddleware)

const start=async ()=>{
    
    await connectDb(process.env.MONGODB_URL).then(()=>{
        console.log('Starting');
    });
    // await Product.insertMany([
    //     {
    //         title:'Lacoaste T-Shirt',
    //         desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus magni corporis vero est inventore fugiat suscipit, voluptas vitae? Aperiam quisquam, quis aliquid voluptatem magnam est harum quam deserunt nam.',
    //         image:"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    //         catagories:['fashion','t-shirt'],
    //         size:['XL','L','S'],
    //         color:['yellow','black','brown'],
    //         price:20,
    //       },
    //       {
    //         title:'Cotton T-Shirt',
    //         desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus magni corporis vero est inventore fugiat suscipit, voluptas vitae? Aperiam quisquam, quis aliquid voluptatem magnam est harum quam deserunt nam.',
    //         image:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=1615&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //         catagories:['fashion','women','cotton'],
    //         size:['L','S'],
    //         color:['yellow','silver','brown'],
    //         price:20,
    //       },
    //       {
    //         title:'Nice Hat',
    //         desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus magni corporis vero est inventore fugiat suscipit, voluptas vitae? Aperiam quisquam, quis aliquid voluptatem magnam est harum quam deserunt nam.',
    //         image:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    //         catagories:['fashion','women','leathers'],
    //         size:['XL','L','S'],
    //         color:['black','gray','brown'],
    //         price:20,
    //       },
    //       {
    //         title:'Fashion Bag',
    //         desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus magni corporis vero est inventore fugiat suscipit, voluptas vitae? Aperiam quisquam, quis aliquid voluptatem magnam est harum quam deserunt nam.',
    //         img:"https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    //         catagories:['fashion','women','bag'],
    //         size:['L','S'],
    //         color:['yellow','silver','brown'],
    //         price:20,
              
    //       },

    //     {
    //         title:'Air Max shoes',
    //         desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus magni corporis vero est inventore fugiat suscipit, voluptas vitae? Aperiam quisquam, quis aliquid voluptatem magnam est harum quam deserunt nam.',
    //         image:'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         catagories:['shoes','women','men'],
    //         size:[39,40,41,42],
    //         color:['yellow','black','pink'],
    //         price:20,

    //     },
    //     {
    //         title:'Suppereo Shoes',
    //         desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus magni corporis vero est inventore fugiat suscipit, voluptas vitae? Aperiam quisquam, quis aliquid voluptatem magnam est harum quam deserunt nam.',
    //         image:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1664&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         catagories:['shoes','men'],
    //         size:[39,40,41,42],
    //         color:['green','yellow'],
    //         price:30,

    //     },
    //     {
    //         title:'NIKE Shoes',
    //         desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus magni corporis vero est inventore fugiat suscipit, voluptas vitae? Aperiam quisquam, quis aliquid voluptatem magnam est harum quam deserunt nam.',
    //         image:'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&q=80&w=1615&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         catagories:['shoes','men'],
    //         size:[39,40,41,42],
    //         color:['black','yellow'],
    //         price:30,

    //     },
    //     {
    //         title:'K-SWISS Shoes',
    //         desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus magni corporis vero est inventore fugiat suscipit, voluptas vitae? Aperiam quisquam, quis aliquid voluptatem magnam est harum quam deserunt nam.',
    //         image:'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1712&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         catagories:'shoes',
    //         size:[39,40,41,42],
    //         color:'yellow',
    //         price:20,

    //     },
    //     {
    //         title:'addidas Shoes',
    //         desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus magni corporis vero est inventore fugiat suscipit, voluptas vitae? Aperiam quisquam, quis aliquid voluptatem magnam est harum quam deserunt nam.',
    //         image:'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         catagories:'shoes',
    //         size:[39,40,41,42],
    //         color:'yellow',
    //         price:20,

    //     },
    //     {
    //         title:'Sneakers',
    //         desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus magni corporis vero est inventore fugiat suscipit, voluptas vitae? Aperiam quisquam, quis aliquid voluptatem magnam est harum quam deserunt nam.',
    //         image:'https://images.unsplash.com/photo-1571601035754-5c927f2d7edc?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         catagories:['fashion','shoes','men','women'],
    //         size:[39,40,41,42],
    //         color:['yellow','blue','brown'],
    //         price:20,

    //     },
    //     {
    //         title:'Jackets',
    //         desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus magni corporis vero est inventore fugiat suscipit, voluptas vitae? Aperiam quisquam, quis aliquid voluptatem magnam est harum quam deserunt nam.',
    //         image:'https://images.unsplash.com/photo-1571601035754-5c927f2d7edc?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         catagories:['fashion','jacket','men','women'],
    //         size:['XL','L','M'],
    //         color:['yellow','brown'],
    //         price:20,

    //     },
    //     {
    //         title:'Hand Bags',
    //         desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus magni corporis vero est inventore fugiat suscipit, voluptas vitae? Aperiam quisquam, quis aliquid voluptatem magnam est harum quam deserunt nam.',
    //         image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         catagories:['fashion','women','leathers'],
    //         size:['L','S'],
    //         color:['yellow','silver','brown'],
    //         price:20,

    //     },
       
    // ])
    app.listen(5000,()=>{
        console.log('listening on port 5000')
    })
}

start()