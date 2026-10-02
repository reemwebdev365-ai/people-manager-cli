

const fs =require('fs')
const main_data = require('./main_data')
const yargs = require ('yargs')
const { type } = require('os')


yargs.command({
    command: 'add',
    describe: "to add People",
    builder:{
        id:{
            describe: "ID",
            demandOption:true,
            type: 'number'
        },
        fname:{
            describe: "First Name",
            demandOption: true,
            type: 'string'
        },
        lname:{
            describe: "Last Name",
            demandOption: true,
            type: 'string'
        },

    },
    handler: (x) =>{
        main_data.addPerson(x.id,x.fname,x.lname,x.age,x.city)
    }
})
yargs.command({
    command:'read',
    describe:'to read',
    builder:{
        id:{
            describe:'id to read',
            demandOption:true,
            type:"string"
        }
    },
    handler:(x) =>{
        main_data.readData(x.id)
    }

})
yargs.command({
    command:'delete',
    describe:'to delete',
    handler:(x)=>{
        main_data.deleteData(x.id)
    }
})


yargs.command({
    command: 'deleteAll',
    describe: 'delete all people',
    handler: () => {
        main_data.deleteAll()
    }
})

yargs.command({
    command:"list",
    describe:"to list all items",
    handler:(x)=>{
        main_data.listData()
    }
    
})
yargs.parse()