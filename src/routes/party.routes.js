const { Router } = require('express');
const { ParseIntMiddleware } = require('../middlewares');

module.exports = function({PartyController}){
    const router = Router();

    router.get("/:partyId", PartyController.get);
    router.get("", ParseIntMiddleware,PartyController.getAll);
    router.get("userId/all", PartyController.getUserParties);
    router.post("", PartyController.create);
    router.patch("/:partyId", PartyController.update);
    router.delete("/:partyId", PartyController.delete);
    router.post(":partyId/upvote", PartyController.upvoteParty);
    router.post(":partyId/downvote", PartyController.downvoteParty);
    
    return router;
}