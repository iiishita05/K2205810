import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      {data ? (
        <div>
          <p>
            <strong>Title:</strong> {data.title}
          </p>
          <p>
            <strong>Completed:</strong> {data.completed ? "✅ Yes" : "❌ No"}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
