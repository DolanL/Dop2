import React from 'react';


type ButtonPropsType = {
    nickname: string;
    callback: () => void;
}

const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.callback();
    }

    return (
        <button onClick={onClickHandler}>{props.nickname}</button>
    );
};

export default Button;