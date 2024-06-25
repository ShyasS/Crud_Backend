const express = require('express');
const router = require('./router/CrudRouter');
const connectDb = require('./config/dbConnection');
const cors = require('cors')

const app = express();
const port = 5001;
app.use(cors());
connectDb();

app.use(express.json());
app.use('/api', router)
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})