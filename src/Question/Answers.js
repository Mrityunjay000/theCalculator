import React from 'react'

const Answers = (props) => {
    // console.log('i am being rendered')
    // console.log('numOne is ' + props.numOne)
    // console.log('numTwo is ' + props.numTwo)
    // console.log('answer is ' + props.answer)
    // console.log('ops is ' + props.ops)
    const right = {
        float: 'right',
        margin: '10px',
        textAlign: 'center',
        color: 'white',
        height: '60px'
    }
    let answer = ''
    if(props.ops != null){
        answer = props.numOne + ' ' + props.ops + ' ' + props.numTwo + " = " + props.answer
    }
    return(
        <div className='mainDivs' style={right}>
            <h4>{answer}</h4>
        </div>
    );
    
}

export default Answers;