import Card from '../Card/card.component';
import './card-list.css';

const Cardlist = ({ monsters }) => (
  <div className="cardlist">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);

export default Cardlist;
