var ObjectID = require('mongodb').ObjectID;

exports.listar = function (req, res) {
    req.db.collection('pokemon').find().toArray(function(err, result) {
        if (err) {
            return res.sendStatus(503);
        };

        res.send(result);
    });
};

exports.criar = function (req, res) {
    var dadosPokemon = req.body;

    console.log('Dados que vieram do usuário');
    console.log(dadosPokemon);

    req.db.collection('racas').findOne(ObjectID(dadosPokemon._id_raca), function(err, raca) {
        if (err) {
            return res.sendStatus(503);
        };

        console.log('Dados da raça que estavam no banco');
        console.log(raca);

        dadosPokemon.raca = raca;

        console.log('Dados mesclados que serão salvos no banco');
        console.log(dadosPokemon);

        req.db.collection('pokemon').save(dadosPokemon, function(err, result) {
            if (err) {
                return res.sendStatus(503);
            }
            res.sendStatus(201);
        });
    });
};
