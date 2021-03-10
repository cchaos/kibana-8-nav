/**
 * Chrome component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React, { HTMLAttributes, useState, FunctionComponent } from 'react';
import { navigate } from 'gatsby';

import {
  IconType,
  EuiFlexItem,
  EuiFlyoutProps,
  EuiListGroup,
  EuiIcon,
  EuiCollapsibleNavGroup,
  EuiHeaderSectionItemButton,
  EuiCollapsibleNav,
  EuiPinnableListGroupItemProps,
} from '@elastic/eui';

import { CloudNavLinks } from '../../_data';

interface Props
  extends Omit<EuiFlyoutProps, 'onClose'>,
    HTMLAttributes<HTMLDivElement> {
  currentRoute?: string;
}

type ChromNavListItem = EuiPinnableListGroupItemProps & {
  url?: string;
};

export type ChromeNavGroupProps = {
  title: string;
  iconType?: IconType;
  links: ChromNavListItem[];
  isOpen?: boolean;
};

export const CloudNav: FunctionComponent<Props> = ({}) => {
  // const context = React.useContext(ThemeContext);
  const [navIsOpen, setNavIsOpen] = useState(false);

  const [openGroups, setOpenGroups] = useState(
    JSON.parse(String(localStorage.getItem('openNavGroups'))) ||
      CloudNavLinks.map((object) => object.title)
  );

  // Save which groups are open and which are not with state and local store
  const toggleAccordion = (isOpen: boolean, title?: string) => {
    if (!title) return;
    const itExists = openGroups.includes(title);
    if (isOpen) {
      if (itExists) return;
      openGroups.push(title);
    } else {
      const index = openGroups.indexOf(title);
      if (index > -1) {
        openGroups.splice(index, 1);
      }
    }
    setOpenGroups([...openGroups]);
    localStorage.setItem('openNavGroups', JSON.stringify(openGroups));
  };

  function alterLinksWithCurrentStateAndLinks(
    links: ChromNavListItem[]
  ): EuiPinnableListGroupItemProps[] {
    // @ts-ignore
    return links.map((link) => {
      const { url, onClick, pinned, isActive, href, ...rest } = link;
      return {
        onClick: url
          ? () => navigate(url)
          : () => {
              return null;
            },
        'aria-current': isActive,
        color: isActive ? 'primary' : 'text',
        isActive,
        href,
        url,
        ...rest,
      };
    });
  }

  const createNavGroups = (links: ChromeNavGroupProps[]) => {
    return links.map((linksObject) => {
      return (
        <EuiCollapsibleNavGroup
          key={linksObject.title}
          title={linksObject.title}
          iconType={linksObject.iconType}
          isCollapsible={true}
          initialIsOpen={
            linksObject.title ? openGroups.includes(linksObject.title) : true
          }
          onToggle={(isOpen: boolean) =>
            toggleAccordion(isOpen, linksObject.title)
          }>
          <EuiListGroup
            aria-label={linksObject.title} // A11y : EuiCollapsibleNavGroup can't correctly pass the `title` as the `aria-label` to the right HTML element, so it must be added manually
            listItems={alterLinksWithCurrentStateAndLinks(linksObject.links)}
            maxWidth="none"
            color="subdued"
            gutterSize="none"
            size="s"
          />
        </EuiCollapsibleNavGroup>
      );
    });
  };

  return (
    <EuiCollapsibleNav
      id="cloudCollapsibleNav"
      aria-label="Main navigation"
      isOpen={navIsOpen}
      button={
        <EuiHeaderSectionItemButton
          aria-label="Toggle main navigation"
          onClick={() => setNavIsOpen(!navIsOpen)}>
          <EuiIcon type={'menu'} size="m" aria-hidden="true" />
        </EuiHeaderSectionItemButton>
      }
      onClose={() => setNavIsOpen(false)}>
      {/* BOTTOM */}
      <EuiFlexItem className="eui-yScroll">
        <EuiCollapsibleNavGroup
          background="light"
          title="Cloud"
          isCollapsible={false}
          iconType="logoCloud"
        />
        {createNavGroups(CloudNavLinks)}
      </EuiFlexItem>
    </EuiCollapsibleNav>
  );
};
