import React from "react";
import './Farmy.scss';
export const Farmy = () => {
  return (
    <>
      {/* <!-- farmy --> */}

      <section className="farmy">
        <div className="container">
          <div className="farmy__wrap">
            <div className="farmy__inner">
              <h2 className="farmy__title">About The Farm:</h2>
              <p className="farmy__subtitle">
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking a <br /> layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to <br /> using 'Content
                here, content here', making it look like readable English.
                <br />
                <br />
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, <br />
                and auncover many web sites still in their infancy. Various
                versions have evolved over the years
              </p>
            </div>
            <div className="farmy__image">
              <img src="../../public/08/02.webp" alt="#" className="farmy__img" />
              <p className="farmy__description">The Organic Products</p>
            </div>
            <div className="farmy__inner">
              <h2 className="farmy__title">How To Farm:</h2>
              <p className="farmy__subtitle">
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking a <br /> layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to <br /> using 'Content
                here, content here', making it look like readable English.
                <br />
                <br />
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, <br />
                and auncover many web sites still in their infancy. Various
                versions have evolved over the years
              </p>
            </div>
            <br />
            <br />
            <div className="farmy__inner">
              <h2 className="farmy__title"> Conclusion:</h2>
              <p className="farmy__subtitle">
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking a <br /> layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to <br /> using 'Content
                here, content here', making it look like readable English.
                <br />
                <br />
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, <br />
                and auncover many web sites still in their infancy. Various
                versions have evolved over the years
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
