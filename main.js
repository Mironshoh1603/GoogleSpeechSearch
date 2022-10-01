let input = document.querySelector(".inputBx input"),
  btn = document.querySelector(".inputBx .icon"),
  icon = document.querySelector(" .inputBx .icon i");
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  console.log("ishladi");
  const recognition = new SpeechRecognition();
  btn.addEventListener("click", () => {
    if (icon.classList.contains("fa-microphone")) {
      recognition.start();
    } else {
      recognition.stop();
    }
  });

  recognition.addEventListener("start", () => {
    icon.classList.replace("fa-microphone", "fa-microphone-slash");
  });
  recognition.addEventListener("end", () => {
    icon.classList.replace("fa-microphone-slash", "fa-microphone");
  });
  recognition.addEventListener("result", (event) => {
    console.log(event.results[0][0].transcript);
    let transcript = event.results[0][0].transcript;
    input.value = transcript;
    console.log(transcript);
    setTimeout(() => {
      routing(transcript);
    }, 3000);
  });
} else {
  console.log("Ishlamadi !");
}

function routing(searchvalue) {
  window.location.href = `https://www.google.com/search?q=${searchvalue}`;
}
