const express =require('express');
const loginrouter = require('./routes/loginRouter');
app.use('/login', loginRouter);

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res) =>{
    res.send("<h1>!Hello Word!</h1>")
})

app.listen(PORT, () => { console.log(`🌟Server listening on port ${PORT}`) });

