import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExemple";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(()=> {
         fetchUsers()
        fetchTodos()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        }catch (e) {
            console.log(e)
        }
    }
    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        }catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <EventsExample/>
           <Card width={'200px'} height={'200px'} variant={CardVariant.primary} onClick={(num)=> console.log('clicked', num)}>
               <button>Button</button>
           </Card>
            <List items={users} renderItem={(user)=> <UserItem user={user} key={user.id}/>}/>
            <List items={todos} renderItem={(todo: ITodo)=> <TodoItem todo={todo} key={todo.id}/>}/>

        </div>
    );
};

export default App;
