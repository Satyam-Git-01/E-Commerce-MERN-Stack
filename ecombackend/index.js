const express = require("express");
const app = express();

app.listen(5002, () => {
  console.log(`Server is Listeing on PORT 5002`);
});

app.get('/',(request,response)=>{
    return response.send('Get API')
})
