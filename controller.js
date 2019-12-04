const Product = require('./models')
module.exports = {

  index: function(req,res){
      Product.find().sort('-createdAt')
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },
  create: function(req,res){
    Product.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },
  findById: function(req,res){
    Product.findById({_id:req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },
  update: function(req,res){
    Product.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },
  delete: function(req,res){
    Product.findByIdAndRemove({_id:req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
  }
}  