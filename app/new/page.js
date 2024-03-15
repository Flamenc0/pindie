import { getGamesByCategory } from "../data/data-utils";
import { CardList } from "../components/CardsList/CardList";

export default function Home() {
    const newGames = getGamesByCategory("new");
    
    return (
        <main className="main">
            <CardList id='new' title='Новинки' data={newGames}/>
        </main>
    )
}