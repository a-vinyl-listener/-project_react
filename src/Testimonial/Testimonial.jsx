import React from 'react'
import './Testimonial.scss'
export const Testimonial = () => {
  return (
    <>
    <section className="testimonial">
	<div className="container">
		<div className="testimonial__box">
			<div className="testimonial__inner">
				<h2 className="testimonial__title">Testimonial</h2>
				<h3 className="testimonial__subtitle">What Our Customer Saying?</h3>
				<div className="testimonial__img">
					<img src="../../public/01/19.png" alt="#"/>
				</div>
				<fieldset className="rating">
					<div className="rating__group">
						<input className="rating__star" type="radio" name="two" value="1" aria-label="ужасно"/>
						<input className="rating__star" type="radio" name="two" value="2" aria-label="сносно"/>
						<input className="rating__star" type="radio" name="two" value="3" aria-label="нормально"/>
						<input className="rating__star" type="radio" name="two" value="4" aria-label="хорошо"/>
						<input className="rating__star" type="radio" name="two" value="5" aria-label="отлично" checked/>
					</div>
				</fieldset>
				<p className="testimonial__text">Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply
					dummy <br/> text of the printing and typesetting industry. Lorem Ipsum has been.</p>
				<h2 className="testimonial__heading">Sara Taylor</h2>
				<p className="testimonial__consumer">Consumer</p>
			</div>
			<span className="line__box"></span>
			<div className="testimonial__row">
				<div className="testimonial__wrapper">
					<h2 className="testimonial__headline">100%</h2>
					<p className="testimonial__slogan">Organic</p>
				</div>
				<div className="testimonial__wrapper">
					<h2 className="testimonial__headline">285</h2>
					<p className="testimonial__slogan">Active Product</p>
				</div>
				<div className="testimonial__wrapper">
					<h2 className="testimonial__headline">350+</h2>
					<p className="testimonial__slogan">Organic Orchads</p>
				</div>
				<div className="testimonial__wrapper">
					<h2 className="testimonial__headline">25+</h2>
					<p className="testimonial__slogan">Years of Farming</p>
				</div>
			</div>
		</div>
	</div>
</section>
    </>
  )
}
