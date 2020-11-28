const db = require("../models/books.models");

module.exports = {
  
  findAll:((req, res) => {
    db.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  }),
  
  create: ((req, res, next) => {
    db.create(req.body, (error, data) => {
      if (error) {
        res.status(500).json({error})
      } else {
        res.json(data)
      }
    })
  }),
  
  delete: ((req, res, next) => {
    console.log(req.body)
    db.findOneAndDelete(req.body.id, (error, data) => {
      if (error) {
        return next (error);
      } else {
        res.status(200).json({data})
      }
    })
    
  })
  
};