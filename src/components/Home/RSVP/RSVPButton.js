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
        <div className={styles['form']}>
          <h2>Meld je aan voor de trouwerij</h2>
          <p>We gebruiken alleen je email om een Welkoms mail te sturen en de uitnodiging.</p>
          <form onSubmit={this.handleSubmit}>
            <input type="email" id="email" name="email" placeholder="Email" onChange={this.handleChange}/>
            <input type="number" id="total" name="total" placeholder="Total" onChange={this.handleChange}/>
            <input className={styles['submit']} type="submit" value="Submit"/>
          </form>
        </div>
        <div className={styles['modal']}></div>
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