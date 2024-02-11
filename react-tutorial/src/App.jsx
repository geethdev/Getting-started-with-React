import "./App.css";

function App() {
  const title = "Hello World!";
  const number = 50;
  const link = "http://www.google.com";
  return (
    <div className="app">
      <div className="content">
        <h1>{title}</h1>
        <p>{number}</p>
        <p>{"Hello Hello"}</p>
        <p>{[1, 2, 3]}</p>
        <p>{Math.random() * 20}</p>

        <a href={link}>Google </a>
      </div>
    </div>
  );
}

export default App;
