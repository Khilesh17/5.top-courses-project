import { FcLike , FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

function Card({ course , likedCourses, setLikedCourses}) {
    
    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            //current card pehle se liked hai
            setLikedCourses((prev) => prev.filter((prevId) => prevId !== course.id));
            toast.warning('Like Removed');
        }
        else {
            //liked nhi hai tho insert krna h
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked");
        }
    }


    return (
        <div className='container'>
            <div className='img-div'>
                <img className='image' src={course.image.url} alt="Images" />

                <button className='heart-btn' onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ?
                            <FcLike fontSize="1.75rem" /> :
                            <FcLikePlaceholder fontSize="1.75rem" />
                    }
                </button>
            </div>

            <div className='content-div'>
                <p className='title'>{course.title}</p>
                <p className='desc'>
                    {
                        course.description.length > 100 ? (course.description.substr(0, 100)) + '....' : (course.description)
                    }
                </p>
            </div>
        </div>
    );
}

export default Card;