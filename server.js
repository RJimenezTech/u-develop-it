const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// request to base server request
app.get('/', (req,res) => {
    res.json({
        message: 'Hello World'
    });
});
// default respone for any other request (Not Found)
app.use((req,res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});