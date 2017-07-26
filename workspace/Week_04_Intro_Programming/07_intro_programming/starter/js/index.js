
alert("hello")
  
document.getElementById('gray-button').onclick = switchGray;
document.getElementById('white-button').onclick = switchWhite;
document.getElementById('red-button').onclick = switchRed;
document.getElementById('orange-button').onclick = switchOrange;
document.getElementById('yellow-button').onclick = switchYellow;
document.getElementById('green-button').onclick = switchGreen;
document.getElementById('blue-button').onclick = switchBlue;
document.getElementById('purple-button').onclick = switchPurple;

function switchGray() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'gray';
}

function switchBlue() {
  document.body.style.backgroundColor = 'blue';
  document.body.style.color = 'white';
}

function switchGreen() {
  document.body.style.backgroundColor = 'green';
  document.body.style.color = 'white';
}

function switchRed() {
  document.body.style.backgroundColor = 'red';
  document.body.style.color = 'black';
}

function switchOrange() {
  document.body.style.backgroundColor = 'orange';
  document.body.style.color = 'black';
}

function switchYellow() {
  document.body.style.backgroundColor = 'yellow';
  document.body.style.color = 'black';
}

function switchPurple() {
  document.body.style.backgroundColor = 'purple';
  document.body.style.color = 'white';
}