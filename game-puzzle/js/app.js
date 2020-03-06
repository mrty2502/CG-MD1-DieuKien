function changeImage(srcProperty, id) {
    let string = srcProperty.slice(srcProperty.indexOf("img") + 4,
        srcProperty.indexOf("_"));
    switch (string) {
        case "panda":
            document.getElementsByTagName("img")[id].src = "img/monkey_part" + (+id + 1) + "x1.jpg";
            document.getElementsByTagName("img")[id].alt = "imageMonkey";
            break;
        case "cat":
            document.getElementsByTagName("img")[id].src = "img/panda_part" + (+id + 1) + "x1.jpg";
            document.getElementsByTagName("img")[id].alt = "imagePanda";
            break;
        case "monkey":
            document.getElementsByTagName("img")[id].src = "img/cat_part" + (+id + 1) + "x1.jpg";
            document.getElementsByTagName("img")[id].alt = "imageCat";
            break;
    }
}

function checkWin() {
    let imgObj = document.getElementsByTagName("img");
    let count = 0;
    let id = 0;
    while (imgObj[+id].alt === imgObj[+id+1].alt) {
        count++;
        if (count === 4) {
            document.getElementsByClassName("main-app")[0].style.border = "green 5px solid";
            return;
        }
        +id++;
    }
    document.getElementsByClassName("main-app")[0].style.border = "red 5px solid";
}