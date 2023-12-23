const path = require('path');

const express = require('express');
const app = express();

// Path to set public folder as static
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/registro.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
});



app.listen(3000, () =>{
    console.log('Server on port 3000');
});