import { Component } from 'react';
import styles from './Users.module.css';

// class-based component
class User extends Component {
  render() {
    return <li className={styles.user}>{this.props.name}</li>;
  }
}

// FUNCTIONAL COMPONENT
// const User = (props) => {
//   return <li className={styles.user}>{props.name}</li>;
// };

export default User;