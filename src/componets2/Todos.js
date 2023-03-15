import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllTodos } from '../services2/actions/todosAction';

const Todos = () => {
    const { isLoading, todos, error } = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos('https://jsonplaceholder.typicode.com/todos'));
    }, [dispatch]);

    return (
        <div>
            <h1 className="text-7xl font-bold text-center text-violet-600">Todos Here</h1>
            {isLoading && 'Loading...'}
            {error && <h2>{error.message}</h2>}
            {todos &&
                todos.map((todo) => {
                    return (
                        <h4 key={todo.id} className="text-2xl font-bold">
                            {todo.title.slice(0, 100)}
                        </h4>
                    );
                })}
        </div>
    );
};

export default Todos;
