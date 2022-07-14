import { Component } from 'react';
import styles from './Users.module.css';

// class-based component
class User extends Component {
  componentWillUnmount() { // 버튼 클릭으로 유저 리스트가 DOM에서 삭제되기 직전에 이 함수 실행됨
    console.log('User will unmount!'); // 3개의 li 삭제되므로, 콘솔에 3번 찍힘
  }

  render() {
    return <li className={styles.user}>{this.props.name}</li>;
  }
}

// FUNCTIONAL COMPONENT
// const User = (props) => {
//   return <li className={styles.user}>{props.name}</li>;
// };

export default User;