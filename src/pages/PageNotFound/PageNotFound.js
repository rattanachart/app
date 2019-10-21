import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

export default () => {
    return (
        <Container>
            <Helmet title="Page not found " />
            404 |&nbsp;Page not found />
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #202020;
`;
