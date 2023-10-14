"use client";

import React from "react";
import { Typography, Card, Button, Space, Divider } from "@/components/UI";
import { Form, FormItem, FormFooter, Input, InputPassword, CheckBox } from "@/components/Control";
import { SignIn } from "@/common/type/auth";
import useLangs from "@/hooks/useLangs";

const { Title } = Typography;

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const { langs } = useLangs();

  const initialData: SignIn = {
    account: "",
    password: "",
  };

  const headTitle = (
    <Title rootClassName="form-title" level={4}>
      {langs?.auth.form.title}
    </Title>
  );

  return (
    <Form<SignIn> initialData={initialData} onFinish={(formData) => console.log(formData)}>
      <Card header={headTitle} rootClassName="inner-form">
        <FormItem name="account">
          <Input label={langs?.common.form.label.account} />
        </FormItem>

        <FormItem name="password">
          <InputPassword label={langs?.common.form.label.password} />
        </FormItem>

        <Space justify="end">
          <CheckBox label={langs?.auth.form.saveInfo} />
        </Space>

        <Divider style={{ margin: "0" }} />

        <FormFooter>
          <Button rootClassName="form-action" variant="primary" size="lg">
            {langs?.auth.form.title}
          </Button>
        </FormFooter>
      </Card>
    </Form>
  );
};

export default LoginForm;
