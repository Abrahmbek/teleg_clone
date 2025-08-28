require('dotenv').config()
const express = require('express')
const http =require('http')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const errorMiddleware = require('./middlewares/error.middleware')
const { default: mongoose } = require('mongoose')



const app = express()

//const server = http.createServer(app)

const PORT = process.env.PORT || 4000
//Middleware
app.use(express.json())
app.use('/api', require('./routes/index'))
app.use(errorMiddleware)

const bootstrap = async () => {
      try {
            mongoose.connect(process.env.MONGO_URI).then(() => console.log("Mongodb connected"))
            app.listen(PORT, () => console.log(`serveri is running port ${PORT}`))
            
      } catch (error) { 
            console.error(error)
      }
}

bootstrap()

