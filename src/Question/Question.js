import React, { Component } from 'react';
import Answers from './Answers';

class Question extends Component {
    state = {
        num1: 0,
        num2: 0,
        ans: 0,
        operation: null,
        
    }
    render() {
        const button = {
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '5px',
            fontSize: '15px'
        }
        const right = {
            float: 'right',
            margin: '10px',
            textAlign: 'center',
            color: 'white'
        }
        const left = {
            float: 'left',
            margin: '10px',
            textAlign: 'center',
            color: 'white',
            padding: '16px'
          }
        // let num1 = 0;
        // let num2 = 0;

        const addition = () => {
            this.setState({
                ans: parseFloat(this.state.num1) + parseFloat(this.state.num2),
                operation: '+'
            })
            //console.log(this.state.ans); 
        }
        const subtraction = () => {
            this.setState({
                ans: parseFloat(this.state.num1) - parseFloat(this.state.num2),
                operation: '-'
            })
            //console.log(this.state.ans);    
        }
        const multiplication = () => {
            this.setState({
                ans: parseFloat(this.state.num1) * parseFloat(this.state.num2),
                operation: 'x'
            })
            //console.log(this.state.ans);    
        }
        const division = () => {
            this.setState({
                ans: parseFloat(this.state.num1) / parseFloat(this.state.num2),
                operation: '/'
            })
            //console.log(this.state.ans);    
        }

        const getValueOne = (event) => {
            this.setState({
                num1: event.target.value,
            })

            //num1 = event.target.value;
            //console.log('last item of nums1 is ' + this.state.nums1[nums1.length-1]);
        }
        const getValueTwo = (event) => {
            this.setState({
                num2: event.target.value
            })

            //num1 = event.target.value;
            //console.log('last item of nums2 is ' + this.state.num2.length-1);
        }

        const tempStyle = {
            //backgroundColor: 'yellow',
            height: '450px'
        }

        // const addAnswer = () => {
        //     console.log('i was here')
        //     this.state.answerComps = [...this.state.answerComps, <Answers 
        //                 // numOne = {this.state.num1}
        //                 // numTwo = {this.state.num2}
        //                 // answer = {this.state.ans}
        //                 // ops = {this.state.operation}
        //     />]
        //     // this.setState({
        //     //     answerComps: [...answerComps, ]
        //     // })

        //     // answerComps.map((output) => {
        //     //     return <Answers 
        //     //         numOne = {output.numOne}
        //     //         numTwo = {output.numTwo}
        //     //         ans = {output.answer}
        //     //         ops = {output.ops}
        //     //     />
        //     // })
        // }

        return (
            <div style={tempStyle}>
                <div className='mainDivs' style={left}>
                    <h4>Enter two numbers:</h4>
                    <input type='text' onChange={getValueOne}/><br></br><br></br>
                    <input type='text' onChange={getValueTwo}/><br></br><br></br>
                    <button onClick={addition} style={button}>Add</button><br></br><br></br>
                    <button onClick={subtraction} style={button}>Subtract</button><br></br><br></br>
                    <button onClick={multiplication} style={button}>Multiply</button><br></br><br></br>
                    <button onClick={division} style={button}>Divide</button><br></br><br></br>
                    
                </div>

                
                <Answers 
                    numOne = {this.state.num1}
                    numTwo = {this.state.num2}
                    answer = {this.state.ans}
                    ops = {this.state.operation}
                />

                    
                
             </div> 
                
            
        );
    }
    
}


export default Question;