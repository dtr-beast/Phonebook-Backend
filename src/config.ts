import dotenv from 'dotenv'
dotenv.config()

const URL = process.env.MONGO_DB_URL
const PORT = process.env.PORT || 3001

export {
    URL, PORT
}