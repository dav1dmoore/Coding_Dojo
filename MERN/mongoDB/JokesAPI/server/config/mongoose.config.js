//Import Mongoose

const mongoose = require('mongoose');

const database = "jokes";

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => console.log(`Database connection established: ${database}`))
.catch(err => console.log(`Error establishing connection: `, err));