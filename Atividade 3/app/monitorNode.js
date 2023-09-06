import * as fb from "firebase/database";// sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connetToFB.js";

dbConnect()
    .then(db => {//db contem a referencia ao banco
        const dbRef = fb.ref(db);

        const callback = (snapshot) => {
            console.log(snapshot.val());
            if (snapshot.key === "-MwSzyJMlNDToTGtPuhc") {
                dbRef.off("child_added", callback); // interrompe o monitoramento
            }
        }

        fb.onChildAdded(dbRef, callback);
    }
    ).catch(err => console.log(err))