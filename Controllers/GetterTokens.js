const fs = require('fs');
const glob = require("glob")
const { forEach } = require('p-iteration');

let allTokens = [];
module.exports = {
    allTokens,
    getById(id){
      return this.allTokens.find(token => token.id === id) ?? {error: 'Token not found'}
    },
    getByIdFirst(id){
        return new Promise((resolve, reject) => {
            glob(`./Tokens/${id}/logo.*`,  (err, files) => {
                if (err){
                    reject('Token not found ')
                    console.error(err)
                }
                if (files[0]){
                    try{
                        resolve({
                            id: id,
                            logo: files[0].replace('./', process.env.SITE_URL),
                            ...JSON.parse(fs.readFileSync(`./Tokens/${id}/info.json`, 'utf8'))
                        })
                    } catch (e){
                        reject('Token not found')
                    }
                } else {
                    reject('Token not found')
                }
            })
        })
    },
    getAll(){
        setTimeout(()=>{
            this.getAll().then().catch()
        }, 60 * 1000)

        return new  Promise( (resolve, reject) => {

            glob('./Tokens/*',  (err, files) => {
                if (err) {
                    reject('Glob is stuck');
                    console.error(err)

                }
                let result = []
                forEach(files,  async (token) => {
                    await this.getByIdFirst(
                        token.replace('./Tokens/', '')
                    ).then(a => {
                        result.push(a);
                    }).catch((e) => {
                    })
                }).then(r => {
                    this.allTokens = result;
                    resolve(result)
                }).catch(err =>{
                    console.error(err)
                    reject()
                })
            })
        })
    }
}