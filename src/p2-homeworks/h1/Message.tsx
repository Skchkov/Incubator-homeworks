import React from "react";
import m from "./Message.module.css";

type messageDataType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message(props: messageDataType) {
  return (
    <div className={m.bg}>
      <div>
        <img className={m.avatar} src={props.avatar} alt="img" />
      </div>
      <div className={m.message}>
        <h1> {props.name} </h1>
        <p> {props.message}</p>
        <span> {props.time}</span>
      </div>
    </div>
  );
}

export default Message;
