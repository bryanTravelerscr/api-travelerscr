const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {  });

const connection = mongoose.connection;

connection.once('open', ()=>{
    
    console.log('MongoDB: ok');

}); 

    

const home = require('./view/home');
const exerciseRouter = require('./routes/exercise');
const userRouter = require('./routes/user');
const settingsRouter = require('./routes/settings');
const travelerscrTours = require('./routes/travelerscr/tours');

app.use('/', home);

app.use('/api/travelerscr/tours/', travelerscrTours);

app.use('/exercise', exerciseRouter);
app.use('/user', userRouter);
app.use('/settings', settingsRouter);

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
});