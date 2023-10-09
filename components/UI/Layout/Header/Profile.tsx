import React from "react";
import { MenuItem } from "@/common/type/base";
import { FaSignOutAlt, FaTasks, FaUser } from "react-icons/fa";
import Space from "../../Space";
import Avatar from "../../Avatar";
import Tooltip from "../../Tooltip";
import Dropdown from "../../Dropdown";
import Link from "next/link";
import useLangs from "@/hooks/useLangs";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const { langs } = useLangs();

  const spaceProps = { style: { padding: "0" } };

  const items: MenuItem[] = [
    {
      id: "info",
      label: (
        <Space {...spaceProps}>
          <FaUser />
          <Link href="/">{langs?.common.components.header.info}</Link>
        </Space>
      ),
    },
    {
      id: "tasks",
      label: (
        <Space {...spaceProps}>
          <FaTasks />
          <Link href="/">{langs?.common.components.header.tasks}</Link>
        </Space>
      ),
    },
    {
      id: "logout",
      label: (
        <Space {...spaceProps}>
          <FaSignOutAlt />
          <Link href="#">{langs?.common.components.header.logout}</Link>
        </Space>
      ),
    },
  ];

  return (
    <Space justify="center">
      <Dropdown items={items} placement="right">
        <Tooltip content="User name" placement="left">
          <Avatar />
        </Tooltip>
      </Dropdown>
    </Space>
  );
};

export default Profile;
