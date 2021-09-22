import React from 'react';
import '../App.css';

class Display extends React.Component {

  render() {
    const {minute, second} = this.props;
    return (
      <div style={{color:"rgb(92, 48, 92)", marginTop:20}}>
      <div className="display-container" style={{width:"21rem",marginLeft:472}}>
        <div id="timer-label" style={{fontSize:"xx-large", fontWeight:"bold", marginBottom:-20}}>{this.props.display}</div>
        <div id="time-left" style={{marginBottom:-25}}>
        {(minute<10) ? ("0" + minute) : (minute)}
        :
        {(second<10) ? ("0" + second) : (second)}
        </div>
        <i id="start_stop" style={{borderRadius:50,textAlign:"center",fontSize:45}} onClick={this.props.startOrStop}>
          <img className="play-pause"style={{height:35, marginTop:-7}} src="https://static.thenounproject.com/png/159153-200.png" alt="play/pause"/>
        </i>
        <i className="fas fa-redo fa-2x" id="reset"style={{fontSize:40, marginLeft:10}} onClick={this.props.reset}>&#8634;</i>
        </div>
        </div>
          );
  }
}

export default Display;