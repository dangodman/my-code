import React from "react";
import { List, Tag } from "antd";

// 子组件
const TotoItem = (props) => {
  const onDel = (e, i) => {
    e.preventDefault();
    props.fn(i);
  };
  return (
    <div>
      <List
        bordered
        dataSource={props.data}
        renderItem={(item,i) => (
          <List.Item>
            {item}
            <Tag closeIcon onClose={(e) => onDel(e, i)}>
              删除
            </Tag>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TotoItem;
