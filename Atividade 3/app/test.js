import * as fb from "firebase/database";// sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connetToFB.js";
import { child } from "firebase/database";
import { ref } from "firebase/database";
dbConnect()
    .then(db => {//db contem a referencia ao banc
        let value = 'Notebook Samsumg Gamer'
        let filter = 'nome'
        const refDB = fb.ref(db, 'produtos/');
        const consulta = fb.query(refDB, fb.orderByChild(filter), fb.startAt(value));
        fb.onChildAdded(consulta, dados => {
            console.log(dados.val());
        });
    }).catch((error) => {
        console.error(error);
    });
