import { Component } from 'react';
import User from './User';

import styles from './Users.module.css';

// CLASS-BASED COMPONENT
class Users extends Component {
  constructor() { // state set up(define, initialize)
    super(); // 상위 클래스의 생성자 호출
    this.state = {
      showUsers: false,
      more: 'Test', // 모든 state를 이 객체 안에
    };
  }

  // state update
  // render() 메서드 안에 함수 정의 X
  // 사용하려는 함수를 메서드로, 여기에 씀 (const 없이)
  toggleUsersHandler() {
    // this.state.showUsers = false; // 이런 식 X
    this.setState((curState) => {
      return { showUsers: !curState.showUsers }; // 반드시 객체 형태로
    })
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => ( // this.props.users는 UserFinder에서 이 컴포넌트로 보내준 유저 배열
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={styles.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// FUNCTIONAL COMPONENT
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={styles.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;