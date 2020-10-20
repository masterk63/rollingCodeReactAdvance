import { useMutation } from "@apollo/client";
import { Button, Form, Input, message } from "antd";
import React from "react";
import { CREATE_CURSO } from "../../graphql/cursos";

export default function FormGraph() {
  const [form] = Form.useForm();
  const [createCurso, { loading }] = useMutation(CREATE_CURSO, {
    update(cache, { data: { createCurso } }) {
      cache.modify({
        fields: {
          cursos(existingCursos) {
            return [...existingCursos, createCurso];
          },
        },
      });
    },
  });

  const onFinish = async (values) => {
    try {
      await createCurso({
        variables: {
          input: {
            data: {
              ...values,
            },
          },
        },
      });
      form.resetFields();
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item
        label="Nombre curso"
        name="nombre"
        rules={[{ required: true, message: "Por favor ingrese un nombre" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Ofertar
        </Button>
      </Form.Item>
    </Form>
  );
}
