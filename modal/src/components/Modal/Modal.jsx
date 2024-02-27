import React, {useState} from 'react';

import styles from "../Modal/style/modal.module.css";

const Modal = () => {
 const[open,setOpen]=useState(true)

 const closerModal=()=>{
    setOpen((prev)=>!prev)

 }
  console.log(open,setOpen)
  return (
    !!open&&(<div className={styles.modal}>
      <div className={styles.modal_header}>Modal Header
       <span className={styles.modal_closer} onClick={closerModal}>x</span>
      </div>
      <div className={styles.modal_content}>Modal Content</div>
      <div className={styles.modal_footer}>Modal Footer</div>
      </div>)





  
    
    
    
  )
}

export default Modal