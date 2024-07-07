import React from "react";
import { List, Typography } from "antd";

const Todos = ({ todoList }) => {
  return (
    <List
      bordered
      dataSource={todoList}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text strong>{item.id} </Typography.Text>
          {item.title}
        </List.Item>
      )}
    />
  );
};

export default Todos;
