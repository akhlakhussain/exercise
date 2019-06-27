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
      const container = document.createElement("dev");
      container.classList.add("container");
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
    clockInput.placeholder = "Seconds";
    clockInput.id = "clockInput";
    const inputLabel = document.createElement("label");
    inputLabel.innerHTML = "Enter Number";
    inputLabel.forHTML = clockInput;
    lastDiv.appendChild(clockInput);
    lastDiv.appendChild(inputLabel);
    lastDiv.appendChild(document.createElement("br"));
    const startButton = document.createElement("input");
    startButton.type = "button";
    startButton.value = "Start";
    startButton.id = "startButton";
    const pauseResume = document.createElement("input");
    pauseResume.id = "pauseResume";
    pauseResume.type = "button";
    pauseResume.value = "Pause";
    lastDiv.appendChild(startButton);
    lastDiv.appendChild(pauseResume);
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
      clearInterval(CountDown.timer);
      document.getElementById("demo").innerHTML = "TIME UP";
      document.getElementById("Days").innerHTML = "0";
      document.getElementById("Hours").innerHTML = "0";
      document.getElementById("Minutes").innerHTML = "0";
      document.getElementById("Seconds").innerHTML = "0";
    }
  }

  static countdownTimer() {
    document.getElementById("demo").innerHTML = "";
    CountDown.givenTime = document.getElementById("clockInput").value;
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
