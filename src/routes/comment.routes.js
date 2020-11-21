const { Router } = require('express');

module.exports = function({CommentController}){
    const router = Router();

    router.get("/:commentId", CommentController.get);
    router.get("/:partyId/unique", CommentController.getPartyComments);
    router.post("/:partyId", CommentController.createComment);
    router.patch("/:commentId", CommentController.update);
    router.delete("/:commentId", CommentController.delete);
    return router;
}