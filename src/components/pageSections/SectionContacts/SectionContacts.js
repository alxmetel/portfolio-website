import React, { useState, useEffect } from 'react';
import './SectionContacts.scss';
import siteData from '../../../siteData.json';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faPhoneSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import InputTextField from '../../shared/InputTextField/InputTextField';
import InputTextAreaField from '../../shared/InputTextAreaField/InputTextAreaField';
import Button from '../../shared/Button/Button';

const SectionContacts = () => {

  const [displayValidation, setDisplayValidation] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  // Name
  const [formName, setFormName] = useState('');
  const [formNameValid, setFormNameValid] = useState(!displayValidation);

  // Email
  const [formEmail, setFormEmail] = useState('');
  const [formEmailValid, setFormEmailValid] = useState(!displayValidation);

  // Subject
  const [formSubject, setFormSubject] = useState('');
  const [formSubjectValid, setFormSubjectValid] = useState(!displayValidation);

  // Message
  const [formMessage, setFormMessage] = useState('');
  const [formMessageValid, setFormMessageValid] = useState(!displayValidation);

  useEffect(() => {
    setFormIsValid(formNameValid && formEmailValid && formSubjectValid && formMessageValid);
  }, [formNameValid, formEmailValid, formSubjectValid, formMessageValid]);

  function handleSubmit(e) {
    e.preventDefault();
    if (formIsValid) {
      sendMessage();
    } else {
      setDisplayValidation(true);
    }
  }

  function clearForm() {
    setFormName('');
    setFormEmail('');
    setFormSubject('');
    setFormMessage('');
  }

  function sendMessage() {
    const url = `https://formsubmit.co/ajax/${siteData.home.contacts.email.link}`;
    const data = {
      name: formName,
      email: formEmail,
      _subject: formSubject,
      message: formMessage
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(response => response.json()).then(response => {
      console.log(response);
      if (response.success === 'true') {
        clearForm();
        setDisplayValidation(false);
      }
    })
  }

  return (
    <section id="contacts" className="page-section section-contacts">
      <div className="content-container">
        <SectionTitle content={siteData.home.contacts.title} />
        <div className="container">
          <div className="info-block">
            <div className="info-item-wrapper">
              <a className="info-item-link-container" href={siteData.home.contacts.resume.link} target="_blank" rel="noopener noreferrer">
                <div className="info-item-icon"><FontAwesomeIcon icon={faFilePdf} /></div>
                <div className="info-item-text">{siteData.home.contacts.resume.title}</div>
              </a>
            </div>
            <div className="info-item-wrapper">
              <a className="info-item-link-container" href={`tel:${siteData.home.contacts.phone.link}`}>
                <div className="info-item-icon"><FontAwesomeIcon icon={faPhoneSquare} /></div>
                <div className="info-item-text">{siteData.home.contacts.phone.title}</div>
              </a>
            </div>
            <div className="info-item-wrapper">
              <a className="info-item-link-container" href={siteData.home.contacts.linkedin.link} target="_blank" rel="noopener noreferrer">
                <div className="info-item-icon"><FontAwesomeIcon icon={faLinkedin} /></div>
                <div className="info-item-text">{siteData.home.contacts.linkedin.title}</div>
              </a>
            </div>
            <div className="info-item-wrapper">
              <a className="info-item-link-container" href={`mailto:${siteData.home.contacts.email.link}`}>
                <div className="info-item-icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                <div className="info-item-text">{siteData.home.contacts.email.title}</div>
              </a>
            </div>
          </div>
          <div className="form-block">
            <form>
              <InputTextField
                id="contact-form-name"
                name="name"
                label={siteData.home.contacts.contact_form.name.label}
                value={formName}
                setValue={setFormName}
                displayValidation={displayValidation}
                valid={formNameValid}
                setValid={setFormNameValid}
                validationRules={{ isRequired: true }}
                validationErrors={{ isRequired: siteData.home.contacts.contact_form.email.error_required }}
              />
              <InputTextField
                id="contact-form-email"
                name="email"
                label={siteData.home.contacts.contact_form.email.label}
                value={formEmail}
                setValue={setFormEmail}
                displayValidation={displayValidation}
                valid={formEmailValid}
                setValid={setFormEmailValid}
                validationRules={{isRequired: true, isEmail: true}}
                validationErrors={{ isRequired: siteData.home.contacts.contact_form.email.error_required, isEmail: siteData.home.contacts.contact_form.email.error_is_email}}
              />
              <InputTextField
                id="contact-form-subject"
                name="_subject"
                label={siteData.home.contacts.contact_form.subject.label}
                value={formSubject}
                setValue={setFormSubject}
                displayValidation={displayValidation}
                valid={formSubjectValid}
                setValid={setFormSubjectValid}
                validationRules={{ isRequired: true }}
                validationErrors={{ isRequired: siteData.home.contacts.contact_form.subject.error_required }}
              />
              <InputTextAreaField
                id="contact-form-message"
                name="message"
                label={siteData.home.contacts.contact_form.message.label}
                value={formMessage}
                setValue={setFormMessage}
                displayValidation={displayValidation}
                valid={formMessageValid}
                setValid={setFormMessageValid}
                validationRules={{ isRequired: true }}
                validationErrors={{ isRequired: siteData.home.contacts.contact_form.message.error_required }}
              />
              <div className="button-container">
                <Button
                  type="submit"
                  title="Send"
                  onClick={e => handleSubmit(e)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionContacts;