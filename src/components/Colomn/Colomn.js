import React, { PropTypes } from 'react';
import styles from './styles.scss';

class Colomn extends React.Component {
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

  handleOpen() {
    if (this.state.open) {
      this.setState({
        open: false
      });
      return;
    }
    this.setState({
      open: true
    });
  }

  render() {
    let image = null;
    if (this.props.image !== 'undefined' && this.props.image !== null && this.props.type == 'image') {
      image = {background: 'url(' + this.props.image + ') 50% center / cover no-repeat'};
    }

    const open = this.state.open ? {
      display: 'block'
    } : {};

    return (
        <div
          className={styles['col']}
          style={image !== null ? image : {}}>
          <div className={styles['wrapper']}>
            <p className={styles['text']}>
              {this.props.text}
              {this.props.type === 'invite' ? <a href="#" className={styles['button']} onClick={e => this.handleOpen()}>
                Meld je aan!
              </a> : ''}
            </p>
            {this.props.type === 'invite' ? <div className={styles['form']} style={open}>
                <h2>Meld je aan voor de trouwerij</h2>
                <p>We gebruiken alleen je email om een Welkoms mail te sturen en de uitnodiging.</p>
                <form onSubmit={this.handleSubmit}>
                  <input type="email" id="email" name="email" placeholder="Email" onChange={this.handleChange}/>
                  <input type="number" id="total" name="total" placeholder="Total" onChange={this.handleChange}/>
                  <input className={styles['submit']} type="submit" value="Submit"/>
                </form>
              </div> : ''}
            {this.props.type === 'invite' ? <div className={styles['modal']} style={open} onClick={e => this.handleOpen()}/> : ''}
          </div>
        </div>
    );
  }
}

Colomn.protoTypes = {
  type: PropTypes.string,
  position: PropTypes.number,
  text: PropTypes.string,
  image: PropTypes.string
};

export default Colomn;
