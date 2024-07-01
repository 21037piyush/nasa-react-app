import PropTypes from 'prop-types';

export default function Footer(props) {
    const { data, handleToggleModal } = props;

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
            <h1>APOD Project</h1>
                <h2>{data?.title}</h2>
                
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-sharp fa-solid fa-circle-info"></i>
            </button>
        </footer>
    );
}

// Add PropTypes to ensure props are passed correctly
Footer.propTypes = {
    data: PropTypes.object.isRequired,
    handleToggleModal: PropTypes.func.isRequired,
};
