import Field from './components/Field'
import Modal from './components/Modal'
import './App.scss'
import {CheckBlackWin} from './functions/CheckBlackWin'
import {CheckWhiteWin} from './functions/CheckWhiteWin'
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useState,createContext} from 'react'
import {Finish} from './functions/Finish'

export interface IContext{
  white:boolean,
  black:boolean
}

const defaultState = {white:false,black:false};
export const Context = createContext<IContext>(defaultState);

function App() {
  const data = useTypedSelector(state=>state.field.field);
  const [modal,setModal] = useState<boolean>(false);
  const [finished,setFinished] = useState<boolean>(false);
  if (modal === false && !finished){
    (CheckWhiteWin(data) || CheckBlackWin(data)) && Finish(setModal,setFinished);
  }
  return (
    <Context.Provider value={defaultState}>
      {modal && <Modal setModal={setModal} text={CheckWhiteWin(data)? defaultState.black === true ? "White has won" : "Draw" : defaultState.white === true ? "Black has won" : "Draw"}/>}
      <div className='container'>
          <Field field={data}/>
      </div>
    </Context.Provider>
  );
}

export default App;