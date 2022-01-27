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

    startclick = ()=>{
        interval =setInterval(() => {
            this.setState({
              time: this.state.time - 1
            })
          }, 1000); 
        }
    }

    stopclick = ()=>{
        clearInterval(interval);
    }

  
    componentDidMount(){          //این تابع برای اولین بار اجرا میشود 
  
       this.startclick();
    } 
  
  
    componentDidUpdate(){             //اجرا میشود و داخلش شرط گذاشتیم render   این تابع بعد از 
      if (this.state.time == 0){
        this.stopclick();
      }
    }
  
    render(){
     
  
      return(
        <>
        <h3>
            it is {this.state.time}  
        </h3>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.start}>start</button>
        </>
      )
    }
  }

  export default Timer1;