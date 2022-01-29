import React from 'react';
import ReactDOM from 'react-dom';
var interval;


//////////// state ///////////////////
//  برای نمایش تغییرات مقادیر در صفحه 

class Timer1 extends React.Component {
    constructor() {
      super();
      this.state = {
        hour: 0,
        minute:0,
        second:0,
        //isStart:false
      }

    }

    startclick = () => {

      // if (this.state.isStart == false) {

      //   this.setstate({
      //     isStart: true
      //   })

        interval = setInterval(() => {

          this.setState({
            second: this.state.second + 1

          })

          if (this.state.second == 60) {
            this.setState({
              second: 0,
              minute: this.state.minute + 1
            })
          }
          if (this.state.minute == 60) {
            this.setState({
              minute: 0,
              hour: this.state.hour + 1
            })


          }


        }, 1000);

      //}
    }


    stopclick = () => {
      // this.setstate({
      //   isStart: false
      // })
      clearInterval(interval);
    }

    resetclick=()=>{
      this.setState({
        second:0,
        minute:0,
        hour:0,
      })
    }



    // componentDidMount(){          //این تابع برای اولین بار اجرا میشود 

    //   this.startclick();
    // }


    // componentDidUpdate();{             //اجرا میشود و داخلش شرط گذاشتیم render   این تابع بعد از 
    //   if (this.state.time == 0){
    //   this.stopclick();
    //   }
    // }

    render() {
      return (

        <>
        <h3>
            {this.state.hour + ":" + this.state.minute + ":" + this.state.second }
        </h3>
        <button onClick={this.startclick}>start</button>
        <button onClick={this.stopclick}>stop</button>
        <button onClick={this.resetclick}>reset</button>

        </>
      )
    }
  }


    export default Timer1;