<script>
  import { state, user } from './store.js';

  let yes = false;

  const showForm = () => {
    state.set('showForm');
  };

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
</script>

<main>
  <div class={`content ${$state === 'startScreen' ? 'show' : 'hide'}`}>
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
</main>

<style>
  main {
    height: 100%;
    margin: 0;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  p {
    font-size: 2.4em;
    margin: 0 0 30px 0;
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

  ::placeholder {
    color: #fff;
  }

  .content {
    height: calc(100vh - 200px);
    padding: 100px;
    max-width: 710px;
  }

  .rsvp-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 200px);
    padding: 100px;
    width: 50%;
  }

  .address {
    margin-bottom: 30px;
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
