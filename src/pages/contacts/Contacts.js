import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Contacts.module.css';
import teamDatas from './team-data/team-data.json';
import foto from './team-data/foto';
import sprite from './images/sprite.svg';
import Footer from '../../components/footer/Footer';

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className={styles.container}>
        <h2 className={styles.title}>{t('Our Team')}</h2>
        <p className={styles.slogan}>{t('Always ready for new challenges')}</p>
        <ul className={styles.list}>
          {teamDatas.map(data => (
            <li className={styles.item} key={data.name}>
              <img
                src={foto[data.id]}
                className={styles.foto}
                alt={data.name}
                width="280"
                height="246"
              />
              <h3 className={styles.itemTitle}>{t(data.name)}</h3>
              <p className={styles.itemPosition}>{data.position}</p>
              <ul className={styles.socialList}>
                {data.links.map(link => (
                  <li className={styles.socialListItem} key={link.name}>
                    <a
                      className={styles.socialLink}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <svg
                        className={styles.socialLinkIcon}
                        width="20"
                        height="20"
                      >
                        <use href={sprite + `${link.icon}`}></use>
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
