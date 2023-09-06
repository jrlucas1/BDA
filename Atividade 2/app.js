// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, push} from "firebase/database"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBLIGcTTRhkYft7Up8uQAbKdIL4txtXdhc",
  authDomain: "bda-2023.firebaseapp.com",
  databaseURL: "https://bda-2023-default-rtdb.firebaseio.com",
  projectId: "bda-2023",
  storageBucket: "bda-2023.appspot.com",
  messagingSenderId: "521332721618",
  appId: "1:521332721618:web:fb743bb7562bbd0cb42a0b",
  measurementId: "G-3H82YNRRG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/* set(ref(db, "users/1"), {
    name: "João Raul Furtado Lucas",
    age: "20"
});
*/

push(ref(db, "clientes/" + 1), {
    id:"1",
    name: "Maria",
    age: "15"
}).then(()=>{
    console.log("O registro foi alterado")
    process.exit(0)
})
.catch(error=>console.log("Erro! " + error));

push(ref(db, "clientes/" + 2), {
    id: "2",
    name: "João",
    age: "25"
}).then(()=>{
    console.log("O registro foi alterado")
    process.exit(0)
})
.catch(error=>console.log("Erro! " + error));

push(ref(db, "clientes/" + 3), {
    id:"3",
    name: "Ana",
    age: "23"
}).then(()=>{
    console.log("O registro foi alterado")
    process.exit(0)
})
.catch(error=>console.log("Erro! " + error));