const stripe = require('stripe')('STRIPE_KEY');

const fs = require('fs');
const express = require('express');
const compression = require('compression');
const app = express();
const {MongoClient} = require('mongodb');
const prompt = require("prompt-sync")({ sigint: true });
app.use(express.static(__dirname + '/'));
const cookieParser = require('cookie-parser');
const { time } = require('console');
const { setMaxIdleHTTPParsers } = require('http');
var https = require('https');
var http = require('http');

app.use(compression());
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const readline = require("readline");
const { exit } = require('process');

app.use(express.raw())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

/*
var options = {
  key: fs.readFileSync('/etc/ssl/private/private.key'),
  cert: fs.readFileSync('/etc/ssl/certs/certificate.crt'),
  ca: fs.readFileSync('/etc/ssl/certs/ca_bundle.crt')
};
*/

app.post('/', (req, res) => {




});


console.log("new")


/********** */










app.post('/market_av', (req, res) => {

  function readFiles8(dirname, onFileContent, onError) {
    fs.readdir(dirname, function(err, filenames) {
      if (err) {
        onError(err);
        return;
      }
      filenames.forEach(function(filename) {
        fs.readFile(dirname + filename, 'utf-8', function(err, content) {
          if (err) {
            onError(err);
            return;
          }
          onFileContent(filename, content);
        });
      });
    });
  }


  fs.readdir('tickers_2days/tickers', (error, files) => { 
    var top_av = 0;
    var top_c = 0;
    var fi = 0;
    let totalFiles = files.length; // return the number of files
    readFiles8('tickers_2days/tickers/',function(filename, content) {
      if (filename.toString().includes("sent_")){
        top_av += parseFloat(content)
        top_c += 1
      }
      fi += 1
      if(fi == 500){
        res.send({"mav": top_av/top_c})
      }
    }, function(err) {
      throw err;
    });

  });
});












/********* */






