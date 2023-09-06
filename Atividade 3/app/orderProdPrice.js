import  * as fb from "firebase/database";// sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connetToFB.js";

dbConnect()
.then(db=>{//db contem a referencia ao banco
    const dbRef = fb.ref(db, 'produtos')
    
    const consulta = fb.query(dbRef, fb.orderByChild('preco'));

    fb.onChildAdded(consulta, dados=>{
        console.log(dados.val())
    })

}).catch(err=>console.log(err))