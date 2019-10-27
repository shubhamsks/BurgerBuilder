import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
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
            <p><strong>Total price : {props.price}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType = 'Danger' clicked = {props.purchasCancelHandler}>CANCEL</Button>
            <Button btnType = 'Success' clicked= {props.pruchasContinueHandler}>CONTINUE</Button>

        </Aux>
    );
}
export default orderSummary;