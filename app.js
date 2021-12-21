const express = require('express');
const app = express();
<<<<<<< HEAD
const PORT = 3000
=======
const PORT = 3000;
>>>>>>> 504d9aabe3a19f899b52b265c56217888e17e40e


app.listen(PORT,()=>{
    console.log('Darzified Platform');
});

app.get('/', (req, res) => {
    res.send('Welcome to darzified');
});
<<<<<<< HEAD
=======

app.get('/greet',(req,res)=>{

    res.json({
        data:"Welcome to The Darzified App"
    })
})
>>>>>>> 504d9aabe3a19f899b52b265c56217888e17e40e
