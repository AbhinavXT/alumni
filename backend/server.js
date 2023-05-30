import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import directoryRoutes from './routes/api/directory.js'
import authRoutes from './routes/api/auth.js'
import profileRoutes from './routes/api/profile.js'
import feedRoutes from './routes/api/feed.js'
import careerRouter from './routes/api/career.js'
import cors from 'cors'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
	res.send('API is running....')
})

app.use('/api/directory', directoryRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/feed', feedRoutes)
app.use('/api/career', careerRouter)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
