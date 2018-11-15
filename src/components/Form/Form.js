import React from 'react';
import './Form.css';

class Form extends React.Component {
  render() {
    return (
      <form className="Form" action="#myDemo" method="post" role="form">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="user_name" role="textbox" />
        </div>
        <div>
          <label for="mail">E-mail:</label>
          <input type="email" id="name" name="user_mail" role="textbox" />
        </div>
        <div>
          <label for="msg">Message:</label>
          <textarea id="msg" name="user_message"></textarea>
        </div>
        <div class="button">
          <button onclick="popUp()" type="submit" id="button">Submit</button>
        </div>
      </form>
    )
  }
};

export default Form;
