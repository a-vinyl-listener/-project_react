import React from "react";
import "./ContactForm.scss";
// import './Form.scss';
export const ContactForm = () => {
  return (
    <>
      {/* <!-- form --> */}
      <form className="form">
        <div className="container">
          <htmlFor
            id="some-form-id"
            action="url.ru"
            method="POST"
            className="some-form"
          >
            <div className="input-wrapper">
              <label htmlFor="name-id">Full Name*</label>
              <input
                className="my_form input"
                id="name-id"
                type="text"
                name="text-input"
                placeholder="Your Email Address"
                tabIndex="1"
                required
                readOnly
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="email-id"> Your Email*</label>
              <input
                className="my_form input"
                id="email-id"
                type="email"
                name="email"
                placeholder="example@yourmail.com"
                tabIndex="1"
                required
                readOnly
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="company-id">Company*</label>
              <input
                className="my_form input"
                id="company-id"
                type="text"
                name="company-input"
                placeholder="yourcompany name here"
                tabIndex="1"
                required
                readOnly
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="subject-id">Subject*</label>
              <input
                className="my_form input"
                id="subject-id"
                type="text"
                name="subject-input"
                placeholder="how can we help"
                tabIndex="1"
                required
                readOnly
              />
            </div>
            <div className="textarea-wrapper">
              <label htmlFor="message-id">Message*</label>
              <textarea
                className="my_form textarea"
                id="message-id"
                name="message-input"
                placeholder="hello there,i would like to talk about how to..."
                tabIndex="1"
                required
                readOnly
              ></textarea>
            </div>
            <div className="form__wrap">
            <div className="button__wrap button__wrap_blue">
              <a className="button__btn button__btn_blue" href="#">
                Send Message
              </a>
            </div>
          </div>
          </htmlFor>
        </div>
      </form>
    </>
  );
};
