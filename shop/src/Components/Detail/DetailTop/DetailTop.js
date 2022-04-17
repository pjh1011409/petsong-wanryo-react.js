import {useState, useEffect} from 'react';
import styles from "./DetailTop.module.scss"
import {Container, Button, Table} from "react-bootstrap"
import { useParams } from "react-router-dom"
import { connect, useDispatch, useSelector} from "react-redux";

function DetailTop(props){
    
    return(
      <div>
         <div className={styles.mainTop}>
            <div className={styles.topLeft}>
              {<img src={"../../assets/images/dogSS/dog_SS1.jpg"}></img>}
            </div>
  
            <div className={styles.topRight}>
              {/* 고유햔 상품의 아이디 값으로 도그 페이지에서 상품 누르면 그 상품에 대한 아이디 값을 인식하고 그 아이디가 해당해있는 이름 가져옴 */}
              <div className={styles.box1}>{props.dataId.title} </div>
  
              <div className={styles.box2}>
                <h2>
                  판매가 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {props.dataId.price}
                </h2>
              </div>
              <Info dataId={props.dataId}></Info>
         
              <div className={styles.box5}>
                <Button variant="outline-secondary">바로구매</Button>{" "}
                <Button variant="outline-secondary">장바구니</Button>{" "}
                <Button variant="outline-secondary">관심상품</Button>{" "}
              </div>
            </div>
          </div>
  
      </div>
    )
  }

function Info(props){

  let state = useSelector((state)=>state);
  let dispatch = useDispatch(); // dispatch 기능은 useDispatch()로 사용가능
  let [size, setSize] = useState([1,3,'안녕',4]);
  let [click, setClick] = useState(false);

  useEffect(() => {  
    return () => {
      setClick(true);
    }
  }, [])
  let [info, setInfo] = useState([]);
  
 
  return(
    <div>
           <div className={styles.box3}>
                <h4 style={{ marginRight: "10px" }}>SIZE</h4>

                {
                  size.map((a,i)=>{
                    return(
                      <Button
                         onClick={()=>{
                          dispatch({
                            type: "항목추가",
                            payload: {
                              size: size,
                              price: props.dataId.price,
                            },
                          });
                         }}
                      variant="outline-dark"
                    >
                      {size[i]}
                    </Button>
                    )
                  })
                }
              </div>
  
              <div className={styles.box4}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>상품사이즈</th>
                      <th>상품 수</th>
                      <th>상품가격</th>
                    </tr>
                  </thead>
                  <tbody>
  
                    {
                    
                      state.reducer.map((a,i)=>{
                        return(
                          <tr>
                          <td>{a[i]}</td>
                          <td>
                            1<button>-</button>
                            <button>+</button>
                          </td>
                          <td>{props.dataId.price}</td>
                        </tr>
                        )
                      })
                     
                   
                    }
                    
                         
                        
                       
                      
                    
                    
                  </tbody>
                </Table>
  
                <div className={styles.total}>
                  <li className={styles.wonpos}>원</li>
                  <li className={styles.pricepos}>0</li>
                  <li className={styles.totalpos}>Total:</li>
                </div>
              </div>
    </div>
  )
}


export default DetailTop;
