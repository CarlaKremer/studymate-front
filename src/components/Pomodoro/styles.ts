import styled from 'styled-components'

type Props = {
  active: any
}

export const Container = styled.div`
  height: 100%;

  margin: 0 auto;
  padding: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  h1 {
    color: #2e384d;
  }
  
  h2 {
    color: #b3b3b3;
    font-weight: bold;
  }
`


export const Timer = styled.div`
  margin: 1rem 0 1rem 0;

  display: flex;
  align-items: center;

  line-height: 0rem;
  font-size: 2rem;
  color: #fafafa;
`

export const ContainerButtons = styled.div<Props>`
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 1rem;

  button {
    padding: 15px 15px;
    font-size: 1rem;

    border: 1px solid #FAFAFA;
    border-radius: 0.75rem;
    color: #fff;

    transition: all 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .start {
    background: var(--green);

    &:hover {
      background: var(--darkgreen);
    }
  }

  .stop {
    background: var(--red);

    &:hover {
      background: var(--darkred);
    }
  }

  .reset {
    background: rgba(90, 90, 90, 0.6);
    
    &:hover {
      background: rgba(90, 90, 90, 0.9);
    }
  }

  .finish {
    background: darkred;
    
    &:hover {
      background: rgba(50, 50, 50, 1);
    }
  }
`