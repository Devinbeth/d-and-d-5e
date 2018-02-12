const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller.js');

const port = 3005;
const app = express();

app.use(bodyParser.json());
app.use(express.static('/../public/build'));

app.post('/api/', ctrl.create);
app.get('/api/', ctrl.read);
app.put('/api/:id', ctrl.update);
app.delete('/api/:id', ctrl.delete);

app.listen(port, () => console.log(`Server listening on port: ${port}`));
