
function Filter({ filterData, category, setCategory }) {
    
    //how do we know which button is pressed ?
    //we have to pass title or id 
    function filterHandler(title) {
        setCategory(title);        
    }

    return ( 
        <div className='filter'>
            {
                filterData.map((data) => {
                    return <button
                        key={data.id}
                        className={`btn ${category === data.title ? 'filter-btn-clicked' : 'filter-btn'}`}
                        onClick={() => filterHandler(data.title)}
                    >{data.title}</button>
                })
            }
        </div> 
    );
}

export default Filter;