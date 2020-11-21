const { 
    createContainer, 
    asClass, 
    asValue , 
    asFunction} = require('awilix');

//config
const config = require("../config");
const app = require(".");

//services
const { 
    HomeService, 
    UserService, 
    PartyService, 
    CommentService} = require('../services');

//controllers
const { 
    HomeController, 
    UserController, 
    PartyController, 
    CommentController } = require('../controllers');

//routes
const Routes =  require('../routes');
const { 
    HomeRoutes, 
    UserRoutes, 
    PartyRoutes, 
    CommentRoutes } = require("../routes/index.routes");

//models
const { 
    User, 
    Party, 
    Comment} = require('../models');

//repositories
const {
    UserRepository, 
    PartyRepository, 
    CommentRepository} = require('../repositories');

const container = createContainer();

container
.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
})
.register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    PartyService: asClass(PartyService).singleton(),
    CommentService: asClass(CommentService).singleton(),
})
.register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    PartyController: asClass(PartyController.bind(PartyController)).singleton(),
    CommentController: asClass(CommentController.bind(CommentController)).singleton(),
})
.register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    PartyRoutes: asFunction(PartyRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
}).register({
    User: asValue(User),
    Party: asValue(Party),
    Comment: asValue(Comment),
}).register({
    UserRepository: asClass(UserRepository).singleton(),
    PartyRepository: asClass(PartyRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
});
module.exports = container;