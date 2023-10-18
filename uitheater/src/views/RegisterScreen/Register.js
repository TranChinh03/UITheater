import Banner from "../../components/banner/banner";
import "./Register.scss";
import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Select,
  Space,
  Checkbox,
  ConfigProvider,
  DatePicker,
} from "antd";
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Register = () => {
  const [form] = Form.useForm();

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirm,setConfirm]=useState("");
  const [date,setDate]=useState("");
  const [gender,setGender]=useState("");

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);  
    setDate(dateString);
  };
  const onChangeGender = (value) => {
    console.log(value);
    setGender(value);
  };


  async function onClickRegister(e){
    e.preventDefault();

    try{

        await axios.post("https://uitlogachcu.onrender.com/register",{
            name,email,password,date,gender
        })
        .then(res=>{
          if(res.data==="exist"){
              alert("User already exists")
          }
      })
      .catch(e=>{
          alert("wrong details")
          console.log(e);
      })

  }
  catch(e){
      console.log(e);

  }

}
  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelColor: "#FFFFFF",
          },
          Input: {
            borderRadius: "30px",
            padding: "100px",
          },
        },
      }}
    >
      <div className="Container">
        <Space
          style={{
            backgroundColor: "#D80032",
            width: "fit-content",
            height: "90%",
            borderRadius: "20px",
          }}
        >
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            size="small"
            layout="vertical"
            onFinish={onFinish}
            style={{
              width: "523px",
              height: "fit-content",
              padding: "20px",
            }}
            scrollToFirstError
          >
            <Form.Item
              name="name"
              label="Name"
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginBottom: "7px",
                width: "100%",
              }}
              rules={[
                {
                  type: "username",
                  message: "The input is not valid User Name!",
                },
                {
                  required: true,
                  message: "Please input your User Name!",
                },
              ]}
            >
              <Input
                onChange={(e)=>{setName(e.target.value)}}
                style={{
                  paddingLeft: 10,
                  borderRadius: 35,
                  fontSize: 14,
                  height: "34px",
                  width: "357px",
                }}
              />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginBottom: "7px",
                width: "100%",
              }}
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input
                onChange={(e)=>{setEmail(e.target.value)}}
                style={{
                  paddingLeft: 10,
                  borderRadius: 35,
                  fontSize: 14,
                  height: "34px",
                  width: "357px",
                }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginBottom: "7px",
                width: "100%",
              }}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password
              onChange={(e)=>{setPassword(e.target.value)}}
                style={{
                  paddingLeft: 14.5,
                  borderRadius: 35,
                  fontSize: 14,
                  height: "34px",
                  width: "357px",
                }}
              />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm password"
              labelCol={{ span: 24 }}
              dependencies={["password"]}
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginBottom: "7px",
                width: "100%",
              }}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Your password don't match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                onChange={(e)=>{setConfirm(e.target.value)}}
                style={{
                  paddingLeft: 14.5,
                  borderRadius: 35,
                  fontSize: 14,
                  height: "34px",
                  width: "357px",
                }}
              />
            </Form.Item>
            <Space style={{ justifyContent: "center", display: "flex" }}>
              <Form.Item
                name="date"
                label="Date of birth"
                labelCol={{ span: 24 }}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  width: "100%",
                }}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <div className="select_holder" style={{ width: "fit-content" }}>
                  <DatePicker
                    onChange={onChangeDate}
                    format={"DD/MM/YYYY"}
                    style={{ width: "243px", height: "34px" }}
                  />
                </div>
              </Form.Item>
              <Form.Item
                name="gender"
                label="Gender"
                labelCol={{ span: 24 }}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  width: "100%",
                  borderRadius: "30px",
                }}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <div className="select_holder">
                  <Select placeholder="Gender" style={{ height: "34px" }} onChange={onChangeGender}>
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </div>
              </Form.Item>
            </Space>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox style={{ color: "white" }}>
                I agree the{" "}
                <a style={{ color: "wheat", fontWeight: "600" }} href="">
                  Terms of Use
                </a>
              </Checkbox>
            </Form.Item>
            <Form.Item
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                width: "100%",
              }}
            >
              <Button
                style={{
                  paddingLeft: 14.5,
                  borderStartEndRadius: 11,
                  borderBottomLeftRadius: 11,
                  backgroundColor: "#1A1444",
                  color: "white",
                  fontWeight: 500,
                  fontSize: 24,
                  height: "53px",
                  width: "357px",
                  border: "none",
                  fontFamily: "Lilita One",
                  textShadow: "none",
                }}
                onClick={onClickRegister}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </ConfigProvider>
  );
};

export default Register;
