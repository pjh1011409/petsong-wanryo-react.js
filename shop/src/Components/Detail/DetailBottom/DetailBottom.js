import styles from "./DetailBottom.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-solid-svg-icons'

function DetailBottom(){
    return(
      <div>
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
      </div>
    )
  }

  export default DetailBottom