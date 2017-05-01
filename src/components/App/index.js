import React, { PropTypes } from 'react';
import Menu from './Header/Menu/Menu';
import Header from './Header/Header';
import styles from './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transition: false
    }
  }

  componentWillMount() {
    const transition = this.props.children.props.route.transition;
    this.setState({
      transition: transition
    });
  }

  componentWillReceiveProps(nextProps) {
    const transition = nextProps.children.props.route.transition;
    this.setState({
      transition: transition
    });
  }

  render() {
    return (
      <div style={{height: 80+'vh'}}>
        <Menu transition={this.state.transition}/>
        <div className={styles.content}>
          <Header title="test" transition={this.state.transition}/>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
