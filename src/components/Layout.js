import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
    return (
        <Container>{children}</Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: row;
    background: #f9f9f9;
    overflow: hidden;
`;

export default Layout;
