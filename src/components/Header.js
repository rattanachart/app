import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

class Header extends Component {

    render() {

        return (
            <Container>
                <h1>Test</h1>
            </Container>
        );
    }
}

const Container = styled.div`
  user-select: none;
  padding: 0 60px 0 30px;
  width: calc(100% - 50px);
  height: 50px;
  box-sizing: border-box;
  background-color: $white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  // box-shadow: 0 3px 10px rgba(0, 0, 0, 0.0895);
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  &.expanded {
    width: calc(100% - 200px);
  }
`;


export default Header;
