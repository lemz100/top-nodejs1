const { Router } = require('express');
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.locals = {
        title: 'Mini Messageboard',
        messages: messages,
    }
    res.render("index", res.locals)
})

indexRouter.get('/new', (req, res) => {
    res.render("form");
})

indexRouter.post('/new', (req, res) => {
    const { author, message } = req.body; // Gets form submission inputs
    messages.push({ text: message, user: author, added: new Date() }); // Adds a new message object to the array
    res.redirect('/'); // Redirects user to the index page.
})

indexRouter.get('/message/:user', (req, res) => {
    const user = req.params.user;
    res.locals = {
        userMessage: messages.find(message => user === message.user) 
    };
    res.render("message", res.locals);
})

module.exports = indexRouter;