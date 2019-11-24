import React from 'react';
import styles from './DashboardCard.module.css';
import { FiEdit } from 'react-icons/fi';
import { IoIosAddCircle } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

function DashboardCard() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h2>Complaints</h2>
          <div className={styles.edit}>
            <FiEdit size="20%" />
          </div>
          <div className={styles.outer}>
            <IoIosAddCircle size="30%" className={styles.circle} />
          </div>
        </div>
        <div className={styles.card}>
          <h2>Maintainance</h2>
          <div className={styles.edit}>
            <FiSettings size="20%" />
          </div>
          <div className={styles.outer}>
            <NavLink
              to=""
              className={styles.navlink}
              style={{ textDecoration: 'none' }}
            >
              <h2 className={styles.seeMore}>see more</h2>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardCard;
