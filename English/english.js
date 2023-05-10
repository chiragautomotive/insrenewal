function getPhoneNumber(){
    // Selecting the input element and get its value 
    var inputVal = 91+document.getElementById("phoneNumber").value;
var walink ="https://wa.me/"+inputVal

window.open("https://wa.me/"+inputVal+"?text=Dear%20Member,%0A%0AGreetings%20from%20*Chirag%20Automotive*%0A%0AYour%20electric%20scooter's%20*insurance%20policy%20is%20gonna%20expire%20soon*.%20Renew%20your%20insurance%20policy%20before%20it%20expires.%0A%0AFor%20any%20further%20queries%20,%0AContact%207041756888%0A%0AWarm%20Regards,%0A*Chirag%20Automotive*")
}