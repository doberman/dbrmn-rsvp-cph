<script>
  import { state, user } from './store.js';

  let isImageShowing = false;
  let yes = false;

  const showForm = () => {
    state.set('showForm');
  };

  function handleMouseOver(e) {
    isImageShowing = !isImageShowing;
  }
  function handleMouseOut(e) {
    isImageShowing = !isImageShowing;
  }

  window.addEventListener('load', function () {
    const form = document.getElementById('my-form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      }).then(() => {
        state.set('showSuccessScreen');
      });
    });
  });

  function handleMouseMove(e) {
    const element = document.querySelector('img');
    const imgVertical = e.clientY;
    const imgHorizontal = e.clientX;

    element.style.top = `${imgVertical - 120}px`;
    element.style.left = `${imgHorizontal - 120}px`;
  }
</script>

<main>
  <div
    class:has-opacity={isImageShowing}
    class={`content ${$state !== 'startScreen' ? 'show' : 'hide'}`}
  >
    <img class:on-hover={isImageShowing} class="img" src="/backyard.jpg" />

    <p>
      Save the date. Let’s celebrate the official opening of our Copenhagen
      studio with a Back Yard BBQ.
    </p>
    <div
      class="address"
      on:mouseover={handleMouseOver}
      on:mouseout={handleMouseOut}
      on:mousemove={handleMouseMove}
    >
      <span>EY Doberman</span>
      <span>Frederiksholms Kanal 30</span>
      <span>A6</span>
      <span>1220 København</span>
    </div>
    <p>8 Sept 2022 6-10 PM</p>
    <div class="button-wrapper">
      <button on:click={showForm}>RSVP</button>
    </div>
  </div>

  <div class={`rsvp-content ${$state === 'showForm' ? 'show' : 'hide'}`}>
    <div class="content-form">
      <p>
        Save the date. Let’s celebrate the official opening of our Copenhagen
        studio with a Back Yard BBQ.
      </p>
      <div class="address">
        <span>EY Doberman</span>
        <span>Frederiksholms Kanal 30</span>
        <span>A6</span>
        <span>1220 København</span>
      </div>
      <p>8 Sept 2022 6-10 PM</p>
    </div>

    <div class="form">
      <form
        class="form"
        id="my-form"
        method="POST"
        action="https://script.google.com/macros/s/AKfycbxaR3QyA4605JeriX4MRq3BD3N2Rij3LwPlvXLo3oWtHXcGFclezZG8zbd3yoC7tuqA/exec"
      >
        <input
          name="Name"
          placeholder="Name"
          type="text"
          bind:value={$user.name}
        />

        <input
          name="Email"
          placeholder="Email"
          type="text"
          bind:value={$user.email}
        />

        <div class="checkbox-wrapper">
          <input name="Answer" type="checkbox" id="check" bind:checked={yes} />
          <label for="check" class="checkbox-label">
            Yes, I would like to get invited to future events from EY Doberman
            Copenhagen
          </label>
        </div>
        <div class="button-wrapper">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
  <div
    class={`content content--centered ${
      $state === 'startScreen' ? 'show' : 'hide'
    }`}
  >
    <div class="message-wrapper">
      <img alt="star" class="star" src="star-1.svg" />
      <img alt="star" class="star1" src="star-2.svg" />

      <img alt="star" class="star2" src="star-3.svg" />

      <p>Fun!</p>
      <p>We'll see you after the vacations!</p>
    </div>
    <p class="paragraph">
      A remider will be sent as we’re getting closer. Add event to: <a>iCal</a>,
      <a>Outlook</a> or <a>Google Cal</a>.
    </p>
  </div>
</main>

<style>
  .message-wrapper {
    position: relative;
  }
  @keyframes star {
    to {
      zoom: 10%;
      opacity: 0;
    }
    from {
      zoom: 100%;
      opacity: 1;
    }
  }
  .star {
    animation-name: star;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 2s;
    animation-direction: alternate;
    position: absolute;
    left: 80px;
    top: -10px;
  }
  @keyframes star1 {
    to {
      opacity: 0;
    }
    from {
      opacity: 1;
    }
  }
  .star1 {
    animation-name: star1;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 3s;
    animation-direction: alternate;
    position: absolute;
    top: 35px;
    left: -30px;
  }
  @keyframes star2 {
    0% {
      opacity: 1;
    }
    45% {
      opacity: 1;
    }
    55% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  .star2 {
    animation-name: star2;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 5s;
    animation-direction: alternate;
    position: absolute;
    top: -30px;
    left: -30px;
  }

  a {
    color: white;
    text-decoration: underline;
  }
  main {
    height: 100%;
    margin: 0;
  }

  p {
    font-size: 2.4em;
    margin: 0;
    opacity: 1;
    transition: opacity 0.3s;
  }

  .paragraph {
    font-size: 1em;
  }

  .has-opacity p {
    opacity: 0;
    transition: opacity 0.3s;
  }

  label {
    font-size: 2.4em;
  }

  span {
    display: block;
    font-size: 2.4em;
  }

  button {
    font-size: 2.4em;
    border-bottom: 1px solid #fff;
  }

  .img {
    cursor: none;
    opacity: 0;
    position: absolute;
    z-index: -1;
    transition: opacity 0.3s;
    top: 0;
    left: 0;
    max-width: 450px;
  }

  .img.on-hover {
    opacity: 1;
    transition: opacity 0.3s;
  }

  ::placeholder {
    color: #fff;
  }

  .content {
    height: calc(100vh - 160px);
    padding: 80px;
    position: relative;
    max-width: 710px;
  }

  .content--centered {
    justify-content: center;
  }

  .rsvp-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 160px);
    padding: 80px;
    width: 50%;
  }

  .address {
    cursor: none;
    margin-bottom: 30px;
    position: relative;
  }

  .checkbox-wrapper {
    display: flex;
    margin-top: -30px;
  }
  .checkbox-label {
    display: inline-block;
    font-size: 16px;
  }

  input[type='checkbox'] {
    display: none;
    visibility: hidden;
  }
  label {
    cursor: pointer;
  }
  input[type='checkbox'] + label:before {
    border: 1px solid #fff;
    content: '\00a0';
    display: inline-block;
    font: 16px/1em sans-serif;
    height: 16px;
    margin: 0 1em 0 0;
    padding: 0;
    vertical-align: top;
    width: 16px;
  }
  input[type='checkbox']:checked + label:before {
    background: url('/check-mark.svg') no-repeat center;
    color: #333;
  }

  input[type='text'] {
    margin-bottom: 50px;
  }

  .label-text {
    border-bottom: 1px solid #fff;
    margin-bottom: 30px;
    width: 100%;
  }

  .description {
    font-size: 16px;
    opacity: 0.3;
  }

  .content-form p,
  .content-form span {
    font-size: 16px;
    opacity: 0.3;
    max-width: 45%;
  }

  form {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  input[type='text'] {
    border-bottom: 1px solid #fff;
    font-size: 2.4em;
    width: 100%;
  }

  input[type='checkbox']:focus + label::before {
    outline: rgb(59, 153, 252) auto 5px;
  }

  button {
    bottom: 0;
    position: absolute;
  }

  .button-wrapper {
    flex-grow: 1;
    position: relative;
  }

  .form {
    flex-grow: 1;
  }

  .show {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .hide {
    display: none;
  }
</style>
