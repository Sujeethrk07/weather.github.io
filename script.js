let show = document.getElementById("show");
let search = document.getElementById("search");
let cityVal = document.getElementById("city");

let key = "2f745fa85d563da5adb87b6cd4b81caf";

let getWeather = () => {
    let cityValue = cityVal.value;
    if (cityValue.length === 0) {
        show.innerHTML = `<h3
