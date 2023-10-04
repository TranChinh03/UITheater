import React, { useEffect, useState } from "react";
import { Button, Modal, ConfigProvider, Space } from "antd";
import "./SignIn.scss";
import { Form, Input } from "antd";
const SignIn = (props) => {
  const { isModalOpen, handleOk, handleCancel } = props;
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);

  // To disable submit button at the beginning.
  useEffect(() => {
    setClientReady(true);
  }, []);
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 40,
          paddingLG: 100,
        },
        components: {
          Modal: {
            colorBgElevated: "#231B5B",
            colorIcon: "#FFFFFF",
          },
          Form: {
            labelColor: "#FFFFFF",
          },
          Button: {
            borderRadius: 45,
            colorBorder: "#231B5B",
            colorBgContainer: "#231B5B",
            colorText: "#FFFFFF",
          },
        },
      }}
    >
      <Modal
        style={{display:"flex", marginRight:"163px", top: "50px",}}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={300}
      >
        <Form form={form} size="small" layout="vertical">
        <Form.Item label="Username: " style={{height:"40px"}}>
            <Input
              style={{ borderRadius: 45, fontSize: 14 }}
              className="input"
              placeholder="Please enter your email/username"
            />
          </Form.Item>
          <Form.Item label="Password: " style={{height:"fit-content"}}>
            <Input style={{ borderRadius: 45, fontSize: 14 }} className="input" placeholder="Please enter your password" />
          </Form.Item>
          <Space>
              <Button
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  fontSize: 27,
                  borderRadius: 45,
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Lilita One",
                  textShadow: "none",
                }}
              >
                SIGN IN
              </Button>
            <Space wrap >
                <Button type="link"
                  style={{
                    width: "fit-content",
                    height: "fit-content",
                    display: "flex",
                    alignItems: "center",
                    textShadow: "none",
                    marginRight: 20,
                    fontStyle: "italic",
                    color: "#FFFFFF",
                  }}
                >
                  Forget password?
                </Button>
                <Button type="link" 
                  style={{
                    width: "fit-content",
                    height: "fit-content",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Lilita One",
                    textShadow: "none",
                    color: "#FFFFFF",
                  }}
                >
                  Create new account
                </Button>
            </Space>
          </Space>
        </Form>
      </Modal>
    </ConfigProvider>
  );
};
export default SignIn;
