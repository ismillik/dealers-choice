const express = require ('express');
const morgan = require ('morgan');
const path = require('path');
const app = express();
const composerData = require ('./composerData');

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
                <li><a href='/composer/0'>Hans Zimmer</a></li>
                <li><a href='/composer/1'>Philip Glass</a></li>
                <li><a href='/composer/2'>Johan Johannson</a></li>
                <li><a href='/composer/3'>Jonny Greenwood</a></li>
                <li><a href='/composer/4'>Alexandre Desplat</a></li>
                <li><a href='/composer/5'>John Williams</a></li>
            </ul>
        </body>
    </html>`;
    res.send(html);
});

const composers = composerData.composers();

app.get('/composer/:id', (req, res, next) => {
    let composerId = req.params.id;
    let composer = composers[composerId];
    const html = `<!DOCTYPE html>
    <html>
        <head>
            <title>individual page</title>
            <!-- <link rel="stylesheet" href="/style.css" /> -->
        </head>
        <body>
            <h2>${composer.name}</h2>
            <p>Film scores:</p>
            <ul>
                <li>${composer.films[0]}</li>
                <li>${composer.films[1]}</li>
                <li>${composer.films[2]}</li>
            </ul>
        </body>
    </html>`
    res.send(html);
});
  


const PORT = 3000;

app.listen(PORT, () => {
    console.log (`App listening in port ${PORT}`)
});