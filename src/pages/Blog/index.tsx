import { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import PostCard from '@/components/PostCard';
import { getBlogs } from '@/apis/lambda/blog';

type Blog = {
  title: string; 
  excerpt: string; 
  cover: string; 
  date: string;
}

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogs().then(res => {
      setBlogs(res)
    })
  }, []);

  return (
    <>
      <div className="marginTopTitle">
          <h1 className="titleSeparate">Blog</h1>
        </div>
        <Row gutter={[20, 20]}>
          {
            blogs.map((blog, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <Col key={key} xs={24} sm={24} md={12} lg={8}>
                <PostCard {...blog} />
              </Col>
            ))
          }
        </Row>
    </>
  );
}
