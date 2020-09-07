import React from 'react'
import './styles/buttonPrices.css'
import {Link} from 'react-router-dom/cjs/react-router-dom.min';

const STYLES = ['btnP--primary', 'btnP--outline'];
const SIZES = ['btnP--medium', 'btnP--large', 'btnP--wide'];

export const ButtonPrices = ({children, type, onClick, buttonStyle, buttonSize, link}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize
        ? buttonSize
        : SIZES[0]);

    return (
        <Link to={link}>
            <button
                className={`btnP ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}>
                {children}
            </button>
        </Link>

    );
}