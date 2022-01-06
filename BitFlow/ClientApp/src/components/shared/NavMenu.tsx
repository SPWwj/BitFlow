/** @format */

import { Menu } from "antd";
import {
  HomeOutlined,
  ScheduleOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";

export default function NavMenu() {
  return (
    <Menu mode="horizontal">
      <Menu.Item icon={<HomeOutlined />} key="1">
        <a rel="noopener noreferrer" href="/">
          Home
        </a>
      </Menu.Item>
      <Menu.Item icon={<ScheduleOutlined />} key="2">
        <a rel="noopener noreferrer" href={`/scheduler/`}>
          Scheduler
        </a>
      </Menu.Item>
      <Menu.Item icon={<AppstoreAddOutlined />} key="3">
        <a rel="noopener noreferrer" href={`/tic_tac_toe`}>
          Tic Tac Toe
        </a>
      </Menu.Item>
    </Menu>
  );
}
