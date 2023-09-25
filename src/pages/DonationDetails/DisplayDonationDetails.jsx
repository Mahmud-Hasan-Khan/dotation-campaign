import PropTypes from 'prop-types';

const DisplayDonationDetails = ({ details }) => {
    const { picture, price, title, description, text_button_bg_color } = details;
    console.log(details);

    const textColor = {
        backgroundColor: text_button_bg_color
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
            <button className="text-xl font-semibold text-white px-3 py-1 md:px-6 md:py-4 rounded absolute top-[52%] md:top-[69%] z-10 ml-9" style={textColor}>Donate ${price} </button>
            <h3 className="text-4xl font-bold mt-3 mb-2">{title} </h3>
            <p>{description} </p>
        </div>
    );
};

DisplayDonationDetails.propTypes = {
    details: PropTypes.object.isRequired,
}

export default DisplayDonationDetails;