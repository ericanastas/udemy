var ToDos = require('../models/todoModel.js');

module.exports = function (app) {

    app.get('/api/setupToDos', function (req, res) {

        var seedToDos = [
            {
                username: 'test',
                todo: 'Buy Milk',
                isDone: false,
                hasHattachment: false
            },
            {
                username: 'test',
                todo: 'Do Laundry',
                isDone: false,
                hasattachment: false
            },
            {
                username: 'test',
                todo: 'Feed Cat',
                isDone: false,
                hasHattachment: false
            }
        ];

        ToDos.create(seedToDos, function (err, results) {
            res.send(results);
        });

    });

}