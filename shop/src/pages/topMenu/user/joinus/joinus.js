import Header from "../../../../components/Header/Header"


import React, {useState} from 'react';
import {Form, Row, Col, Button, InputGroup} from "react-bootstrap"


function JoinUs() {
  return (
    <div>
      <Header></Header>
      <JoinForm></JoinForm>
    </div>
  );
}



function JoinForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <Form  style={{width:'90%',margin:'0 auto'}}noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>아이디</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="ID를 입력하세요."
              defaultValue=""
            />
             <Form.Control.Feedback type="invalid">
                아이디를 입력해주세요.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="영문자+숫자+특수문자 조합"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
                비밀번호를 입력해주세요.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>닉네임</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="다섯글자이내"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                닉네임을 입력해주세요.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>생년월일</Form.Label>
            <Form.Control type="date" placeholder="생년월일" required />
            <Form.Control.Feedback type="invalid">
              생년월일을 선택해주세요.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>휴대폰번호</Form.Label>
            <Form.Control type="text" placeholder="(-) 생략 후 입력해주세요.
" required />
            <Form.Control.Feedback type="invalid">
             전화번호를 입력해주세요.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>이메일</Form.Label>
            <Form.Control type="text" placeholder="" required />
            <Form.Control.Feedback type="invalid">
              이메일을 입력해주세요.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="개인 정보 수집에 동의"
            feedback="회원가입을 위해서 동의가 필요합니다."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">회원가입</Button>
      </Form>
    );
  
}
  

export default JoinUs