import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { useState } from 'react';
// import PropTypes from 'prop-types';

const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
};

// HomeSectionCarousel.propTypes = {
//     data: PropTypes.string,
//     sectionName: PropTypes.string
// }

const HomeSectionCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const slidePrev=()=>setActiveIndex(activeIndex-1);
    const slideNext=()=>setActiveIndex(activeIndex+1);

    const syncActiveIndex=({item})=>setActiveIndex(item);

    // const items = data.slice(0,10).map((item)=> <HomeSectionCard product={item} key=""/>);
    const items = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(()=> <HomeSectionCard key=""/>);

    return(
        <div className="px-4 lg:px-8">
            {/* <h2 className='text-2x1 font-extrabold text-gray-800 py-5'>{sectionName}</h2> */}
            <div className="relative p-5">
    <AliceCarousel
        items={items}
        disableButtonsControls
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls
        onSlideChanged={syncActiveIndex}
        activeIndex={activeIndex}
    />
    
    {/* Right Arrow  */}
    {activeIndex!==items.length-5 && <Button onClick={slideNext} variant='contained' className='z-50 bg-white' sx={{position: 'absolute', top: '8rem', right:"0rem", transform:"translateX(50%) rotate(90deg)", bgcolor:"white"}} aria-label='next'> 
    <KeyboardArrowLeftIcon sx={{transform: "rotate(90deg)", color: "black"}}/>
    </Button>}

    {/* Left Arrow */}
    {activeIndex!==0 && <Button onClick={slidePrev} variant='contained' className='z-50 bg-white' sx={{position: 'absolute', top: '8rem', left:"0rem", transform:"translateX(-50%) rotate(-90deg)", bgcolor:"white"}} aria-label='next'> 
    <KeyboardArrowLeftIcon sx={{transform: "rotate(90deg)", color: "black"}}/>
    </Button>}
   
    </div>
    </div>
    )
}

export default HomeSectionCarousel
