import "./App.css";

let name = "Shantanu";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          perferendis numquam id provident tenetur. Quo commodi vero ipsa ab
          dolorum deserunt vitae omnis, cumque architecto repellendus error?
          Neque nobis deleniti magnam eos distinctio sequi.
        </p>
      </div>
    </>
  );
}

export default App;
