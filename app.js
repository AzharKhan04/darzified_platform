const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());

const PORT = 3000;





app.listen(PORT,()=>{
    console.log('Darzified Platform');
});

app.get('/', (req, res) => {
    res.send('Welcome to darzified');
});


app.get('/greet',(req,res)=>{

    res.json({
        data:"Welcome to The Darzified App"
    })
})
