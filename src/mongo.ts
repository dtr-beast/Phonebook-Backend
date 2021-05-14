import mongoose from 'mongoose'
// import dotenv from 'dotenv'

// dotenv.config()

const url = process.env.MONGO_DB_URL

mongoose
    .connect(url,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }
    ).then(() => console.log(`Connection Established to MongoDB!`)
)

interface PhonebookParams {
    name: string,
    number: string,
}

const phonebookSchema = new mongoose.Schema<PhonebookParams>({
    name: String,
    number: String,
})

phonebookSchema.set("toJSON", {
    transform: (document: any, returnedObject: any) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

export const Phonebook = mongoose.model<PhonebookParams>('Phonebook', phonebookSchema)


// function closeConnection() {
//     mongoose.connection.close().then(() => console.log(`Connection Closed!`))
// }