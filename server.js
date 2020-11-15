const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 9000;



//Middleware
app.use(express.json());
app.use(cors());


//Temp homepage route
app.get('/', (req, res) => {
    res.send('CYF-student tracker server');
})






//Server listening
app.listen(PORT, (req, res) => {
    console.log(`Server started and listening on port ${PORT}`);
});