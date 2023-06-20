import React, { Component } from "react";
import "./../Styles/contact.css";
export default class Contact extends Component {
  render() {
    return (
      <div class="mfe-contact-us">
        <div class="mfe-contact-header">Contact Us</div>
        <div class="mfe-description">Leave us an awesome message.</div>
        <div class="mfe-form">
          <div class="mfe-email">
            <label class="mfe-label">Email</label>
            <input placeholder="Email" type="email"></input>
          </div>
          <div class="mfe-subject">
            <label class="mfe-label">Subject</label>
            <input placeholder="Subject" type="text"></input>
          </div>
          <div class="mfe-message">
            <label class="mfe-label">Message</label>
            <textarea placeholder="Message" type="text"></textarea>
          </div>
          <div class="mfe-buttons">
            <button type="submit" class="mfe-button">
              Send Message
            </button>
          </div>
        </div>
      </div>
    );
  }
}
