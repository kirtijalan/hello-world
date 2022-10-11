const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({
        "Greeting": ["Hello, World!"]
    })
})

app.listen(5050, () => {
    console.log("Server running on port 5050")
})