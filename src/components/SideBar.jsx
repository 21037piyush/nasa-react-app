import PropTypes from 'prop-types';
export default function SideBar(props) {
    const {handleToggleModal,  data} = props
    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>{data?.title}</h2>
            <div className='discriptionContainer'>
                <p className='descriptionTitle'>{data?.date}</p>
                <p>{data?.explanation}
                </p>
            </div>
            <button onClick={handleToggleModal}>
            <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
        </div>

    );
}

SideBar.propTypes = {
    data: PropTypes.object.isRequired,
    handleToggleModal: PropTypes.func.isRequired,
};
