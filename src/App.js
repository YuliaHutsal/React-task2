import logo from './logo.svg';
import './App.css';

const MyComponent = () =>{
  return <div> Yulia</div>
}

function Welcome(props){
  return <h1>Hello! {props.children}</h1>
}

function Question(props){
  return <div>{props.children} Do you like React?</div>
}

function WelcomeNew(props){
  return(
    <div>
      {props.children ? props.children : "Yes, I would like to know it better!"}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome>
          <MyComponent/>
          <Question/>
        </Welcome>

        <WelcomeNew/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
