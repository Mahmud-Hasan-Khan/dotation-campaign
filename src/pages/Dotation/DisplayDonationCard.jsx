import PropTypes from 'prop-types';

const DisplayDonationCard = ({ donation }) => {
    const { id, picture, category, title, price, card_bg_color, category_bg_color, text_button_bg_color } = donation;

    const cardStyle = {
        backgroundColor: card_bg_color,
    };

    const textColor = {
        color: text_button_bg_color
    }
    const bgColor = {
        backgroundColor: text_button_bg_color
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl rounded-lg" style={cardStyle}>
                <img className="rounded-s-lg" src={picture} alt="donation" />
                <div className="card-body">
                    <p className="w-fit text-sm font-medium text-center leading-snug tracking-normal px-[10px] py-1 rounded " style={{
                        backgroundColor: category_bg_color,
                        color: text_button_bg_color,
                    }}>
                        {category}
                    </p>
                    <h2 className="text-xl font-semibold">{title} </h2>
                    <p className="text-base font-semibold" style={textColor}> ${price} </p>
                    <div className="mt-1">
                        <button className="text-xl font-semibold text-white px-1 lg:px-3 py-1 rounded" style={bgColor}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

DisplayDonationCard.propTypes = {
    donation: PropTypes.object.isRequired
}

export default DisplayDonationCard;