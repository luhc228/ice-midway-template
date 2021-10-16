import { Layout } from 'antd';
import Header from './components/ Header';
import Sidebar from './components/Sidebar';

export default function BasicLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <Header />
        <Sidebar>
          {children}
        </Sidebar>
      </Layout>
    </Layout>    
  );
}
