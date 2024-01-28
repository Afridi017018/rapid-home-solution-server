const express = require('express');
const app = express();
const cors =  require('cors');
const morgan = require('morgan');

const userRouter = require('./routers/userRouter')
const serviceRouter = require('./routers/serviceRouter')
const orderRouter = require('./routers/orderRouter')
const employeeRouter = require('./routers/employeeRouter')
const employeesWorkRouter = require('./routers/employeesWorkRouter')


app.use(morgan('dev'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/user',userRouter);
app.use('/api/services',serviceRouter);
app.use('/api/orders',orderRouter);
app.use('/api/employees',employeeRouter);
app.use('/api/work',employeesWorkRouter);



module.exports = app;