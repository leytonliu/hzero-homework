import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

const FooterToolbar = (props) => {
  const { children, className, extra, ...restProps } = props;
  return (
    <div
      className={classNames(className, styles.toolbar)}
      style={{
        transition: '0.3s all',
      }}
      {...restProps}
    >
      <div className={styles.left}>{extra}</div>
      <div className={styles.right}>{children}</div>
    </div>
  );
};

export default FooterToolbar;
