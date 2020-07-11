const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const server = http.createServer(app);

const port = process.env.port || 3000;

const dbUsername = "noteSiteDBAccess";
const dbPassword = "UjlmorThK4ZL3veh";
const dbName = "note-site";
const dbURI = `mongodb+srv://${dbUsername}:${dbPassword}@kingo-dev.lt9jl.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => server.listen(port))
    .catch((err) => console.log(err));

// server.listen(port, () => {
//     console.log(`Server listening on port: ${port}`);
// });