import PropTypes from 'prop-types';
import Swal from 'sweetalert2'

const DisplayDonationDetails = ({ details }) => {
    const { id, picture, price, title, description, text_button_bg_color } = details;
    // console.log(details);

    const textColor = {
        backgroundColor: text_button_bg_color
    }

    const handleAddToDonation = () => {
        const addedDonationArray = [];

        const donationItem = JSON.parse(localStorage.getItem('donation-item'));

        if (!donationItem) {
            addedDonationArray.push(details);
            localStorage.setItem('donation-item', JSON.stringify(addedDonationArray));

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Donation Successful!',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            const isExits = donationItem.find(item => item.id == id);
            if (!isExits) {
                addedDonationArray.push(...donationItem, details);
                localStorage.setItem('donation-item', JSON.stringify(addedDonationArray));

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Donation Successful!',
                    showConfirmButton: false,
                    timer: 1500
                })

            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'You have already Donated this, Please try another one',
                    showConfirmButton: true,

                })
            }

        }
    }

    return (
        <div className="relative mb-6">
            <div className="mt-2" style={{ position: 'relative' }}>
                <div
                    className="overlay"
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '20%',
                        background: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1,
                    }}
                ></div>
                <img
                    src={picture}
                    alt="Background"
                    style={{ width: '100%', height: 'auto', maxHeight: '500px', borderRadius: '0px' }}
                />
            </div>

            <button onClick={handleAddToDonation} className="text-xl font-semibold text-white px-3 py-1 md:px-6 md:py-4 rounded absolute top-[52%] md:top-[69%] z-10 ml-9" style={textColor}>Donate ${price}</button>

            <h3 className="text-4xl font-bold mt-3 mb-2">{title} </h3>
            <p>{description} </p>
        </div>
    );
};

DisplayDonationDetails.propTypes = {
    details: PropTypes.object.isRequired,
}

export default DisplayDonationDetails;