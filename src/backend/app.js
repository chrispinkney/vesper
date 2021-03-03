const express = require('express');
const indexRouter = require('./routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend started on port ${PORT}`));

module.exports = app;
