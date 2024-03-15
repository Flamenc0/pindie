import { Banner } from './components/Banner/Banner';
import { CardList } from "./components/CardsList/CardList";
import { getGamesByCategory } from './data/data-utils';
import { PromoList } from './components/Promo/PromoList';

export default function Home() {

  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new"); 

  return (
    <main className="main">
      <Banner/>
      <CardList id='popular' title='Популярные' data={popularGames}/>
      <CardList id='new' title='Новинки' data={newGames}/>
      <PromoList/>
  </main>
    );
}