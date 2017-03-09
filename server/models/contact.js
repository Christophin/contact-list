'use strict';
module.exports = function(sequelize, DataTypes) {
  var Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    phone_num: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    photo_url: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Contact;
};