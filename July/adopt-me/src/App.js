// destructuring the core idea of what react is 
const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}. [
    React.createLElement("h2", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)

  ]);
};


const App = () => {
  return React.createElement(
    "div",
    { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    })

  ]);
};

ReactDOM.render(
  React.createElement(App),
  document.getElementsById("root"));
