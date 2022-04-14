import styles from "./detail.module.scss"
import {Container} from "react-bootstrap"
import { useParams } from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-solid-svg-icons'
import Info from './dogSS/dogSS'
import dogData from "./dogSS/dogSSData"
function Detail(props) {

    let { id } = useParams(); //<Route> 컴포넌트에 path속성에서 URL을 파라미터로써 값을 받는 객체를 useParams()를 통해 접근
    // 배열 속 상품의 영구번호와 일치한지 find()가 배열 속에서 찾아준다.(Detail.js 70-72)
    let dataId = props.dogData.find((x) => {
      // (shoesId 는 props화가 되고, 영구번호가 알맞는 상품을 뜻)
  
      return x.id == id;
    });

  return (
    <div>
      <Container>
        <div className={styles.mainTop}>
                  
          <div className={styles.topLeft}>
              {
                  
                        <img src={"../../assets/images/dogSS/dog_SS1.jpg"}></img>
              }
          </div>

          <div className={styles.topRight}>
            {/* 고유햔 상품의 아이디 값으로 도그 페이지에서 상품 누르면 그 상품에 대한 아이디 값을 인식하고 그 아이디가 해당해있는 이름 가져옴 */}
            <div className={styles.box1}>{dataId.title} </div>

            <div className={styles.box2}>
              <h2>
                판매가 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {dataId.price}
              </h2>
            </div>

            <div className={styles.box3}>
              <h2>SIZE</h2>
              <button onClick="row1()" className={styles.sizeBox}>
                XS
              </button>
              <button onClick="row2()" className={styles.sizeBox}>
                S
              </button>
              <button onClick="row3()" className={styles.sizeBox}>
                M
              </button>
              <button onClick="row4()" className={styles.sizeBox}>
                L
              </button>
              <button onClick="row5()" className={styles.sizeBox}>
                XL
              </button>
            </div>

            <div className={styles.box4}>
              <table>
                <thead>
                  <th className={styles.t1}>상품사이즈</th>
                  <th className={styles.t2}>상품수</th>
                  <th className={styles.t3}>상품가격</th>
                </thead>
                <tbody className={styles.myTbody}></tbody>
              </table>

              <div className={styles.total}>
                <li className={styles.wonpos}>원</li>
                <li className={styles.pricepos}>0</li>
                <li className={styles.totalpos}>Total:</li>
              </div>
            </div>
            <div className={styles.box5}>
              <a href="/src/main/resources/templates/MainMenu/PAY/pay.html">
                <button className={styles.drawBorder}>바로구매</button>
              </a>
              <button className={styles.drawBorder}>장바구니</button>
              <button className={styles.drawBorder}>관심상품</button>
            </div>
          </div>
        </div>

        <div className={styles.mainMiddle}>
          <div className={styles.guideMenu}>
            <li className={styles.g1}>Size info.</li>
            <li className={styles.g2}>Detail info.</li>
            <li className={styles.g3}>Review</li>
            <li className={styles.g4}>Q&A</li>
          </div>

          <div className={styles.mainImage}></div>
          <div className={styles.sizeInfo}>
            <div className={styles.head}>
              <li className={styles.head1}>Size info.</li>
              <li className={styles.head2}>권장사이즈</li>
            </div>
            <div className={styles.cm}>
              <li>단위: cm</li>
            </div>
            <table className={styles.table1}>
              <th>SIZE</th>
              <th>XS</th>
              <th>S</th>
              <th>M</th>
              <th>L</th>
              <th>XL</th>
              <tr>
                <td>목둘레</td>
                <td>20</td>
                <td>23</td>
                <td>26</td>
                <td>30</td>
                <td>34</td>
              </tr>
              <tr>
                <td>가슴둘레</td>
                <td>27</td>
                <td>30</td>
                <td>37</td>
                <td>42</td>
                <td>47</td>
              </tr>
              <tr>
                <td>등길이</td>
                <td>18</td>
                <td>24</td>
                <td>27</td>
                <td>30</td>
                <td>34</td>
              </tr>
              <tr>
                <td>몸무게</td>
                <td>~1.5kg</td>
                <td>2~3kg</td>
                <td>3~5kg</td>
                <td>4.5~7kg</td>
                <td>6~9kg</td>
              </tr>
            </table>
          </div>
          <div className={styles.detail}>
            <div className={styles.head}>
              <li className={styles.head1}>Detail Check.</li>
              <li className={styles.head2}>
                제품에 관한 실제 착용감 및 원단 안내
              </li>
            </div>

            <table className={styles.table2}>
              <tr>
                <td className={styles.t1}>사이즈</td>
                <td>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ marginLeft: "50px", marginRight: "10px" }}
                  />
                  작게나옴
                </td>
                <td>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ marginLeft: "50px", marginRight: "10px" }}
                  />
                  정사이즈
                </td>
                <td>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ marginLeft: "50px", marginRight: "10px" }}
                  />
                  크게나옴
                </td>
              </tr>
              <tr>
                <td className={styles.t1}>신축성</td>
                <td>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ marginLeft: "50px", marginRight: "10px" }}
                  />
                  신축성 좋아요
                </td>
                <td>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ marginLeft: "50px", marginRight: "10px" }}
                  />
                  신축성 없어요
                </td>
              </tr>
              <tr>
                <td className={styles.t1}>비침</td>
                <td>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ marginLeft: "50px", marginRight: "10px" }}
                  />
                  두꺼워요
                </td>
                <td>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ marginLeft: "50px", marginRight: "10px" }}
                  />
                  적당해요
                </td>
                <td>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ marginLeft: "50px", marginRight: "10px" }}
                  />
                  얇아요
                </td>
              </tr>
              <tr>
                <td className={styles.t1}>두께감</td>
                <td>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ marginLeft: "50px", marginRight: "10px" }}
                  />
                  두꺼워요
                </td>
                <td>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ marginLeft: "50px", marginRight: "10px" }}
                  />
                  적당해요
                </td>
                <td>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ marginLeft: "50px", marginRight: "10px" }}
                  />
                  얇아요
                </td>
              </tr>
              <tr>
                <td className={styles.t1}>촉감</td>
                <td>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ marginLeft: "50px", marginRight: "10px" }}
                  />
                  부드러워요
                </td>
                <td>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ marginLeft: "50px", marginRight: "10px" }}
                  />
                  적당해요
                </td>
                <td>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ marginLeft: "50px", marginRight: "10px" }}
                  />
                  까슬해요
                </td>
              </tr>
              <tr>
                <td className={styles.t1}>계절감</td>
                <td>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ marginLeft: "50px", marginRight: "10px" }}
                  />
                  봄/가을
                </td>
                <td>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ marginLeft: "50px", marginRight: "10px" }}
                  />
                  여름
                </td>
                <td>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ marginLeft: "50px", marginRight: "10px" }}
                  />
                  겨울
                </td>
              </tr>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Detail;