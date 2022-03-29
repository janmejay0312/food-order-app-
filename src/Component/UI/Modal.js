import classes from "./Modal.module.css";
import React from "react";
import ReactDom from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portal = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<BackDrop onClose={props.onHide} />, portal)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portal
      )}
    </React.Fragment>
  );
};

export default Modal;
