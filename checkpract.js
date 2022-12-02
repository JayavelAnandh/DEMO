//var a  =prompt("givenumber to a");
// var b =prompt("give number to b")

// console.log((+a)+ (+b));



// if (+a>2 && +a<12) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }
// var sum=0;
// var a;
// for(var i=1;i<=6;i++){
    
//      a = prompt("press the button to hit that run"+i);
//     sum = sum + (+a);
//     alert("yeah! you just scored a "+a+"the total is"+sum );
   
    
// }
// var a =["apple","orange","grape"];
// var result = a.map((index)=>index+"s");
// console.log(result);

// var arr = ["hi","this","is","jv"];
// console.log(...arr);
// var a = "guvi";
// console.log(...a);
// console.log([...a]);

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var data = request.response;
    var obt = JSON.parse(data);

    

    var resfil= obt.filter((x)=>x.population<300000);
    console.log(resfil);
    var resmap= resfil.map((index)=>console.log(index.name.common+"---"+index.population));
    var resred=resfil.reduce((acc,cv)=>acc+cv.population,0);
    console.log(resred);
    var resredf=obt.reduce((acc,cv)=>acc+cv.population,0);
    console.log(resredf);
   

}