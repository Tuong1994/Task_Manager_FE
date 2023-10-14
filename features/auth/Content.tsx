import React from "react";
import { Space, Typography, Divider } from "@/components/UI";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import useLangs from "@/hooks/useLangs";

const { Title, Paragraph } = Typography;

interface ContentProps {}

const Content: React.FC<ContentProps> = () => {
  const { langs } = useLangs();

  return (
    <React.Fragment>
      <Image className="inner-logo" src={require("../../public/logo.png")} alt="logo" />

      <Divider />

      <Space align="top">
        <FaCheck className="inner-icon" />

        <React.Fragment>
          <Title level={4} rootClassName="inner-content-title">
            {langs?.auth.note.title_1}
          </Title>
          <Paragraph>{langs?.auth.note.content_1} </Paragraph>
        </React.Fragment>
      </Space>

      <Space align="top">
        <FaCheck className="inner-icon" />

        <React.Fragment>
          <Title level={4} rootClassName="inner-content-title">
            {langs?.auth.note.title_2}
          </Title>
          <Paragraph>{langs?.auth.note.content_2}</Paragraph>
        </React.Fragment>
      </Space>
    </React.Fragment>
  );
};

export default Content;
