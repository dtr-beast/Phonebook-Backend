import morgan from 'morgan'
import express from 'express'
import cors from 'cors'
import {Phonebook} from "./mongo";

const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`App Started at PORT ${PORT}`))

interface PersonParams {
    name: string,
    number: string
}

let phonebookLength: number
app.get('/api/persons', (req, res) => {
    Phonebook.find({}).then((phonebook) => {
            phonebookLength = phonebook.length
            res.json(phonebook)
        }
    )
})

app.post('/api/persons/', (req, res) => {
    const newPerson: PersonParams = req.body
    if (newPerson.number === undefined || newPerson.name === undefined) {
        return res
            .status(400)
            .send({error: 'Name or number missing'})
    }
    // TODO: Entry validation & error handling
    Phonebook.find({name: newPerson.name}).then(results => {
        // No person with same name exists
        const uploadPerson = new Phonebook({
            ...newPerson
        })
        uploadPerson.save().then((returnedPerson) => {
                res.status(200).send(returnedPerson)
            }
        )
    })
})


app.put('/api/persons/:id', (req, res) => {
    const body = req.body
    const person = {
        name: body.name,
        number: body.number
    }
    console.log(body)
    Phonebook
        .findByIdAndUpdate(req.params.id, person, {new: true})
        .then(updatedPerson => {
            res.json(updatedPerson)
        })
        .catch(error => console.log(error.message))
})

app.delete('/api/persons/:id', (req, res) => {
    Phonebook
        .findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(204).end()
        })
        // TODO: Implement an error catching middleware
        .catch(error => {
            console.log(error.message)
            res.status(500).end()
        })
})

app.get('/info', (req, res) => {
    if (phonebookLength === undefined) {

    }
    // TODO: Implement an algorithm to fetch the length if phonebookLength is undefined
    res.send(`<p>Phonebook has info for ${phonebookLength} people</p><p>${new Date()} ${new Date().getTimezoneOffset()}</p>`)
})
