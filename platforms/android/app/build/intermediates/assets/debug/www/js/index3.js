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
                button: "Next >>",
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
                {img1:"img/easy/sport/1basketball.png",img2:"img/easy/sport/2Football.png",ans1:"Basketball",ans2:"Football",ans:"Basketball",no:0}, 
                {img1:"img/easy/sport/3Cycling.png",img2:"img/easy/sport/4Running.png",ans1:"Cycling",ans2:"Running",ans:"Running",no:0}, 
                {img1:"img/easy/sport/5karate.png",img2:"img/easy/sport/6volleyball.png",ans1:"Karate",ans2:"Volleyball",ans:"Karate",no:0}, 
                {img1:"img/easy/sport/7badminton.png",img2:"img/easy/sport/8Tabletennis.png",ans1:"Badminton",ans2:"Table tennis",ans:"Table tennis",no:0},
                {img1:"img/easy/sport/9baseball.png",img2:"img/easy/sport/10weight-lifting.png",ans1:"Baseball",ans2:"Weight-lifting",ans:"Weight-lifting",no:0},
                {img1:"img/easy/sport/11rugby.png",img2:"img/easy/sport/12tennis.png",ans1:"Rugby",ans2:"Tennis",ans:"Rugby",no:0},

                {img1:"img/easy/sport/13golf.png",img2:"img/easy/sport/14swimming.png",ans1:"Golf",ans2:"Swimming",ans:"Golf",no:0},
                {img1:"img/easy/sport/15yoga.png",img2:"img/easy/sport/16fencing.png",ans1:"Yoga",ans2:"Fencing",ans:"Fencing",no:0},
                {img1:"img/easy/sport/17skiing.png",img2:"img/easy/sport/20hockey.png",ans1:"Skiing",ans2:"Hockey",ans:"Skiing",no:0},
                {img1:"img/easy/sport/19boxing.png",img2:"img/easy/sport/4Running.png",ans1:"Boxing",ans2:"Running",ans:"Boxing",no:0},
                {img1:"img/easy/sport/2Football.png",img2:"img/easy/sport/9baseball.png",ans1:"Football",ans2:"Baseball",ans:"Football",no:0},
                {img1:"img/easy/sport/10weight-lifting.png",img2:"img/easy/sport/16fencing.png",ans1:"Weight-lifting",ans2:"Fencing",ans:"Weight-lifting",no:0},

                {img1:"img/easy/sport/15yoga.png",img2:"img/easy/sport/18gymnastics.png",ans1:"Yoga",ans2:"Gymnastics",ans:"Yoga",no:0},
                {img1:"img/easy/sport/11rugby.png",img2:"img/easy/sport/20hockey.png",ans1:"Rugby",ans2:"Hockey",ans:"Hockey",no:0},
                {img1:"img/easy/sport/14swimming.png",img2:"img/easy/sport/4Running.png",ans1:"Swimming",ans2:"Running",ans:"Swimming",no:0},
                {img1:"img/easy/sport/9baseball.png",img2:"img/easy/sport/17skiing.png",ans1:"Baseball",ans2:"Skiing",ans:"Baseball",no:0},
                {img1:"img/easy/sport/12tennis.png",img2:"img/easy/sport/16fencing.png",ans1:"Tennis",ans2:"Fencing",ans:"Tennis",no:0},
                {img1:"img/easy/sport/13golf.png",img2:"img/easy/sport/7badminton.png",ans1:"Golf",ans2:"Badminton",ans:"Badminton",no:0},
                {img1:"img/easy/sport/6volleyball.png",img2:"img/easy/sport/1basketball.png",ans1:"Volleyball",ans2:"Basketball",ans:"Volleyball",no:0},
                {img1:"img/easy/sport/3Cycling.png",img2:"img/easy/sport/1basketball.png",ans1:"Cycling",ans2:"Basketball",ans:"Cycling",no:0}
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

