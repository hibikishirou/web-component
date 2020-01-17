const express = require('express')
const app = express();
const path = require('path');
const port = 3000
// Serve static files....
app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/home.html'));
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))