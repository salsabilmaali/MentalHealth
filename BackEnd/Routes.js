const express = require('express');
const Router = express.Router();
const UserController = require('./Controllers/UserController');
const UserService = require('./Services/UserService');
const TestEvaluationController = require('./Controllers/TestEvaluationController');
const TestEvaluationService = require('./Services/TestEvaluationService');
const ProfessionelController = require('./Controllers/ProfessionelController');
const ProfessionelService = require('./Services/ProfessionelService');
const ContenuController = require('./Controllers/ContenuController');
const ContenuService = require('./Services/ContenuService');
const CoursController = require('./Controllers/CoursController');
const CoursService = require('./Services/CoursService');
const AuthController = require('./Controllers/AuthController');

// Initialize controller with service
const userController = new UserController(new UserService());
const testEvaluationController = new TestEvaluationController(new TestEvaluationService());
const professionelController = new ProfessionelController(new ProfessionelService());
const contenuController = new ContenuController(new ContenuService());
const coursController = new CoursController(new CoursService());
const authController = new AuthController();

// Authentication routes (should come first)
Router.post('/register', (req, res) => authController.register(req, res));
Router.post('/login', (req, res) => authController.login(req, res));
Router.get('/getSession', (req, res) => authController.getSession(req, res));
Router.post('/logout', (req, res) => authController.logout(req, res));

Router.use((req, res, next) => {
  console.log(`Router received: ${req.method} ${req.originalUrl}`);
  next();
});

// User routes
Router.get('/users', (req, res) => userController.getAllUsers(req, res));
Router.get('/users/:id', (req, res) => userController.getUserById(req, res));
Router.post('/users', (req, res) => userController.addUser(req, res));
Router.put('/users/:id', (req, res) => userController.updateUser(req, res));
Router.delete('/users/:id', (req, res) => userController.deleteUser(req, res));

// Test evaluation routes
Router.get('/test-evaluations', (req, res) => testEvaluationController.getAllTestEvaluations(req, res));
Router.get('/test-evaluations/:id', (req, res) => testEvaluationController.getTestEvaluationById(req, res));
Router.post('/test-evaluations', (req, res) => testEvaluationController.addTestEvaluation(req, res));
Router.put('/test-evaluations/:id', (req, res) => testEvaluationController.updateTestEvaluation(req, res));
Router.delete('/test-evaluations/:id', (req, res) => testEvaluationController.deleteTestEvaluation(req, res));



// Content routes
Router.get('/contenus', (req, res) => contenuController.getAllContenus(req, res));
Router.get('/contenus/:id', (req, res) => contenuController.getContenuById(req, res));
Router.post('/contenus', (req, res) => contenuController.addContenu(req, res));
Router.put('/contenus/:id', (req, res) => contenuController.updateContenu(req, res));
Router.delete('/contenus/:id', (req, res) => contenuController.deleteContenu(req, res));

// Course routes
Router.get('/cours', (req, res) => coursController.getAllCours(req, res));
Router.get('/cours/:id', (req, res) => coursController.getCoursById(req, res));
Router.post('/cours', (req, res) => coursController.addCours(req, res));
Router.put('/cours/:id', (req, res) => coursController.updateCours(req, res));
Router.delete('/cours/:id', (req, res) => coursController.deleteCours(req, res));

// Export router
module.exports = Router;