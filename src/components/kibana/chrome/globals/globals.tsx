import React, { ReactElement, HTMLAttributes } from 'react';
import classNames from 'classnames';
import {
  CommonProps,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiFieldTextProps,
} from '@elastic/eui';
import { EuiSuperDatePicker } from '../../../eui';

export type KibanaGlobalsProps = CommonProps &
  HTMLAttributes<HTMLDivElement> & {
    filters?: boolean;
    placeholder?: string;
    prepend?: EuiFieldTextProps['prepend'];
    compressed?: boolean;
    disabledSearch?: boolean;
  };

export function KibanaGlobals({
  className,
  filters = true,
  placeholder,
  prepend,
  compressed = true,
  disabledSearch = false,
  ...rest
}: KibanaGlobalsProps): ReactElement {
  const classes = classNames('kbnGlobals', className);

  return (
    <div className={classes}>
      <EuiFlexGroup gutterSize="s" responsive={false} {...rest}>
        {filters && (
          <EuiFlexItem grow={false}>
            <EuiButtonIcon
              size={compressed ? 's' : 'm'}
              iconType="filter"
              aria-label="Filter options"
              display="base"
            />
          </EuiFlexItem>
        )}
        <EuiFlexItem grow={true}>
          <EuiFieldText
            placeholder={placeholder || 'Filter with KQL...'}
            icon={placeholder ? 'search' : undefined}
            compressed={compressed}
            fullWidth
            disabled={disabledSearch}
            prepend={prepend}
            append={
              filters ? (
                <EuiButtonEmpty size="xs" iconType="plusInCircle">
                  Add
                </EuiButtonEmpty>
              ) : undefined
            }
          />
        </EuiFlexItem>
        {/* <EuiFlexItem grow={false}>
        <EuiButton size="s" iconType="plusInCircle" color="text" minWidth={0} />
      </EuiFlexItem> */}
        <EuiFlexItem grow={false}>
          <EuiSuperDatePicker compressed={compressed} />
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
}
