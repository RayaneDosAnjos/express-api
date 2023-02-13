const express = require('express')
const app = express()

const data = require('./to-do');



app.get(
    
    
    
    '/todo',
    
    function (req, res) {

    res.send(data)
}


)


app.post('/todo', express.json(), function (req, res) {


    var a = true;

    for (var item of data) {

        item = {
            id: 2,
            name: 'Fazer arroz',
            status: false
        }


        if (item.id == req.body.id) {
            a = false;
        }
    }



    if (a) {
        data.push(req.body)


        res.send(data)


    } else {

        res.status(403).send('[ERRO]Esse item ja foi adicionado')
    }




})


app.put("/todo", express.json(), function (req, res) {

    var a = false;

    for (var item of data) {




        if (item.id == req.body.id) {
            a = true;

            item.name = req.body.name;
            item.status = req.body.status;

        }
    }

    if (a) {
        res.status(200).send('item atualizado com sucesso')

        console.log(data)


    } else {
        res.status(404).send('[ERRO] Item não encontrado')
    }

})
app.delete('/todo/:id', express.json(), function (req, res) {

    a = false;
    var c = 0;

    for (var item of data) {


      

        if (item.id == req.params.id) {
            a = true;

           data =  data.slice(c,0)

        }   

        c++;
    }

    if (a) {
        res.status(200).send('item apagado com sucesso')

        console.log(data)


    } else {
        res.status(404).send('[ERRO] Item não encontrado')
    }

})

app.listen(3000, function () { console.log('Running in port 3000') })

