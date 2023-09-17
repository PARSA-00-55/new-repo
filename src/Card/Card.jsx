
import './card.css';

const Card = ({card ,handleSelectedCards}) => {
    const {title, description, img, price, credit } =card;

    return (

        <div className="card">
            <img src={img} alt="" />
            <h3> {title}</h3>
            <p>{description} </p>
            <div>
                <h5>{price} </h5>
                <h5>{credit}</h5>
            </div>
            <button  onClick={() => { handleSelectedCards(card)}}>Select</button>
        </div>
    );
};

export default Card;