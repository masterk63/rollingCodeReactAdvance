import { useQuery } from "@apollo/client";
import { List } from "antd";
import React from "react";
import { GET_CURSOS } from "../../graphql/cursos";

export default function Lista() {
  const { data, loading } = useQuery(GET_CURSOS);

  return (
    <List
      header={<div>Cursos</div>}
      bordered
      loading={loading}
      dataSource={data?.cursos}
      renderItem={(item) => <List.Item key={item.id}>{item.nombre}</List.Item>}
    />
  );
}
