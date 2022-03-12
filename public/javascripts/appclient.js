// File name: appclient.js
// Student name: Syeda Fawal
// Student Id: 301155522
// Date: March 12, 2022
console.log("This goes to client side.");

if(getTitle == "Inventory List"){
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}