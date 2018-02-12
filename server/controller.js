const axios = require('axios');
let races = [],
classes = [],
spells = [],
weapons = [],
armor = [],
equipment = [],
monsters = [],
all = {races, classes, spells, weapons, armor, equipment, monsters};


module.exports = {
    create: (req, res) => {
        req.body.index = races.length + 1;
        req.body._id = races[races.length - 1]._id + req.body.index;
        races.push(req.body);
        races.sort(function(a,b) {
            return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
        });
        res.status(200).send(races);
    },
    read: (req, res) => {  
        races.sort(function(a,b) {
            return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
        });
        classes.sort(function(a,b) {
            return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
        });
        spells.sort(function(a,b) {
            return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
        });
        weapons.sort(function(a,b) {
            return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
        });
        armor.sort(function(a,b) {
            return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
        });
        equipment.sort(function(a,b) {
            return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
        });
        monsters.sort(function(a,b) {
            return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
        });
        res.status(200).send(all);
    },
    update: (req, res) => {
        for (let i = 0; i < races.length; i++) {
            if (races[i]._id === req.params.id) {
                races[i].name = req.body.name;
            }
        }
        res.status(200).send(races);
    },
    delete: (req, res) => {
        races = races.filter(e => e._id !== req.params.id);
        res.status(200).send(races);
    }

};

for (let i = 1; i <= 9; i++) {
    axios.get(`http://www.dnd5eapi.co/api/races/${i}`).then(res => races.push(res.data));
}

for (let i = 1; i <= 12; i++) {
    axios.get(`http://www.dnd5eapi.co/api/classes/${i}`).then(res => classes.push(res.data));
}

for (let i = 1; i <= 305; i++) {
    axios.get(`http://www.dnd5eapi.co/api/spells/${i}`).then(res => spells.push(res.data));
}

for (let i = 1; i <= 256; i++) {
    axios.get(`http://www.dnd5eapi.co/api/equipment/${i}`).then(res => {
        if(res.data.equipment_category === "Weapon"){
            weapons.push(res.data);
        }
        else if(res.data.equipment_category === "Armor"){
            armor.push(res.data);
        }
        else {
            equipment.push(res.data);
        }
    });
}

for (let i = 1; i <= 325; i++) {
    axios.get(`http://www.dnd5eapi.co/api/monsters/${i}`).then(res => monsters.push(res.data));
}

function compare(a,b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}
