import React from 'react'
import socket from '../socket';

function JoinBlock() {
  return (
    <div className="input__roomid">
      <div className="input-field col s6">
        <input
          placeholder="RoomID"
          id="room_id"
          type="text"
          className="validate"
        />
      </div>
      <div className="input-field col s6">
        <input
          placeholder="Name"
          id="username"
          type="text"
          className="validate"
        />
      </div>
      <a className="waves-effect waves-light btn">button</a>
    </div>
  );
}

export default JoinBlock