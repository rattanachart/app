import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

class MiddlePage extends Component {

    render() {
        return (
            <Container>
                <Helmet title="Front-End" />
                <Row>
                    <Column >
                        <h2>Question#1</h2>
                        <p>
                            <a href="https://jsfiddle.net/rattanachart/uvhqg5yL/133/" target="_blank">
                                Profile Card
                                </a>
                        </p>
                        <p>https://jsfiddle.net/rattanachart/uvhqg5yL/133/</p>
                    </Column>
                    <Column >
                        <h2>Question#3</h2>
                        <p>That partially applied functions are often useful themselves,
                            because they allow you to derive functionality without having to declare
                            a separate function each time. This applies not only to simple cases such
                            as deriving inc from a partial applied add, but also for far more complex examples.</p>
                    </Column>
                </Row>
                <Row>

                    <Column >
                        <h2>Question#4</h2>
                        <p>Explain the difference between mutable and immutable objects.</p>
                        <p> What is an example of an immutable object in JavaScript? </p>
                        <p>Answer Object.freeze(obj)</p>
                        <p>What are the pros and cons of immutability?</p>
                        <p>Answer An immutable object remains in exactly one state, the state in which it was created.
                            Therefore, immutable object is thread-safe so there is no synchronization issue.
                            They cannot be corrupted by multiple threads accessing them concurrently.
                            This is far and away the easiest approach to achieving thread safety.
                            and immutable classes are easier to design, implement, and use than mutable classes.</p>

                    </Column>
                </Row>
                <Row>
                    <Column>
                        <h2>Question#1</h2>
                        <p>How to apply validation on props in React?</p>
                        <p>Answer PropTypes is used for props validation.</p>
                        <p>2. What are Higher-Order Components?</p>
                        <p>Answer Higher-Order Components is a function that takes a component and returns a new component.</p>
                    </Column>
                    <Column>
                        <ButtonC>

                            <Checkout><i class="fas fa-star" />CHECKOUT<i class="fas fa-star" /></Checkout>

                        </ButtonC>
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
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
    flex-direction: row;
`;
const Column = styled.div`
    background-color: #ffffff;
    box-shadow: 0px 3px 6.5px rgba(0, 0, 0, 0.0795);
    border-radius: 2px;
    padding: 15px 10px 10px 15px;
    margin: 10px;
    height: 160px;
    overflow: auto;
    flex: 1;
    position: relative;
    &:hover {
      box-shadow: 0px 7px 12px rgba(0, 0, 0, 0.1325);
    }
`;
const ButtonC = styled.button`
    width: 150px;
    height:30px;
    border-radius: 5px;
    border: 1px solid #000;

`;
const Checkout = styled.div`
    font-weight: bold;
`;


export default MiddlePage;
