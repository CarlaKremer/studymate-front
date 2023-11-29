import React from 'react';
import { FooterContainer } from './styles';

const Footer: React.FC = () => {
    return <FooterContainer>
        <p>&copy; 2023 - Study Mate</p>
        <p>Trabalho de Conclusão de Curso</p>
        <div>
            <a
                href="https://github.com/CarlaKremer/studymate-front"
                target="_blank" rel="noopener noreferrer">Github</a>
        </div>
    </FooterContainer>;
};

export default Footer;
