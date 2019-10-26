import React from 'react';
import Aux from '../../../hoc/Auxiliary';
const orderSummary = (props)=>{
    const ingredientSummary = Object.keys(props.ingredeints)
    .map(igKey =>{
        return (<li key ={igKey}>
            <span style ={{textTransform:'captalize'}}>{igKey}</span>: {props.ingredeints[igKey]}
            </li>
        )
    });
    return(
        <Aux>
            <h3>Your order summary </h3>
            <p> A delicious burger with following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout</p>
        </Aux>
    );
}
export default orderSummary;