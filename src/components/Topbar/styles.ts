import styled from 'styled-components';

export const Container = styled.div`
    position: sticky;
    top: 0;
    height:5rem;
    /* background-color: #454859; */
    color: #fff;
    padding: 0.625rem 1.25rem;
    margin: 0 0 2rem 0 ;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

  span {
    font-size: 1rem;
    padding: 0.625rem 1rem;
  }

  .row{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }


  Link{
    color: #FAFAFA;
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    display: none;
  }

  `;

export const Logo = styled.img`
  max-height: 50px;
`;
