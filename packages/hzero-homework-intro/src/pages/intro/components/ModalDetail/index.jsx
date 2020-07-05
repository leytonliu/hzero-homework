import React from 'react';
import { Form, TextField, Select, DatePicker, EmailField } from 'choerodon-ui/pro/lib';

const Detail = (
  { dataSet } // 设置 <> 或者 div 避免在工程中使用的时候 因为 GUmUIFlag 的插入导致样式等的错位
) => (
  <>
    <Form dataSet={dataSet}>
      <TextField name="name" />
      <Select name="sex" />
      <TextField name="age" />
      <DatePicker name="birth" />
      <EmailField name="email" />
      <Select name="techStack" />
    </Form>
  </>
);

export default Detail;
