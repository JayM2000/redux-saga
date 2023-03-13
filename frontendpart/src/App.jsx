import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';

import {addone} from './reduxfiles/action/sample';
import { useDispatch, useSelector } from "react-redux";


function App() {
  const dis = useDispatch();

  const dt = {
    name:'shubham',
    desc:'heres coding js in reactjs know redux redux saga redux thunk',
    lan:'js, python, java, typescript'
  }

  return (
    <div className="App">
      <button onClick={() => dis(addone(dt))}>
        add one
      </button>
    </div>
  )
}

export default App
