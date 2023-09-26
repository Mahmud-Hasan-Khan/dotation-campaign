import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DisplayDonationDetails from './DisplayDonationDetails';

const DonationDetails = () => {
    const [details, setDetails] = useState({});

    const { id } = useParams();
    const donationDetails = useLoaderData();

    useEffect(() => {

        const findDetails = donationDetails?.find(detail => detail.id == id)
        setDetails(findDetails);

    }, [id, donationDetails])

    // console.log(details);
    return (
        <div>
            <DisplayDonationDetails details={details} ></DisplayDonationDetails>
        </div>
    );
};

export default DonationDetails;