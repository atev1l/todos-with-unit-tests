import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Index from "../components/TodoApp";

describe('TodoApp', () =>{
    test('Добавление задачи', () => {
        render(<Index />);
        const input = screen.getByPlaceholderText('What needs to be done?');

        fireEvent.change(input, { target: { value: 'Новая задача' } });

        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

        const taskText = screen.getByText('Новая задача');

        expect(taskText).toBeInTheDocument();
    });

    test('Отметка выполненных задач', () => {
        render(<Index />);

        const input = screen.getByPlaceholderText('What needs to be done?');
        fireEvent.change(input, { target: { value: 'Новая задача' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

        const taskText = screen.getByText('Новая задача');
        expect(taskText).toBeInTheDocument();

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);

        expect(checkbox).toBeChecked();
    });

    test('Очистка выполненных задач', () => {
        render(<Index />);

        const input = screen.getByPlaceholderText('What needs to be done?');
        fireEvent.change(input, { target: { value: 'Новая задача' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

        const taskText = screen.getByText('Новая задача');
        expect(taskText).toBeInTheDocument();

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);

        expect(checkbox).toBeChecked();

        const clearCompletedButton = screen.getByText('Clear completed');
        fireEvent.click(clearCompletedButton);

        expect(screen.queryByText('Новая задача')).not.toBeInTheDocument();
    });

    test('Переключение фильтров', () => {
        render(<Index />);

        const input = screen.getByPlaceholderText('What needs to be done?');
        fireEvent.change(input, { target: { value: 'Новая задача' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

        const taskText = screen.getByText('Новая задача');
        expect(taskText).toBeInTheDocument();

        const allFilterButton = screen.getByText('All');
        const completedFilterButton = screen.getByText('Active');
        const uncompletedFilterButton = screen.getByText('Completed');

        fireEvent.click(completedFilterButton);

        expect(taskText).toBeInTheDocument();

        fireEvent.click(uncompletedFilterButton);

        expect(screen.queryByText('Новая задача')).not.toBeInTheDocument();

        fireEvent.click(allFilterButton);

        expect(screen.getByText('Новая задача')).toBeInTheDocument();
    });

})


