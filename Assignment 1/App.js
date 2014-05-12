var cars = [
    "Ford Mustang"
];

function mClick(obj) {
    obj.innerHTML = cars;
}

var button = document.getElementById("div");
button.addEventListener('click', mClick, false);