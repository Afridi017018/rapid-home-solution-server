const app = require('./src/app');
const connectDB = require('./src/config/db');
const { port } = require('./src/secret');




const main = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`server is listening on http://localhost:${port}`);

    })
}


main();