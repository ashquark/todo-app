import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function TodoList({ listItems, deleteListItem, toggleCompleteListItem }) {
  return (
    <div className="todo-list">
      <ol className="list-group">
        {listItems.map((listItem, index) => (
          <li className="list-group-item d-flex align-items-center justify-content-between" key={index}>
            <div className="form-check">
              <input
                className="form-check-input me-1"
                type="checkbox"
                checked={listItem.complete}
                onChange={() => toggleCompleteListItem(index)}
                id={`checkbox-${index}`}
              />
              <label className="form-check-label" htmlFor={`checkbox-${index}`}>
                <span style={{ textDecoration: listItem.complete ? "line-through" : "none" }}>
                  {listItem.itemText}
                </span>
              </label>
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => deleteListItem(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
