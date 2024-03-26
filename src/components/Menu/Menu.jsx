import pizzas from "../../../data";
import PizzaCard from "./PizzaCard";

const Menu = (props) => {
    
    return (
        <>
            <ul className="menu">
                {pizzas.map((card) => (
				    <PizzaCard key={card.id} card={card} />
			    ))}
            </ul>
        </>
    )
}

export default Menu;