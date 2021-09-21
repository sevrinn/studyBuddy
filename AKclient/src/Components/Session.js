import React from 'react';

class Session extends React.Component {
  render() {
    return (
      <div>
      <div className="session-container" style={{width:"10rem", marginLeft:-10}}>
        <h3>Session</h3>
        <h2 id="session-length" style={{fontSize:40}} value={this.props.sessionLength}>{this.props.sessionLength}</h2>
        <p style={{marginBottom:-15}}>minutes</p>
        <a id="session-decrement" onClick={this.props.sessionDecrement} style={{fontSize:40, marginRight:10}}>&#8722;</a>
        <a id="session-increment" onClick={this.props.sessionIncrement} style={{fontSize:40}}>&#43;</a>
        </div>
      </div>
          );
  }
}

export default Session;