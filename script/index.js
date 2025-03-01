function changeBgColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundColor = randomColor;
}

document.getElementById("discover").
    addEventListener("click", function () {
        window.location.href = "./blog.html"
    })

document.getElementById("color-btn").
    addEventListener("click", function(){
        changeBgColor();
    })