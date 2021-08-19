/** @format */

import React from 'react';
import { NavLink } from 'react-router-dom';
// import NavigationListItem from './NavigationListItem';
import styles from './Navigation.module.css';

const Navigation = ({ routes, url = '', prevPathname = '' }) => {
  return (
    <ul className={styles.navigationList}>
      {routes.map(route => (
        <li className={styles.navigationItem} key={route.name}>
          <NavLink
            className="navigationLink"
            activeClassName="activNavigationLink"
            to={{ pathname: url + route.path, state: { from: prevPathname } }}
            exact={route.exact}
          >
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
