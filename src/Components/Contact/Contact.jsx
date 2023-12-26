import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay} from 'swiper/modules';
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <div id="contact-top">
        <h1>Our Workarea</h1>

      </div>

      <div id="swiperdiv">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          speed={2000}
          loop={true}
          autoplay={{
            delay:500,
            disableOnInteraction: true,
          }}
          waitForTransition={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          
          <SwiperSlide><img src="https://plus.unsplash.com/premium_photo-1661369089329-d89031837cdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" /></SwiperSlide>
        
        <SwiperSlide><img src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" /></SwiperSlide>
        
          
        </Swiper>
       
      </div>

    
    </div>
  );
};

export default Contact;
