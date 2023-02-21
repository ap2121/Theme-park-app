const db = require('../db')
const Park = require('../models/park')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const parks = [
        {image: 'https://i.insider.com/5a94606e3aab0529008b475b?width=700&format=jpeg&auto=webp', name:'Joyland Amusement Park', location: 'Kansas', dateClosed: '2006', description: ''}
    ]
}