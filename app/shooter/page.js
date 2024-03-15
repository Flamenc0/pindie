import { getGamesByCategory } from "../data/data-utils";
import { CardList } from "../components/CardsList/CardList";

export default function Shooter() {
    const shooterGames = getGamesByCategory("shooter");
    
    return (
        <main className="main-inner">
            <CardList id='shooter' title='Шутеры' data={shooterGames}/>
        </main>
    )
}