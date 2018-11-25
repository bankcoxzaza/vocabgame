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
                button: "Next >>",
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
                {img1:"img/easy/equipment/1scissors.png",img2:"img/easy/equipment/2pencil.png",ans1:"Scissors",ans2:"Pencil",ans:"Pencil",no:0}, 
                {img1:"img/easy/equipment/3sharpener.png",img2:"img/easy/equipment/4eraser.png",ans1:"Sharpener",ans2:"Eraser",ans:"Sharpener",no:0}, 
                {img1:"img/easy/equipment/5ruler.png",img2:"img/easy/equipment/6table.png",ans1:"Ruler",ans2:"Table",ans:"Table",no:0}, 
                {img1:"img/easy/equipment/7chair.png",img2:"img/easy/equipment/8book.png",ans1:"Chair",ans2:"Book",ans:"Book",no:0},
                {img1:"img/easy/equipment/9Calendar.png",img2:"img/easy/equipment/10pen.png",ans1:"Calendar",ans2:"Pen",ans:"Pen",no:0},
                {img1:"img/easy/equipment/11notebook.png",img2:"img/easy/equipment/8book.png",ans1:"Notebook",ans2:"Book",ans:"Notebook",no:0},

                {img1:"img/easy/equipment/12schoolbag.png",img2:"img/easy/equipment/13globe.png",ans1:"Schoolbag",ans2:"Globe",ans:"Schoolbag",no:0},
                {img1:"img/easy/equipment/14Telephone.png",img2:"img/easy/equipment/15computer.png",ans1:"Telephone",ans2:"Computer",ans:"Computer",no:0},
                {img1:"img/easy/equipment/17clock.png",img2:"img/easy/equipment/18crayon.png",ans1:"Clock",ans2:"Crayon",ans:"Crayon",no:0},
                {img1:"img/easy/equipment/19glue.png",img2:"img/easy/equipment/20watercolour.png",ans1:"Glue",ans2:"Watercolour",ans:"Glue",no:0},
                {img1:"img/easy/equipment/6table.png",img2:"img/easy/equipment/9Calendar.png",ans1:"Table",ans2:"Calendar",ans:"Calendar",no:0},
                {img1:"img/easy/equipment/2pencil.png",img2:"img/easy/equipment/10pen.png",ans1:"Pencil",ans2:"Pen",ans:"Pen",no:0},

                {img1:"img/easy/equipment/16blackboard.png",img2:"img/easy/equipment/9Calendar.png",ans1:"Blackboard",ans2:"Calendar",ans:"Blackboard",no:0},
                {img1:"img/easy/equipment/20watercolour.png",img2:"img/easy/equipment/10pen.png",ans1:"Watercolour",ans2:"Pen",ans:"Watercolour",no:0},
                {img1:"img/easy/equipment/19glue.png",img2:"img/easy/equipment/17clock.png",ans1:"Glue",ans2:"Clock",ans:"Clock",no:0},
                {img1:"img/easy/equipment/12schoolbag.png",img2:"img/easy/equipment/14Telephone.png",ans1:"Schoolbag",ans2:"Telephone",ans:"Telephone",no:0},
                {img1:"img/easy/equipment/6table.png",img2:"img/easy/equipment/7chair.png",ans1:"Table",ans2:"Chair",ans:"Chair",no:0},
                {img1:"img/easy/equipment/15computer.png",img2:"img/easy/equipment/5ruler.png",ans1:"Computer",ans2:"Ruler",ans:"Ruler",no:0},
                {img1:"img/easy/equipment/13globe.png",img2:"img/easy/equipment/1scissors.png",ans1:"Globe",ans2:"Scissors",ans:"Globe",no:0},
                {img1:"img/easy/equipment/2pencil.png",img2:"img/easy/equipment/4eraser.png",ans1:"Pencil",ans2:"Eraser",ans:"Eraser",no:0}
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


/*music*/ 
 function play_pause() {
            var myAudio = document.getElementById("myAudio");
            if (myAudio.paused) {
                document.getElementById("speaker1").src = "../www/img/speaker.png";
                myAudio.play();
            } else {
                document.getElementById("speaker1").src = "../www/img/speaker1.png";
                myAudio.pause();
            }
        }
