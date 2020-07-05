import { Button, TextField, Select, DatePicker, TimePicker, Form, DataSet } from 'choerodon-ui/pro';
import { Card, Popover, Icon } from 'choerodon-ui';
import React, { useState, useMemo } from 'react';
import { PageHeaderWrapper } from 'hzero-boot/lib/components/Page';
import { ButtonColor } from 'choerodon-ui/pro/lib/button/enum';
import { LabelLayout } from 'choerodon-ui/pro/lib/form/enum';
import TableForm from './components/TableForm';
import FooterToolbar from './components/FooterToolbar';
import styles from './style.less';
import getFormDSProps from './dataSet/formDS';
import getTableDSProps from './dataSet/tableDS';

const { Option } = Select;
const fieldLabels = {
  name: '仓库名',
  url: '仓库域名',
  owner: '仓库管理员',
  approver: '审批人',
  dateRange: '生效日期',
  type: '仓库类型',
  name2: '任务名',
  url2: '任务描述',
  owner2: '执行人',
  approver2: '责任人',
  dateRange2: '生效日期',
  type2: '任务类型',
};

const AdvancedForm = ({ submitting }) => {
  const [error, setError] = useState([]); // 缓存校验错误信息

  const formDS = useMemo(() => new DataSet(getFormDSProps()), []);
  const tableDS = useMemo(() => new DataSet(getTableDSProps()), []);
  /**
   * 获取错误信息：
   * @param errors { ReactNode }
   */

  const getErrorInfo = (errors) => {
    if (!errors || !errors.length) {
      return null;
    } // 用于滚动到某个表单

    const scrollToField = (fieldKey) => {
      const labelNode = document.querySelector(`[name="${fieldKey}"]`);

      if (labelNode) {
        labelNode.scrollIntoView(true);
      }
    }; // 根据错误表单域生成一个显示错误信息的列表

    const errorList = errors.map((err) => {
      if (!err || err.valid) {
        return null;
      }

      const key = err.name;
      return (
        <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
          <Icon type="close" className={styles.errorIcon} />
          <div className={styles.errorMessage}>{err.validateMessage}</div>
          <div className={styles.errorField}>{fieldLabels[key]}</div>
        </li>
      );
    });
    return (
      <span className={styles.errorIcon}>
        <Popover
          title="表单校验信息"
          content={errorList}
          overlayClassName={styles.errorPopover}
          trigger="click"
        >
          <Icon type="close" />
          {errors.length}
        </Popover>
      </span>
    );
  };
  /**
   * 提交时，先校验数据
   * 1. 合法：提交
   * 2. 不合法：将错误的表单域缓存，供后续使用
   */

  const handleSubmit = async () => {
    const valid = await formDS.validate();

    if (valid) {
      formDS.submit();
    } else {
      const keys = Object.keys(fieldLabels);
      const fields = keys.map((k) => formDS.current?.getField(k)).filter((field) => !field?.valid);
      setError(fields);
    }
  };

  return (
    <>
      <PageHeaderWrapper title="高级表单常见于一次性输入和提交大批量数据的场景。">
        <Card title="仓库管理" className={styles.card} bordered={false}>
          <Form dataSet={formDS} columns={3} labelLayout={LabelLayout.vertical}>
            <TextField name="name" placeholder="请输入仓库名称" />
            <TextField
              name="url"
              style={{
                width: '100%',
              }}
              addonBefore="http://"
              addonAfter=".com"
              placeholder="请输入"
            />
            <Select name="owner" placeholder="请选择管理员">
              <Option value="xiao">付晓晓</Option>
              <Option value="mao">周毛毛</Option>
            </Select>
            <Select name="approver" placeholder="请选择审批员">
              <Option value="xiao">付晓晓</Option>
              <Option value="mao">周毛毛</Option>
            </Select>
            <DatePicker
              range={['start', 'end']}
              name="dateRange"
              placeholder={['开始日期', '结束日期']}
              style={{
                width: '100%',
              }}
            />
            <Select name="type" placeholder="请选择仓库类型">
              <Option value="private">私密</Option>
              <Option value="public">公开</Option>
            </Select>
          </Form>
        </Card>
        <Card title="任务管理" className={styles.card} bordered={false}>
          <Form dataSet={formDS} columns={3} labelLayout={LabelLayout.vertical}>
            <TextField name="name2" placeholder="请输入" />
            <TextField name="url2" placeholder="请输入" />
            <Select name="owner2" placeholder="请选择管理员">
              <Option value="xiao">付晓晓</Option>
              <Option value="mao">周毛毛</Option>
            </Select>
            <Select name="approver2" placeholder="请选择审批员">
              <Option value="xiao">付晓晓</Option>
              <Option value="mao">周毛毛</Option>
            </Select>
            <TimePicker
              name="dateRange2"
              placeholder="提醒时间"
              style={{
                width: '100%',
              }}
            />
            <Select name="type2" placeholder="请选择仓库类型">
              <Option value="private">私密</Option>
              <Option value="public">公开</Option>
            </Select>
          </Form>
        </Card>
        <Card title="成员管理" bordered={false}>
          <TableForm dataSet={tableDS} />
        </Card>
        <FooterToolbar>
          {getErrorInfo(error)}
          <Button color={ButtonColor.primary} onClick={handleSubmit} loading={submitting}>
            提交
          </Button>
        </FooterToolbar>
      </PageHeaderWrapper>
    </>
  );
};

export default AdvancedForm;
