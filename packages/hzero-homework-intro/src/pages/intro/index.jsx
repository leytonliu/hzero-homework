import React, { useMemo } from 'react';
import { PageHeaderWrapper } from 'hzero-boot/lib/components/Page';
import {
  Table,
  DataSet,
  Modal,
  Form,
  TextField,
  EmailField,
  Select,
  Icon,
  DatePicker,
  Row,
  Col,
  Button,
  Tooltip,
} from 'choerodon-ui/pro';
import { FuncType } from 'choerodon-ui/pro/lib/button/enum';
import { Divider } from 'choerodon-ui';
import introDS from './stores/introDataSet';
import CommonAdd from './components/CommonAdd';
import ModalDetail from './components/ModalDetail';

const detailModalKey = Modal.key();
let create = null;
const introPage = () => {
  const introDataSet = useMemo(() => new DataSet(introDS()), []);
  const buttons = useMemo(
    () => [
      CommonAdd({
        onClick: () => openDetailModal(true),
      }),
      'query',
      'delete',
      'reset',
    ],
    []
  );
  const openDetailModal = (isNew, record) => {
    if (isNew) {
      create = introDataSet.create();
    }

    Modal.open({
      key: detailModalKey,
      title: isNew ? '新增' : '编辑',
      drawer: true,
      children: <ModalDetail record={record || introDataSet.current} dataSet={introDataSet} />,
      onOk: () => handleModalOk(record || introDataSet.current),
      onCancel: () => handleModalCancel(record || introDataSet.current),
    });
  };
  const handleModalCancel = (record) => {
    if (create) {
      introDataSet.remove(create);
      create = null;
      return;
    }

    if (record) {
      record.reset();
    }
  };
  const handleModalOk = () => {
    // console.log(record.data);
    introDataSet.submit();
  };
  const columns = [
    { name: 'name' },
    { name: 'sex' },
    { name: 'age' },
    { name: 'birth' },
    { name: 'email', width: 200 },
    { name: 'techStack' },
    {
      header: '编辑',
      renderer: ({ record }) => (
        <Tooltip title="操作">
          <Button
            funcType={FuncType.flat}
            icon="mode_edit"
            onClick={() => openDetailModal(false, record)}
          />
        </Tooltip>
      ),
      width: 100,
    },
  ];

  return (
    <PageHeaderWrapper title="个人介绍">
      <Divider orientation="left">
        <Icon type="face" />
        <h2>Information</h2>
      </Divider>
      <Row>
        <Col span={8}>
          <Form dataSet={introDataSet}>
            <TextField name="name" />
            <Select name="sex" />
            <TextField name="age" />
            <DatePicker name="birth" />
            <EmailField name="email" />
            <Select name="techStack" />
          </Form>
        </Col>
      </Row>
      <Divider orientation="left">
        <Icon type="people_outline" />
        <h2>Team</h2>
      </Divider>
      <Table dataSet={introDataSet} buttons={buttons} columns={columns} />
    </PageHeaderWrapper>
  );
};
export default introPage;
