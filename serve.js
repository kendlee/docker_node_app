const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello from container!'))

app.listen(port, () => console.log(`Containerized app listening on port:${port}`));