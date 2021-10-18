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
            img="https://img.alicdn.com/imgextra/i3/O1CN01g0EmhY1USpbxJglrC_!!6000000002517-2-tps-64-64.png"
            height={60}
            alt="location image"
            textH4="出生于"
            textH3="浙江 杭州"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTitle
            img="https://img.alicdn.com/imgextra/i1/O1CN01C5QDSX1blnJtCQGc0_!!6000000003506-2-tps-64-64.png"
            alt="coffee image"
            textH4="生态丰富"
            textH3="全Web场景支持"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTitle
            img="https://img.alicdn.com/imgextra/i3/O1CN01sxH5qS1QXdIgpRhj7_!!6000000001986-2-tps-64-64.png"
            alt="meeting image"
            textH4="解决方案"
            textH3="开箱即用的业务方案"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTitle
            img="https://img.alicdn.com/imgextra/i4/O1CN01AmDk6R1Rm7RSFpLKJ_!!6000000002153-2-tps-64-64.png"
            alt="motorcycle image"
            textH4="极速运行"
            textH3="极致地开发体验"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTitle
            img="https://img.alicdn.com/imgextra/i3/O1CN01W258LJ279qCg4mzyX_!!6000000007755-2-tps-96-96.png"
            alt="web image"
            textH4="易于扩展"
            textH3="丰富的 Web 资源"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTitle
            img="https://img.alicdn.com/imgextra/i1/O1CN01jsehRF28M2Mgnw4nJ_!!6000000007917-2-tps-64-64.png"
            alt="graduation image"
            textH4="阿里巴巴"
            textH3="淘系技术前端架构"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
