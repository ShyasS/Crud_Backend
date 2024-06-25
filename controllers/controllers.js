const asyncHandler = require('express-async-handler');
const Crud = require('../model/model');
const getDatas = asyncHandler(async(req, res) =>{
    const getData = await Crud.find();
  res.json(getData)
})
const CreateData = asyncHandler(async(req, res) =>{
    const {name, email} = req.body;
    const createData = await Crud.create({
        name,
        email
    })
    res.json(createData)
  })
  const getData = asyncHandler(async(req, res) =>{
    const getData = await Crud.findById(req.params.id)
    res.json(getData)
  })
  const UpdateData = asyncHandler(async(req, res) =>{
    const updateData = await Crud.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )
    res.json(updateData)
  })
  const deleteData = asyncHandler(async(req, res) =>{
    const deleteData = await Crud.findByIdAndDelete({_id: req.params.id})
    res.json(deleteData)
  })

module.exports = {getDatas,CreateData,getData,UpdateData,deleteData}