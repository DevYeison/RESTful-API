const { Router } = require('express');
const { AuthMiddleware } = require('../middlewares');

module.exports = function({CommentController}){
    const router = Router();

    router.get("/:commentId", CommentController.get);
    router.get("/:partyId/unique", CommentController.getPartyComments);
    router.post("/:partyId", AuthMiddleware, CommentController.createComment);
    router.patch("/:commentId", AuthMiddleware, CommentController.update);
    router.delete("/:commentId", AuthMiddleware, CommentController.delete);
    return router;
}