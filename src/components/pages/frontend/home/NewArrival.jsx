import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imgPath } from '../../../helpers/functions-general';
import Carditem from './Carditem';


const NewArrival = () => {

    

   

    const NewArrivalArray = [
        {
            img1:"na-card-a1.jpg",
            img2:"na-card-a2.jpg",
             title:"Lorem ipsum dolor sit amet.",
            price:"1499.99",
        },
        {
            img1:"na-card-a2.jpg",
            img2:"na-card-a1.jpg",
             title: "Lorem ipsum dolor sit amet.",
            price:"149.99",
        },
        {
            img1:"na-card-a1.jpg",
            img2:"na-card-a2.jpg",
             title:"Lorem ipsum dolor sit amet.",
            price:"1499.99",
        },
        {
            img1:"na-card-a2.jpg",
            img2:"na-card-a1.jpg",
             title:"Lorem ipsum dolor sit amet.",
            price:"149.99",
        },
        {
            img1:"na-card-a1.jpg",
            img2:"na-card-a2.jpg",
             title:"Lorem ipsum dolor sit amet.",
            price:"1499.99",
        },
    ]





    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed:1500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
               

              }
            },
           
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
      };

  return (
    <section className='new-arrrival py-10'>
      <div className="container">
     <Slider {...settings}>

        {NewArrivalArray.map((item, key)=>(
           <Carditem item={item} key={key}/>
        ))}     
     </Slider>
      </div>
    </section>
  )
}

export default NewArrival
