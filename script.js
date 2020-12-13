$( document ).ready(function() {
    console.log( "ready!" );


 let m =  moment();
 let output = m.format("dddd MMM Mo YYYY");

 console.log(output) 
 $("#currentDay").text(output)
        
   

let newTime = new Date();
 var currentHour = newTime.getHours();
 console.log(currentHour)
 $('.edit_cont').each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour+8){
        $(this).css('background-color','lightgreen');
    }else if(val < currentHour && val > currentHour-8){
        $(this).css('background-color','lightgrey');
    }else if(val === currentHour){
        $(this).css('background-color','salmon');
    }else{
        $(this).css('background-color','white');
    }
});
//make a textarea with a special class hour${i}, put it in the right div
    //add input under edit_cont class 
let newPlan = $("<textarea>")
newPlan.addClass("hours${i}");
$(".edit_cont").append(newPlan);

    //make a saveBtn, put it in the right div. Have it grab info from class hour${i}
let saveBtn = $("<button>");
saveBtn.addClass("hours'${i}'");
saveBtn.html("Save");
console.log(saveBtn);


for( var i = 0; i<9; i++){
};
//addEventlister under edit_btn div
saveBtn.on("click", function(){
    console.log(hours({i}));



    let plan = newPlan.value;
    localStorage.setItem("plan", JSON.stringify(plan));


});

$(".save_btn").append(saveBtn);


// localStorage.setItem() to save items
// It takes two arguments, a key, and a value
// localStorage.getItem() to get saved items back out - use one key


}); //document ready closing 