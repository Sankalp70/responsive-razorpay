import React from 'react'
import{ useState, useEffect } from 'react';
import Scroller from '../Scroller/Scroller';
import Carousel from '../Carousel/Carousel';

const Responsive = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
        }

        handleResize(); // Check initial width
        window.addEventListener('resize', handleResize); // Listen for window resize

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up the event listener
        };
    }, []);
  return (
    <div>
       <div>
            {isMobile ? (
              <Scroller/>
            ) : (
                 <Carousel/>
            )}
        </div>

    </div>
  )
}

export default Responsive