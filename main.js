const express = require('express');
const path = require('path');
const indexRouter = require('./routes/indexRouter')
const app = express();

const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/', indexRouter);

app.listen(5050, () => {
    console.log('App listening on port 5050');
})