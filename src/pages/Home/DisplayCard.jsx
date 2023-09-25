import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DisplayCard = ({ card }) => {
    const { id, picture, category, title, card_bg_color, category_bg_color, text_button_bg_color } = card;

    const cardStyle = {
        backgroundColor: card_bg_color,
    };

    const textColor = {
        color: text_button_bg_color
    }

    return (
        <div>
            <Link to={`/donationDetails/${id}`}>
                <div className="relative flex max-w-[24rem] flex-col rounded-lg bg-${card_bg_color} bg-clip-border" style={cardStyle}>
                    <div className="relative m-0 overflow-hidden rounded-t-lg bg-transparent bg-clip-border shadow-none">
                        <img
                            src={picture}
                            alt="picture"
                        />
                    </div>
                    <div className="p-6">
                        <p className="w-fit text-sm font-medium text-center leading-snug tracking-normal px-[10px] py-1 rounded " style={{
                            backgroundColor: category_bg_color,
                            color: text_button_bg_color,
                        }}>
                            {category}
                        </p>
                        <p className="mt-3 block text-lg font-semibold leading-relaxed" style={textColor}>
                            {title}
                        </p>
                    </div>
                </div >
            </Link>
        </div >
    );
};

DisplayCard.propTypes = {
    card: PropTypes.object.isRequired,
}

export default DisplayCard;