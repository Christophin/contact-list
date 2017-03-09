const Contact = require('../models').Contact;

module.exports = {
    create (req, res)   {
        Contact.create({
            name: req.body.name,
            phone_num: req.body.phone_num,
            city: req.body.city,
            state: req.body.state,
            photo_url: req.body.photo_url,
            email: req.body.email
        })
            .then(contact =>res.status(201).send(contact))
            .catch(error => res.status(400).send(error));
    },
    listContacts (req, res) {
        Contact.findAll({})
            .then(contact => res.status(201).send(contact))
            .catch(error => res.status(400).send(error));
    },
    findContact (req, res)  {
        Contact.findAll({
            where:  {
                id: req.params.id
            }
        })
            .then(contact => res.status(201).send(contact))
            .catch(error => res.status(400).send(error));
    },
    updateContact(req, res) {
        Contact.update({
            name: req.body.name || Contact.name,
            phone_num: req.body.phone_num || Contact.phone_num,
            city: req.body.city || Contact.city,
            state: req.body.state || Contact.state,
            photo_url: req.body.photo_url || Contact.photo_url,
            email: req.body.email || Contact.email
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(rows_affected => res.status(201).send(`You successfully updated this contact`))
            .catch(error => res.status(400).send(error));
    },
    deleteContact(req, res) {
        Contact.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(dest_rows => res.status(201).send('you successfully deleted this contact'))
            .catch(error => res.status(400).send(error));
    }
};