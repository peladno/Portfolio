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

      <Button buttonSize="btn--medium" buttonStyle="btn--primary">Send</Button>
    </form>
  );
}

export default ContactForm;
