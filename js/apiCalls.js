window.addEventListener("keydown", console.log("Key down happened"));
window.addEventListener("keypress", console.log("Key press happened"));
window.addEventListener("keyup", console.log("Key up happened"));
function apiCall(){
    console.log("Calling API now, awaitng response....");
    setTimeout(() => {
        console.log("APi Call complete !");
    }, 2000)
}
