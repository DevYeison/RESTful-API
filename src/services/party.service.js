const BaseService = require('./base.service');
let _partyRepository = null;

class PartyService extends BaseService{
    constructor({PartyRepository}){
        super(PartyRepository);
        _partyRepository = PartyRepository;
    }

    async getUserParties(boss){
        if(!boss){
            const error = new Error();
            error.status = 400;
            error.message = "user id must be sent";
            throw error;
        }
        
        return await _partyRepository.getUserParties(boss);
    }

    async upvoteParty(partyId){
        if(!boss){
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

        party.upvotes.push(true);

        return await _partyRepository.update(party, {upvotes: party.upvotes})
    }

    async downvoteParty(partyId){
        if(!boss){
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

        party.downvotes.push(true);

        return await _partyRepository.update(party, {downvotes: party.downvotes})
    }
}

module.exports = PartyService;