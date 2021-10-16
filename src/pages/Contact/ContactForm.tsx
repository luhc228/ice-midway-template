import { Col, Form, Input, Button } from 'antd';
import { contact } from '@/apis/lambda/contact';

const validateMessages = {
  required: 'This field is required!',
  types: {
    email: 'Not a valid email!',
  },
};
export default () => {
  const [form] = Form.useForm();

  const onFinish = (data) => {
    contact(data).then(res => {
      console.log('res:', res);
      form.resetFields();
      window.alert(`提交成功：${JSON.stringify(data)}`)
    })
  };

  return (
    <Col sm={24} md={24} lg={12} className="widthFull">
      <Form form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['name']} rules={[{ required: true }]}>
          <Input size="large" placeholder="姓名" />
        </Form.Item>
        <Form.Item name={['email']} rules={[{ type: 'email' }]}>
          <Input size="large" placeholder="邮箱" />
        </Form.Item>
        <Form.Item name={['description']} rules={[{ required: true }]}>
          <Input.TextArea size="large" rows={7} placeholder="描述" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" shape="round" size="large" htmlType="submit" style={{ background: '#304CFD' }}>
            提交
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};
