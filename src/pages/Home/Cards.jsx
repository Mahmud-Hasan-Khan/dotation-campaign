import { useEffect, useState } from "react";
import DisplayCard from "./DisplayCard";
import PropTypes from 'prop-types';

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    // console.log(cards);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-20 my-24">
            {
                cards?.map(card => <DisplayCard key={card.id} card={card} ></DisplayCard>)
            }
        </div>
    );
};

Cards.propTypes = {
    cards: PropTypes.array,
}

export default Cards;