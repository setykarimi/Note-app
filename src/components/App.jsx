import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import '../style.css'
function App() {

    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }


    function deleteItem(id)
    {
        setItems(prevItems =>{
            return prevItems.filter((item,index)=>
            {
                return index !==id
            })
        })
    }

    function addItem() {
        setItems(prevItems => {
            return [...prevItems, inputText];
        });
        setInputText("");
    }

    return (
        <div className="container">
            <div className="heaading">
                <h1>To-Do List</h1>
            </div>

            <div className="form">
                <input type="text"
                    onChange={handleChange}
                    value={inputText}
                />
                <button onClick={addItem}>
                    <span>Add</span>
                </button>
            </div>
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