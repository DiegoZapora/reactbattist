import mongoose from "mongoose"

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/costs")
.then(() => {
    console.log("Conectado com sucesso")
})