app.post('/gi', (req, res) => {



  var files = fs.readdirSync('tickers_2days/tickers');
  var files2d = []
  var filecaps = []
  var top_sent2d = []
  
  ////console.log(files.length)
  var e2 = 0
  var di2 = 0

  file_ranks = []
  top_sent2d = []

  for(di = 0;di < files.length;di++){
          di2 += 1
          if (files[di] == undefined){
              break
          }
          else{
                  try{
                      files2d.push(files[di].replace(".txt", ""))
                      const data = fs.readFileSync(`tickers_2days/tickers/sent_${files[di]}`, 'utf8');
                  
                      file_ranks.push({key: files[di].replace(".txt", ""), value: parseFloat(data)})
                      
                  }
                  catch{
                      var e2 = 1
                  }
          }
          
      
  }

  var items = Object.keys(file_ranks).map(
    (key) => { return [key, file_ranks[key]] });
  
  // Step - 2
  // Sort the array based on the second element (i.e. the value)

  items.sort(
    (first, second) => { return second[1].value - first[1].value }
  );
  // Step - 3
  // Obtain the list of keys in sorted order of the values.
  var keys = items.map(
    (e) => { return e[1] });
  

  //console.log(items)
  top_sent2d_dict = top_sent2d
  top_sent2d = []
  for (var ti = 0; ti < keys.length; ti++){
    top_sent2d.push(keys[ti].key)
  }
  //console.log(top_sent2d);
  bottom_sent2d = top_sent2d.slice(top_sent2d.length-59, top_sent2d.length-1)
  top_sent2d = top_sent2d.slice(0, 59)
  ////console.log(top_sent2d)
  bottom_sent2d = bottom_sent2d.reverse()
  
  

  /*********** */




  var files = fs.readdirSync('tickers_2days/tickers');
  var files2d = []

  ////console.log(files.length)

  for(di = 0;di < 500;di++){
      if (files[di].includes('sent_')){
          var tv1 = 0
      }
      else{
          files2d.push(files[di].replace(".txt", ""))
      }
  }



  let rb = JSON.parse((req.body).toString('utf8'))
  //console.log("searching")
  var { cv, uid, cs } = rb;
  global.cv = cv
  global.uid = uid
  global.cs = cs



  if (cs == false){
    async function signup(uidv) {
      var uri = "mongodb+srv://Matt_Nikonorov:Zs64GU5Qn2UhGFDG@cluster0.xihqakg.mongodb.net/?retryWrites=true&w=majority"
      var client = new MongoClient(uri);
      try {
          await client.connect();
      
      } catch (e) {
          console.error(e);
      }
  
      var database = client.db("db0");
      var mdb = database.collection("cl0");
  
      var doc = {
        iden: uidv,
        custom: ["nothing yet"],
        plt: Date.now()
      }
      var result = await mdb.insertOne(doc);
  
      await client.close();
  
    }
    async function dsv(uidv){
        var uri = "mongodb+srv://Matt_Nikonorov:Zs64GU5Qn2UhGFDG@cluster0.xihqakg.mongodb.net/?retryWrites=true&w=majority"
        var client = new MongoClient(uri);
        try {
            await client.connect();
        
        } catch (e) {
            console.error(e);
        }

        function sleep(ms) {
            return new Promise((resolve) => {
              setTimeout(resolve, ms);
            });
        }

        var database = client.db("db0");
        var mdb = database.collection("cl0");
        var query = { iden: uidv };
        var usersi = await mdb.findOne(query);
        ////console.log(usersi)
        if (usersi == null){
            signup(uidv)
            ////console.log("stuff")
            await sleep(5000);
        }

        var uri = "mongodb+srv://Matt_Nikonorov:Zs64GU5Qn2UhGFDG@cluster0.xihqakg.mongodb.net/?retryWrites=true&w=majority"
        var client = new MongoClient(uri);
        var database = client.db("db0");
        var mdb = database.collection("cl0");
        var query = { iden: uidv };
        var usersi = await mdb.findOne(query);
        ////console.log(`weird sh: ${usersi.custom}`)
        ////console.log(uidv)
      
        const stream = fs.createReadStream("stocks.csv");
        const rl = readline.createInterface({ input: stream });
        let sent_data = [];

        rl.on("line", (row) => {
            sent_data.push(row.split(","));
        });
        
        
        rl.on("close", () => {
            topti = []
            var rdi = 0
            for(var di = 1;di<500;di++){
                rdi += 1
                ////console.log(`DI${di}`)
                sel = sent_data[di][2]
                sel = sel.split(".")
                if(sel.length == 1){
                  if (sel[0].toLowerCase().replace(`"`, ``).replace(`"`, ``) == "brk-b"){
                    topti.push("BRK")
                  }
                  else{
                    topti.push(sel[0].toUpperCase().replace(`"`, ``).replace(`"`, ``))
                  }
                }
                else{
                  //console.log(sent_data[di][2])
                  e2 = 1
                }
            }
            if(usersi.sub_ref != undefined){
              var subscription = stripe.subscriptions.retrieve(
                usersi.sub_ref
              );
              subscription.then((value) => {
                //console.log(value.status)
                  if (value.status == "active"){
                    //console.log(value.items.data[0].price.metadata.iden_sub)
                    sub_stat = value.items.data[0].price.metadata.iden_sub
                    //console.log("ACTIVE SUB||ACTIVE SUB||ACTIVE SUB||ACTIVE SUB||ACTIVE SUB")
                  }
                  else{
                    sub_stat = "none"
                  }

                  pcv = { "top2d": top_sent2d, "bottom2d": bottom_sent2d, "files2d": topti, "vd": usersi.custom, "status": sub_stat, "tickers": topti}
                  ////console.log(`fetched INDS: ${pcv.inds}`)
                  res.send(pcv);
              });
            }
            else {
              pcv = { "top2d": top_sent2d, "bottom2d": bottom_sent2d, "files2d": topti, "vd": usersi.custom, "status": "none", "tickers": topti}
              ////console.log(`fetched INDS: ${pcv.inds}`)
              res.send(pcv);
            }
        });


        var secdata = [];
        var secnames = [];
        var secdata2 = [];
        var secnames2 = [];


        await client.close();
    }
    dsv(uid)
  }
});


















