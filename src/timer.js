import React from 'react';
import ReactDOM from 'react-dom';
var interval;

//////////// state ///////////////////
 //  برای نمایش تغییرات مقادیر در صفحه 

  class Timer1 extends React.Component{ 
    constructor(){
      super();
      this.state={
        time: 10
      }
    }
  
    componentDidMount(){           //این تابع برای اولین بار اجرا میشود 
  
      interval =setInterval(() => {
        this.setState({
          time: this.state.time - 1
        })
      }, 1000); 
    }
  
  
    componentDidUpdate(){                 //اجرا میشود و داخلش شرط گذاشتیم render   این تابع بعد از 
      if (this.state.time == 0){
        clearInterval(interval)
      }
    }
  
    render(){
     
  
      return(
        <h3>
            it is {this.state.time}
        </h3>
      )
    }
  }

  export default Timer1;