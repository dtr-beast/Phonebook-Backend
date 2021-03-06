import mongoose from 'mongoose'
import {URL} from "./config";

const uniqueValidator = require('mongoose-unique-validator')


mongoose
    .connect(URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }
    ).then(() => console.log(`Connected to MongoDB!`)
)
mongoose.plugin(uniqueValidator)

interface PhonebookParams {
    name: string,
    number: string,
}

const phonebookSchema = new mongoose.Schema<PhonebookParams>({
    name: {
        type: String,
        minLength: 3,
        required: true,
        unique: true,
    },
    number: {
        type: String,
        minLength: 8,
        required: true,
    },
})

phonebookSchema.set("toJSON", {
    transform: (document: any, returnedObject: any) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

export const Phonebook = mongoose.model<PhonebookParams>('Phonebook', phonebookSchema)
