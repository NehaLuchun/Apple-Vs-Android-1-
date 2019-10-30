// When Android/Apple Btn is Clicked
// Event Listener
document.getElementById('android-btn').addEventListener('click', setAndroid);
document.getElementById('apple-btn').addEventListener('click', setApple);

//Event Functions
function setAndroid() {

    // Change Logo
    document.getElementById('logo').src = 'images/Android-Logo.jpg';
    // Change "Explore the Debate" to "Android Home"
    document.getElementById('ETT').innerHTML = 'Android Home';
    // Change background-color
    document.getElementById('ETT').style.backgroundColor = '#a4c93b';
    // Change href
    document.getElementById('ETT').href = 'https://www.android.com/';
}

//Event Functions
function setApple() {

    // Change Logo
    document.getElementById('logo').src = 'images/Apple-Logo.jpg';
    // Change "Explore the Debate" to "Android Home"
    document.getElementById('ETT').innerHTML = 'Apple Home';
    // Change background-color
    document.getElementById('ETT').style.backgroundColor = '#b6bcca';
    // Change href
    document.getElementById('ETT').href = 'https://www.apple.com/';
}


