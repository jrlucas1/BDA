// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, push, child} from "firebase/database"
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



set(child(ref(db, 'clientes/1/-NQ1WRmDup3qq1saoeMR'), 'sobrenome'), "da Silva")
    .then(()=>{
        console.log("Sobrenome foi alterado")
        process.exit(0)
    })
    .catch(error=>console.log("Erro! "  +  error))