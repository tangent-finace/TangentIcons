require('dotenv').config();

const Getter = require('./Controllers/GetterTokens')

if (!process.argv[2]){
    console.info('Please type token id \nExample: node test.js [test - token id]')
    process.exit()
}

Getter.getByIdFirst(process.argv[2]).then(test => {
    console.log(test)
}).catch(err=>{
    console.error(err)
});
