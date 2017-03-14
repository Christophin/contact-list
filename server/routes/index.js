const ContactController = require('../controllers/contact')


module.exports = (app) => {
  app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  });
  app.post('/contact', ContactController.create);
  app.get('/contact', ContactController.listContacts);
  app.get('/contact/:id', ContactController.findContact);
  app.put('/contact/:id', ContactController.updateContact);
  app.delete('/contact/:id', ContactController.deleteContact);
};
