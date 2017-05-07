import React from 'react';
import styles from './styles.scss';

class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
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
    return(
      <section className={styles['rsvp']}>
        <div className={styles['container']}>
          <h2>Meld je aan</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="email" id="email" name="email" placeholder="Email" onChange={this.handleChange}/>
            <input type="number" id="total" name="total" placeholder="Aantal gasten" onChange={this.handleChange}/>
            <input className={styles['submit']} type="submit" value="Voeg toe"/>
          </form>
        </div>
        <canvas>

        </canvas>
      </section>
    );
  }
}

export default RSVP;