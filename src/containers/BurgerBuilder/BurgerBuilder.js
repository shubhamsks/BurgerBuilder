import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
const INGREDIENT_PRICES = {
	salad: 10,
	cheese: 20,
	meat: 50,
	bacon:5,
}
class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
			},
			totalPrice: 30,
			purchasable:false
    };
	}
	updatePurchaseState = (ingredeints) => {
		const keys = Object.keys(ingredeints);

		let sum = 0;
		keys.forEach(element => {
			sum = sum + ingredeints[element];
		});
		this.setState({ purchasable: sum > 0 });
		
	}
	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients,
		}
		updatedIngredients[type] = updatedCount;
		const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients,
		});
		this.updatePurchaseState(updatedIngredients);
	}
	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients,
		}
		updatedIngredients[type] = updatedCount;
		const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients,
		});
		this.updatePurchaseState(updatedIngredients);
	}

	render() {
		const disableInfo = {
			...this.state.ingredients
		};
		for (let key in disableInfo) {
			disableInfo[key] = disableInfo[key] <= 0;
		}
    return (
      <Aux>
        <Burger ingredients = {this.state.ingredients} />
				<BuildControls
					purchasable = {this.state.purchasable}
					totalPrice = {this.state.totalPrice}
					disableInfo = {disableInfo}
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved = {this.removeIngredientHandler}
				/>
      </Aux>
    );
  }
}
export default BurgerBuilder;