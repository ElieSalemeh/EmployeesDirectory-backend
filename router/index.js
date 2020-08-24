module.exports = (app, router) => {
    const prefix = '/api';
    app.use(`${prefix}/employees`, require('./routes/employees.js'));
};

