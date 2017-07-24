const {Busca, Items} = require('../models/items');
const _ = require('lodash');
module.exports = app => {
    app.route('/items').get((req, res) => {
        let filter = _.clone(Busca);
        if(req.query.q) {
            filter.items = Busca.items.filter(x=>x.title === req.query.q);
        }
        return res.status(200).json(filter);
    });
     app.route('/items/:id').get((req, res)=>{
        let filter = {};
        if(req.params.id){
            filter = Items.find(x=>x.item.id === req.params.id);
        }
        return res.status(200).json(filter);
     });
};