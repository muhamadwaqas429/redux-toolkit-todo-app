import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo({ editData, setEditData }) {
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();

  // when edit button clicked, fill input with existing todo text
  useEffect(() => {
    if (editData) {
      setIsEditing(true);
      setInput(editData.text);
      setEditId(editData.id);
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return; // ignore empty

    if (isEditing) {
      dispatch(updateTodo({ id: editId, newText: input }));
      setIsEditing(false);
      setEditId(null);
      setEditData(null);
    } else {
      dispatch(addTodo(input));
    }

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 mt-8">
      <input
        type="text"
        className="bg-gray-800 border border-gray-700 rounded-lg text-gray-100 py-2 px-4 w-72 focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className={`${
          isEditing
            ? "bg-yellow-500 hover:bg-yellow-600"
            : "bg-indigo-500 hover:bg-indigo-600"
        } text-white py-2 px-6 rounded-lg font-semibold transition-all`}
      >
        {isEditing ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default AddTodo;
