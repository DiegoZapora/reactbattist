import express from "express"
import mongoose, { Schema } from "mongoose"
import cors from "cors"
import flash from "connect-flash"
import session from "express-session"

const app = express()

app.use(cors())
app.use(express.json())
app.use(session({
    secret: "AndreMatos",
    resave: true,
    saveUninitialized: true
}))
app.use(flash())
app.use((req, res, next) => {
    res.locals.sucessoMSG = req.flash("sucessoMSG"),
    res.locals.erroMSG = req.flash("erroMSG")
    next()
})

mongoose.connect("mongodb://localhost/costs")

const categoriaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    }
})

const Categoria = mongoose.model("Categoria", categoriaSchema)

const projetoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },

    budget: {
        type: Number,
        required: true
    },

    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categoria"
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
        const projetos = await Projeto.find().populate("categoria")
        res.status(200).json(projetos)
    } catch (err) {
        console.log(err)
    }
})

app.post("/categorias", async (req, res) => {
    try {
        const novaCategoira = new Categoria(req.body)
        const categoriaSalva = await novaCategoira.save()
        res.status(201).json(categoriaSalva)
    } catch (err) {
        console.log(err)
        res.status(400)
    }
})

app.get("/categorias", async (req, res) => {
    try {
        const categorias = await Categoria.find()
        res.status(200).json(categorias)
    } catch (err) {
        console.log(err)
    }
})

app.listen(8085, () => {
    console.log("Servidor Rodando")
})