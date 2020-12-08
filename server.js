var express = require('express');
var cors = require('cors');
const app = express();
const multer = require('multer')
const bodyParser = require('body-parser')
require('dotenv').config()
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});
const upload = multer({dest:'uploads/'});


// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json);




app.post('/api/fileanalyse',upload.any(),(req,res)=>{
  console.log('no');
  try{
    let send = {name:req.files[0].originalname,type:req.files[0].mimetype,size:req.files[0].size};
    res.json(send);
    console.log('hello there'+req)
  }catch(err){
    res.send(err);
    console.log('no here'+err);
  }
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
