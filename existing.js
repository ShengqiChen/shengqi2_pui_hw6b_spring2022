//get local data
var localdata = localStorage.getItem('appointments') == null ? [] :
JSON.parse(localStorage.getItem('appointments'));

// show local data with formatting
show()
function show() {
    var htmlText = '';
    localdata.forEach((ele, i) => {
        
        htmlText += `
            <tr>
                <th class='appointment'>${"Feb." + ele.date}</th>
                <th class='appointment'>${ele.time}</th>
                <th class='cancel'><a href='javascript:;' onclick='cancel(${i})'>cancel</a></th>
            </tr>
            `
        
});
    
    document.getElementById('show').innerHTML = htmlText;
}

function cancel(i) {
    localdata.splice(i, 1);
    localStorage.setItem('appointments', JSON.stringify(localdata));
    show();
}