import {
  Affix, Layout, Row, Col,
} from 'antd';
import { useEffect, useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { useLocation } from 'ice';
import styles from './sidebar.module.less';
import { useWindowSize } from '@/utils/hooks';
import { getProfile } from '@/apis/lambda';

const { Content } = Layout;

const icons = [
  {
    name: 'ICE',
    link: 'https://iceteam.gitee.io/',
    icon: 'https://iceteam.gitee.io/img/logo.png'
  },
  {
    name: 'Midway',
    link: 'https://www.midwayjs.org/',
    icon: 'https://gw.alicdn.com/tfs/TB1eGsrk79l0K4jSZFKXXXFjpXa-347-340.png'
  },
  {
    name: 'Rax',
    link: 'https://rax.js.org/',
    icon: 'https://img.alicdn.com/tfs/TB1H2Kcb1H2gK0jSZFEXXcqMpXa-70-72.png'
  },
]

const DomContent = ({ profile }) => (
  <aside>
    <div className={styles.profileAvatar} />
    <div className={`${styles.name} centerAlign`}>
      <div className={`${styles.boxName} centerAlign`}>
        <h2>
          {profile.name}
        </h2>
      </div>
      <div className={`${styles.badge} ${styles.badgeGray}`}>{profile.job}</div>
      <div className="centerAlign box">
        {icons.map(({ name, icon, link }) => (
          <a href={link} target="_blank" rel="noopener noreferrer" id={name} key={name}>
            <img src={icon} className={styles.icon} />
          </a>
        ))}
      </div>
      <ul className={`box ${styles.badge} contactBlock`}>
        <li className={`${styles.contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="calendar" />
            {' '}
          </span>
          &nbsp; &nbsp; {profile.birth}
        </li>
        <li className={`${styles.contactBlockItem}`}>
          <span><FeatherIcon size="19" icon="map-pin" /></span>
          {' '}
          &nbsp; &nbsp; {profile.location}
        </li>
        <li className={`${styles.contactBlockItem}`}>
          <span><FeatherIcon size="19" icon="mail" /></span>
          {' '}
          &nbsp; &nbsp; {profile.email}          
        </li>
      </ul>
    </div>
  </aside>
);

const Sidebar = (props) => {
  const [width] = useWindowSize();
  const { children } = props;
  const { pathname } = useLocation();
  const [profile, setProfile] = useState({});

  let domContent = <DomContent profile={profile} />;

  if (width > 997) {
    domContent = (
      <Affix offsetTop={0}>
        <DomContent profile={profile} />
      </Affix>
    );
  }
  if (width < 768) {
    domContent = <></>;
    if (pathname === '/') {
      domContent = <DomContent profile={profile} />;
    }
  }

  useEffect(() => {
    getProfile().then(res => {
      setProfile(res)
    })
  }, []);
  return (
    <>
      <Layout>
        <Content className={`${styles.content} ${styles.background}`}>
          <Row>
            <Col sm={24} md={9} lg={6} className={styles.sidebarContent}>
              { domContent }
            </Col>
            <Col sm={24} md={15} lg={18}>
              <Layout className={`${styles.background} ${styles.boxContent} borderRadiusSection`}>
                { children }
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export const Sidebar404 = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Content className={`${styles.content} ${styles.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout className={`${styles.background} ${styles.boxContent} ${styles.sideBar404Radius}`}>
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sidebar;
