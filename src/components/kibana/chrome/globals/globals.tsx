import React, { ReactElement, HTMLAttributes } from 'react';
import classNames from 'classnames';
import {
  CommonProps,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButtonEmpty,
  EuiButtonIcon,
} from '@elastic/eui';
import { EuiSuperDatePicker } from '../../../eui';

type Props = CommonProps & HTMLAttributes<HTMLDivElement>;

export function KibanaGlobals({ className, ...rest }: Props): ReactElement {
  const classes = classNames('kbnGlobals', className);

  return (
    <div className={classes}>
      <EuiFlexGroup gutterSize="s" responsive={false} {...rest}>
        <EuiFlexItem grow={false}>
          <EuiButtonIcon
            size="s"
            iconType="filter"
            aria-label="Filter options"
            display="base"
          />
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
    </div>
  );
}
