import { Card } from "../../../components/Card/UI/Card";
import s from "./HomePage.module.scss";

import SwapIcon from "./icons/Swap.svg";
import UsersIcon from "./icons/Users.svg";

const HomePage = () => {
  return (
    <div className={s.HomePage}>
      <p className={s.title}>Site Perfomance</p>
      <p className={s.description}>Today vs 7 days ago</p>
      <div className={s.cardList}>
        <Card iconTop={SwapIcon} iconBottom={UsersIcon} />
        <Card iconTop={SwapIcon} iconBottom={UsersIcon} />
        <Card iconTop={SwapIcon} iconBottom={UsersIcon} />
      </div>
    </div>
  );
};

export default HomePage;
