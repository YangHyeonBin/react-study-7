import { useSyncExternalStore } from 'react';
import styles from './Users.module.css';

const User = (props) => {
  return <li className={styles.user}>{props.name}</li>;
};

export default User;