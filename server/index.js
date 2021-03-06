import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js' 


const app = express();


app.use(bodyParser.json({limit: "30mb", extended: "true"}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: "true"}));

app.use(cors());

//setting up routes for the post cards with each url starting with posts
app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://darshselarka:helloworld@cluster0.8cms8.mongodb.net/<dbname>?retryWrites=true&w=majority';

//heroku will automatically select from environment port
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message) );

//to make sure to not get any warnings in the console
mongoose.set('useFindAndModify', false);

