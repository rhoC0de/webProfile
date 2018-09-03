var myImage = document.querySelector('.roundpic');

myImage.onmouseover = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ore3.jpg') {
      myImage.setAttribute ('src','images/ore4.jpg');
    } 
    else {
      myImage.setAttribute ('src','images/ore3.jpg');
    }
}

var myButton = document.querySelector('.but');
var myHeading = document.querySelector('.header1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Lets Have A Chat, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Lets Have A Chat, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }