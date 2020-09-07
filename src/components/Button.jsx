import React from 'react'
import './styles/button.css'
import {Link} from 'react-router-dom/cjs/react-router-dom.min';

const STYLES = ['btn--primary', 'btn--outline', 'btn--read', 'btn--read--light'];
const SIZES = ['btn--medium', 'btn-large', 'btn--wide'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize, link}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize
        ? buttonSize
        : SIZES[0]);

    return (
        <Link to={link}>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}>
                {children}
            </button>
        </Link>

    );
}