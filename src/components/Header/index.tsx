import React from 'react';
import { HeaderContainer, Logo, Button } from './styles';

interface Props {
    src: string;
    onClick: () => void;
}

const Header: React.FC<Props> = ({ src, onClick }) => {
    return (
        <HeaderContainer>
            <Logo src={src} alt="Logo" />
            <Button onClick={onClick}>Login/Register</Button>
        </HeaderContainer>
    );
};

export default Header;
