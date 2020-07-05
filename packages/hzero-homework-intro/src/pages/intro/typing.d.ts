import Record from 'choerodon-ui/pro/lib/data-set/Record';

export type clickFunc = ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;

export type recordFunc = (isNew: boolean, record?: Record | null | undefined) => void;
