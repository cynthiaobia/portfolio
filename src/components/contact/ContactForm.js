
import { useRef, useState } from 'react';

export default function ContactForm() {

  // show/hide message sent setting state
  const [showResult, setShowResult] = useState(false);

  const nameRef = useRef('');
  const emailRef = useRef('');
  const subjectRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      date: new Date()
    }

    setShowResult(true);

    console.log(formData);

    // clear form after submit
    nameRef.current.value = '';
    emailRef.current.value = '';
    subjectRef.current.value = '';
  }

  return (
    <div>
      <h2>Send me a message!</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name </label>
          <input 
            type="text"
            ref={nameRef} 
          />
        </div>

        <div>
          <label>Email </label>
          <input 
            type="text" 
            ref={emailRef}
          />
        </div>

        <div>
          <label>Subject </label>
          <input 
            type="text" 
            ref={subjectRef}
          />
        </div>
        
        {/* <div>
          <label>Message </label>
          <textarea>Type your message here</textarea>
        </div> */}

        <button>Send</button>

        { showResult ? 
            <div>Your message was successfully sent!</div> : null 
        }

      </form>
    </div>
  )
}