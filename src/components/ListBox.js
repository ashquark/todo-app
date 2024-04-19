import React, { useState } from "react";
import TodoList from "./TodoList";
import "bootstrap/dist/css/bootstrap.css";

function ListBox() {
    const [listName, setListName] = useState("My List");
    const [inputValue, setInputValue] = useState("");
    const [listItems, setListItems] = useState([]);

    const handleNameChange = (event) => {
        setListName(event.target.value);
    }

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleAddListItem = () => {
      const trimmedValue = inputValue.trim();

      if (trimmedValue) {
        const newListItem = {
          itemText: trimmedValue,
          complete: false,
        };

        setListItems((prevListItems) => [...prevListItems, newListItem]);
        setInputValue(""); // Clear the input field after adding an item
      }
    };

    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleAddListItem();
      }
    };

    const handleDeleteListItem = (itemIndex) => {
      setListItems((listItems) => listItems.filter((_, index) => index !== itemIndex));
    };

    const toggleCompleteListItem = (itemIndex) => {
      setListItems((listItems) =>
        listItems.map((listItem, index) =>
          index === itemIndex ? { ...listItem, complete: !listItem.complete } : listItem
        )
      );
    };

    return (
      <div className="mt-5 container d-flex justify-content-center">
          <div className="card border border-0" style={{ width: "800px" }}>
              <div className="card-body">
                <input 
                    type="text" 
                    className="form-control border border-0 shadow-none"
                    placeholder={listName}
                    value={listName}
                    onChange={handleNameChange}
                    style={{ fontWeight: "bold", fontSize: "1.5rem" }} 
                />
                <TodoList
                    listItems={listItems}
                    deleteListItem={handleDeleteListItem}
                    toggleCompleteListItem={toggleCompleteListItem}
                />
                <div className="mt-2 input-group mb-3 border border-dark-subtle rounded-2 align-items-center fw-bold">
                    <input
                        type="text"
                        className="form-control border-primary border-0 shadow-none"
                        placeholder="Add Item"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                    />
                    <button className="btn border-0 align-middle ms-3 me-2 mt-0 mb-0 ps-3 pe-3" type="button" onClick={handleAddListItem}>
                        →
                    </button>
                </div>
              </div>
          </div>
      </div>
    );
}

export default ListBox;
