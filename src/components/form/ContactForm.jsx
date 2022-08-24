import Button from "../buttons/Button";

function ContactForm() {
  return (
    <form>
      <div class="input-group">
        <label class="label">Name</label>
        <input
          autocomplete="off"
          name="name"
          id="name"
          class="input"
          type="text"
          placeholder="Javier Pérez"
          required
        />
        <label class="label">Email address</label>
        <input
          autocomplete="off"
          name="email"
          id="email"
          class="input"
          type="email"
          placeholder="example@gmail.com"
          required
        />
        <label class="label">Message</label>
        <textarea
          autocomplete="off"
          name="message"
          id="message"
          class="input inputMessage"
          placeholder="What can I help you"
          maxLength="200"
          required
        />
      </div>

      <Button buttonSize="btn--medium" buttonStyle="btn--primary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>Send</Button>
    </form>
  );
}

export default ContactForm;
