// const app = () =>{
//   return (
//     <>
//     <h1 className="Headache">Aryan</h1>
//     <h2>Jesh Paghadal</h2>
//     <img src="vite.svg" alt="Rnder image"/>
//     </>
//   )
// }

// export default app;

import Header from "./components/Header";
import Greetings from "./components/Greetings";
import Footer from "./components/Footer"; 

const HeaderApp = () => {
  return (
    <div>
      <Header />
      <Greetings/>
      <Footer/>
    </div>
  )
}

export default HeaderApp;




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