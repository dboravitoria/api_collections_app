const express = require('express')
const api = express()
const port = 3000
const chalk = require('chalk')

api.get('/', (req,res)=>{
    console.log('Hello, World!')
})

api.listen(port, ()=>{
    console.log(chalk.italic.bold.cyan(`Servidor rodando em http://localhost:${port}`))
})