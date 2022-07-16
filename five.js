
document.querySelector("button").addEventListener("click",function(){
  var r1 = Math.floor(Math.random()*6)+1;
  const random1 = document.querySelectorAll("img")[0];
  var ranImg = r1+".jpeg";
  random1.setAttribute("src",ranImg);

  var r2 = Math.floor(Math.random()*6)+1;
  const random2 = document.querySelectorAll("img")[1];
  var ranImg2 =r2+".jpeg";
  random2.setAttribute("src",ranImg2);

  if(r1>r2){
    document.querySelector("h1").innerHTML="Player 1 is Winner";
  }else if(r2>r1){

    document.querySelector("h1").innerHTML="Player 2 is Winner";

    //  document.getElementsByClassName("head").stylecolor="black";
  }else{
    document.querySelector("h1").innerHTML="Match Draw";
  }
  } );


  document.addEventListener("keypress",function(event){
      play(event.key);

    }
  );
  function play(key) {
    switch (key) {
      case "p":
      var r1 = Math.floor(Math.random()*6)+1;
      const random1 = document.querySelectorAll("img")[0];
      var ranImg = r1+".jpeg";
      random1.setAttribute("src",ranImg);

      var r2 = Math.floor(Math.random()*6)+1;
      const random2 = document.querySelectorAll("img")[1];
      var ranImg2 = r2+".jpeg";
      random2.setAttribute("src",ranImg2);

      var r3 = Math.floor(Math.random()*6)+1;
      const random3 = document.querySelectorAll("img")[2];
      var ranImg3 = r3+".jpeg";
      random3.setAttribute("src",ranImg3);

      var r4 = Math.floor(Math.random()*6)+1;
      const random4 = document.querySelectorAll("img")[3];
      var ranImg4 = r4+".jpeg";
      random4.setAttribute("src",ranImg4);

      var r5 = Math.floor(Math.random()*6)+1;
      const random5 = document.querySelectorAll("img")[4];
      var ranImg5 = r5+".jpeg";
      random5.setAttribute("src",ranImg5);

      if(r1>r2 && r1>r3 && r1>r4 && r1>r5){
        document.querySelector("h1").innerHTML="Player 1 is Winner";
      }
      else if(r2>r1 && r2>r3 && r2>r4 && r2>r5){
        document.querySelector("h1").innerHTML="Player 2 is Winner";
      }else if(r3>r1 && r3>r2 && r3>r4 && r3>r5){
        document.querySelector("h1").innerHTML="Player 3 is Winner";
      }else if(r4>r1 && r4>r2 && r4>r3 && r4>r5){
        document.querySelector("h1").innerHTML="Player 4 is Winner";
      }else if(r5>r1 && r5>r2 && r5>r3 && r5>r4){
        document.querySelector("h1").innerHTML="Player 5 is Winner";
      }
      else{
        document.querySelector("h1").innerHTML="Match Draw";
      }
        break;
      default:
      alert("Press p");
  }
  }
  document.addEventListener("keypress",function (event) {
 soundMake(event.key);
});
function soundMake(key){
  var audio = new Audio('audio.mp3');
        audio.play();
}
document.querySelector(".bt").addEventListener("click",function () {
soundMake(event);
});
