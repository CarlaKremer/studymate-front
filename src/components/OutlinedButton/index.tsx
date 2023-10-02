import React from 'react';
import Outlined from './styles';

interface OutlinedButtonProps {
    children: string;
    onClick?: (e: any) => void;
}

const OutlinedButton = ({ children, onClick }: OutlinedButtonProps) => {
    return (
        <Outlined
            onClick={onClick}
        >
            <p>{children}</p>
        </Outlined>
    );
};

export default OutlinedButton;