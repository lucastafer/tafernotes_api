const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/tafernotes', {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true,
}).then(() => console.log('Connected succesfull.'))
.catch((err) => console.log(err));