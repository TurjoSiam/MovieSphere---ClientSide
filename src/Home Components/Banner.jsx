import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import img1 from '../../src/assets/spiderman.jpg'
import img2 from '../../src/assets/insideout.jpg'
import img3 from '../../src/assets/therevenant.jpg'
import img4 from '../../src/assets/onward.jpg'
import img5 from '../../src/assets/1917.jpg'
import { Typewriter } from 'react-simple-typewriter'


const Banner = () => {

    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
            perView: 3,
            spacing: 15,
        },
    })

    return (
        <div className="bg-[url('/banner.jpg')] h-[600px] object-cover flex gap-10">
            <div className="w-6/12 my-auto mx-5 py-14 rounded-2xl px-7 bg-[#0000007e] text-white text-4xl font-bold">
                <Typewriter
                    words={['Experience the Magic of Cinema!', 'Where Stories Come to Life.', 'Every Genre. Every Era. Every Story.', 'Lights, Camera, Action... Anytime!']}
                    loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </div>
            <div ref={sliderRef} className="w-6/12 keen-slider my-20">
                <div className="keen-slider__slide number-slide1"><img className="w-[250px] h-[400px] rounded-2xl" src={img1} alt="img1" /></div>
                <div className="keen-slider__slide number-slide2"><img className="w-[250px] h-[400px] rounded-2xl" src={img2} alt="img2" /></div>
                <div className="keen-slider__slide number-slide3"><img className="w-[250px] h-[400px] rounded-2xl" src={img3} alt="img3" /></div>
                <div className="keen-slider__slide number-slide4"><img className="w-[250px] h-[400px] rounded-2xl" src={img4} alt="img4" /></div>
                <div className="keen-slider__slide number-slide5"><img className="w-[250px] h-[400px] rounded-2xl" src={img5} alt="img5" /></div>
            </div>
        </div>
    );
};

export default Banner;