
import ContactForm from "../components/contact/ContactForm"

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact(props) {
  return (
    <div className="contact">
      <h1>Contact</h1>
      Connect with me on LinkedIn and follow me on GitHub:
      
      <div className="socials-container">
        <LinkedInIcon />
        <a href="http://linkedin.com/in/cynthiaobia" target="_blank" rel="noreferrer">LinkedIn</a><br />
      </div>

      <div className="socials-container">
        <GitHubIcon />
        <a href="http://github.com/cynthiaobia" target="_blank" rel="noreferrer">GitHub</a>
      </div>

      <ContactForm />


    </div>
  )
};