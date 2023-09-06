import {
    ref,
    query,
    orderByChild,
    onChildAdded,
    off,
    endAt,
    endBefore,
    equalTo,
    startAt,
    startAfter,
    onValue,
    limitToFirst,
    limitToLast
} from "firebase/database"

function getOrderByChild(order,db,callback){
    console.log(order);
    const refDB = ref(db,'produtos/');
    const consulta = query(refDB,orderByChild(order))
    onChildAdded(consulta,callback)
}

function getFilterByChild(filter,value, db,callback){
    console.log(filter)
    const dbRef = ref(db, `produtos/`)
    const consulta = query(dbRef, orderByChild(filter), startAt(value))
    onChildAdded(consulta, callback)
}

function getMostExpensive(db,setValue,list){
    const dbRef = ref(db, `produtos/`)
    const consulta = query(dbRef, orderByChild(`preco`))
    onChildAdded(consulta, data => {
        list.unshift(data.val())
    })

    setValue([...list])
}

function getMostCheap(db,callback){
    const dbRef = ref(db, `produtos/`)
    const consulta = query(dbRef, orderByChild(`preco`))
    onChildAdded(consulta, callback)
}

function getPriceRange(value, db,callback){//0--->limit
    const dbRef = ref(db, `produtos/`)
    const consulta = query(dbRef, orderByChild(`preco`), endAt(parseInt(value)))
    onChildAdded(consulta, callback)
}

export {getOrderByChild, getFilterByChild, getMostExpensive, getMostCheap, getPriceRange}
