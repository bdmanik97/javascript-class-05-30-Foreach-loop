

// foreach loop start here.....
// let number = [40, 50, 60, 70, 80, 90, 100, 20, 10, 30,]

// number.forEach(element=>{
//     console.log(element);
// })
// foreach loop end here


// While loop start here.....
// let number = [40, 50, 60, 70, 80, 90, 100, 20, 10, 30];
// let i =0;

// numberlength = number.length;
//     console.log(numberlength);


// while(i<=numberlength){
//     console.log(number[i])
//     i++
// }
// While loop end here.....


// do while start here.....
// let number = [40, 50, 60, 70, 80, 90, 100, 20, 10, 30, 54, 65, 85, 100];
// let j =0;

// numberlength = number.length;
//     console.log(numberlength);

// do{
//     console.log(number[j])
//     j++
// }
// while(j<=numberlength)
// do while end here.....

$( document ).ready(function() {
   $(".toggle-bar").click(function(){
    $(".navbar").slideToggle();
    $(".bar, .close").toggle();
   }); 
});