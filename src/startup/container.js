const { createContainer, asClass, asValue , asFunction} = require('awilix');

//config
const config = require("../config");
const app = require(".");

//services
const { HomeService } = require('../services');

//controllers
const { HomeController } = require('../controllers');

//routes
const Routes =  require('../routes')
const { HomeRoutes } = require("../routes/index.routes");

//models
const { User, Party, Comment} = require('../models');

//repositories
const {UserRepository, PartyRepository, CommentRepository} = require('../repositories');

const container = createContainer();

container
.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
})
.register({
    HomeService: asClass(HomeService).singleton()
})
.register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
})
.register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
}).register({
    User: asValue(User),
    Party: asValue(Party),
    Comment: asValue(Comment)
}).register({
    UserRepository: asClass(UserRepository).singleton(),
    PartyRepository: asClass(PartyRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton()
});
module.exports = container;