
var bodyParser = require('body-parser')
const express = require("express");
const app = express(); // making express app 
const path = require("path");

const { Pool } = require('pg');



const pool = new Pool({
    connectionString: "postgres://blahblahblah"
});

const db = {
    query: async function (text, params, callback) {
        console.log('executed query', text);
        let data = await pool.query(text, params, callback);
        return data
    }
};



let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json({ limit: '50mb' })


app.use(express.static(path.join(__dirname, "..", "build")));

//          examples |||
//                   vvv

// app.get("/YourProject", (req, res) => res.status(200).json(newProject))

// // app.use(bodyParser.urlencoded({
// //     extended: true
// // }));

// app.get("/load", jsonParser, controller.loadProject, (req, res) => {
//     let translated = res.locals.rendered
//     res.status(200).json(translated)
// })


// app.post('/upload', jsonParser, controller.uploadProject, (req, res) => {
//     console.log(res.locals.name + ' saved')
//     res.status(200).json(res.json('Server has successfully saved your project: ' + res.locals.name))
// }






// );
// app.use((req, res, next) => {
//     res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });


//my error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

// starting express server on port 5000
let port = 8080
app.listen(port, () => {
    console.log("server started on port: " + port);
});

//PORT FORWARDED!!(somethings wrong) ADDRESS AND PORT IS: http://100.2.34.50:8080/



