import React from "react";
import Reply from "./Reply";

export default function Comment(props) {
  return (
    <div>
      {/* Entire Comment div */}
      <div className="d-flex gap-2 my-2">
          <img
            src={props.imgsrc}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              {props.name}
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>{props.Comment}</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>{props.likes}</span>
            </div>
          </div>
        </div>

      {/*render Reply here... */}
      {props.reply.map((x) => (
        <Reply
          key={x.username}
          imgsrc={x.userImagePath}
          name={x.username}
          reply={x.replyText}
          likes={x.likeNum}
        />
      ))}
    </div>
  );
}