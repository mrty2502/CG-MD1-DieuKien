let user = prompt("who are you ???");
if (user == 'Admin') {
    alert("Chao dai ca");
} else if (user == null){
    alert("Canceled.");
} else {
    alert("i dont know you!");
}

let password = prompt('Moi dai ca nhap mat khau a');
if (password == 'themaster') {
    alert('cui dau moi dai ca vao');
} else {
    alert('khong phai dai ca roi');
}