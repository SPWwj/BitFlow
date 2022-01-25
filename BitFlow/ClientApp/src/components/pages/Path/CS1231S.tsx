/** @format */

import { DownOutlined } from "@ant-design/icons"
import { Breadcrumb, Layout, Menu, Tree } from "antd"
import "./path.css"
import KatexSpan from "../../shared/KatexSpan"
import Math from "../../shared/Math"

const CS1231S = () => {
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
    <div className="CS1231S path">
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
        <h1>CS1231S</h1>
        <ol>
          <li>
            Axiom/Postulate: A statement that is{" "}
            <strong>assumed to be true </strong> without proof.
          </li>
          <li>
            Theorem : Statement proved by
            <strong>rigorous mathematical reasoning</strong>
          </li>
          <li>Lemma :small theorem or help to prove the thereom</li>
          <li>
            Corollary : a result that is a <strong>simple deduction</strong>{" "}
            from a theorem
          </li>
          <li>
            Conjecture : a statement <strong>believe to be true,</strong> but no
            prove yet
          </li>
        </ol>

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
        <ol>
          <li>
            <h4>
              p<Math>\implies</Math>q
            </h4>
            <li>
              (p<Math>\implies</Math>q) <Math>\equiv</Math> ~p V q
            </li>
            <li>
              ~(p<Math>\implies</Math>q) <Math>\equiv</Math> p{" "}
              <Math>\wedge</Math> ~q
            </li>
            <table>
              <tr>
                <th>p</th>
                <th>p</th>
                <th>
                  p<Math>\implies</Math>q
                </th>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>0</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr className="highlight">
                <td>1</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </table>
          </li>
          <li>
            <h4>
              The contrapositive/inverse of p<Math>\implies</Math>q is ~p
              <Math>\implies</Math>~q
            </h4>
            <h4>
              The converse of p<Math>\implies</Math>q is q<Math>\implies</Math>p
            </h4>
          </li>
          <li>
            <h4>
              p<Math>\iff</Math>q <Math>\equiv </Math> XAND 1001
            </h4>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default CS1231S
