import * as fb from "firebase/database";// sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connetToFB.js";
import { child } from "firebase/database";
import { ref } from "firebase/database";

dbConnect()
    .then(db => {//db contem a referencia ao banc
        const dbRef = ref(db);
        
        fb.get(child(dbRef, `produtos`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("Dados não encontrados");
            }
        }).catch((error) => {
            console.error(error);
        });
    })