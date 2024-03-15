import { getGamesByCategory } from "../data/data-utils";
import { CardList } from "../components/CardsList/CardList";

export default function Home() {
    const popularGames = getGamesByCategory("popular");
    
    return (
        <main className="main">
            <CardList id='popular' title='Популярные' data={popularGames}/>
        </main>
    )
}