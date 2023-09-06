import  * as fb from "firebase/database";// sera preciso usar fb antes de cada funcao
import { onChildAdded, orderByChild } from "firebase/database";
import { dbConnect } from "./connetToFB.js";

dbConnect()
.then(db=>{
    const dbRef = fb.ref(db, 'produtos');

    const consulta = fb.query(dbRef, orderByChild('nome'));

    onChildAdded(consulta, dados=>{
        console.log(dados.val())
    })
}).catch(err=>console.log(err))