
import { getGamesByCategory } from "../data/data-utils";
import { CardList } from "../components/CardsList/CardList";

export default function Runners() {
    const runnerGames = getGamesByCategory("runner");
    
    return (
        <main className="main-inner">
            <CardList id='runners' title='Ранеры' data={runnerGames}/>
        </main>
    )
}