import { useState } from 'react';
import { Link, useLocation } from 'ice';
import { Layout } from 'antd';
import cn from 'classnames';
import { useWindowSize } from '@/utils/hooks';
import styles from './header.module.less';
import menuConfig from '../menuConfig';
import 'font-awesome/less/font-awesome.less';
import '@/styles/global.less';

export default () => {
  const [menu, setMenu] = useState(false);
  const { pathname } = useLocation();
  const [width] = useWindowSize();

  const toggleMenu = () => {
    if (width !== 0 && width <= 768) {
      if (menu) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    }
  };
  return (
    <>
      <div className={styles.circleMenu} role="button" onKeyDown={toggleMenu} onClick={toggleMenu}>
        <div className={`${styles.hamburger} ${menu ? styles.menuIcon : ''}`}>
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.hamburgerText}>MENU</div>
        </div>
      </div>
      <Layout className={`${styles.navWrap} ${menu ? '' : styles.hidden} ${menu ? styles.openMenu : ''}`}>
        <div className={styles.backgroundDiv}>
          <ul className={styles.nav}>
            {
              (menuConfig || []).map(({ name, path }) => (
                <li className={styles.navItem} key={name}>
                  <Link
                    to={path}
                    onClick={toggleMenu}
                    className={cn({ [styles.anchorActive]: pathname === path })}
                  >
                    {name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </Layout>
    </>
  );
};
