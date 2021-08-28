import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import InputArea from './InputArea';
import '../style.css';
function App() {

    const [items, setItems] = useState([]);

    


    function deleteItem(id)
    {
        setItems(prevItems =>{
            return prevItems.filter((item,index)=>
            {
                return index !==id
            })
        })
    }

    function addItem(inputText) {
        setItems(prevItems => {
            return [...prevItems, inputText];
        });
    }

    return (
        <div className="container">
            <div className="heaading">
                <h1>To-Do List</h1>
            </div>

            <InputArea 
                onAdd={addItem}
            />

            <div>
                <ul>
                    {items.map((item,index) => 
                    <ToDoItem 
                        text={item}
                        key={index}
                        id={index}
                         onChecked={deleteItem}
                    />)}
                </ul>
            </div>
        </div>
    )
}

export default App;