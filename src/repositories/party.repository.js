const BaseRepository = require('./base.repository');
let _party = null;

class PartyRepository extends BaseRepository{

    constructor({Party}){
        super(Party);
        _party = Party;
    }

    async getUserParties(boss){
        return await _party.find({ boss });
    }
}

module.exports = PartyRepository;