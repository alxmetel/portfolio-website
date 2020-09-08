import React from 'react';
import './SectionContacts.scss';
import siteData from '../../../siteData.json';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faPhoneSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import InputTextField from '../../shared/InputTextField/InputTextField';
import InputTextAreaField from '../../shared/InputTextAreaField/InputTextAreaField';

const SectionContacts = () => {
  return (
    <section className="page-section section-contacts">
      <div className="content-container">
        <SectionTitle content={siteData.home.contacts.title} />
        <div className="container">
          <div className="info-block">
            <a className="info-item-container" href={siteData.home.contacts.resume.link} target="_blank" rel="noopener noreferrer">
              <div className="info-item-icon"><FontAwesomeIcon icon={faFilePdf} /></div>
              <div className="info-item-text">{siteData.home.contacts.resume.title}</div>
            </a>
            <a className="info-item-container" href={`tel:${siteData.home.contacts.phone.link}`}>
              <div className="info-item-icon"><FontAwesomeIcon icon={faPhoneSquare} /></div>
              <div className="info-item-text">{siteData.home.contacts.phone.title}</div>
            </a>
            <a className="info-item-container" href={siteData.home.contacts.linkedin.link} target="_blank" rel="noopener noreferrer">
              <div className="info-item-icon"><FontAwesomeIcon icon={faLinkedin} /></div>
              <div className="info-item-text">{siteData.home.contacts.linkedin.title}</div>
            </a>
            <a className="info-item-container" href={`mailto:${siteData.home.contacts.email.link}`}>
              <div className="info-item-icon"><FontAwesomeIcon icon={faEnvelope} /></div>
              <div className="info-item-text">{siteData.home.contacts.email.title}</div>
            </a>
          </div>
          <div className="form-block">
            <form>
              <InputTextField
                id="contact-form-email"
                label={siteData.home.contacts.contact_form.email}
              />
              <InputTextField
                id="contact-form-subject"
                label={siteData.home.contacts.contact_form.subject}
              />
              <InputTextAreaField
                id="contact-form-message"
                label={siteData.home.contacts.contact_form.message}
                minRows="5"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionContacts;