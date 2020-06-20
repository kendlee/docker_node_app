const express = require('express')
const app = express()
const port = 3000

const message = process.env.EXTRA_MESSAGE || 'default extra message'

app.get('/', (req, res) => res.send(`<h1>Hello from container!</h1><p>${message}</p>`))

app.listen(port, () => console.log(`Containerized app listening on port:${port}`));