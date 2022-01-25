/** @format */

import { DownOutlined } from "@ant-design/icons"
import { Breadcrumb, Layout, Menu, Tree } from "antd"
import "./path.css"
import KatexSpan from "../../shared/KatexSpan"
import Math from "../../shared/Math"

const MA1521 = () => {
  const set = () => {
    return (
      <span>
        $_ \\N _$: the set of <strong>all natural numbers</strong>{" "}
        {"{ 0, 1, 2, 3, …}"}
      </span>
    )
  }
  const treeData = [
    {
      title: "Chatper 1",
      key: "0-0-0",
      disabled: false,
      children: [
        {
          title: "Important Sets",
          key: "0-0-0-0",
          disableCheckbox: true,
          content:
            "<Math>\\N</Math>: the set of <strong>all natural numbers</strong> { 0, 1, 2, 3, …}",
        },
      ],
    },
  ]
  return (
    <div className="MA1521 path">
      <div className="left_panel">
        <Tree
          showLine
          switcherIcon={<DownOutlined />}
          defaultExpandedKeys={["0-0-0", "0-0-1"]}
          defaultSelectedKeys={["0-0-0", "0-0-1"]}
          defaultCheckedKeys={["0-0-0", "0-0-1"]}
          // onSelect={onSelect}
          // onCheck={onCheck}
          treeData={treeData}
        />
      </div>
      <div className="content">
        <h1>MA1521</h1>

        <Math>{`x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}`}</Math>

        {treeData.map((t) => {
          return (
            <ol key={t.key}>
              {t.children.map((c) => {
                return (
                  <span key={c.key}>
                    <li>
                      <Math>\N</Math>: the set of
                      <strong>all natural numbers</strong> {"{ 0, 1, 2, 3, …}"}
                    </li>
                    <li>
                      <Math>\Z</Math>: the set of all integers
                      <ul>
                        <li>
                          Eg: 315, -9047, <Math>{"3^{5}"}</Math> ,
                          <Math>{"\\sqrt{45}"}</Math>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Math>ℚ</Math>: the set of all rational numbers
                      <ul>
                        <li>
                          Eg: <Math>\frac 1 2</Math>, -23, 8.6,
                          <Math>{"\\frac {-37} 5"}</Math>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Math>\R</Math>: the set of all real numbers
                      <ul>
                        <li>
                          Eg: -1, 𝜋, <Math>\sqrt2</Math>, 4.5
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Math>\Complex</Math>: the set of all complex numbers
                      (note: we will not cover this)
                      <ul>
                        <li>
                          Eg: 7.8, 𝑖, 3.2 − 9.1𝑖, <Math>\sqrt5</Math> +{" "}
                          <Math>\sqrt2</Math>𝑖
                        </li>
                      </ul>
                    </li>
                  </span>
                )
              })}
            </ol>
          )
        })}
      </div>
    </div>
  )
}

export default MA1521
