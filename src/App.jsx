// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count:0
    }
  }
  render() {
    return (
      <div>
        <h1>Counter APP</h1>
        <h1>Count: {this.state.count} </h1>
        <button onClick={()=>this.setState({count:this.state.count + 1})} >
          Increment
        </button>
        <button onClick={() => this.setState({ count:this.state.count - 1 })} >Decrement
        </button>
      </div>
    )
  }
}

export default Counter





