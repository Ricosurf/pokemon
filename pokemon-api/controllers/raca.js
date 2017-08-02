var ObjectID = require('mongodb').ObjectID;

exports.listar = function (req, res) {
    req.db.collection('racas').find().toArray(function(err, result) {
        if (err) {
            return console.log(err)
        };

        res.send(result);
    });
};
