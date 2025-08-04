import React from "react"
import "./Button.css"


class Button extends React.Component {

	render(){

			if(this.props.className === "add-todo__btn") {
				return(
					<>
						<button className={this.props.className} onClick={this.props.onClick} type="button">{this.props.text}</button>
					</>
				)
			}
	}
}

export default Button