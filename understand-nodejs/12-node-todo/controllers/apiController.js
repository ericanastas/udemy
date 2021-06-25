var ToDos = require('../models/todoModel.js');

var bodyParser = require('body-parser');

module.exports = function (app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todos/:uname', function (req, res) {

        ToDos.find({ username: req.params.uname }, function (err, todos) {
            if (err) throw err;
            else res.send(todos);
        });
    });

    app.get('/api/todo/:id', function (req, res) {

        ToDos.findById({ _id: req.params.id }, function (err, todo) {
            if (err) throw err;
            else res.send(todo);
        });
    });

    app.post('/api/todo', function (req, res) {

        if (req.body.id) {

            Todo.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function (err, todo) {
                if (err) throw err;
                else res.send(todo);
            });

        }
        else {

            var newToDo = ToDos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });

            newToDo.save(function (err, todo) {
                if (err) throw err;
                else res.send(todo);
            });
        }
    })

    app.delete('/api/todo/:id', function (req, res) {

        console.log(`delete id:${req.params.id}`);

        ToDos.findByIdAndRemove(req.params.id, function (err) {
            if (err) throw err;
            else res.send(`Task Deleted! ID:${req.params.id}`);
        })

    });

};