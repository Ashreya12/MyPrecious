var popup = document.getElementById('simplepopup');
var gold = document.getElementById('gold');
var silver = document.getElementById('silver');
var platinum = document.getElementById('platinum');
var palladium = document.getElementById('palladium');
var body = document.getElementById('body');
var heading = document.querySelector('.table-heading');

var getHTML = function (url, callback) {
    if (!window.XMLHttpRequest) return;
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (callback && typeof (callback) === 'function') {
            callback(this.responseXML);
        }
    }
    xhr.open('GET', url);
    xhr.responseType = 'document';
    xhr.send();
}

document.querySelector('#date-time').innerHTML = Date().substring(0, 16);

gold.addEventListener('mouseenter', openpopup);
gold.addEventListener('mouseleave', openpopup);
silver.addEventListener('mouseenter', openpopup);
silver.addEventListener('mouseleave', openpopup);
platinum.addEventListener('mouseenter', openpopup);
platinum.addEventListener('mouseleave', openpopup);
palladium.addEventListener('mouseenter', openpopup);
palladium.addEventListener('mouseleave', openpopup);

function openpopup() {
    var url = "https://www.kitco.com/charts/live" + this.innerHTML.toLowerCase() + ".html";
    heading.innerHTML = this.innerHTML.toUpperCase() + " ( $ / lb )"
    if (popup.style.display == 'grid') {
        popup.style.display = 'none';
    }
    else {
        getHTML(url, function (response) {
            document.querySelector('#bid').innerHTML = response.querySelector('#sp-bid').innerHTML;
            document.querySelector('#ask').innerHTML = response.querySelector('#sp-ask').innerHTML;
            document.querySelector('#high').innerHTML = response.querySelector('#sp-hi').innerHTML.substr(5);
            document.querySelector('#low').innerHTML = response.querySelector('#sp-lo').innerHTML.substr(4);
            document.querySelector('#chg').innerHTML = response.querySelector('#sp-chg-percent').innerHTML;
        });
        popup.style.display = 'grid';
    }
}

