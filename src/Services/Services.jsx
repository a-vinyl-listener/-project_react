import React from "react";
import "./Services.scss";
export const Services = () => {
  return (
    <>
      {/* <!-- services --> */}
      <section class="services">
        <div class="container">
          <div class="services__header-image">
            <img
              src="../../public/06/02.webp"
              alt="#"
              class="services__header-img"
            />
          </div>
          <div class="services__wrap">
            <div class="services__box">
              <h2 class="services__header-title"> Organic Store Servicesv</h2>
              <p class="services__header-text">
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking a <br /> layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to <br /> using 'Content
                here, content here', making it look like readable English.
              </p>
              <p class="services__header-text">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, <br /> and auncover
                many web sites still in their infancy. Various versions have
                evolved over the years
              </p>
            </div>
            <div class="services__container">
              <div class="services__inner services__inner-header">
                <div class="services__image">
                  <img
                    src="../../public/06/03.webp"
                    alt="#"
                    class="services__img"
                  />
                </div>
                <div class="services__holder">
                  <h2 class="services__title"> Why Organic</h2>
                  <p class="services__text">
                    Sed ut perspiciatis unde omnis iste natus error sit <br />
                    voluptat. page editors now use Lorem Ipsum as their <br />
                    default model text, and auncover.
                  </p>
                </div>
              </div>
              <div class="services__inner services__inner-footer">
                <div class="services__holder">
                  <h2 class="services__title"> Speciality Produce</h2>
                  <p class="services__text">                
                    Sed ut perspiciatis unde omnis iste natus error sit <br />
                    voluptat. page editors now use Lorem Ipsum as their <br />
                    default model text, and auncover.
                  </p>
                </div>
                <div class="services__image">
                  <img
                    src="../../public/06/04.webp"
                    alt="#"
                    class="services__img"
                  />
                </div>
              </div>
            </div>
            <div class="services__footer">
              <h2 class="services__footer-title"> We farm your land</h2>
              <p class="services__footer-text">            
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking <br /> a layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to <br /> using
                'Content here, content here', making it look like readable
                English.
              </p>
            </div>
            <div class="services__btn">
              <div class="services__link-box">
                <span class="services__ring">01</span>
                <a class="services__link" href="#">              
                  Best quality support
                </a>
              </div>
              <div class="services__link-box">
                <span class="services__ring">02</span>
                <a class="services__link" href="#">              
                  Money back guarantee
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
