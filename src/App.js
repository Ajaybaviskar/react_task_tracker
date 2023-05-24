
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
      <form >
            <h1>Add Task and Description</h1>
            <div class="hero">
              <input type="text" name="task" placeholder="Enter Task" required />
               {/* <textarea className="form-control" value={text}   id="myBox" rows="8"></textarea> */}
              <textarea placeholder="Enter Description"  id="myBox" rows="8"></textarea>
              <button class="btn">Add Task</button>
            </div>
            <span id="msg"></span>
        </form>

      </section>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
