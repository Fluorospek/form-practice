const mongoose=require('mongoose');
const app=require('./app');

mongoose.connect('mongodb+srv://tanmaydeshkar:o7OUEFfS4jjbnNQ6@cluster0.pghw0se.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('Connected to database');
});

const port=process.env.PORT||5000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});
