const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.listen(3001, () => {
    console.log("Rodando servidor na porta 3001")
})