var img = [];
img[0] = "img/bannerbigg.jpg";
img[1] = "img/slide.jpg";
img[2] = "img/slide2.jpg";
// hàm cho slide tự chạy 
var num = 0;
var time = 4000;
function tuchay() {
    document.view.src = img[num];
    if (num < img.length - 1) {
        num++;
    } else {
        num = 0;
    }
    setTimeout("tuchay()", time);
}

window.onload = tuchay;

function next() {
    //lấy phần tử img để hiện thị ảnh

    var next = document.getElementById("slide");

    //xử lý chỉ số tăng thêm 1
    num++;
    if (num >= img.length) {
        num = 0;
       
    }
     //Thiết lập thuộc tính src của ảnh bằng ảnh mới
        next.src = img[num];
}

// hàm prew
function prew() {
    //lấy phần tử img để hiện thị ảnh

    var prew = document.getElementById("slide");

    //xử lý chỉ số tăng thêm 1
    num--;
    if (num <= 0) {
        num = img.length - 1
    }

    //Thiết lập thuộc tính src của ảnh bằng ảnh mới
    prew.src = img[num];
}