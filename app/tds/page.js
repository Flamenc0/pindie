import { getGamesByCategory } from "../data/data-utils";
import { CardList } from '../components/CardsList/CardList';

export default function TDS() {

    const TDS = getGamesByCategory('TDS');

    return (
        <main className={"main-inner"}>
            <CardList id='TDS' title='TDS' data={TDS}/>
        </main>
    )
}