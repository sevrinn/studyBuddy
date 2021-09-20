import React from 'react';

class Break extends React.Component {
  render() {
    return (
      <div style={{color:"rgb(92, 48, 92)"}}>
      <div className="break-container" style={{width:"10rem", marginLeft:470}}>
        <h3>Break</h3>
        <div id="break-length" style={{fontSize:40}} value={this.props.breakLength}>{this.props.breakLength}</div>
        <p style={{marginBottom:-15}}>minutes</p>
        <i id="break-decrement" onClick={this.props.breakDecrement} style={{fontSize:40, marginRight:10}}>&#8722;</i>
        <a id="break-increment" onClick={this.props.breakIncrement} style={{fontSize:40}}>&#43;</a>
      </div>
      </div>
        );
  }
}

export default Break;