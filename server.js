const express = require('express')
const { errorHandler } = require('./middlewares/errorMiddleware')
require('colors')
const products = require('./data/products')
const dotenv = require('dotenv')
const path = require('path')
const connectDb = require('./config/config')
const productRoutes = require('./routes/productsRoute')
const usersRoutes = require('./routes/UsersRoute')
const orderRoutes = require('./routes/orderRoute')

dotenv.config()
//connecting to mongodb database
connectDb()
const app = express()
//middleware bodyparser
app.use(express.json())

//dotenv config
// app.get('/', (req, res) => {
//   res.send('<h1>Welcome to Node Server</h1>')
// })

app.use('/api', productRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/orders', orderRoutes)
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL__ID)
})

app.use(errorHandler)
app.use(express.static(path.join(__dirname, './frontend/build')))
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './frontend/build/index.html'))
})

const port = process.env.PORT || 5000

const PORT = 5000
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} Mode on Port ${PORT}`.inverse,
  )
})
