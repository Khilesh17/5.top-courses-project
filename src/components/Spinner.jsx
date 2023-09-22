import './Spinner.css';

function Spinner() {
    return (
        <div className="spinner-container">
            <div className="lds-ripple"><div></div><div></div></div>
            <p className='loading'>Loading...</p>
        </div>
    );
};

export default Spinner;