import React, { PropTypes } from 'react';
import styles from './styles.scss';

class RSVPButton extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      total: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const conf = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };

    fetch('/addRSVP', conf)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
      });
  }

  render() {
    return (
      <div>
        <a href="#" className={styles['button']} onClick={e => this.prevent(e)}>
          Meld je aan!
        </a>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Emailadres:</label>
          <input type="email" id="email" name="email" onChange={this.handleChange}/>
          <label htmlFor="total">Totaal gasten:</label>
          <input type="number" id="total" name="total" onChange={this.handleChange}/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }

  prevent(e) {
    e.preventDefault();
  }

  onSubmit(e) {
    e.preventDefault();
  }

}

export default RSVPButton;