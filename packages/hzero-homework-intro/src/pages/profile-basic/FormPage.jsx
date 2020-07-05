import React, { useContext } from 'react';
import { Form, TextField, TextArea } from 'choerodon-ui/pro';
import Store from './stores';

const From = () => {
  const { FormDataSet } = useContext(Store);
  return (
    <>
      <Form header="退款申请" dataSet={FormDataSet} labelWidth={[80, 80, 80]} columns={3}>
        <TextField name="goodsNumber" />
        <TextField name="phone" />
        <TextField name="sellNumber" />
        <TextField name="childNumber" />
      </Form>
      <Form header="用户信息" dataSet={FormDataSet} labelWidth={[80, 80, 80]} columns={3}>
        <TextField name="name" />
        <TextField name="phone" />
        <TextField name="express" />
        <TextField name="address" />
        <TextArea rowSpan={2} name="remark" />
      </Form>
    </>
  );
};

export default From;
