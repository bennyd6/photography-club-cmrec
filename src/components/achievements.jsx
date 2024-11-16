import './achievements.css';
import Carousal from './carousal';
import im1 from '../assets/1-1.jpg';
import im2 from '../assets/1-2.jpg';
import im3 from '../assets/1-3.jpg';
import im4 from '../assets/2-1.jpg';
import im5 from '../assets/2-2.jpg';
import im6 from '../assets/2-3.jpg';
import im7 from '../assets/3-1.jpg';
import im8 from '../assets/3-2.jpg';
import im9 from '../assets/3-3.jpg';

export default function Achievements() {
    const carouselData1 = {
        images: [im1, im2, im3],
        heading: "Short Film Making (IIT Kharagpur)",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ullam doloribus laborum sit, maiores impedit beatae vero optio quam, similique non nisi cupiditate odit sunt, illum ratione."
    };

    const carouselData2 = {
        images: [im4, im5, im6],
        heading: "Motion Tales (IIT Kharagpur)",
        paragraph: "Natus, perferendis ipsum qui consequatur. Vero, aliquam pariatur. Distinctio sit rem mollitia dolores. Tempore corporis ullam exercitationem perferendis!"
    };
    
    const carouselData3={
        images: [im7, im8, im9],
        heading: "Cinevision 2k24 (CMRTC)",
        paragraph: "Natus, perferendis ipsum qui consequatur. Vero, aliquam pariatur. Distinctio sit rem mollitia dolores. Tempore corporis ullam exercitationem perferendis!"
    }
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
                <Carousal 
                    images={carouselData3.images} 
                    heading={carouselData3.heading} 
                    paragraph={carouselData3.paragraph} 
                />
            </div>
        </div>
    );
}
