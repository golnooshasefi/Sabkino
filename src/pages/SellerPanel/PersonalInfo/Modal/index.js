import classes from "./Modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Marginer } from "../../../../components/marginer";
const eye = <FontAwesomeIcon icon={faEye} />;
const eye_slash = <FontAwesomeIcon icon={faEyeSlash} />;
const close = <FontAwesomeIcon icon={faXmark} />;

function Modal(props) {
  const [passwordShown1, setPasswordShown1] = useState(false);
  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };

  const [passwordShown2, setPasswordShown2] = useState(false);
  const togglePasswordVisiblity2 = () => {
    setPasswordShown2(passwordShown2 ? false : true);
  };

  const initialFormData = Object.freeze({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
    shopName: "",
    shopNumber: "",
    currentPassword: "",
    password: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
    console.log(formData);
  };

  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    console.log(formData);
    if (true) {
      props.onConfirm();
    }
  }

  return (
    <div className={classes.modal}>
      <div className={classes.modal__header}>
        <h2 className={classes.modal__header__title}>ویرایش {props.title}</h2>
        <span className={classes.modal__header__icon} onClick={cancelHandler}>
          {close}
        </span>
      </div>
      <form onSubmit={confirmHandler} className={classes.modal__inputWrapper}>
        {props.type === "password" && (
          <div className={classes.modal__inputWrapper__inputBox}>
            <input
              className={classes.modal__inputWrapper__inputBox__input}
              type={passwordShown1 ? "text" : props.type}
              placeholder={`${props.title} فعلی`}
              autoFocus
              required
              onChange={handleChange}
              name="currentPassword"
            />
            <i
              className={classes.modal__inputWrapper__inputBox__icon}
              onClick={togglePasswordVisiblity1}
            >
              {passwordShown1 ? eye : eye_slash}
            </i>
            <Marginer direction="vertical" margin="2rem" />
          </div>
        )}
        <div className={classes.modal__inputWrapper__inputBox}>
          {props.type === "password" ? (
            <input
              className={classes.modal__inputWrapper__inputBox__input}
              type={passwordShown2 ? "text" : props.type}
              placeholder={
                props.type === "password" ? `${props.title} جدید` : props.title
              }
              required
              onChange={handleChange}
              name={props.name}
            />
          ) : (
            <input
              className={classes.modal__inputWrapper__inputBox__input}
              type={passwordShown2 ? "text" : props.type}
              placeholder={
                props.type === "password" ? `${props.title} جدید` : props.title
              }
              autoFocus
              required
              onChange={handleChange}
              name={props.name}
            />
          )}

          {props.type === "password" && (
            <i
              className={classes.modal__inputWrapper__inputBox__icon}
              onClick={togglePasswordVisiblity2}
            >
              {passwordShown2 ? eye : eye_slash}
            </i>
          )}
        </div>
      </form>
      <button
        className={
          props.type === "password"
            ? !formData[props.name] || !formData.currentPassword
              ? classes.modal__btn__disable
              : classes.modal__btn
            : !formData[props.name]
            ? classes.modal__btn__disable
            : classes.modal__btn
        }
        onClick={confirmHandler}
        disabled={
          props.type === "password"
            ? !formData[props.name] || !formData.currentPassword
            : !formData[props.name]
        }
      >
        ویرایش
      </button>
    </div>
  );
}

export default Modal;