app.post('/testf', (req, res) => {



  async function cvi(cvp, uidv) {
    var uri = "mongodb+srv://Matt_Nikonorov:Zs64GU5Qn2UhGFDG@cluster0.xihqakg.mongodb.net/?retryWrites=true&w=majority"
    var client = new MongoClient(uri);
    try {
        await client.connect();
    
    } catch (e) {
        console.error(e);
    }

    var database = client.db("db0");
    var mdb = database.collection("cl0");
    var query = { iden: uidv };
    var usersi = await mdb.findOne(query);
    
    usc = usersi.custom

    //console.log(usc)

    usc.push(cvp)

    var query2 = {
      $set: {
        custom: usc,
      },
    };
    var result = await mdb.updateOne(query, query2)

    await client.close();
  }




  async function signin(cvp, uidv) {
    var uri = "mongodb+srv://Matt_Nikonorov:Zs64GU5Qn2UhGFDG@cluster0.xihqakg.mongodb.net/?retryWrites=true&w=majority"
    var client = new MongoClient(uri);
    try {
        await client.connect();
    
    } catch (e) {
        console.error(e);
    }

    var dos = true

    var database = client.db("db0");
    var mdb = database.collection("cl0");
    var query = { iden: uidv };
    var usersi = await mdb.findOne(query);
    ////console.log(`fetched: ${usersi.custom}`)
    ////console.log("already exists")
    var usersi = await mdb.findOne(query);
    cs1 = usersi.custom
    //console.log(cs1)
    if (cs1.length > 12){
      ////console.log("too many stocks")
      pcv = {"vde":"too many stocks"}
      res.send(pcv)
      var dos = false
    }
    if (cs1.includes(cvp) && cs1.length <= 12){
      pcv = {"vde":"duplicate"}
      res.send(pcv)
      var dos = false
    }
    else if(cs1.includes(cvp) == false && dos){
      cvi(cvp, uidv)
      while (1 > 0){
              if (cvp == cs1[cs1.length - 1]){
                  pcv = {"vd3":usersi.custom}
                  res.send(pcv)
                  cs1 = usersi.custom
                  //////console.log(`custom stuff mane: ${cs1}`)
                  //////console.log(`supposed to: ${cvp}`)
                  break
              }
              else{
                  var usersi = await mdb.findOne(query);
                  cs1 = usersi.custom
                  ////////console.log(`custom stuff mane 222222: ${cs1[cs1.length - 1]}`)
                  ////////console.log(`supposed to 222222: ${cvp}`)
              }
      }
    }

    await client.close();
  }


  let rb = JSON.parse((req.body).toString('utf8'))
  ////console.log("RB")
  ////console.log(rb)
  var { cv, uid, cs } = rb;
  global.cv = cv
  global.uid = uid
  global.cs = cs



  if (cs == true && cv != "check" && cs != "remove"){
    ////console.log("signin stuff2")
    signin(cv, uid)
  }




});













app.post('/remove', (req, res) => {
  let rb = JSON.parse((req.body).toString('utf8'))
  ////console.log("RB2")
  ////console.log(rb)
  var { cv, uid, cs } = rb;
  global.cv = cv
  global.uid = uid
  global.cs = cs




  if (cs == "remove"){
    ////console.log("rererererererererere")
    async function cvi2(cvp, uidv) {
      var uri = "mongodb+srv://Matt_Nikonorov:Zs64GU5Qn2UhGFDG@cluster0.xihqakg.mongodb.net/?retryWrites=true&w=majority"
      var client = new MongoClient(uri);
      try {
          await client.connect();
      
      } catch (e) {
          console.error(e);
      }
  
      var database = client.db("db0");
      var mdb = database.collection("cl0");
      var query = { iden: uidv };
      var usersi = await mdb.findOne(query);
      
      usc = usersi.custom

      usc.splice(usc.indexOf(cvp), 1)

      ////console.log(`USC removed ${usc}`)
  
      var query2 = {
        $set: {
          custom: usc,
        },
      };
      var result = await mdb.updateOne(query, query2)
  
      await client.close();

    }
  
  
  
  
  
    async function signin2(cvp, uidv) {
      var uri = "mongodb+srv://Matt_Nikonorov:Zs64GU5Qn2UhGFDG@cluster0.xihqakg.mongodb.net/?retryWrites=true&w=majority"
      var client = new MongoClient(uri);
      try {
          await client.connect();
      
      } catch (e) {
          console.error(e);
      }
  
      var database = client.db("db0");
      var mdb = database.collection("cl0");
      var query = { iden: uidv };
      var usersi = await mdb.findOne(query);
      //////console.log(`fetched: ${usersi.custom}`)
      //////console.log("already exists")
      cvi2(cvp, uidv)

      function sleep(ms) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      }

      await sleep(4000);

      var usersi = await mdb.findOne(query);
      cs1 = usersi.custom
      while (1 > 0){
                if (cs1.includes(cvp) == false){
                    pcv = {"vd2":usersi.custom}
                    res.send(pcv)
                    cs1 = usersi.custom
                    ////console.log(`no more: ${cs1}`)
                    ////////console.log(`supposed to: ${cvp}`)
                    break
                }
                else{
                    var usersi = await mdb.findOne(query);
                    cs1 = usersi.custom
                    ////console.log(`custom stuff mane 222222: ${cs1}`)
                    ////////console.log(`supposed to 222222: ${cvp}`)
                }
        
      }
  
      await client.close();
    }
  
    signin2(cv, uid)
  }




});









