import logo from './logo.svg';
import './App.css';
import Home from './MyRouters/home';
import ButtonEvent from './ButtonEvent';
import StateIn from './StateIn';
import CounterApp from './CounterApp';
import PropsIn from './PropsIn';
import StateAndProps from './StateAndProps';
import React,{useState} from 'react';
import InputField from './InputField';
import InputFieldWithButton from './InputFieldWithButton';
import HideShowToggle from './HideShowToggle';
import FormHandling from './FormHandling';
import ConditionalRendering from './ConditionalRendering';
import PassFunctionAsProp from './PassFunctionAsProp';
import TallyCounter from './TallyCounter';
import Hooks from './Hooks';
import UseCallBackHook from './UseCallBackHook';
import ContextGrandParent from './ContextGrandParent';
import Ref from './Ref';
import Mapping from './Mapping';
// import CallingAPI from './CallingAPI';
import PrevProp from './PrevProp';
import StateWithObject from './StateWithObject';
import LazyLoader from './LazyLoader';
// import CallingAPIWithPromise from './CallingAPIWithPromise';
// import PostAPI from './PostAPI';
import DeleteAPI from './API/DeleteAPI';
import PreFilledAPI from './API/PreFilledAPI';
import PutAPI from './API/PutAPI';
import GetApiRequest from './Axios/GetApiRequest';
import PostApiRequest from './Axios/PostApiRequest';
import PutApiRequest from './Axios/PutApiRequest';
//  {useState} from 'react';
import { BrowserRouter,Routes,Route, Link, } from 'react-router-dom'
import Navbar from './MyRouters/Navbar';
import About from './MyRouters/About';
import Employe from './MyRouters/Employe';
import Search from './MyRouters/Search';
import Login from './MyRouters/Login';
import Protected from './MyRouters/Protected';

function App() {
  // const [name,setName] = useState("Araf");/  // function getData(){
  //   alert("Data Sent Successfully");
  // }
  return (
    <div className="App">
      <header>
        {/* <StateAndProps name={name}/>
        <button onClick={() => setName("Muhammad")}>Change Name</button> */}
        {/* <InputField /> */}
        {/* <InputFieldWithButton/> */}
        {/* <HideShowToggle/> */}
        {/* <FormHandling/> */}
        {/* <ConditionalRendering/> */}
        {/* <PassFunctionAsProp data={getData}/> */}
        {/* <TallyCounter/> */}
        {/* <Hooks/> */}
        {/* <UseCallBackHook/> */}
        {/* <ContextGrandParent/> */}
        {/* <Ref/> */}
        {/* <Mapping/> */}
        {/* <CallingAPI/> */}
        {/* <PrevProp/> */}
        {/* <StateWithObject/> */}
        {/* <LazyLoader/> */}
        {/* <CallingAPIWithPromise/> */}
        {/* <PostAPI/> */}
        {/* <DeleteAPI/> */}
        {/* <PreFilledAPI/> */}
        {/* <PutAPI/> */}
        {/* <GetApiRequest/> */}
        {/* <PostApiRequest/> */}
        {/* <PutApiRequest/> */}
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<Protected Component={About}/>}/>
            <Route path="/employe/:name" element={<Employe/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/login" element={<Login/>}/>
            
        </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
