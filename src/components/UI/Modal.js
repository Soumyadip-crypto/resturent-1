import React, { Fragment } from "react";
import ReactDOM from 'react-dom'
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.Backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>;
};

const Modal = (props) => {
  const portalElement = document.getElementById('overlays'); // Define portalElement here
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
