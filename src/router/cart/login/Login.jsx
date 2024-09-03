import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { message } from "antd";
import axios from "../../../api/index";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const submit = (values) => {
    setloading(true);
    axios
      .post("/auth/login", values)
      .then((res) => {
        messageApi.success("successfully");
        dispatch({ type: "LOG_IN", payload: res.data.token });
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        messageApi.error("username or password incorrect");
        console.log(err);
      })
      .finally(() => setloading(false));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex h-screen flex-col gap-9 items-center justify-center">
      {contextHolder}
      <div className=" w-[400px]">
        <Form
          className=""
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={submit}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Ism kiriting!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button
              disabled={loading}
              className="w-full"
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
