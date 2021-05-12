const composerData = [
    {id: 0, name: 'Hans Zimmer', films: ['The Lion King', 'Inception', 'Interstellar']},
    {id: 1, name: 'Philip Glass', films: ['Koyaanisqatsi', 'The Hours', 'The Truman Show']},
    {id: 2, name: 'Johan Johansson', films: ['Arrival', 'Sicario', 'Mandy']},
    {id: 3, name: 'Jonny Greenwood', films: ['Phantom Thread', 'There Will Be Blood', 'Junun']},
    {id: 4, name: 'Alexandre Desplat', films: ['The Shape of Water', 'The Grand Budapest Hotel', 'Isle of Dogs']},
    {id: 5, name: 'John Williams', films: ['Schindler \'s List', 'Star Wars', 'Jaws']},
];

const composers = () => [...composerData];

module.exports = {composers: composers};

