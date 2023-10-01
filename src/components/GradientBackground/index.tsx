import React from 'react';
import Gradient from './styles';

type gradientBackgroundProps = {
    children?: any;
};

const GradientBackground = ({ children }: gradientBackgroundProps) => {
    return (
        <Gradient>
            {children}
        </Gradient>
    );
};

export default GradientBackground;