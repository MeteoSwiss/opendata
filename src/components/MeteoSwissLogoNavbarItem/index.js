import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';


const FeatureList = [
  {
    Flag: require('@site/static/img/logo.svg').default,
    AdminText: require('@site/static/img/admin_text.svg').default,
  },
];

function Feature({Flag, AdminText}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <Flag className={styles.featureSvg} role="img" />
        <AdminText className={styles.featureSvg} role="img" />
      </div>
    </div>
  );
}

function MeteoSwissLogoNavbarItemDesktop({
  className,
  isDropdownItem = false,
  ...props
}) {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


function MeteoSwissLogoNavbarItemMobile({
  className,
  isDropdownItem,
  ...props
}) {
  return (
    <li className="menu__list-item">
      <NavbarNavLink className={clsx('menu__link', className)} {...props} />
    </li>
  );
}

export default function MeteoSwissLogoNavbarItem({
  mobile = false,
  position, // Need to destructure position from props so that it doesn't get passed on.
  ...props
}) {
  const Comp = mobile ? MeteoSwissLogoNavbarItemMobile : MeteoSwissLogoNavbarItemDesktop;
  return (
    <Comp
      {...props}
      activeClassName={
        props.activeClassName ??
        (mobile ? 'menu__link--active' : 'navbar__link--active')
      }
    />
  );
}