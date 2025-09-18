import express from "express"
const app = express()

import Projeto from "./Projetos.js"
const ProjetoSchema = Projeto

app.get("/projects", (req, res) => {
    
})

app.listen(8085, () => {
    console.log("Servidor Rodando")
})