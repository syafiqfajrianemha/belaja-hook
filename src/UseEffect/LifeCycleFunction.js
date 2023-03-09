import React, { useEffect, useState } from "react";

function LifeCycleFunction() {
  const [name, setName] = useState("");
  const [isUpdate, setUpdate] = useState(false);

  // componentDidMount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => {
        setName(json.name);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        name: name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setUpdate(true);
      });
  };

  // componentDidUpdate
  useEffect(() => {
    if (isUpdate) {
      alert("Name Updated Successfully");
      setUpdate(false);
    }
  }, [isUpdate]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("Component di Copot");
    };
  }, []);

  return (
    <div>
      <h3>Name : {name}</h3>
      <hr />
      <h3>Update Name:</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Change Name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LifeCycleFunction;
