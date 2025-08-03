import React from "react"
import "./TodosList.css"
import TodosItem from "../TodosItem/TodosItem"

class TodosList extends React.Component {


	render(){

			return (
					<>

						<div className={(this.props.todosArray  && this.props.todosArray.length > 0) ? "todos-list-wrapper active-bg" : "todos-list-wrapper"}>

							<ul className="todos-list">
								{(this.props.todosArray && this.props.todosArray !== null) && this.props.todosArray.map((item) =>(
								
										<TodosItem
											key={item.id}
											itemId={item.id}
											checked={item.checked}
											onChangeCheckbox={(id, event) => this.props.onChange(id, event)}
											title={item.title}
											onClick={() => this.props.onClick(item.id)}
										/>
									)
								)}
							</ul>
						</div>

						
					</>
				)
	}
}

export default TodosList