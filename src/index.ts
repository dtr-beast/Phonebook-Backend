import morgan from 'morgan'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.use(express.static('uibuild'))

let persons = [
    {
        "name": "Arto Hellos",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramo",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Prepends",
        "number": "39-23-6423122",
        "id": 4
    }
]

function createNewID() {
    return persons.length + 1
}

app.get('/', (req, res) => {
    res.send('<h1>Hello Persons</h1>')
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find((person) => person.id === id)
    if (person) {
        res.json(person)
    } else {
        res.status(404).send({error: 'Unknown Endpoint'})
    }
})

app.post('/api/persons/', (req, res) => {
    const newPerson: typeof persons[0] = req.body
    if (newPerson.number === undefined || newPerson.name === undefined) {
        return res.status(400).send({error: 'Name or number missing'})
    }
    if (persons.find((person) => person.name === newPerson.name) !== undefined) {
        return res.status(409).send({error: 'Name must be unique'})
    }

    newPerson.id = createNewID()
    persons.push(newPerson)
    res.json(newPerson)
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter((person) => person.id !== id)
    res.status(204).send(`<h3>Person #${id} deleted</h3>`)
})

app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${new Date()} ${new Date().getTimezoneOffset()}</p>`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`App Started at PORT ${PORT}`))