function renderFooter() {
  const footer = document.querySelector(".js-footer");

  footer.innerHTML = `
    <a class="credit-link link" href="https://github.com/Eien2" target="_blank">
      <p class="credit-text">Created by Eien</p>
    </a>
  `;
}

function renderTimer() {
  const main = document.querySelector(".js-main");

  main.innerHTML += `
    <div class="timer-frame">
      <div class="timer">
        <button class="stop-start-btn js-start-btn">
          <div class="stop-start-container"></div>
        </button>

        <p class="timer-text js-timer-output">
          00:00:00
        </p>
      </div>
    </div>
  `;
}

function renderMain() {
  const main = document.querySelector(".js-main");

  main.innerHTML = `
    <div class="description-container">
      <div class="title">
        Read
      </div>

      <p class="description">
        Enter the hours, minutes and seconds you want to set the timer up. <br>
        Click the white button on timer to start or stop it. <br>
        if you want to reset the timer click the button that is below inputs. <br>
        <br>
        Enjoy my simple project
      </p>
    </div>

    <div class="input-container">
      <p class="description">
        Please provide numbers in inputs below. <br>
        Max 59 seconds and minutes.
      </p>

      <div class="inputs">
        <input class="input-hours js-hours" type="number" name="time" value="" placeholder="Hours">
        <input class="input-minutes js-minutes" type="number" name="time" value="" placeholder="Minutes">
        <input class="input-seconds js-seconds" type="number" name="time" value="" placeholder="Seconds">
      </div>
    </div>

    <button class="reset-btn js-reset-btn">Reset Timer</button>
  `;

  renderTimer();
}

function timer() { }

renderMain();
renderFooter();
