import { useSession, signOut, signIn } from 'next-auth/react';
import { Dropdown, Button } from 'react-bootstrap';
import styles from './ProfileDropdownMenu.module.css';

const ProfileDropdownMenu = () => {
  const { data: session, status } = useSession();

  const handleLogout = () => {
    signOut();
  };

  const handleLogin = () => {
    signIn();
  };

  if (status === 'authenticated') {
    console.log(session.user)
    return (
      <Dropdown className={styles.profileDropdown}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <img src={session.user?.image} width={'30 px'} style={{borderRadius: '50%'}}/>
          {' '}{session.user.name || 'Profile'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  return (
    <Button className={styles.loginButton} onClick={handleLogin}>
      Login
    </Button>
  );
};

export default ProfileDropdownMenu;
