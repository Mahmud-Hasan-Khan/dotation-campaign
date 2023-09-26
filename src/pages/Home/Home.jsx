import { useEffect, useState } from "react";
import DisplayCard from "./DisplayCard";
import PropTypes from 'prop-types';

const Home = () => {
    const [cards, setCards] = useState([]);
    const [search, setSearch] = useState('');
    const [filterCards, setFilterCards] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => {
                setCards(data);
                setFilterCards(data);
            });
    }, []);

    const handleSearchInput = (e) => {
        setSearch(e.target.value);
    }

    const handleSearchButton = () => {
        const filtered = cards.filter(card =>
            card.category.toLowerCase().includes(search.toLowerCase()));
        setFilterCards(filtered);
        setSearch('')
    };

    return (
        <>
            <div className="flex h-[600px] justify-center items-center flex-col">
                <div
                    className="w-full h-[600px] bg-[url('https://i.ibb.co/drj3x0X/banner-bg.jpg')] bg-cover bg-center">
                    <div className="w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-90">

                        <span className="text-[#0B0B0B] text-2xl lg:text-5xl font-bold text-center">I Grow By Helping People In Need</span>

                        <div className="form-control mt-10">
                            <label className="input-group">
                                <input type="text" placeholder="Search here...."
                                    value={search}
                                    onChange={handleSearchInput}
                                    className="input input-bordered w-[220px] md:w-[360px] " />
                                <button className="bg-[#FF444A] text-white text-base font-semibold px-2" onClick={handleSearchButton}>Search</button>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-20 my-24">
                {
                    filterCards?.map(card => <DisplayCard key={card.id} card={card} ></DisplayCard>)
                }
            </div>
        </>
    );
};

Home.propTypes = {
    cards: PropTypes.array,
}

export default Home;