import './achievements.css';
import Carousal from './carousal';
import aw1 from '../assets/award.jpg';
import aw2 from '../assets/1-1.jpg';
import aw3 from '../assets/1-2.jpg';
import aw4 from '../assets/1-3.jpg';

export default function Achievements() {
    const carouselData1 = {
        images: [aw1, aw2, aw3, aw4],
        heading: "IIT Kharagpur Achievements",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ullam doloribus laborum sit, maiores impedit beatae vero optio quam, similique non nisi cupiditate odit sunt, illum ratione."
    };

    const carouselData2 = {
        images: [aw2, aw3, aw4, aw1],
        heading: "Innovation at IIT Kharagpur",
        paragraph: "Natus, perferendis ipsum qui consequatur. Vero, aliquam pariatur. Distinctio sit rem mollitia dolores. Tempore corporis ullam exercitationem perferendis!"
    };

    return (
        <div className="achievements-main">
            <div className="achievements-heading">
                <h1>Our Achievements</h1>
            </div>

            <div className="carousal-container">
                <Carousal 
                    images={carouselData1.images} 
                    heading={carouselData1.heading} 
                    paragraph={carouselData1.paragraph} 
                />
                <Carousal 
                    images={carouselData2.images} 
                    heading={carouselData2.heading} 
                    paragraph={carouselData2.paragraph} 
                />
            </div>
        </div>
    );
}
