import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import ASCD from '../../utils/ascd'


var data = [
    { "name": "rick", "cars": ["Corvette Z06", "Lotus Exite S"] },
    { "name": "john", "cars": ["BMW 320D"] },
    { "name": "zing", "cars": ["Honda Jazz", "Honda Click", "Honda Waves"] }
]

var uniq = data => data.find((e, i) => data.indexOf(e) == data.lastIndexOf(e));

class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            information: []
        }
    }
    changeFormat = () => {
        var information = []
        var sorted = ASCD(data, 'string', 'name')
        for (var i in sorted) {
            var name = sorted[i].name.charAt(0).toUpperCase() + sorted[i].name.slice(1);
            information.push(name + " want to buy " + sorted[i].cars.toString())
            this.setState({ information })
        }
    }
    render() {
        const { information } = this.state;
        if (information.length === 0) this.changeFormat()
        return (
            <Container>
                <Helmet title="Front-End" />
                <Row>
                    <Column >
                        <h2>Question#1</h2>
                        {information.map(data => {
                            return (
                                <p>{data}</p>
                            )
                        })}

                    </Column>
                    <Column >
                        <h2>Question#2</h2>
                        <p>
                            <a href="http://todo-test.s3-website-ap-southeast-1.amazonaws.com" target="_blank">
                                Todo App
                                </a>
                        </p>
                        <p>
                            Repository https://github.com/rattanachart/todo.git
                        </p>

                    </Column>
                </Row>
                <Row>
                    <Column >
                        <h2>Question#3</h2>
                        <p>findUniq([ 1, 1, 1, 2, 1, 1 ]) returns  {uniq([1, 1, 1, 2, 1, 1])}</p>
                        <p>findUniq([ 0, 0, 0.55, 0, 0 ]) returns  {uniq([0, 0, 0.55, 0, 0])}</p>

                    </Column>
                    <Column >
                        <h2>Question#4</h2>
                        <p>What are the benefits of using spread syntax and how is it different from rest
                        syntax ?</p>
                        <p>Answer As programs become more complex, it may sometimes be necessary to use
                            two arrays to create a single array. Arrays in Java scripts have the function
                            of connecting two arrays, concat. When using Spread Syntax, the output is the same,
                            but is easier and more convenient to use in configuring.
                        </p>

                    </Column>
                </Row>
                <Row>
                    <Column >
                        <h2>Question#5</h2>
                        <p>1. What is semantic HTML?</p>
                        <p>Answer New HTML5 features that help categorize different content on webpages.</p>
                        <p>2. Why you would like to use semantic tag?</p>
                        <p>Answer Semantic Markup is a writing for Search Engine to easily collect data.
                            Which will enable faster data storage And easier to be ranked as well, and for
                            programmers making it easy to custom and easy to forward.</p>

                    </Column>
                    <Column >
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

export default FirstPage;
