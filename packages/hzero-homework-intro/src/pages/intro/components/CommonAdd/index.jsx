import React from 'react';
import { Button, Modal } from 'choerodon-ui/pro';
import { FuncType, ButtonColor } from 'choerodon-ui/pro/lib/button/enum';

const CommonAdd = ({ onClick }) => (
  <Button
    funcType={FuncType.flat}
    color={ButtonColor.blue}
    icon="add"
    onClick={onClick}
    key={Modal.key()}
  >
    新增
  </Button>
);

export default CommonAdd;
