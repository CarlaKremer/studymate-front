import React from 'react';
import { InfoSectionContainer, InfoSectionRow, Image, BigLogo } from './styles';


const InfoSection: React.FC = () => {
    return (
        <InfoSectionContainer>
            <h2>Sobre o projeto</h2>
            <p>
                Um lugar para você se conectar com seus colegas e estudar juntos.
                Sem distrações, sem interrupções, apenas foco.
            </p>
            <InfoSectionRow>
                <div>
                    <p>
                        Aproveite as nossas funcionalidades para melhorar o seu desempenho
                    </p>

                    <ul>
                        <li>Gerenciamento de usuários</li>
                        <li>Criação e gerenciamento de salas</li>
                        <li>Chat em tempo real dentro das salas</li>
                        <li>Chat de áudio interativo</li>
                        <li>Compartilhamento de tela</li>
                        <li>Timer para estudo pelo método pomodoro</li>
                        <li>Registro de afazeres e objetivos durante a sessão</li>
                    </ul>
                </div>
                <Image src="/assets/images/landing-page-image.jpg" alt="" />
            </InfoSectionRow>
                <BigLogo src="/assets/icons/study-mate.svg" alt="" />
        </InfoSectionContainer>
    );
};

export default InfoSection;
