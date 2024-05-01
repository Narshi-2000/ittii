import React,{useState} from "react";
import alertContext from "./AlertContext";

export default function AlertState(props) {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };


  return (
    <>
    {alert && (
        <div
          style={{color:"white", backgroundColor:alert.type==='success'?"#28a745":"#dc3545", padding:15, fontSize:19, borderRadius:5, position:"fixed",top:"8.5%", width:"100%"}}
        >
          {alert.msg}
        </div>
      )}
    <alertContext.Provider value={{ alert, showAlert }}>
      {props.children}
    </alertContext.Provider>
    </>
  );
  
}
