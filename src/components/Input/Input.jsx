import React from "react"
import "./Input.css"

class Input extends React.Component {
	
	render() {

		return(
			<>
					<div className="add-todo__input-wrapper">
							<input
								className="add-todo__input"
								type={this.props.type}
								value={this.props.value}
								placeholder={this.props.placeholder}
								onChange={this.props.onChange} />
						</div>
			</>
		)
	}
}

export default Input