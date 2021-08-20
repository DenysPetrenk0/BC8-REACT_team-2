import React from 'react';
import styles from './Contacts.module.css';
import teamDatas from './team-data/team-data.json';
// import alina from './images/alina.webp';
import foto from './team-data/foto';
import sprite from './images/sprite.svg';

const Contacts = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Наша команда</h2>
      <p className={styles.slogan}>Всегда готовы к новым вызовам!</p>
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
            <h3 className={styles.itemTitle}>{data.name}</h3>
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
  );
};

export default Contacts;

// {images.alina.webp}
