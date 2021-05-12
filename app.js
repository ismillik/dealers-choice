const express = require ('express');
const morgan = require ('morgan');
const path = require('path');
const app = express();


app.use(morgan('dev'));



app.get('/', (req, res, next) => {
    const html = `<!DOCTYPE html>
    <html>
        <head>
            <title>An Inexhaustive List of Film Composers</title>
            <!-- <link rel="stylesheet" href="/style.css" /> -->
        </head>
        <body>
            <h1>An Inexhaustive List of Film Composers</h1>
            <ul>
                <li>John Williams</li>
                <li>Hans Zimmer</li>
                <li>Howard Shore</li>
                <li>Jonny Greenwood</li>
                <li>Alexandre Desplat</li>
                <li>Cliff Martinez</li>
            </ul>
        </body>
    </html>`;
    res.send(html);
});

app.get('/item/:id', (req, res, next) => res.send('Hello Item!'));

const PORT = 3000;

app.listen(PORT, () => {
    console.log (`App listening in port ${PORT}`)
});