if ('webkitSpeechRecognition' in window){

    const recognition = new webkitSearchRecognition();

    recognition.continous = true;

    recognition.lang = 'en-US';

    const start = document.getElementById("start");
    const text = document.getElementById("textfield");

    let result = '';

    recognition.onstart = () => {
        start.innerHTML = 'Listening.......'
    }

}
else {
    console.log("Not supported");
}