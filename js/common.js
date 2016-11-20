$(function () {
    $.ajax({
        url:"http://front-test.grapheme.ru/data.json",
        method: "GET",
        datatype: "jsonp",
        success:function (data) {
         console.log(data);
        }
    })
    function outputProducts(data) {

    }
})