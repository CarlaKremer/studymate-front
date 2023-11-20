import styled from "styled-components";

export const Container = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 5px; 
  
  @media (max-width: 1024px) {
    padding-top: 0px; 
    display: block;
    position: stick;
    z-index: 999;
    height: 100%;
    top: 0;
    bottom: 0;
  }
`;

export const TopBar = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  background-color: ${({ isOpen }) => isOpen ? "rgba(0, 0, 0, 0.8)" : 'transparent'};

  .logo {
    width: 7.5rem;
    height: 3rem;
  }

  .menu {
    width: 2rem;
    height: 2rem;
  }
`;

export const MenuOpen = styled.div`
  /* position: absolute; */
  width: 100%;
  height: 100%;
  background-color: var(--light-color);
  display: flex;
  padding: 1.25rem;
  background-color: rgba(0, 0, 0, 0.8);
  a {
      margin-left: 1rem;
      font-size: 1rem;
    }

  .nav{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .nav-item{
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &.active{
      .icon {
        background: var(--primary-color);
      }
      color: var(--primary-color);
    }
  }
`;
