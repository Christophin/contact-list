const ContactController = require('../controllers/contact')


module.exports = (app) => {
  app.post('/contact', ContactController.create);
  app.get('/contact', ContactController.listContacts);
  app.get('/contact/:id', ContactController.findContact);
  app.put('/contact/:id', ContactController.updateContact);
  app.delete('/contact/:id', ContactController.deleteContact);
};
