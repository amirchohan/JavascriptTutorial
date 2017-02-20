var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Halal It, ' + storedName;
}


var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/download.jpg');
    }
    else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
myButton.onclick = function() {
  setUserName();
}

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to Halal It, ' + myName;
}