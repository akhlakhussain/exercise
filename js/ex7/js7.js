class CountDown {
  constructor() {
    const headDiv = document.createElement("div");
    headDiv.id = "headDiv";
    const clockHeading = document.createElement("h1");
    clockHeading.appendChild(document.createTextNode("Countdown Clock"));
    clockHeading.id = "clockHeading";
    headDiv.appendChild(clockHeading);
    const CountDownArray = ["Days", "Hours", "Minutes", "Seconds"];
    const parentContainer = document.createElement("div");
    parentContainer.id = "parentContainer";
    parentContainer.appendChild(headDiv);
    document.body.appendChild(parentContainer);
    const divContainer = document.createElement("div");
    divContainer.id = "divContainer";
    for (let i = 0; i < 4; i += 1) {
      const container = document.createElement("div");
      container.classList.add("timeContainer");
      const childSpan = document.createElement("span");
      childSpan.id = CountDownArray[i];
      const childContainer = document.createElement("div");
      childContainer.classList.add("childContainer");
      childContainer.appendChild(document.createTextNode(CountDownArray[i]));
      container.appendChild(childSpan);
      container.appendChild(childContainer);
      divContainer.appendChild(container);
    }
    parentContainer.appendChild(divContainer);
    parentContainer.appendChild(document.createElement("br"));
    const lastDiv = document.createElement("div");
    lastDiv.id = "lastDiv";
    parentContainer.appendChild(lastDiv);
    const clockInput = document.createElement("input");
    clockInput.type = "text";
    clockInput.placeholder = "Enter Seconds";
    clockInput.id = "clockInput";
    lastDiv.appendChild(clockInput);
    lastDiv.appendChild(document.createElement("br"));
    const startButton = document.createElement("input");
    startButton.type = "button";
    startButton.value = "Start";
    startButton.id = "startButton";
    const pauseResume = document.createElement("input");
    pauseResume.id = "pauseResume";
    pauseResume.type = "button";
    pauseResume.value = "Pause";
    const stopButton = document.createElement("input");
    stopButton.id = "stop";
    stopButton.type = "button";
    stopButton.value = "Restart";
    lastDiv.appendChild(startButton);
    lastDiv.appendChild(pauseResume);
    lastDiv.appendChild(stopButton);
    const endText = document.createElement("p");
    endText.id = "demo";
    lastDiv.appendChild(endText);
  }

  static startTimer() {
    const days = Math.floor(CountDown.givenTime / (60 * 60 * 24));
    const hours = Math.floor(
      (CountDown.givenTime % (60 * 60 * 24)) / (60 * 60)
    );
    const minutes = Math.floor((CountDown.givenTime % (60 * 60)) / 60);
    const seconds = Math.floor(CountDown.givenTime % 60);
    document.getElementById("Days").innerHTML = days;
    document.getElementById("Hours").innerHTML = hours;
    document.getElementById("Minutes").innerHTML = minutes;
    document.getElementById("Seconds").innerHTML = seconds;
    CountDown.givenTime -= 1;
    if (CountDown.givenTime < 0) {
      document.getElementById("audioPlayer").play();
      clearInterval(CountDown.timer);
      document.getElementById("demo").innerHTML = "TIME UP!";
      document.getElementById("Days").innerHTML = "0";
      document.getElementById("Hours").innerHTML = "0";
      document.getElementById("Minutes").innerHTML = "0";
      document.getElementById("Seconds").innerHTML = "0";
    }
  }

  static stop() {
    document.getElementById("audioPlayer").pause();
    clearInterval(CountDown.timer);
    document.getElementById("demo").innerHTML = "Restart!";
    document.getElementById("Days").innerHTML = "";
    document.getElementById("Hours").innerHTML = "";
    document.getElementById("Minutes").innerHTML = "";
    document.getElementById("Seconds").innerHTML = "";
    document.getElementById("clockInput").value = "";
  }

  static countdownTimer() {
    document.getElementById("demo").innerHTML = "";
    CountDown.givenTime = document.getElementById("clockInput").value;
    if (CountDown.givenTime % 1 !== 0 || CountDown.givenTime === "") {
      alert("Please Enter valid value");
      return ;
    }
    CountDown.timer = setInterval(CountDown.startTimer, 1000);
  }

  static resume() {
    const resumeButton = document.getElementById("pauseResume");
    CountDown.timer = setInterval(CountDown.startTimer, 1000);
    resumeButton.value = "Pause";
    resumeButton.addEventListener("click", CountDown.pause);
    resumeButton.removeEventListener("click", CountDown.resume);
  }

  static pause() {
    clearInterval(CountDown.timer);
    const pauseButton = document.getElementById("pauseResume");
    pauseButton.value = "Resume";
    pauseButton.addEventListener("click", CountDown.resume);
    pauseButton.removeEventListener("click", CountDown.pause);
  }
}
CountDown.timer = "";
CountDown.givenTime = "";
