const { Router } = require('express');
const { ParseIntMiddleware, AuthMiddleware } = require('../middlewares');

module.exports = function({PartyController}){
    const router = Router();

    router.get("/:partyId", PartyController.get);
    router.get("", [ParseIntMiddleware],PartyController.getAll);
    router.get("userId/all", PartyController.getUserParties);
    router.post("", PartyController.create);
    router.patch("/:partyId", [AuthMiddleware], PartyController.update);
    router.delete("/:partyId", [AuthMiddleware], PartyController.delete);
    router.post(":partyId/upvote", [AuthMiddleware], PartyController.upvoteParty);
    router.post(":partyId/downvote", [AuthMiddleware] ,PartyController.downvoteParty);
    
    return router;
}