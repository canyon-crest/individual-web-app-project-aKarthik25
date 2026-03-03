// add javascript here
document.getElementById("myButton")?.addEventListener("click",() => {
    document.getElementById("info").toggleAttribute("hidden");
})
document.getElementById("scheduleButton")?.addEventListener("click",() => {
    day = document.getElementById("dayInput").value;

