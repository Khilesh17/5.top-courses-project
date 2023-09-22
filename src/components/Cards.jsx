import { useState } from "react";
import Card from "./Card";

function Cards({ courses , category}) {
    
    //Converting all the coursed in a single array
    function getCourses() {
        if (category === 'All') {
            let allCourses = [];
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourses.push(course);
                })
            });
            return allCourses;
        }
        else {
            //specified category hi show krege
            return courses[category];
        }
    }

    //For liked courses
    const [likedCourses, setLikedCourses] = useState([]);

    return (
        <div className="cards">
            {
                getCourses().map((course) => {
                    return <Card
                        key={course.id}
                        course={course}
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses}
                    />
                })
            }
        </div>
    );
}

export default Cards;