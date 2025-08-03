import React from "react"
import { v4 as uuidv4 } from "uuid"
import "./reset.css"
import "./App.css"

import Container from "./components/Container/Container"
import Heading from "./components/Heading/Heading"
import AddTodoBlock from "./components/AddTodoBlock/AddTodoBlock"
import TodosList from "./components/TodosList/TodosList"
import Message from "./components/Message/Message"

const appTitle = "СПИСОК ЗАДАЧ";

class App extends React.Component {

	constructor(props) {
			super(props);
			// Инициализация состояния
			this.state = {
				//todosArray: this.getInitialTodos(),
				todosArray: null,
				isError: false,
				isTodosLoading: false,
				inputValue: '',
				
			};

			this.handleInputChange = this.handleInputChange.bind(this);
			this.handleStorageChange = this.handleStorageChange.bind(this);
	}


	// установка начального значения в state(todosArray)
	getInitialTodos(){

		this.setState({isError: false });
		this.setState({isTodosLoading: true });

		const storedItems = localStorage.getItem('todos');

		 if (!storedItems) {
			localStorage.setItem('todos', JSON.stringify([]));;
			return [];
		}

		if(storedItems){
				this.setState({isTodosLoading: false });
				return JSON.parse(storedItems);
		} 
	}


	componentDidMount() {
		window.addEventListener('storage', this.handleStorageChange);
    // Загрузка данных из localStorage при монтировании компонента
     this.setState({todosArray: this.getInitialTodos() });
  }


   componentWillUnmount() {
		//При размонтировании компонента отписываемся от события storage, чтобы избежать утечек памяти. 
   window.removeEventListener('storage', this.handleStorageChange);
  }

  // обрабатывает событие storage.
   handleStorageChange() {
    const value = localStorage.getItem('todos');
      if (value === null) {
        // Ключ был удален
		  localStorage.setItem('todos', JSON.stringify([]));
		  this.setState({todosArray: [] });
        //console.log('Ключ "todos" был удален из localStorage');
      } 
  }

  // сохранение задач в localStorage
	saveItemsToLocalStorage() {
		localStorage.setItem('todos', JSON.stringify(this.state.todosArray));
	}

	// изменение значения в поле ввода новой задачи
	handleInputChange(e) {
			this.setState({inputValue: e.target.value});
	}

	// обработка клика по кнопке "Добавить задачу"
	handleAddTodoBtnClick = () => {
		const todoTitle = this.state.inputValue;

		if (todoTitle && todoTitle.trim() !== '') {
			// Значение не пустое и не состоит только из пробелов
			this.addTodo(todoTitle);
			this.setState({inputValue: ''});
		} else {
			//console.log('Поле ввода пустое или содержит только пробелы');
   	}
  }	

  // добавление задачи
  addTodo = (todoTitle) => {

		const newTodo = {
			id: uuidv4(),
			title: todoTitle,
			checked: false
		}

    this.setState(prevState => {
      const updatedTodosArray = [...prevState.todosArray, newTodo];
      return { todosArray: updatedTodosArray };
    }, () => {
      this.saveItemsToLocalStorage();
    });
  };

  	// удаление задачи
	handleDeleteTodo = (id) => {
		this.setState(prevState => {
			const updatedTodosArray = prevState.todosArray.filter(item => item.id !== id);
			return { todosArray: updatedTodosArray };
		}, () => {
			this.saveItemsToLocalStorage();
		});
  };

  // изменение чекбокса
	
	handleCheckboxChange = (parentId, event) =>  {

	const isChecked = event.target.checked;

    this.setState(prevState => {
      const newTodosArray = prevState.todosArray.map(item => {
        if (item.id === parentId) {
          return { ...item, checked: isChecked };
        }
        return item;
      });
      return { todosArray: newTodosArray };

    }, () => {
			this.saveItemsToLocalStorage();
		});
  };





	render() {

		return (

			<>
				<Container>

					{(this.state.isError === true) ? <>
							<Message
								todosArray={this.state.todosArray}
								isTodosLoading={this.state.isTodosLoading}
								isError={this.state.isError} /></>
							: <>
							<Heading 
								level="h1"
								text={appTitle} />

							<AddTodoBlock
								inputValue={this.state.inputValue}
								onChangeInput={this.handleInputChange}
								onClickBtn={this.handleAddTodoBtnClick} />

							<Message
								todosArray={this.state.todosArray}
								isTodosLoading={this.state.isTodosLoading}
								isError={this.state.isError} />

							<TodosList
								todosArray={this.state.todosArray}
								isError={this.state.isError}
								isTodosLoading={this.state.isTodosLoading}
								onChange={(id, event) => this.handleCheckboxChange(id,event)}
								onClick={(id) => this.handleDeleteTodo(id)} />

					</>}

				</Container>
			</>
			
		)
		
	}
}

export default App