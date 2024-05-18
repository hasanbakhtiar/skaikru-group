var list = document.querySelector('ul');
var input = document.querySelector('input');
var info = {
    title: "Hello",
    count: 5
};
fetch('https://fakestoreapi.com/products')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    var li = "";
    data.map(function (item) {
        li += "<li>".concat(item.title, "</li>");
    });
    list.innerHTML = li;
});
