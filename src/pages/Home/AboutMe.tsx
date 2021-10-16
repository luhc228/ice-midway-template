import { Row, Col } from 'antd';
import { useState, useEffect } from 'react';
import AboutTitle from '@/components/AboutTitle';
import { getDescription } from '@/apis/lambda';

const AboutMe = () => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    getDescription().then(res => {
      setDescription(res)
    })
  }, []);

  return (
    <>
      <div>
        <h1 className="titleSeparate">关于我</h1>
        <p>{description}</p>
      </div>
      <Row gutter={[20, 20]} style={{marginTop: 30}}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTitle
            img="location.png"
            height={60}
            alt="location image"
            textH4="出生于"
            textH3="浙江 杭州"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTitle
            img="coffee.png"
            alt="coffee image"
            textH4="咖啡"
            textH3="真快乐"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTitle
            img="meeting.png"
            alt="meeting image"
            textH4="社交"
            textH3="非常热爱"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTitle
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="喜欢骑自行车"
            textH3="终身骑手"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTitle
            img="web.png"
            alt="web image"
            textH4="自学编程"
            textH3="感谢丰富的 Web 资源"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTitle
            img="graduation.png"
            alt="graduation image"
            textH4="北京大学"
            textH3="计算机科学与工程"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
