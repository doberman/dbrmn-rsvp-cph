<script>
  import { state, user } from './store.js';
  import Form from './Form.svelte';

  let isImageShowing = false;

  const showForm = () => {
    state.set('form');
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
      state.set('isLoading');
      fetch(action, {
        method: 'POST',
        body: data,
      }).then(() => {
        state.set('success');
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

<svelte:head>
  <title>RSVP Doberman Backyard Party</title>
  <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
</svelte:head>
<main>
  <div
    class:has-opacity={isImageShowing}
    class={`content ${$state === 'startScreen' ? 'show' : 'hide'}`}
  >
    <img
      alt="backyard"
      class:on-hover={isImageShowing}
      class="img"
      src="/backyard.jpg"
    />

    <p class="wrapper">
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
    <div class="date">
      <p>8 Sept 2022</p>
      <p>6-10 PM</p>
    </div>
    <div class="button-wrapper">
      <button on:click={showForm}>RSVP</button>
    </div>
  </div>

  <div class={`content rsvp-content ${$state === 'form' ? 'show' : 'hide'}`}>
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
      <span>8 Sept 2022 6-10 PM</span>
      <span>6-10 PM</span>
    </div>
    <Form />
  </div>
  <div
    class={`content content--centered content--wide ${
      $state === 'isLoading' ? 'show' : 'hide'
    }`}
  >
    <span class="loader" />
  </div>

  <div
    class={`content content--centered ${
      $state === 'success' ? 'show' : 'hide'
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
      A reminder will be sent as we’re getting closer. Add event to: <a
        href="myevents.ics">iCal</a
      >,
      <a
        href="https://outlook.office.com/calendar/0/deeplink/compose?allday=false&body=Save%20the%20date.%20Let%E2%80%99s%20celebrate%20the%20official%20opening%20of%20our%0ACopenhagen%20studio%20with%20a%20Back%20Yard%20BBQ.%20&enddt=2022-09-08T20%3A00%3A00%2B00%3A00&location=Frederiksholms%20Kanal%2030%20A6%201220%20K%C3%B8benhavn&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-09-08T14%3A00%3A00%2B00%3A00&subject=Backyard%20Party%20%40%20Doberman%20CPH"
        title="Save Event in my Calendar">Office</a
      >
      or
      <a
        href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20220908T140000Z%2F20220908T220000Z&details=Save%20the%20date.%20Let%E2%80%99s%20celebrate%20the%20official%20opening%20of%20our%0ACopenhagen%20studio%20with%20a%20Back%20Yard%20BBQ.%20&location=Frederiksholms%20Kanal%2030%20A6%201220%20K%C3%B8benhavn&text=Backyard%20Party%20%40%20Doberman%20CPH"
        title="Save Event in my Calendar">Google cal</a
      >.
    </p>
  </div>
</main>

<style>
  .message-wrapper {
    position: relative;
  }

  .message-wrapper p {
    margin-bottom: 0;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes star {
    from {
      zoom: 10%;
      opacity: 0;
    }
    to {
      zoom: 100%;
      opacity: 1;
    }
  }
  .star {
    animation-name: star;
    animation-duration: 1.5s;
    position: absolute;
    left: 80px;
    top: -10px;
  }
  @keyframes star1 {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .star1 {
    animation-name: star1;
    animation-duration: 3s;
    position: absolute;
    top: -30px;
    left: 0px;
  }
  @keyframes star2 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .star2 {
    animation-name: star2;
    animation-duration: 2s;
    position: absolute;
    top: 100px;
    left: 0px;
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
    font-size: 1.4em;
    margin: 0 0 20px 0;
    opacity: 1;
  }

  .paragraph {
    font-size: 14px;
  }

  span {
    display: block;
    font-size: 1.4em;
  }

  button {
    font-size: 1.4em;
    border-bottom: 1px solid #fff;
  }

  .img {
    display: none;
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
    padding: 80px 20px;
    position: relative;
    max-width: 540px;
  }

  .content--centered {
    justify-content: center;
    max-width: 100%;
  }

  .content--wide {
    max-width: 100%;
  }

  .rsvp-content {
    display: flex;
    flex-direction: column;
    max-width: 100%;
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
    display: flex;
    font-size: 16px;
  }

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    margin: auto;
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
    max-width: 480px;
  }

  .content-form {
    margin-bottom: 30px;
  }

  button {
    bottom: 0;
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

  .date p {
    margin-bottom: 0;
  }

  .date {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    .content {
      padding: 80px;
    }

    .content--centered {
      max-width: 100%;
    }
    .message-wrapper p,
    p,
    span,
    button {
      font-size: 2em;
      opacity: 1;
      transition: opacity 0.3s;
    }

    .paragraph {
      font-size: 1em;
    }

    .img {
      display: block;
    }

    .has-opacity p {
      opacity: 0;
      transition: opacity 0.3s;
    }

    .rsvp-content {
      max-width: 50%;
    }

    .star1 {
      top: 35px;
      left: -30px;
    }

    .star2 {
      top: -30px;
      left: -30px;
    }
  }

  @media screen and (min-width: 1280px) {
    .content {
      max-width: 41vw;
    }
    .message-wrapper p,
    p,
    span,
    button {
      font-size: 2.7vw;
      opacity: 1;
      transition: opacity 0.3s;
    }

    .paragraph {
      font-size: 1vw;
    }

    .content--centered {
      max-width: 100%;
    }
  }
</style>
