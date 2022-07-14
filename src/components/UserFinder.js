import { Fragment, Component } from 'react';

import Users from './Users';
import styles from './UserFinder.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: [], // HTTP 요청 보내 서버 DB에서 (위의 DUMMY_USERS를) 받아온다고 가정
      searchTerm: '',
    };
  }

  // lifecycle method // side effect: http request
  componentDidMount() { // 컴포넌트 첫 렌더 때만 호출(&실행)되므로 if문 통한 체크 필요 X
    // Send http request...
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  // lifecycle method // side effect 처리 위해
  componentDidUpdate(prevProps, prevState) {
    // state 변경으로 컴포넌트 재평가해야 할 때 자동으로 호출
    if (prevState.searchTerm !== this.state.searchTerm) { // 무한루프 방지 if문
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  // method // to update state
  searchChangeHandler(e) {
    // 이벤트 객체 여기서 그냥 받으면 되는군
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={styles.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} /> {/* props로 users 배열을 전달 */}
      </Fragment>
    );
  }
}

// FUNCTIONAL COMPONENT
// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={styles.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} /> {/* props로 users 배열을 전달 */}
//     </Fragment>
//   );
// };

export default UserFinder;
