import Data from './dogSSData'
import React,{useState, useEffect} from "react";
import styles from "./dogSS.module.scss"
import Header from '../../../../components/Header/Header'
import {useHistory, Route, Switch, useParams} from 'react-router-dom';
import {Nav} from 'react-bootstrap'
import {CSSTransition} from 'react-transition-group';

import Detail from '../detail';

function DogSS(props) {
  let [tab,setTab] = useState(0);
  let [event, setEvent] = useState(false);
  let history = useHistory();
  let [search, setSearch] = useState("");


  return (
    <div>
      {/* 상세페이지 */}
      <Switch>  <Route exact path="/detail/:id">
            <Detail></Detail>
      </Route></Switch>
    

        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link onClick={()=>{ setTab(0)}}>ALL</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{ setTab(1)}}>NEW</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{ setTab(2)}}>
              BEST
            </Nav.Link>
          </Nav.Item>
          <input style={{float:'right'}}type="text" placeholder='Search' onChange={(e)=>{setSearch(e.target.value)}}></input>
          <CSSTransition in={event} classNames={styles.wow} timeout={500}>
          <DogData dogData = {props.dogData} tab={tab} setEvent = {setEvent} search={search} history={history}></DogData>
          </CSSTransition>
        
        </Nav>

        
      
    </div>
  );
}

function DogData(props){

  useEffect(()=>{
    props.setEvent(true);
  })


  if(props.tab === 0){
    return(
      <div className="row" style={{ width: "100%", margin: "15px 15px" }}>
      {

      props.dogData.filter((val,i) =>{
        if(props.search == ""){
          return val
        }else if(val.title.toLowerCase().includes(props.search.toLowerCase())){
          return val
        }
      }).map((a, i) => {
        return (
          <div
            className="col-md-4"
            style={{ margin: " 0 0px", textAlign: "center" }}
            key={i}
            onClick={() => {
              props.history.push("/detail/" + props.dogData[i].id);
            }}
          >
            <img
              src={"../../assets/images/dogSS/dog_SS" + (i + 1) + ".jpg"}
            ></img>
            <h4>{props.dogData[i].title}</h4>
            <p>{props.dogData[i].price}</p>
          </div>
        );
      })
    }
      </div>
    )
  }
  else if(props.tab ===1){
    return(
      <div>dd</div>
    )
  }
   
  
}

export default DogSS