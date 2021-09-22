import React from 'react';

class Session extends React.Component {
  render() {
    return (
      <div>
      <div className="session-container" style={{width:"10rem", marginLeft:-10, color:"rgb(92, 48, 92)"}}>
        <h3 style={{marginBottom:-5, marginTop:5}}>Session</h3>
        <h2 id="session-length" style={{fontSize:40, marginBottom:-5}} value={this.props.sessionLength}>{this.props.sessionLength}</h2>
        <p style={{marginBottom:-15}}>minutes</p>
        <i id="session-decrement" onClick={this.props.sessionDecrement} style={{fontSize:40, marginRight:10}}>&#8722;</i>
        <i id="session-increment" onClick={this.props.sessionIncrement} style={{fontSize:40}}>&#43;</i>
        </div>
      </div>
          );
  }
}

export default Session;