const express = require('express');

const app = express();

app.get('/', (_, res) => {

    const obj = {
        name : 'Kamrul Hasan',
        email: 'sayma@gmail.com'
    }

    res.json(obj);
});

app.listen(4000, () =>{
    console.log('I am listening on port 4000');
});

