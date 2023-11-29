import React, { ReactNode } from 'react';
import {
    HeroContainer,
    TextContainer,
    ImageContainer,
    HeroImage,
} from './styles';

interface HeroProps {
    imageSrc: string;
    children: ReactNode;
}

const Hero: React.FC<HeroProps> = ({ imageSrc, children }) => {
    return (
        <HeroContainer>
            <TextContainer>
                {children}
            </TextContainer>
            <ImageContainer>
                <HeroImage src={imageSrc} alt="Hero" />
            </ImageContainer>
        </HeroContainer>
    );
};

export default Hero;
