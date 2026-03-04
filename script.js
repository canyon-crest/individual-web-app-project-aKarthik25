// add javascript here
document.getElementById("myButton")?.addEventListener("click",() => {
    document.getElementById("info").toggleAttribute("hidden");
})
document.getElementById("thisButton")?.addEventListener("click",() => {
    const day = document.createElement("h1");
    day = document.getElementById("dayInput").value;
    document.getElementById("scheduleList").toggleAttribute("hidden");
})
