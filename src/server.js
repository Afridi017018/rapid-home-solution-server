const app = require('./app');
const connectDB = require('./config/db');
const { port } = require('./secret');





app.listen(port, async()=>{
    console.log(`server is listening on http://localhost:${port}`);
    await connectDB();

})