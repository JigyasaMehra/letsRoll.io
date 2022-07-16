
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

      if(r1>r2){
        document.querySelector("h1").innerHTML="Player 1 is Winner";
      }else if(r2>r1){
        document.querySelector("h1").innerHTML="Player 2 is Winner";
        //  document.getElementsByClassName("head").stylecolor="black";
      }else{
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
