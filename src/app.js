import React from 'react';
import ReactDOM from 'react-dom';
import Timer1 from './timer';
import Word1 from './word';

class App1 extends React.Component{

    constructor(){
        super()
        this.state={
            title : "پروژه ی ریکت"
        }
    }

    // handle=()=>{                   //یا تغییر کردن متنی که میخوایم  set  استفاده از این تابع برای
    //     this.setState({
    //         title : "تایمر "
    //     })
    // }

    
    render(){
        
      return (
  
        <div>
  
          
          <Word1 title={this.state.title}/>
          <Timer1/>
          
    
        </div>
      )
    }
  }

export default App1;