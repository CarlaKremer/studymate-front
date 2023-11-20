import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, MenuOpen, TopBar } from "./styles";
import Image from "next/image";

type Props = {
  isLoggedChanged?:any,
  isLoggedChangedSignUp?:any,
  isPersonalActive:boolean,
  setConfigIndex: any
}
export default function ResponsiveSideBar({
  isLoggedChanged,
  isLoggedChangedSignUp,
  isPersonalActive,
  setConfigIndex
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
        <Image
          src={"/assets/icons/menu.svg"}
          alt="ícone de menu"
          width={1}
          height={1}
          className="menu"
          onClick={() => setOpenMenu(!openMenu)}
        />
      </TopBar>

      {openMenu && (
        <MenuOpen>
        <div className="nav">
        <a 
          // className={isPersonalActive ? 'active' : ''}
          onClick={()=>setConfigIndex('personal')}
          >Informaçoes pessoais</a>
        <a 
          // className={!isPersonalActive ? 'active' : ''}
          onClick={()=>setConfigIndex('editRooms')}
          >Editar sala</a>
        </div>
        </MenuOpen>
      )}
    </Container>
  );
}
