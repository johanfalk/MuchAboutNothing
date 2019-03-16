const express = require('express');
const Router = express.Router();

Router.use(express.json());

Router.get(
  '/token/validate',
  controller.hasValidAccessToken,
  controller.getUserByAccessToken
);

Router.get(
  '/',
  controller.hasValidAccessToken,
  controller.getAllUsers
);

Router.get(
  '/:id',
  controller.hasValidAccessToken,
  controller.getUser
);

Router.delete(
  '/:id',
  controller.hasValidAccessToken,
  controller.deleteUser
);

Router.post(
  '/register',
  controller.registerUser
);

Router.post(
  '/login',
  controller.loginUser
);

module.exports = Router;