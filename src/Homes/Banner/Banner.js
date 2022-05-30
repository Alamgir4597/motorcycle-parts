import React from 'react';


const Banner = () => {
    
    
    return (
      <div>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full ">
                    <img src="https://img.freepik.com/free-photo/spare-parts-car_1170-1344.jpg?t=st=1653870156~exp=1653870756~hmac=fad6c46f9b21ef284eceda01354b365913f99a18faad43522b0a0fbc15ac1272&w=740" class="w-full"/> 
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" class="btn btn-circle">❮</a>
                            <a href="#slide2" class="btn btn-circle">❯</a>
                        </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full ">
                    <img src="https://img.freepik.com/free-photo/female-mechanic-holding-spare-parts_1170-1421.jpg?t=st=1653870166~exp=1653870766~hmac=cfc96e45232f80eb79b4d0080955d86c9be689df2d03c08b8e5b6d412a898967&w=740" class="w-full"/> 
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-circle">❮</a>
                            <a href="#slide3" class="btn btn-circle">❯</a>
                        </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full ">
                    <img src="https://img.freepik.com/free-photo/various-work-tools-worktop_1170-1505.jpg?t=st=1653870156~exp=1653870756~hmac=a7a743235c9139a4c12e9a2177d8e3da3c09538dcdae30d6ab9024ed4cf48efc&w=740" class="w-full"/> 
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-circle">❮</a>
                            <a href="#slide4" class="btn btn-circle">❯</a>
                        </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full ">
                    <img src="https://t4.ftcdn.net/jpg/02/71/08/87/240_F_271088751_Csogw9rJjmUjiv0UBq0khOtcEzR7fogh.jpg" class="w-full"/> 
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" class="btn btn-circle">❮</a>
                            <a href="#slide1" class="btn btn-circle">❯</a>
                        </div>
                </div>
            </div>
      </div>
    );
};

export default Banner;