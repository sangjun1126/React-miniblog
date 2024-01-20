import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
    padding : 8px 16px;
    font-size : 16px;
    border-width : 1px;
    border-radius : 8px;
    cursor : pointer;
`;

// 버튼 컴포넌트에서 props로 받은 타이틀이 버튼 목록에 표시되도록 함
// styled Component를 사용하여 button 태그에 스타일을 준 컴포넌트도 완료

function Button(props) {
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || 'button'}</StyledButton>
}

export default Button;