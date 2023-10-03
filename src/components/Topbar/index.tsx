import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from './styles';
import OutlinedButton from '../OutlinedButton';

type Props = {
  isLoggedChanged?:any,
  isLoggedChangedSignUp?:any,
  handleOpenModalNewRoom: any;
}
export default function Topbar({
  isLoggedChanged,
  isLoggedChangedSignUp,
  handleOpenModalNewRoom
}: Props) {
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
    <OutlinedButton onClick={handleOpenModalNewRoom}>new room</OutlinedButton>
    <div className='row'>
        <Link href="/Settings" className='row' >
          <span className='row' >
            {userLogged}
          </span>
        </Link >
        <Link className='row'  href={'/'} onClick={() => handleLogout()}>
          <span>Sair</span>
      </Link>
    </div>
  </Container>
);
}