import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import './cards.css';
import Calculate from "../Calculation/Calculate";

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [selected, setSelected] = useState([]); // Initialize as an empty array

    useEffect(() => {
        fetch('courseData.json')
        .then(res => res.json())
        .then(data => setCards(data));
    }, []);

    const handleSelectedCards = (card) => {
        // Append the selected card to the selected array
        setSelected([...selected, card]);
    }

    useEffect(() => {
        console.log(selected);
    }, [selected]);

    return (
        <div>
            <ol>
                {/* Map over the selected array and render list items */}
                <Calculate selected={selected} />
            </ol>
            
            <div className="cards-container">
                {cards.map(card => (
                    <Card 
                        key={card.id}
                        handleSelectedCards={handleSelectedCards} 
                        card={card}
                    ></Card>
                ))}
            </div>
        </div>
    );
};

export default Cards;
