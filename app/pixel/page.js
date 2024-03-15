import { getGamesByCategory } from "../data/data-utils";
import { CardList } from "../components/CardsList/CardList";

export default function Pixel() {
    const pixelGames = getGamesByCategory("pixel");
    
    return (
        <main className="main-inner">
            <CardList id='pixel' title='Пиксель' data={pixelGames}/>
        </main>
    )
}