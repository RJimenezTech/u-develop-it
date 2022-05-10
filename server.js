const express = require('express');

const PORT = process.env.PORT || 3002;
const app = express();

const mysql = require('mysql2');

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'BadBunnySQL2022!',
        database: 'election'
    },
    console.log('Connected to the election database.')
)

// request to base server request
app.get('/', (req,res) => {
    res.json({
        message: 'Hello World'
    });
});

// runs the SQL query and executes the callback
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// catchall route
// this route must be last
app.use((req,res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});