import React from 'react';

class Display extends React.Component {

  render() {
    const {minute, second} = this.props;
    return (
      <div style={{color:"rgb(114, 57, 114)"}}>
      <div className="display-container" style={{width:"23rem",marginLeft:460}}>
        <h3>Display</h3>
        <div id="timer-label">{this.props.display}</div>
        <div id="time-left" style={{marginBottom:-15}}>
        {(minute<10) ? ("0" + minute) : (minute)}
        :
        {(second<10) ? ("0" + second) : (second)}
        </div>
        <i id="start_stop" style={{borderRadius:50,textAlign:"center",fontSize:45}} onClick={this.props.startOrStop}>&#9658;</i>
        <i className="fas fa-redo fa-2x" id="reset"style={{fontSize:40, marginLeft:10}} onClick={this.props.reset}>&#8634;</i>
        </div>
        </div>
          );
  }
}

export default Display;