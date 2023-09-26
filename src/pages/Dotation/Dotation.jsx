import { useEffect, useState } from "react";
import DisplayDonationCard from "./DisplayDonationCard";

const Dotation = () => {

    const [donations, setDonations] = useState([]);
    const [showAll, setShowAll] = useState(false);

    // load data from local storage
    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donation-item'));
        if (donatedItems) {
            setDonations(donatedItems);
        }
    }, [])

    // console.log(donations);
    const visibleDonation = showAll ? donations : donations.slice(0, 4);

    return (
        <div className="my-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    visibleDonation.map(donation => (<DisplayDonationCard key={donation.id} donation={donation}></DisplayDonationCard>))
                }
            </div>
            <div className="mt-10">
                {donations.length > 4 && !showAll && <button onClick={() => setShowAll(true)} className="block mx-auto bg-[#009444] rounded-lg text-white p-2">See All</button>
                }
            </div>
        </div>
    );
};

export default Dotation;