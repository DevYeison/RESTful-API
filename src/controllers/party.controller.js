let _partyService = null;

class PartyController {
        constructor({PartyService}){
            _partyService = PartyService;
        }

        async get(req,res){
            const { partyId } = req.params;
            const party = await _partyService.get(partyId);
            return res.send(party);
        }

        async getAll(req,res){
            const party =  await _partyService.getAll();
            return res.send(party);
        }

        async create(req, res){
            const { body } = req;
            const createdParty = await _partyService.create(body);
            return res.status(201).send(createdParty);
        }

        async update(req,res){
            const { body } = req;
            const { partyId } = req.params;
            const updatedParty = await _partyService.update(partyId, body);
            return res.send(updatedParty);
        }

        async delete(req,res){
            const { partyId } = req.params;
            const deletedParty = await _partyService.delete(partyId);
            return res.send(deletedParty);
        }

        async getUserParties(req, res){
            const { userId } = req.params;
            const parties = await _partyService.getUserParties(userId);
            return res.send(parties);
        }

        async upvoteParty(req, res){
            const { partyId } = req.params;
            const party = await _partyService.upvoteParty(partyId);
            return res.send(party);
        }

        async downvoteParty(req, res){
            const { partyId } = req.params;
            const party = await _partyService.downvoteParty(partyId);
            return res.send(party);
        }
}

module.exports = PartyController;