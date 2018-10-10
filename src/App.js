import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import login from "./components/login";
import dashboard from "./components/dashboard";
import input from "./components/input";
import regis from "./components/regis";
import laporan from "./components/laporan";

class App extends Component{
render() {
    return(
     <BrowserRouter>
     <div>
     <Route exact path="/" component={login}/>
     <Route path="/dashboard" component={dashboard}/> 
      <Route path="/input" component={input}/>
      <Route path="/regis" component={regis}/>
      <Route path="/laporan" component={laporan}/>    
                                                                                                                                                            
     </div>
     </BrowserRouter>
);
}
}  
export default App;

