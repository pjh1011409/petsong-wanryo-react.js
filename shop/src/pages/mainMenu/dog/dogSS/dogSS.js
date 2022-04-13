import Data from './dogSSData'
import React,{useState} from "react";
import styles from "./dogSS.module.scss"
import Header from '../../../../components/Header/Header'
import {useHistory} from 'react-router-dom';

function DogSS() {
  let [dogData, setdogData] = useState(Data);
  let history = useHistory();
  return (
    <div>
      <Header></Header>
      <div className="row" style={{margin:'15px 15px'}}>
        {dogData.map((a, i) => {
          return (
            <div className="col-md-4" style={{textAlign:'center'}}
            key={i} onClick={()=>{history.push('/detail/'+ dogData[i].id)}}>
              <img
                src={"../../assets/images/dogSS/dog_SS" + (i + 1) + ".jpg"}
              ></img>
              <h4>{dogData[i].title}</h4>
              <p>{dogData[i].price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DogSS