app.post('/webhook', express.json({type: 'application/json'}), (request, response) => {


  async function sub(sub_uid, usub, pay_info) {
    var uri = "mongodb+srv://Matt_Nikonorov:Zs64GU5Qn2UhGFDG@cluster0.xihqakg.mongodb.net/?retryWrites=true&w=majority"
    var client = new MongoClient(uri);
    try {
        await client.connect();
    
    } catch (e) {
        console.error(e);
    }

    var database = client.db("db0");
    var mdb = database.collection("cl0");
    var query = { iden: sub_uid };
    var usersi = await mdb.findOne(query);

    var query2 = {
        $set: {
          custom: ["nothing yet"],
          plt: Date.now(),
          plan: usub,
          sub_ref: pay_info
        },
    };
      var result = await mdb.updateOne(query, query2)

    await client.close();
  }


  var endpointSecret = 'whsec_f1050e0ca7e0621efaf271cb3484a044b7fb23be30beb6acef996b2f416e4d1b';

  //var sig = request.headers['stripe-signature'];

  let event;
  
  try {
    event = request.body;
    console.log("EVENT")
    console.log(event)
  }
  catch (err) {
    response.status(400).send(`Webhook Error vgegegege: ${err.message}`);
  }


  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      var paymentIntent = event.data.object;
      //////console.log(paymentIntent)
      break;

    case 'customer.subscription.created':
      var paymentIntent = event.data.object;
      //////console.log(paymentIntent)
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      // Then define and call a method to handle the successful attachment of a PaymentMethod.
      // handlePaymentMethodAttached(paymentMethod);
      break;
    
    case 'checkout.session.completed':

      async function insert_sub(){
        function sleep(ms) {
          return new Promise((resolve) => {
            setTimeout(resolve, ms);
          });
        }
  
        var paymentInfo = event.data.object;
        //console.log(paymentInfo.subscription)

        var subscription = stripe.subscriptions.retrieve(
          paymentInfo.subscription
        );
        subscription.then((value) => {
          var subid = value.id
          var sub_type = value.items.data[0].price.metadata.iden_sub
          //console.log(paymentInfo.subscription)
          sub(paymentInfo.client_reference_id, sub_type, paymentInfo.subscription)
        });
      }
      insert_sub()

      break;

    // ... handle other event types
    default:
      ////console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  response.json({received: true});
});


















app.post('/check', (req, res) => {


  let rb = JSON.parse((req.body).toString('utf8'))
  
  var { uid } = rb;
  async function check_stuff(uidv) {
    var uri = "mongodb+srv://Matt_Nikonorov:Zs64GU5Qn2UhGFDG@cluster0.xihqakg.mongodb.net/?retryWrites=true&w=majority"
    var client = new MongoClient(uri);
    try {
        await client.connect();
    
    } catch (e) {
        console.error(e);
    }

    var database = client.db("db0");
    var mdb = database.collection("cl0");
    var query = { iden: uidv };
    var usersi = await mdb.findOne(query);
    ////console.log(`fetched 2: ${usersi}`)
    ////console.log("already exists 2")

    await client.close();


    if (usersi != null){

      if ( usersi.plan == undefined ){


        pcv = { "status": "exists" }
        res.send(pcv);
  
      }
      else{
        //console.log("user already has subscription 2")
        pcv = { "status": "subed"}
        res.send(pcv);
      }

    }
    else if (usersi == null){
        pcv = { "status": "nothing" }
        res.send(pcv);
    }

  }
  check_stuff(uid)

});




