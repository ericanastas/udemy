var config = require('./config.json');

module.exports = {
    getDBConnectionString: function () {
        return `mongodb+srv://${config.user}:${config.password}@${config.host}/${config.database}?retryWrites=true&w=majority`
    }
}