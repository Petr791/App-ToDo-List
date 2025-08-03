import React from "react"
import "./Message.css"


class Message extends React.Component {


		render() {


						if(!this.props.todosArray || this.props.isError || this.props.todosArray === undefined){
							return(
								<>
									<p className="error-message">Произошла ошибка при загрузке задач!</p>
								</>
							)
						}

						if(this.props.todosArray && this.props.isTodosLoading){
								return(
								<>
									<p  className="todos__title">Список задач загружается!</p>
								</>
							)
						}

						if(this.props.todosArray && (this.props.todosArray === null ||  this.props.todosArray.length <= 0)){
								return(
								<>
									<p className="todos__title">Нет выполняемых задач!</p>
								</>
							)
						}

						if(this.props.todosArray  && this.props.todosArray.length > 0){
								return(
								<>
									<p className="todos__title">Задачи для выполнения:</p>
								</>
							)
						}



					
		}

}

export default Message

























class Message1 extends React.Component {

	/* constructor(props) {
		super(props);
	}
 */
		render() {
					return(
								<>

									{/* {console.log(this.props.todosArray)} */}

									{/* Нет массива или ошибка */}
										{(!this.props.todosArray || this.props.isError || this.props.todosArray === undefined) && <p className="error-message">Произошла ошибка при загрузке задач!</p>}

									{/* Mассив есть. Идет загрузка(если с сервера приходят данные) */}
									{(this.props.todosArray && this.props.isTodosLoading) && <p  className="todo__title">Список задач загружается!</p>}


									{/* Массив пришел пустой */}
										{(( this.props.todosArray && (this.props.todosArray === null ||  this.props.todosArray.length <= 0)) ) && <> <p className="todo__title">Нет выполняемых задач!</p>
									</>}

									{/* Массив пришел с задачами */}
										{(this.props.todosArray  && this.props.todosArray.length > 0) && <> <p className="todo__title">Задачи для выполнения:</p>
										</>}

								</>
					)
		}

}
