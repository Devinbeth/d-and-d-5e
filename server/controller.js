let races = [],
classes = [],
spells = [],
weapons = [],
armor = [],
equipment = [];

module.exports = {
    create: (req, res) => {
        
    },
    read: (req, res) => {
        res.status(200).send(races);
    },
    update: (req, res) => {
        
    },
    delete: (req, res) => {
        races = races.filter(e => e.id !== +req.params.id);
        res.status(200).send(races);
    }

};