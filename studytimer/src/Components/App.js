import React from 'react';
import Session from './Session';
import Display from './Display';
import Break from './Break';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      convertedRemainingTime: 0,
      minute: 0,
      second: 0,
      timerStatus: "stopped",
      display: "Session"
    }
    this.breakDecrement = this.breakDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this);
    this.reset = this.reset.bind(this);
    this.startOrStop = this.startOrStop.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }
  
  componentDidMount() {
    this.setState({convertedRemainingTime: this.state.sessionLength + ":00"}, () => {
      let time = this.state.convertedRemainingTime.split(":");
      this.setState({minute: parseInt(time[0]), second: parseInt(time[1])});
    })
  }
  
  breakDecrement = (event) => {
    (this.state.breakLength !== 1)
      ? this.setState({breakLength: this.state.breakLength - 1})
      : this.setState({breakLength: this.state.breakLength})
  }
  
   breakIncrement = (event) => {
    (this.state.breakLength !== 60)
      ? this.setState({breakLength: this.state.breakLength + 1})
      : this.setState({breakLength: this.state.breakLength})
  }
  
   sessionDecrement = (event) => {
    (this.state.sessionLength !== 1)
      ? this.setState({sessionLength: this.state.sessionLength - 1 }, () => {
        this.setState({convertedRemainingTime: this.state.sessionLength + ":00"}, () => {
        let time = this.state.convertedRemainingTime.split(":");
        this.setState({minute: parseInt(time[0]), second: parseInt(time[1])});
        })
      })      
      : this.setState({sessionLength: this.state.sessionLength }, () => {
        this.setState({convertedRemainingTime: this.state.sessionLength + ":00"}, () => {
          let time = this.state.convertedRemainingTime.split(":");
      this.setState({minute: parseInt(time[0]), second: parseInt(time[1])});
        })
      }) 
        
  }
   
    sessionIncrement = (event) => {
    (this.state.sessionLength !== 60)
      ? this.setState({sessionLength: this.state.sessionLength + 1}, () => {
        this.setState({convertedRemainingTime: this.state.sessionLength + ":00"}, () => {
          let time = this.state.convertedRemainingTime.split(":");
        this.setState({minute: parseInt(time[0]), second: parseInt(time[1])});
        })
      })
      : this.setState({sessionLength: this.state.sessionLength}, () => {
        this.setState({convertedRemainingTime: this.state.sessionLength + ":00"}, () => {
          let time = this.state.convertedRemainingTime.split(":");
      this.setState({minute: parseInt(time[0]), second: parseInt(time[1])});
        })
      })
  }
      
      reset = (event) => {
        this.setState({sessionLength: 25, breakLength: 5, minute: 25, second: 0});
      }
      
      startTimer = () => {
        if ((this.state.minute === 0) && (this.state.second === 0) &&
          (this.state.display === "Session")){
          let sound = new Audio("http://www.pacdv.com/sounds/interface_sound_effects/sound105.wav");
          sound.addEventListener("touchstart", sound.play());
          this.setState({display: "Break"});
          this.setState({convertedRemainingTime: this.state.breakLength + ":00"}, () => {
          let time = this.state.convertedRemainingTime.split(":");
          this.setState({minute: parseInt(time[0]), second: parseInt(time[1])});
          })
        }
        if ((this.state.minute === 0) && (this.state.second === 0) &&
          (this.state.display === "Break")){
          let sound = new Audio("http://www.pacdv.com/sounds/interface_sound_effects/sound105.wav");
          sound.addEventListener("touchstart", sound.play());
          this.setState({display: "Session"});
          this.setState({convertedRemainingTime: this.state.sessionLength + ":00"}, () => {
          let time = this.state.convertedRemainingTime.split(":");
          this.setState({minute: parseInt(time[0]), second: parseInt(time[1])});
          })
        }
        if (this.state.second === 0) {
          this.setState({minute: this.state.minute - 1 });
          this.setState({second: 60 })
        }
        this.setState({second: this.state.second - 1 });

      }

      startOrStop = (event) => {
        if (this.state.timerStatus === "stopped") {
          this.setState({timerStatus: "started"});
          let intervalId = setInterval(this.startTimer, 1000);
          this.setState({ intervalId: intervalId })
        }
        else if (this.state.timerStatus === "started") {
          this.setState({timerStatus: "stopped"});
          clearInterval(this.state.intervalId);
        }
      }

    render() {
    return (
      <div>
      {/* <h1>Study Buddy Timer</h1> */}
        <Container>
        <Row>
        <Col><Display display={this.state.display} reset={this.reset} minute={this.state.minute}
        second={this.state.second} startOrStop={this.startOrStop}/></Col>
        </Row>
        <Row>
          <Col><Break breakLength={this.state.breakLength} breakDecrement={this.breakDecrement} breakIncrement={this.breakIncrement}/></Col>
          <Col><Session sessionLength={this.state.sessionLength} sessionDecrement={this.sessionDecrement} sessionIncrement={this.sessionIncrement}/></Col>
        </Row>
        </Container>
      </div>
      );
  }
}

export default App;