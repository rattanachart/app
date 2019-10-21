import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

class BackEndPage extends Component {

    render() {
        return (
            <Container>
                <Helmet title="Direction" />
                <Row>        
                    <Column >
                        <Content>
                            <h2>Todo App</h2>
                            <p>1. Download or clone https://github.com/rattanachart/todo.git</p>
                            <p>2. Access folder</p>
                            <p>3. yarn install</p>
                            <p>4. yarn dev for run app.</p>
                        </Content>
                    </Column>                         
                    <Column >
                        <Content>
                            <h2>Back-End Middle</h2>
                            <p>1. Download or clone https://github.com/rattanachart/testapi.git</p>
                            <p>2. Access folder</p>
                            <p>3. yarn install</p>
                            <p>4. yarn dev for run express.</p>
                        </Content>
                    </Column>
                </Row>
                <Row>          
                    <Column >
                        <Content>
                            <h2>Back-End Junior</h2>
                            <p>1. Download or clone https://github.com/rattanachart/Nodeapi.git</p>
                            <p>2. Access folder</p>
                            <p>3. yarn install</p>
                            <p>4. yarn dev for run express.</p>
                        </Content>
                    </Column>
                    <Column >
                        <Content>
                            <h2>Collection</h2>
                            <p>1. Download Collection this <a href ="https://todo-test.s3-ap-southeast-1.amazonaws.com/Test.postman_collection.json"> link</a>
                            </p>
                            <p>2. Import collection</p>
                            <p>3. Let start api</p>
                        </Content>
                    </Column>
                </Row>
            </Container>
        )
    }

}

const Container = styled.div`
    width: 100%;
    height: 100%;
`;
const Row = styled.div`
    display: flex;
`;
const Column = styled.div`
    flex: 50%;
    padding: 10px;
    /* width: 50%; */
    height: 200px;
`;
const ColumnDisplay = styled.div`
    flex: 50%;
    padding: 10px;
    /* width: 50%; */
    height: 200px;
    background-color: orange;
`;
const Content = styled.div`
    padding: 20px 20px 20px 20px;
    background-color: white;
`;

export default BackEndPage;
