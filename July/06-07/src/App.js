import React { Fragment, useState } from "react";


const AddBookForm = ({ addNewBook }) => {
  const [userInput, setUserInput] = useState("");
  return (
    <form onSubmit={submitHandle}>
      <input type="text"
        onChange={(e) => setUserInput(e.target.value.trim())}

      />



    </form>
  )
};

const App = () => {
  {/**passing initial value */ }
  // Declare a new state variable, call "counter"
  //useState is a Hook that lets me to add React state to function components
  // What does useState return? It returns a pair of values: the current state and a function that updates it. This is why we write const [counter, setCount] = useState().
  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState([
    { title, 'JavaSCript'},
    { title, "React"},
    { title, "Redux"},
  ]);

  //The argument passed to useState is the actual initial state, the data that will be subject to changes. useState returns for you two bindings: 
  //-the actual value for the state
  // -the state updater function for said state
  const addNewBook = (userText) = {
    const newArr =
  }


  return (
    <Fragment>
      <h1>Hey, I am react hooks</h1>
      {counter}

      // onClick() method to call setCount when we want to increment the value.
      <button onClick={() => setCounter(counter + 1)}>+ 👍</button>
      <button onClick={() => setCounter(counter - 1)}>- 👎</button>
      {books.map((book, 1) =>
        <BookInfo key={i} info={books} />


      ) )}
    </Fragment>


  );
};

export default App;