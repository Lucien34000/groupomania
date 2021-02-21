// Imports
const express     = require('express');
const userCtrl    = require('./routes/usersCtrl');
const messagesCtrl = require('./routes/messagesCtrl');

// Router
exports.router = (function() {
  const apiRouter = express.Router();

  // User routes
  apiRouter.route('/users/register/').post(userCtrl.register);
  apiRouter.route('/users/login/').post(userCtrl.login);
  apiRouter.route('/users/me/').get(userCtrl.getUserProfile);
  apiRouter.route('/users/me/').put(userCtrl.updateUserProfile);

  // Messages routes
  apiRouter.route('/messages/new/').post(messagesCtrl.createMessage);
  apiRouter.route('/messages/').get(messagesCtrl.listMessage);

  return apiRouter;
})();