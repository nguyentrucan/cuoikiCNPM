const Product = require('../models/productModel');
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

//Create a Product
const createProduct = asyncHandler(async(req,res)=>{
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
        res.json({
        message:"Hey it's product post route",
        }); 
    } catch (error) {
        throw new Error(error);
    }
});

const updateProduct = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const updatedProduct = await Product.findOneAndUpdate({ _id: id }, 
            req.body, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteProduct = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    try {
        const deleteProduct = await Product.findOneAndDelete({ _id: id });
        res.json(deleteProduct);
    } catch (error) {
        throw new Error(error);
    }
});

const getaProduct = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    try {
        const findProduct = await Product.findById(id);
        res.json(findProduct);
    } catch (error) {
        throw new Error(error);
    }
});

const getAllProduct = asyncHandler(async(req,res)=>{
    try {
        const gettallProduct = await Product.find();
        res.json(gettallProduct);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports={createProduct,
    getaProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,};