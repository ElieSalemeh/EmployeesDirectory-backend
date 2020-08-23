module.exports = (app, router) => {
    const prefix = '/api';
    app.use(`${prefix}/user`, require('./routes/employees.js'));
};

