import React, { useEffect, useState } from "react";
import { Button, Modal, ConfigProvider, Space } from "antd";
import "./SignIn.scss";
import { Form, Input } from "antd";
import { NavLink } from "react-router-dom";
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
        style={{ display: "flex", marginRight: "163px", top: "50px" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={300}
      >
        <Form form={form} size="small" layout="vertical">
          <Form.Item label="Username: " style={{ height: "40px" }}>
            <Input
              style={{ borderRadius: 35, fontSize: 14, height: "30px" }}
              className="input"
              placeholder="Please enter your email/username"
            />
          </Form.Item>
          <Form.Item label="Password: " style={{ height: "fit-content" }}>
            <Input.Password
              style={{paddingLeft:10, borderRadius: 35, fontSize: 14, height: "30px" }}
              placeholder="Please enter your password"
            />
          </Form.Item>
          <Space>
            <Button
              style={{
                width: "fit-content",
                height: "fit-content",
                fontSize: 31,
                borderRadius: 45,
                display: "flex",
                alignItems: "center",
                fontFamily: "Lilita One",
                textShadow: "none",
              }}
            >
              SIGN IN
            </Button>
            <Space wrap>
              <Button
                type="link"
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  display: "flex",
                  alignItems: "center",
                  textShadow: "none",
                  marginRight: 20,
                  fontStyle: "italic",
                }}
              >
                Forget password?
              </Button>
              <Button
                type="link"
                onProgress={() => {}}
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Lilita One",
                  textShadow: "none",
                }}
              >
                <NavLink to="/register">Create new account</NavLink>
              </Button>
            </Space>
          </Space>
        </Form>
      </Modal>
    </ConfigProvider>
  );
};
export default SignIn;
