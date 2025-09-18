import mongoose from "mongoose";
const Schema = mongoose.Schema

const Projetos = new Schema({
    nomeProjeto: {
        type: String
    },

    verbaProjeto: {
        type: String
    }
})

const Projeto = mongoose.model("projetos", Projetos)

export default Projeto