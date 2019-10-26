import React from "react";
import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControl = props => {
  return (
		<div className={styles["BuildControls"]}>
			<p>Current price <strong>{props.totalPrice}</strong></p>
			{
				controls.map((ctrl) => {
					return <BuildControl
						label={ctrl.label}
						added={() => props.ingredientAdded(ctrl.type)}
						removed={() => props.ingredientRemoved(ctrl.type)}		
						disabled = {props.disableInfo[ctrl.type]}
					/>
				})
			}
			<button className={styles.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>
		</div>
  );
};
export default buildControl;
