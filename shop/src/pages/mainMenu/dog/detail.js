import {Container} from "react-bootstrap"


function Detail(){
    return(
        <div>
            <Container>
            <div id="main-top">

<div id="top-left">
</div>


<div id="top-right">

    <div class="box1">
        <h1>메이플 체크 원피스</h1>
    </div>

    <div class="box2">
        <h2>판매가 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24,500원</h2>
    </div>

    <div class="box3">

        <h2>SIZE</h2>
        <button onClick="row1()" class="size-box">XS</button>
        <button onClick="row2()" class="size-box">S</button>
        <button onClick="row3()" class="size-box">M</button>
        <button onClick="row4()" class="size-box">L</button>
        <button onClick="row5()" class="size-box">XL</button>
        
        
    </div>


    <div class="box4">
        
        <table>
            <thead>
                <th class="t1">상품사이즈</th>
                <th class="t2">상품수</th>
                <th class="t3">상품가격</th>
              
            </thead>
            <tbody id="my-tbody"></tbody>
        </table>






        <div id="total">
            <li id="wonpos">원</li>
            <li id="pricepos">0</li>
            <li id="totalpos">Total:</li>
               

        </div>
    
       

    </div>
    <div class="box5">
        <a href="/src/main/resources/templates/MainMenu/PAY/pay.html"><button class="btn draw-border">바로구매</button></a>
        <button className="btn draw-border">장바구니</button>
        <button className="btn draw-border">관심상품</button>
        


        
    </div>
</div>

</div>


<div id="main-middle">
    <div class="guide-menu">
        <li className="g1">Size info.</li>
        <li className="g2">Detail info.</li>
        <li className="g3">Review</li>
        <a href="/src/main/resources/templates/Main/QandA.html"><li class="g4">Q&A</li></a>

    </div>



     <div id="main-image">
     </div>
     <div id="size-info">

        <div class="head">
            <li className="head1">Size info.</li>
            <li className="head2">권장사이즈</li>  
        </div>
        <div id="cm">
            <li>단위: cm</li>
        </div>
        <table id="table1">
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
     <div id="detail">
        <div class="head">
            <li className="head1">Detail Check.</li>
            <li className="head2">제품에 관한 실제 착용감 및 원단 안내</li>
        </div>
       
        {/* <table id="table2">
            <tr>
                <td className="t1">사이즈</td>
                <td><i className="far fa-circle" style="margin-left: 50px; margin-right: 10px;"></i>작게나옴</td>
                <td><i className="fas fa-circle" style="margin-left: 50px; margin-right: 10px;"></i>정사이즈</td>
                <td><i className="far fa-circle" style="margin-left: 50px;margin-right: 10px;"></i>크게나옴</td>
                
            </tr>
            <tr>
                <td className="t1">신축성</td>
                <td><i className="fas fa-circle" style="margin-left: 50px; margin-right: 10px;"></i>신축성 좋아요</td>
                <td><i class="far fa-circle" style="margin-left: 50px; margin-right: 10px;"></i>약간 있어요</td>
                <td><i class="far fa-circle" style="margin-left: 50px; margin-right: 10px;"></i>신축성 없어요</td>
            </tr>
            <tr>
                <td class="t1">비침</td>
                <td><i class="fas fa-circle" style="margin-left: 50px; margin-right: 10px;"></i>두꺼워요</td>
                <td><i class="far fa-circle" style="margin-left: 50px; margin-right: 10px;"></i>적당해요</td>
                <td><i class="far fa-circle" style="margin-left: 50px; margin-right: 10px;"></i>얇아요</td>
            
            </tr>
            <tr>
                <td class="t1">두께감</td>
                <td><i class="far fa-circle" style="margin-left: 50px; margin-right: 10px;"></i>두꺼워요</td>
                <td><i class="fas fa-circle" style="margin-left: 50px; margin-right: 10px;"></i>적당해요</td>
                <td><i class="far fa-circle" style="margin-left: 50px; margin-right: 10px;"></i>얇아요</td>
              
            </tr>
            <tr>
                <td class="t1">촉감</td>
                <td><i class="far fa-circle" style="margin-left: 50px; margin-right: 10px;"></i>부드러워요</td>
                <td><i class="fas fa-circle" style="margin-left: 50px; margin-right: 10px;"></i>적당해요</td>
                <td><i class="far fa-circle" style="margin-left: 50px; margin-right: 10px;"></i>까슬해요</td>
               
            </tr>
            <tr>
                <td class="t1">계절감</td>
                <td><i class="fas fa-circle" style="margin-left: 50px; margin-right: 10px;"></i>봄/가을</td>
                <td><i class="far fa-circle" style="margin-left: 50px; margin-right: 10px;"></i>여름</td>
                <td><i class="fas fa-circle" style="margin-left: 50px; margin-right: 10px;"></i>초겨울</td>
            
            </tr>
        </table> */}
     </div>







</div>


            </Container>
        </div>
    )
}

export default Detail;