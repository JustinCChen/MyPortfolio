import '../contact/contact.css'
import { validateEmail } from '../../utils/helpers';
import { useState } from 'react';




function Contact() {
    const [formState, setFormState]= useState({
        name :'name',
        email:'email',
        message:'write down your message...'
    })

    const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };



    return <>
        <section>
            <form onSubmit={handleSubmit}>
            <h1>GET IN TOUCH</h1>
                <input name="name" type="text" class="feedback-input" placeholder={name} onBlur={handleChange} />
                <input name="email" type="text" class="feedback-input" placeholder={email} onBlur={handleChange} />
                <textarea name="text" class="feedback-input" placeholder={message} onBlur={handleChange}></textarea>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>

        </section>

    </>
}

export default Contact