app.post('/sm', (req, res) => {


let rb = JSON.parse((req.body).toString('utf8'))

var { uid } = rb;


async function can_sub(uid) {
  var uri = "mongodb+srv://Matt_Nikonorov:Zs64GU5Qn2UhGFDG@cluster0.xihqakg.mongodb.net/?retryWrites=true&w=majority"
  var client = new MongoClient(uri);
  try {
      await client.connect();
  
  } catch (e) {
      console.error(e);
  }

  var database = client.db("db0");
  var mdb = database.collection("cl0");
  var query = { iden: uid };
  var usersi = await mdb.findOne(query);

  var query2 = {
    $set: {
      plan: "none",
    },
  };
  var result = await mdb.updateOne(query, query2)

  await client.close();
}

can_sub(uid)

res.send({stat: "none"})



});



app.post('/sa', (req, res) => {
  
  let rb = JSON.parse((req.body).toString('utf8'))

  var { lt, uid } = rb;


  async function cplt(lt, uid) {
    var uri = "mongodb+srv://Matt_Nikonorov:Zs64GU5Qn2UhGFDG@cluster0.xihqakg.mongodb.net/?retryWrites=true&w=majority"
    var client = new MongoClient(uri);
    try {
        await client.connect();
    
    } catch (e) {
        console.error(e);
    }

    console.log(uid)

    var database = client.db("db0");
    var mdb = database.collection("cl0");
    var query = { iden: uid };
    var usersi = await mdb.findOne(query);
    console.log(usersi)

    if (usersi == null){
      async function signup(uidv) {
        var uri = "mongodb+srv://Matt_Nikonorov:Zs64GU5Qn2UhGFDG@cluster0.xihqakg.mongodb.net/?retryWrites=true&w=majority"
        var client = new MongoClient(uri);
        try {
            await client.connect();
        
        } catch (e) {
            console.error(e);
        }
    
        var database = client.db("db0");
        var mdb = database.collection("cl0");
    
        var doc = {
          iden: uidv,
          custom: ["nothing yet"],
          plt: Date.now()
        }
        var result = await mdb.insertOne(doc);
    
        await client.close();
    
      }

      signup(uid)

      function sleep(ms) {
          return new Promise((resolve) => {
            setTimeout(resolve, ms);
          });
      }

      await sleep(1000)
    }

    var uri = "mongodb+srv://Matt_Nikonorov:Zs64GU5Qn2UhGFDG@cluster0.xihqakg.mongodb.net/?retryWrites=true&w=majority"
    var client = new MongoClient(uri);
    try {
        await client.connect();
    
    } catch (e) {
        console.error(e);
    }

    var database = client.db("db0");
    var mdb = database.collection("cl0");
    var query = { iden: uid };
    var usersi = await mdb.findOne(query);
    console.log(usersi)

    function sleep(ms) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
    }

    for (var i1 = 0; i1 < 10; i1++){

      try{

        if (usersi.plt == undefined){
          usersi.insert({"plt": lt})
        }
        if(usersi.sub_ref != undefined){
          var subscription = stripe.subscriptions.retrieve(
            usersi.sub_ref
          );
          subscription.then((value) => {
              console.log(value)
              if (value.status == "active" || value.status == 'trialing'){
                //console.log(value.items.data[0].price.metadata.iden_sub)
                sub_stat = value.items.data[0].price.metadata.iden_sub
                console.log(sub_stat)
                console.log("ACTIVE SUB||ACTIVE SUB||ACTIVE SUB||ACTIVE SUB||ACTIVE SUB")
              }
              else{
                console.log("not active")
                sub_stat = "none"
              }

              res.send({"plt": usersi.plt, "plan": sub_stat})
          });
        }
        else {
          console.log("NO SUB")
          res.send({"plt": usersi.plt, "plan": "none"})
        }

        
        var query2 = {
          $set: {
            plt: lt,
          },
        };
        var result = await mdb.updateOne(query, query2)

        break

      }

      catch{
        await sleep(1000)
        console.log("sleeping")
      }

    }
    

    await client.close();
    
  }

  cplt(lt, uid)

})
  

// https.createServer(options, app).listen(443);

http.createServer(app).listen(80);
