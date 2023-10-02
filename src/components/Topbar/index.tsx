import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from './styles';
import OutlinedButton from '../OutlinedButton';

export default function Topbar(
  isLoggedChanged: any,
  isLoggedChangedSignUp: any
) {
  const [userLogged, setUserLogged] = useState<any>(null);

  function handleLogout() {
    localStorage.clear();
    sessionStorage.clear();
    // router.push("/Home");
    window.location.reload();
  }
  
  useEffect(() => {
    const sessionStorageUser = sessionStorage.getItem("username");
    if (sessionStorageUser != null) {
      setUserLogged(JSON.parse(sessionStorageUser));
    }
  }, [isLoggedChanged, isLoggedChangedSignUp]);
  
return (
  <Container>
    <p>StudyMate :D</p>
    <OutlinedButton>new room</OutlinedButton>
    <div className='row'>
        <Link href="/Settings" className='row' >
          <Image
            className="icon"
            src="./assets/icons/settings.svg"
            width={32}
            height={32}
            alt="ícone de usuário"
          />
        </Link>
        <Image
          className="user"
          src="./assets/icons/user.svg"
          width={32}
          height={32}
          alt="ícone de usuário"
        />
        <span>
          {userLogged}
        </span>
        <Link href={'/'} className='logout' onClick={() => handleLogout()}>
        <Image
          className="icon"
          src="./assets/icons/logout.svg"
          width={32}
          height={32}
          alt="ícone de sair"
        />
      </Link>
    </div>
  </Container>
);
}