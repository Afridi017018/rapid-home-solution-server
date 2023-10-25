const express = require('express');
const app = express();
const cors =  require('cors');
const morgan = require('morgan');

const userRouter = require('./routers/userRouter')
const serviceRouter = require('./routers/serviceRouter')
const orderRouter = require('./routers/orderRouter')


app.use(morgan('dev'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/user',userRouter);
app.use('/api/services',serviceRouter);
app.use('/api/orders',orderRouter);



module.exports = app;