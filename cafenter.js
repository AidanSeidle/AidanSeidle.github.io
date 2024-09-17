function update_behavior(){
    const username = document.getElementById("caffeine").value;

    /* PUSH THIS VALUE TO GOOGLE SHEET */
};
  
document.getElementById("caffeine").addEventListener("keyup",function(e){
    if (e.key === "Enter"){
        login_behavior();
    }
});

document.getElementById("submitbutton").addEventListener("click",function(){
    login_behavior();
});