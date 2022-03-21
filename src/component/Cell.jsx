import React, {useState, useEffect} from 'react';
import './Cell.css';

export default function Cell(props) {
  let className = "cell";
  const [isOn, setIsOn] = useState(false);

  if (isOn) {
    className += " black";
  } else {
    className += " white";
  }

  useEffect(()=> console.log(className));

  useEffect(()=>{
    if (isOn) {
      props.updateCount(props.count+1);
    } else if (props.count > 0) {
      props.updateCount(props.count-1);
    }
  }, [isOn]);

  return (
    <div className={className} onClick={()=>{
      setIsOn(!isOn);
      }}>
    </div>
  )
}
 