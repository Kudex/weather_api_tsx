import React from "react";
import { useDispatch } from "react-redux";


import styles from "./home.module.css";

const HomePage = () => {
  const dispatch = useDispatch();



  return (
    <div className={styles["container"]}>
      hello from home page

 
    
    </div>
  );
};

export default HomePage;