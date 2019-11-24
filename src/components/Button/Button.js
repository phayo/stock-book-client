import React from "react";
import styles from "./Button.module.css";

function Button(props) {
    return (
        
          <button type="submit" className={styles.btn} style={{width:`${props.width}`}}>{props.btnlabel}</button>
    );
}

export default Button;
