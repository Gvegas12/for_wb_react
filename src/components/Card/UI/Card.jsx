/* eslint-disable react/prop-types */

import s from "./Card.module.scss";

export const Card = ({ iconTop, iconBottom }) => {
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <p className={s.cardTitle}>Visitors</p>
        <img src={iconTop} alt="" />
      </div>
      <div className={s.cardValue}>92,680</div>
      <div className={s.cardFooter}>
        <p>+3,840</p>
        <img src={iconBottom} alt="" />
      </div>
    </div>
  );
};
