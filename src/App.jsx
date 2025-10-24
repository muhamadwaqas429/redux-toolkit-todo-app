import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/todos";

function App() {
  const [editData, setEditData] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 flex flex-col items-center p-8">
      <h1 className="text-3xl text-white font-bold mb-6">Todo App</h1>
      <AddTodo editData={editData} setEditData={setEditData} />
      <Todos setEditData={setEditData} />
    </div>
  );
}

export default App;
