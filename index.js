const express = require('express');
let port = 1000;
const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded());


app.get('/', (req, res) => {
    res.render('pages/home');
});


app.listen(port, () => {
    console.log('Server is running on http://localhost: '+ port);
});