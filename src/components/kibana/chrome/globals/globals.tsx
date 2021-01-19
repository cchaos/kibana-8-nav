import React, { ReactElement, HTMLAttributes } from 'react';
import classNames from 'classnames';
import {
  CommonProps,
  EuiButton,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButtonEmpty,
} from '@elastic/eui';
import { EuiSuperDatePicker } from '../../../eui';
import { EuiPageHeader } from '../../../eui/page/page_header_shim';

type Props = CommonProps & HTMLAttributes<HTMLDivElement>;

export function KibanaGlobals({ className, ...rest }: Props): ReactElement {
  const classes = classNames('kbnGlobals', className);

  return (
    <EuiPageHeader className={classes}>
      <EuiFlexGroup gutterSize="s" responsive={false} {...rest}>
        <EuiFlexItem grow={false}>
          <EuiButton size="s" iconType="filter" minWidth={0} />
        </EuiFlexItem>
        <EuiFlexItem grow={true}>
          <EuiFieldText
            placeholder="Filter with KQL..."
            compressed
            fullWidth
            append={
              <EuiButtonEmpty size="xs" iconType="plusInCircle">
                Add
              </EuiButtonEmpty>
            }
          />
        </EuiFlexItem>
        {/* <EuiFlexItem grow={false}>
        <EuiButton size="s" iconType="plusInCircle" color="text" minWidth={0} />
      </EuiFlexItem> */}
        <EuiFlexItem grow={false}>
          <EuiSuperDatePicker />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPageHeader>
  );
}
