import React from 'react';
import {
	render,
	screen,
	fireEvent
} from '@testing-library/react';
import App from './App';


test('handles button click and input change', () => {
	render(< App /> );
	// eslint-disable-next-line testing-library/no-debugging-utils
	screen.debug(); // Выводит текущий DOM в консоль

	// Найти кнопку и поле ввода
	const buttonElement = screen.getByText('Добавить задачу');
	const inputElement = screen.getByPlaceholderText('Новая задача');


	// Ввести текст в поле
	fireEvent.change(inputElement, { target: { value: 'Задача-1' } });
	expect(inputElement).toHaveValue('Задача-1');
	// Нажать на кнопку
	fireEvent.click(buttonElement);


	// Ввести текст в поле
	fireEvent.change(inputElement, { target: { value: 'Задача-2' } });
	expect(inputElement).toHaveValue('Задача-2');
	// Нажать на кнопку
	fireEvent.click(buttonElement);


	// eslint-disable-next-line testing-library/no-debugging-utils
	screen.debug(); // Выводит текущий DOM в консоль

});