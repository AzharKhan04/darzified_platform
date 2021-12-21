const express = require('express');
const app = express();
const PORT = 9098;


app.listen(PORT,()=>{
    console.log('Darzified Platform');
});

app.get('/', (req, res) => {
    res.send('Welcome to darzified');
});