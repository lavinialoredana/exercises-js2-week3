var pauzaAlarm = false;

function pauza() {
  // pauseAlarm -> true
  // !pauseAlarm -> false
  pauzaAlarm = !pauzaAlarm;
}

function setAlarm() {
  pauzaAlarm = false;

  // 1. When the `Set Alarm` button is clicked, get the value of the input field
  // get
  var alarmInput = document.getElementById("alarmSet").value;
  console.log("alarmInput: ", alarmInput);

  // 2. When you have the input field value, set the title to the correct value
  // set
  var timeRemainingUpdate = document.getElementById("timeRemaining");
  timeRemainingUpdate.innerHTML = "Time remaining: " + alarmInput;

  // 3. Work out how to update the `Time Remaining` title every second

  setInterval(() => {
    if (pauzaAlarm == false && alarmInput > 0) {
      alarmInput -= 1;
      timeRemainingUpdate.innerHTML = "Time remaining: " + alarmInput;
      // 4. When the remaining time left is 0, play the alarm sound
      if (alarmInput === 0) {
        playAlarm();
        document.querySelector("body").style.backgroundColor = "orange";
      }
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });

  document.getElementById("pause").addEventListener("click", () => {
    pauza();
  });
}

function playAlarm() {
  audio.play();
}

function stopAlarm() {
  audio.pause();
}

window.onload = setup;

// 1. When the `Set Alarm` button is clicked, get the value of the input field
// 2. When you have the input field value, set the title to the correct value
// 3. Work out how to update the `Time Remaining` title every second
// 4. When the remaining time left is 0, play the alarm sound

// ## Extra Tasks

// If you have time and want to do more why not try
// - Could you add `pause` functionality so that the count down stops and then you restart it later?

// - Make the background change color when the alarm clock finishes
// - Could you add `pause` functionality so that the count down stops and then you restart it later?

// When you click the `Set Alarm` button the counter at the top of the screen should change to the number you entered in the `input` field. For example, if the `input` field says `10` then the title should say `Time Remaining: 00:10`.

// Every one second the title should count down by one.

// When the `Time Remaining` reaches `00:00` the alarm should play a sound. You can make the sound happen by using `playAlarm()`.

// You can stop the alarm sound by pressing the `Stop Alarm` button.
