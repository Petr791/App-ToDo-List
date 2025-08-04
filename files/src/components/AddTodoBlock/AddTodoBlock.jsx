import React from "react"
import "./AddTodoBlock.css"
import Input from "../Input/Input"
import Button from "../Button/Button"

class AddTodoBlock extends React.Component {

	render(){

			return (
					<div className="add-todo">
						<Input
							type="text"
							value={this.props.inputValue} 
							placeholder="Новая задача"
							onChange={this.props.onChangeInput} />
						
						<Button 
							className="add-todo__btn"
							onClick={this.props.onClickBtn}
							text="Добавить задачу" />

					</div>
				)
	}
}


export default AddTodoBlock