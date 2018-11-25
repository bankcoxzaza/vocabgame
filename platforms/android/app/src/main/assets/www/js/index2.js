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
                {img1:"img/easy/fruit/1Orange.png",img2:"img/easy/fruit/2melon.png",ans1:"Orange",ans2:"Melon",ans:"Melon",no:0}, 
                {img1:"img/easy/fruit/3strawberry.png",img2:"img/easy/fruit/4kiwi.png",ans1:"Strawberry",ans2:"Kiwi",ans:"Strawberry",no:0}, 
                {img1:"img/easy/fruit/5apple.png",img2:"img/easy/fruit/6mangosteen.png",ans1:"Apple",ans2:"Mangosteen",ans:"Apple",no:0}, 
                {img1:"img/easy/fruit/7watermelon.png",img2:"img/easy/fruit/8coconut.png",ans1:"Watermelon",ans2:"Coconut",ans:"Coconut",no:0},
                {img1:"img/easy/fruit/9banana.png",img2:"img/easy/fruit/10grape.png",ans1:"Banana",ans2:"Grape",ans:"Banana",no:0},
                {img1:"img/easy/fruit/11cherry.png",img2:"img/easy/fruit/12pineapple.png",ans1:"Cherry",ans2:"Pineapple",ans:"Pineapple",no:0},

                {img1:"img/easy/fruit/13papaya.png",img2:"img/easy/fruit/14pomegranate.png",ans1:"papaya",ans2:"pomegranate",ans:"pomegranate",no:0},
                {img1:"img/easy/fruit/16Plum.png",img2:"img/easy/fruit/15DragonFruit.png",ans1:"Plum",ans2:"DragonFruit",ans:"DragonFruit",no:0},
                {img1:"img/easy/fruit/18Avocado.png",img2:"img/easy/fruit/4kiwi.png",ans1:"Avocado",ans2:"Kiwi",ans:"Avocado",no:0},
                {img1:"img/easy/fruit/19mango.png",img2:"img/easy/fruit/20Pear.png",ans1:"Mango",ans2:"Pear",ans:"Pear",no:0},
                {img1:"img/easy/fruit/10grape.png",img2:"img/easy/fruit/19mango.png",ans1:"Grape",ans2:"Mango",ans:"Mango",no:0},
                {img1:"img/easy/fruit/7watermelon.png",img2:"img/easy/fruit/5apple.png",ans1:"Watermelon",ans2:"Apple",ans:"Watermelon",no:0},

                {img1:"img/easy/fruit/17durian.png",img2:"img/easy/fruit/18Avocado.png",ans1:"Durian",ans2:"Avocado",ans:"Durian",no:0},
                {img1:"img/easy/fruit/21rambutan.png",img2:"img/easy/fruit/17durian.png",ans1:"Rambutan",ans2:"Durian",ans:"Rambutan",no:0},
                {img1:"img/easy/fruit/14pomegranate.png",img2:"img/easy/fruit/16Plum.png",ans1:"Pomegranate",ans2:"Plum",ans:"Plum",no:0},
                {img1:"img/easy/fruit/3strawberry.png",img2:"img/easy/fruit/11cherry.png",ans1:"Strawberry",ans2:"Cherry",ans:"Cherry",no:0},
                {img1:"img/easy/fruit/12pineapple.png",img2:"img/easy/fruit/13papaya.png",ans1:"Pineapple",ans2:"Papaya",ans:"Papaya",no:0},
                {img1:"img/easy/fruit/9banana.png",img2:"img/easy/fruit/6mangosteen.png",ans1:"Banana",ans2:"Mangosteen",ans:"Mangosteen",no:0},
                {img1:"img/easy/fruit/4kiwi.png",img2:"img/easy/fruit/16Plum.png",ans1:"Kiwi",ans2:"Plum",ans:"Kiwi",no:0},
                {img1:"img/easy/fruit/3strawberry.png",img2:"img/easy/fruit/1Orange.png",ans1:"Strawberry",ans2:"Orange",ans:"Orange",no:0}
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
