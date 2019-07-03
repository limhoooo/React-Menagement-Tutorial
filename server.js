const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello', (req,res)=>{
    res.send({message:'Hello Express!'});
});

app.get('/api/customers', (req,res)=>{
    res.send([
        {
        'id':1,
        'image':'https://placeimg.com/64/64/1',
        'name' :'임호동',
        'birthday':'19941108',
        'gender':'man',
        'job':'백수1'
      },
      {
        'id':2,
        'image':'https://placeimg.com/64/64/2',
        'name' :'김하이',
        'birthday':'19941108',
        'gender':'man',
        'job':'백수2'
      },
      {
        'id':3,
        'image':'https://placeimg.com/64/64/3',
        'name' :'박바이',
        'birthday':'19941108',
        'gender':'man',
        'job':'백수3'
      },
      ])
})

app.listen(port,()=>console.log(`Listening on port ${port}`))
