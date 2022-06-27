<script>
  import { user } from './store.js';

  let isChecked = false;
</script>

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
      required
    />

    <input
      name="Email"
      placeholder="Email"
      type="text"
      bind:value={$user.email}
      required
    />

    <div class="checkbox-wrapper">
      <input
        name="Answer"
        type="checkbox"
        id="check"
        bind:checked={isChecked}
      />
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

<style>
  ::placeholder {
    color: #fff;
  }

  input:focus::placeholder {
    opacity: 15%;
  }

  .checkbox-wrapper {
    display: flex;
  }
  .checkbox-label {
    display: flex;
    font-size: 16px;
  }

  input[type='checkbox'] {
    display: none;
    visibility: hidden;
  }

  label {
    font-size: 2vw;
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
    min-width: 16px;
  }

  input[type='checkbox']:checked + label:before {
    background: url('/check-mark.svg') no-repeat center;
    color: #333;
  }

  input[type='text'] {
    margin-bottom: 30px;
  }

  form {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  input[type='text'] {
    border-bottom: 1px solid #fff;
    font-size: 1.4em;
    width: 100%;
  }

  input[type='checkbox']:focus + label::before {
    outline: rgb(59, 153, 252) auto 5px;
  }

  button {
    bottom: 0;
    font-size: 1.4em;
    border-bottom: 1px solid #fff;
  }

  .button-wrapper {
    margin-top: auto;
  }

  .form {
    flex-grow: 1;
  }

  @media screen and (min-width: 768px) {
    .checkbox-wrapper {
      margin-top: -30px;
    }

    button {
      font-size: 2em;
    }

    label,
    input[type='text'] {
      font-size: 2em;
      margin-bottom: 50px;
    }
  }

  @media screen and (min-width: 1280px) {
    p,
    span,
    button,
    input[type='text'] {
      font-size: 3vw;
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
