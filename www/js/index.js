

function nextpagshScoree(x,y) {
    // alert(x+" "+y);
    $(x).hide();
    $(y).show();
}


// // random bg
function randombg(){
  var bigSize = ["url('img/bgIncorrent1.gif')",
                 "url('img/bgIncorrent2.gif')"];
   var randomb= Math.floor(Math.random() * 2) + 0;
   document.getElementById("random").style.backgroundImage=bigSize[randomb];
}


//random divRandom() page

// function divRandom(){
//  var divtag = $(".page");
//  if (divtag.length) {
//      var display = Math.floor(Math.random()*divtag.length);
//      for (var i = 0 ; i < 5 ; i++){
//          if (i == display) {
//              $(divtag[i]).show();
//          }
//      }
//  }
// }

// random array
//function ranDom(){

    var number=0;
    var reply='';
    var sbreply1='';
    var sbreply2='';
    var t=0;
    var f=0;

    function getScore(){
        document.getElementById('shScore').innerHTML = localStorage.getItem("correct");
    }

    function getshScoreinco(){
         document.getElementById('shScorein').innerHTML = localStorage.getItem("incorrect");
    }

    function clrscore(){
        localStorage.setItem("correct",0);
    }

    function clrinco(){
        localStorage.setItem("incorrect",0);
    }

    function check(){
        if(sbreply1 === reply){
            var btnmusic = new Audio('Sound.mp3');
            btnmusic.play();
            t++;
            localStorage.setItem("correct", t);
        }else
        {
            var btnmusic = new Audio('Sound.mp3');
            btnmusic.play();

            f++;
            localStorage.setItem("incorrect", f);
     
             swal({
                icon: "img/bgIncorrent1.gif",
                button: "Continue >>",
                });
        }
        if(number == 20){
            window.location = "score.html";
        }
    }

    function check1(){
        if(sbreply2 === reply){
            var btnmusic = new Audio('Sound.mp3');
            btnmusic.play();
            t++;
            localStorage.setItem("correct", t);
        }else
        {
            var btnmusic = new Audio('Sound.mp3');
            btnmusic.play();

            f++;
            localStorage.setItem("incorrect", f);

             swal({
                icon: "img/bgIncorrent2.gif",
                button: "Continue >>",
                });
        }

        if(number == 20){
            window.location = "score.html";
        }
    }

    function clear(){
        t=0;
        localStorage.setItem("correct",t);
    }

var Keywords = [
                {img1:"img/easy/animals/1ant.png",img2:"img/easy/animals/2butterfly.png",ans1:"Ant",ans2:"Butterfly",ans:"Ant",no:0}, 
                {img1:"img/easy/animals/3bee.png",img2:"img/easy/animals/4cow.png",ans1:"Bee",ans2:"Cow",ans:"Cow",no:0}, 
                {img1:"img/easy/animals/5pig.png",img2:"img/easy/animals/6elephant.png",ans1:"Pig",ans2:"Elephant",ans:"Elephant",no:0}, 
                {img1:"img/easy/animals/7zebra.png",img2:"img/easy/animals/8penguin.png",ans1:"Zebra",ans2:"Penguin",ans:"Zebra",no:0},
                {img1:"img/easy/animals/9giraffe.png",img2:"img/easy/animals/10hippopotamus.png",ans1:"Giraffe",ans2:"Hippopotamus",ans:"Giraffe",no:0},
                {img1:"img/easy/animals/11lion.png",img2:"img/easy/animals/12chicken.png",ans1:"Lion",ans2:"Chicken",ans:"Lion",no:0},
                {img1:"img/easy/animals/13bear.png",img2:"img/easy/animals/14rabbit.png",ans1:"Bear",ans2:"Rabbit",ans:"Rabbit",no:0},
                {img1:"img/easy/animals/15deer.png",img2:"img/easy/animals/6elephant.png",ans1:"Deer",ans2:"Elephant",ans:"Deer",no:0},
                {img1:"img/easy/animals/16tiger.png",img2:"img/easy/animals/5pig.png",ans1:"Tiger",ans2:"Pig",ans:"Tiger",no:0},
                {img1:"img/easy/animals/18cat.png",img2:"img/easy/animals/17Dog.png",ans1:"Cat",ans2:"Dog",ans:"Dog",no:0},
                {img1:"img/easy/animals/19crocodile.png",img2:"img/easy/animals/20monkey.png",ans1:"Crocodile",ans2:"Monkey",ans:"Monkey",no:0},
                {img1:"img/easy/animals/8penguin.png",img2:"img/easy/animals/2butterfly.png",ans1:"Penguin",ans2:"Chicken",ans:"Penguin",no:0},
                {img1:"img/easy/animals/1ant.png",img2:"img/easy/animals/3bee.png",ans1:"Ant",ans2:"Bee",ans:"Bee",no:0},
                {img1:"img/easy/animals/12chicken.png",img2:"img/easy/animals/4cow.png",ans1:"Chicken",ans2:"Cow",ans:"Chicken",no:0},
                {img1:"img/easy/animals/16tiger.png",img2:"img/easy/animals/18cat.png",ans1:"Tiger",ans2:"Cat",ans:"Cat",no:0},
                {img1:"img/easy/animals/13bear.png",img2:"img/easy/animals/17Dog.png",ans1:"Bear",ans2:"Dog",ans:"Bear",no:0},
                {img1:"img/easy/animals/10hippopotamus.png",img2:"img/easy/animals/19crocodile.png",ans1:"Hippopotamus",ans2:"Crocodile",ans:"Crocodile",no:0},
                {img1:"img/easy/animals/20monkey.png",img2:"img/easy/animals/5pig.png",ans1:"Monkey",ans2:"Pig",ans:"Pig",no:0},
                {img1:"img/easy/animals/2butterfly.png",img2:"img/easy/animals/7zebra.png",ans1:"Butterfly",ans2:"Zebra",ans:"Butterfly",no:0},
                {img1:"img/easy/animals/15deer.png",img2:"img/easy/animals/9giraffe.png",ans1:"Deer",ans2:"Giraffe",ans:"Giraffe",no:0}
                ];


                
function imgRandom(){
    number++;
    for(var i = 0 ; i<100; i++){

            // var result = Math.floor((Math.random()*(20)+0));
            var result = Math.floor(Math.random()*(Keywords.length));

            //document.getElementById("ran").innerHTML = result;
            if(Keywords[result].no == 0){
                    Keywords[result].no = 1;
                    document.getElementById("img1").src = Keywords[result].img1;
                    document.getElementById('img2').src = Keywords[result].img2;

                    document.getElementById('answer').innerHTML = Keywords[result].ans; //resule ค่าสุ่ม
                    reply=Keywords[result].ans;
                    sbreply1=Keywords[result].ans1;
                    sbreply2=Keywords[result].ans2;

                    console.log('true ' + t);
                    console.log('false ' + f);
                    break;      
        }
    }
}


/*show number*/
function getNumber(){
    document.getElementById('number1').innerHTML = number;
}

