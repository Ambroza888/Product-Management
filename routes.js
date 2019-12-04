const controller = require('./controller')
const path = require('path')
module.exports = function(app){
  app.get('/pro', controller.index)
  app.post('/pro/create', controller.create)
  app.get('/pro/:id', controller.findById)
  app.put('/pro/:id', controller.update)
  app.delete('/pro/:id', controller.delete)
  app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});
}