if ("webkitSpeechRecognition" in window) {
  const recognition = new webkitSpeechRecognition();

  // config. options......
  recognition.continuous = true;
  recognition.interimResults = true; //not the final result
  recognition.lang = "en-US";

  const start = document.getElementById("start");
  const content = document.getElementById("textfield");
  const end = document.getElementById("end");

  let finalScript = "";

  recognition.onstart = () => {
    start.style.display = "none";
  };
  // result ......
  recognition.onresult = (event) => {
    let interimScript = "";
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      // if result is final ......
      if (event.results[i].isFinal) {
        finalScript += event.results[i][0].transcript;
      } else {
        interimScript += event.results[i][0].transcript;
      }
    }
    content.innerHTML = finalScript;
  };
  // start btn ......
  start.onclick = () => {
    recognition.start();
    end.classList.remove("hidden");
  };

  end.onclick = () => {
    end.style.display = "none";
    start.style.display = "block";
    recognition.stop();
    alert(content.innerHTML);
  };
} else {
  alert("Sorry, the extension is not supported in your browser...");
}
