import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, MenuOpen, TopBar } from "./styles";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import OutlinedButton from "../OutlinedButton";

type Props = {
  isLoggedChanged?:any,
  isLoggedChangedSignUp?:any,
  handleOpenModalNewRoom: any;
}
export default function ResponsiveTopBar({
  isLoggedChanged,
  isLoggedChangedSignUp,
  handleOpenModalNewRoom
}: Props) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userLogged, setUserLogged] = useState<any>(null);
  
  function handleLogout() {
    localStorage.clear();
    sessionStorage.clear();
    // router.push("/Home");
    window.location.reload();
  }

  function handleMenu (){
    setIsOpen(!isOpen);
    setOpenMenu(!openMenu)
  }

  
  useEffect(() => {
    const sessionStorageUser = sessionStorage.getItem("username");
    if (sessionStorageUser != null) {
      setUserLogged(JSON.parse(sessionStorageUser));
    }
  }, [isLoggedChanged, isLoggedChangedSignUp]);

  return (
    <Container isOpen={openMenu}>
      <TopBar isOpen={openMenu}>
        <p>StudyMate</p>
        <Image
          src={"/assets/icons/menu.svg"}
          width={1}
          height={1}
          className="menu"
          onClick={() => setOpenMenu(!openMenu)}
        />
      </TopBar>

      {openMenu && (
        <MenuOpen>
        <div className="nav">
          <a onClick={handleOpenModalNewRoom}>Nova sala</a>
          <Link href="/Settings" className='row' >
            <span className='row' >
              {userLogged}
            </span>
          </Link >
          <Link className='row'  href={'/'} onClick={() => handleLogout()}>
            <span>Sair</span>
          </Link>
        </div>
        </MenuOpen>
      )}
    </Container>
  );
}
