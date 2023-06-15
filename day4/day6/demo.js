function addmessage(){
    let divref = document.querySelector("#id1");
    let existing = divref.innerHTML;
     let newValue = "<h1>hi suraj</h1>";
     let update  = existing + newValue;
      divref.innerHTML = update;
} 
