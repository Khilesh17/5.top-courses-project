import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { filterData, apiUrl } from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function App() {

  //state for category
  const [category, setCategory] = useState(filterData[0].title);

  // Fetching data from Api
  const [courses, setCourses] = useState(null);

  //jab tak data aa raha hai tab tak loading dikaege
  const [loading, setLoading] = useState(true);

  //data fetch from api
  const fetchData = async () => {
    setLoading(true);
    try {
      let content = await fetch(apiUrl);
      let output = await content.json();
      
      setCourses(output.data);
    }
    catch(error) {
      toast.error("Kuch tho Gadbad hai daya");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="app">
      <Navbar></Navbar>

      <div className='whole-bg'>
        <Filter
          filterData={filterData}
          category = {category}
          setCategory = {setCategory}
        ></Filter>
        
        {/* card section  */}
        {
          // <Spinner/>
          loading ? (<Spinner/>):(<Cards courses = { courses } category = {category}></Cards>)
        }
      </div>
    </div>
  );
}

export default App;
