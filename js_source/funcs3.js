function get_stuff1(cv){

    document.getElementById('sr').style.display = "none";

    uid = window.uid;

    cs = true
    fetch('/testf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream',
      },
      body: JSON.stringify({
        cv,
        uid,
        cs
      }),
    })
    .then((res) => {
        return res.json();
    })
    .then(function dvf(data){
      cs2 = data.vd3
      ////console.log(`CS2: ${cs2}`)
      if (data.vde == "too many stocks"){
        document.getElementById("em1").style.display = "block"
        document.getElementById("rwc").style.display = "block"
        document.getElementById("em1").innerHTML = "Too many stocks for your current subscription" + document.getElementById("em1").innerHTML
      }
      else{
        cs2 = data.vd3
        if(data.vde == "duplicate"){
          document.getElementById("em1").style.display = "block"
          document.getElementById("rwc").style.display = "block"
          document.getElementById("em1").innerHTML = "Duplicate Stock" + document.getElementById("em1").innerHTML
        }
        else{
          if (cs2[cs2.length-1] != "nothing yet"){
                //console.log(`di20 ${cs2[cs2.length-1]}`)
                loadis2(cs2.length-1, cs2[cs2.length-1])
          }
        }
      }
      document.getElementById("sr").innerHTML = ""
      document.getElementById("asfid").style.display = "none"
      document.getElementById("contf").style.display = "none"
    }
    );
    //document.getElementById('sr').style.display = "block";
}


function rwm1(){
  document.getElementById("em1").style.display = "none"
  document.getElementById("rwc").style.display = "none"
  document.getElementById("em1").innerHTML = `<button id="rwc" onclick="rwm1()">&#10006;</button>`
}



function get_stuff2(){
    uid = window.uid;
    var cv = document
      .querySelector('#cv').value.toUpperCase();

    console.log(cv)
    cs = false
    fetch('/gi', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer abcdxyz',
        'Content-Type': 'application/octet-stream',
      },
      body: JSON.stringify({
        cv,
        uid,
        cs
      }),
    })
    .then((res) => {
        return res.json();
    })
    .then(function dvf(data){
      if (data.files2d.length > 10){
        window.sf = data.files2d
        //console.log(window.sf.length)
        var stockl = window.sf
        var matches = []
        var matches2 = []
        var input = String(document.querySelector('#cv').value.toUpperCase())
        for(r = 0; r < stockl.length; r++){
            //console.log(parseInt(stockl[r].indexOf(input))+2)
            if(input == stockl[r]){
              matches.push(1)
              matches2.push(stockl[r])
            }
            else if(parseInt(stockl[r].indexOf(input))+2 > 1){
                matches.push(parseInt(stockl[r].indexOf(input))+2)
                matches2.push(stockl[r])
            }
        }
        matches2.sort((a, b) => matches.indexOf(b) - matches.indexOf(a));
        matches2 = matches2.reverse()
        //console.log(matches2);
        vos = `<div class='sr' id="sr">`
        for (sr = 0;sr < matches.length;sr++){
          vos += `<div class='re' onclick="get_stuff1('${matches2[sr]}')">${matches2[sr].toUpperCase()}</div>`
        }
        vos += `</div>`
        document.getElementById("contf").style.position = "sticky"
        document.getElementById("contf").innerHTML = vos
      }
    }
    );
}



function add_stock(){

  if (document.getElementById("asfid").style.display == "block"){
    document.getElementById("asfid").style.display = "none"
    document.getElementById("contf").style.display = "none"
  }
  else{
    document.getElementById("asfid").style.display = "block"
    document.getElementById("contf").style.display = "block"
    document.getElementById('cv')
      .addEventListener('input', (e) => {
        //console.log("INPUT DETECTED")
        get_stuff2()
      });

  }

}

var rv = true

function remove_stock(){
  if (rv){
    var cols = document.getElementsByClassName('rsb');
    for(i = 0; i < cols.length; i++) {
        cols[i].style.display = 'inline-block';
        
    }
    var cols = document.getElementsByClassName('popcu');
    for(i = 0; i < cols.length; i++) {
        cols[i].style.display = 'none';
        
    }
    var cols = document.getElementsByClassName('dnbcu50');
    for(i = 0; i < cols.length; i++) {
        cols[i].style.display = 'none';
    }
    rv = false
  }
  else{
    var cols = document.getElementsByClassName('rsb');
    for(i = 0; i < cols.length; i++) {
        cols[i].style.display = 'none';
        
    }
    if (window.innerWidth <= 950) {
      var cols = document.getElementsByClassName('popcu');
      for(i = 0; i < cols.length; i++) {
          cols[i].style.display = 'block';
      }
    }
    else{
      var cols = document.getElementsByClassName('popcu');
      for(i = 0; i < cols.length; i++) {
          cols[i].style.display = 'inline-block';
      }
    }
    var cols = document.getElementsByClassName('dnbcu50');
    for(i = 0; i < cols.length; i++) {
        cols[i].style.display = 'inline-block';
    }
    rv = true
  }

}


function remove_this(stock_name, ind){
    uid = window.uid;
    const cv = stock_name

    var cel = document.getElementById(`contcu${ind}`);
    cel.remove();
    var cel2 = document.getElementById(`hrc${ind}`);
    cel2.remove();

    //console.log(`UID remove this: ${uid}`)
    cs = "remove"
    fetch('/remove', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer abcdxyz',
        'Content-Type': 'application/octet-stream',
      },
      body: JSON.stringify({
        cv,
        uid,
        cs
      }),
    })
    .then((res) => {
        return res.json();
    })
    .then(function dvf(data){
      //console.log(`REMOVED: ${data.vd2}`)
      var cs2 = data.vd2.split(",")
      for (var di = 1;di < 13;di++){
        if (cs2[di] != "nothing yet"){
          ////console.log(`di ${cs2[di]}`)
          loadis2(di, cs2[di])
        }
      }
    }
    );
}


