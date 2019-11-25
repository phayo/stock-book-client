import React from 'react';
import styles from './Input.module.css';

function InputComponenets(props) {
  return (
    <>
          <div className={styles.inputContainer}>
            <label htmlFor={props.inputFor}>
              <b>{props.label}</b>
            </label>
            <br />
            <input
              type={props.type}
              id={props.inputFor}
              name={props.name}
              placeholder={props.placeholder}
              value={props.value}            
            />
            <br />
          </div>
        </>
      )}

export default InputComponenets;

InputComponenets.defaultProps = {
  type: text,
  id:"",
  name: "name",
  placeholder: "enter here",
  value: "myName",
  label: name,
  inputFor: name,

};