/** @format */

import { Menu } from "antd";
import {
  HomeOutlined,
  ScheduleOutlined,
  AppstoreAddOutlined,
  ZhihuOutlined,
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";

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

      <SubMenu key="SubMenu" icon={<ZhihuOutlined />} title="Path">
        <Menu.Item key="path:1">
          <a rel="noopener noreferrer" href={`/MA1521`}>
            MA1521
          </a>
        </Menu.Item>
        <Menu.Item key="path:2">
          {" "}
          <a rel="noopener noreferrer" href={`/CS1231S`}>
            CS1231S
          </a>
        </Menu.Item>
        <Menu.Item key="path:3">
          {" "}
          <a rel="noopener noreferrer" href={`/CS2030S`}>
            CS2030S
          </a>
        </Menu.Item>
        <Menu.Item key="path:4">
          {" "}
          <a rel="noopener noreferrer" href={`/CS2100`}>
            CS2100
          </a>
        </Menu.Item>
        <Menu.Item key="path:5">
          <a rel="noopener noreferrer" href={`/ES1103`}>
            ES1103
          </a>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}
