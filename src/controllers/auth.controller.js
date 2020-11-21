let _authService = null;

class AuthController{
    constructor({ AuthService }){
        _authService =  AuthService;
    }

    async signIn(req, res){
        const { body } = req;
        const creds = await _authService.signIn(body);
        return res.send(creds);
    }

    async signUp(req,res){  
        const { body } = req;
        const createdUser = await _authService.signUp(body);
        return res.status(201).send(createdUser);
    }
}

module.exports = AuthController;