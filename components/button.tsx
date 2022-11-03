import React from "react";

interface IButtonProps {
    children?: React.ReactNode;
    props?: any;
    onClick?: any;
}

const ClickEventButton: React.FC<IButtonProps> = ({ onClick, children, ...props }) => {
    return (
        <button {...props} onClick={onClick}>
            {children}
        </button>
    );
};

export default ClickEventButton;
