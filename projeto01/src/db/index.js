import express from "express"
import mongoose from "mongoose"
import cors from "cors"
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost/costs")

const projetoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },

    budget: {
        type: Number,
        required: true
    }
})

const Projeto = mongoose.model("Projeto", projetoSchema)

app.post("/projects", async (req, res) => {
    try {
        const novoProjeto = new Projeto(req.body)
        const projetoSalvo = await novoProjeto.save()
        res.status(201).json(projetoSalvo)
    } catch (err) {
        console.log(err)
        res.status(400)
    }
})

app.get("/projects", async (req, res) => {
    try {
        const projetos = await Projeto.find()
        res.status(200).json(projetos)
    } catch (err) {
        console.log(err)
    }
})

app.listen(8085, () => {
    console.log("Servidor Rodando")
})