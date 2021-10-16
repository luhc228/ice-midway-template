import { Row, Col } from 'antd';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div>
      <div className="marginTopTitle">
          <h1 className="titleSeparate">联系我</h1>
        </div>
        <Row gutter={[40, 20]}>
          <Col sm={24} md={24} lg={12}>
            <img
              src="../../../public/contact.png"
              alt="contact"
              className="widthFull contactImgBorder"
            />
          </Col>
          <ContactForm />
        </Row>
    </div>
  );
}

export default Contact;
