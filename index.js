const express = require('express');
let port = 1000;
const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded());
app.use('/photos', express.static('photos'));

const QRcodeKey = 'Unipi';
// const location = [37.9417, 23.6532]
// const location =[38.02480, 23.73678]
const location = [38.0934, 23.8151]


app.get('/', (req, res) => {
    res.render('pages/home', {title:'Home Page'});
});

app.get('/checkin', (req, res) => {
    res.render('pages/checkin', {title:'Check In Page'});
})

app.post('/checkin', (req, res) => {
    console.log(req.body);
    console.log('Check-in successful for:', req.body.firstname+" "+req.body.lastname);
    res.redirect('/');
    // BEFORE REDIRECT PRINT A SUCCESS MESSAGE
});

app.get('/checkout', (req, res) => {
    res.render('pages/checkout', {title:'Check Out Page', QRcodeKey: QRcodeKey, location: location});
})

app.get('/success', (req, res) => {
    res.render('pages/success', {title:'Success Page'});
});

app.get('/error', (req, res) => {
    res.render('pages/error', {title:'Error Page'});
});

app.listen(port, () => {
    console.log('Server is running on http://localhost: '+ port);
});