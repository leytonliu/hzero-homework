import React from 'react';
import { Button, Table, Tooltip } from 'choerodon-ui/pro';
import { FuncType } from 'choerodon-ui/pro/lib/button/enum';
import { ColumnLock } from 'choerodon-ui/pro/lib/table/enum';

const { Column } = Table;
// 使用默认导出 会导致在hzero工程中不被识别为Column在使用的时候导致无效
export const CommonEdit = ({ onClick = () => {}, header = '编辑', icon = 'mode_edit' }) => (
  <Column
    header={header}
    lock={ColumnLock.right}
    width={100}
    minWidth={100}
    renderer={({ record }) => (
      <Tooltip title="操作">
        <Button
          funcType={FuncType.flat}
          icon={icon}
          onClick={() => {
            onClick(false, record);
          }}
        />
      </Tooltip>
    )}
  />
);
