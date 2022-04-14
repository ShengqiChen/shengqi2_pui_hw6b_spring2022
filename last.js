
// read local storage
var arr = JSON.parse(localStorage.getItem('appointments'))
var len = arr.length;
var lastData = arr[len-1];
// show data in local storage
show();

function show() {
    var html = '';
    html += lastData.date;
    html += " ";
    html += lastData.time;
    html += " for your upcoming appointment";
    document.querySelector('h4').innerHTML += html;
}