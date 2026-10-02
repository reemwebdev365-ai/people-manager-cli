const fs = require('fs')

const loadInfo = () => {
try{
 const dataJson = fs.readFileSync('DataResult.json').toString()
return JSON.parse(dataJson)
}catch{
    return []
}
}

const saveData = (allData) =>{
    const allDataJson = JSON.stringify(allData)
     fs.writeFileSync('DataResult.json', allDataJson )
}


const addPerson =(id, fname, lname, age, city) =>{
    const allData =loadInfo()
    const duplicateData =allData.filter((obj) =>{ 
        return obj.id === id
})
if(duplicateData.length === 0){
    allData.push({
        id: id,
        fname: fname,
        lname: lname,
        age: age,
        city: city
    })
    saveData(allData)
}else{
    console.log("Error: Duplicated data")
}
}

//read
const readData =((id) =>{
const allData = loadInfo()
const itemNeeded = allData.find((obj) =>{
return obj.id == id
})
if(itemNeeded){
    console.log(itemNeeded)
}else{
    console.log("not found")
}
})
//delete:
const deleteData = (id) => {
    const allData= loadInfo()
    const dataToKeep = allData.filter((obj) => {
        return obj.id !==id
    })
    saveData(dataToKeep)
}

//delete all
const deleteAll = () => {
    saveData([])
    console.log("All data deleted")
}

//list

const listData =() =>{
    const allData =loadInfo()
    allData.forEach((obj) => {
        console.log(obj.fname,obj.lname,obj.city)
        
    })
}

module.exports = {
    addPerson,
    readData,
    deleteData,
    deleteAll,
    listData
}




