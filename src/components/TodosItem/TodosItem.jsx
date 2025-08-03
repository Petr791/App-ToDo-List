import React from "react"
import { DeleteIcon } from "../Icon/Icon"
import "./TodosItem.css"


class TodosItem extends React.Component {

	render(){

			return (
						<>

							<li className="todo-item">
									<div className="todo-item__checkbox">
												<input id="{this.props.itemId}" className="todo-item__input"  type="checkbox" name="myCheckbox" 
											checked={this.props.checked}
											onChange={(event) => this.props.onChangeCheckbox(this.props.itemId, event)}
											/>
									</div>
										

									<p className={(this.props.checked) ? "todo-item__title todo-item__title_done" : "todo-item__title"}>{this.props.title}</p>
												
									<button className="todo-item__delete-btn" type="button"	
									onClick={() => this.props.onClick(this.props.itemId)}>
								
										<DeleteIcon
											className="delete-icon"
											viewBox="0 0 15 15"
											width="100%"
											height="100%"
											fill="#009999" />
									</button>

							</li>
						</>
				)
	}
}

export default TodosItem