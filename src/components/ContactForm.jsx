import { useState } from "react";
import { validateEmail, validateFullName, validateMessage } from "./validation";
import Button from "./Button";
import { useEffect } from "react";
import InputError from "./InputError";

function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fullNameError, setFullNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [messageError, setMessageError] = useState();

  useEffect(() => {
    validateFullName({ fullName, setFullNameError });
    validateEmail({ email, setEmailError });
    validateMessage({ message, setMessageError });
  }, [email, message, fullName]);

  return (
    <form>
      <div className="input-group">
        <label className="label">
          Name {fullNameError && <InputError error={fullNameError} />}
        </label>
        <input
          autoComplete="off"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          name="name"
          id="name"
          className="input"
          type="text"
          placeholder="Javier Pérez"
          required
        />
        <label className="label">
          Email address {emailError && <InputError error={emailError} />}
        </label>
        <input
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
          className="input"
          type="email"
          placeholder="example@gmail.com"
          required
        />

        <label className="label">
          Message {messageError && <InputError error={messageError} />}
        </label>
        <textarea
          autoComplete="off"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          id="message"
          className="input inputMessage"
          placeholder="What can I help you"
          maxLength="200"
          required
        />
      </div>

      <Button type="submit" buttonSize="btn--medium" buttonStyle="btn--primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="15"
          height="15"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
          ></path>
        </svg>
        Send
      </Button>
    </form>
  );
}

export default ContactForm;
