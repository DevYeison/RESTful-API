const BaseService = require('./base.service');
let _commentRepository = null;
let _partyRepository = null;

class CommentService extends BaseService{
    constructor({CommentRepository, PartyRepository}){
        super(CommentRepository);
        _commentRepository = CommentRepository;
        _partyRepository = PartyRepository;
    }

    async getPartyComments(partyId){
        if(!partyId){
            const error = new Error();
            error.status = 400;
            error.message = "party id must be sent";
            throw error;
        }

        const party = await _partyRepository.get(partyId);
        
        if(!party){
            const error = new Error();
            error.status = 404;
            error.message = "party does not exist";
            throw error;
        }

        const { comments } = party;

        return comments;
    }

    async createComment(comment, partyId){
        if(!partyId){
            const error = new Error();
            error.status = 400;
            error.message = "party id must be sent";
            throw error;
        }
        const party = await _partyRepository.get(partyId);
        
        if(!party){
            const error = new Error();
            error.status = 404;
            error.message = "party does not exist";
            throw error;
        }
        
        const createdComment = await _commentRepository.create(comment);
        party.comments.push(createdComment);

        return await _partyRepository.update(partyId, {comments: party.comments})
    }
}

module.exports = CommentService;