import React from 'react'
import './We.scss'
export const We = () => {
  return (
    <>
    <section class="we">
	<div class="container">
		<div class="we__wrap">
			<div class="we__box">
				<h2 class="we__box-title"> About Us</h2>
				<h3 class="we__box-subtitle">We Believe in Working <br/> Accredited Farmers </h3>
				<p class="we__box-text">Simply dummy text of the printing and typesetting industry. Lorem had ceased <br/> to
					been the industry's standard dummy text ever since the 1500s, when an unknown <br/> printer took a galley.</p>
			</div>
			<div class="we__holder">
				<div className="we__inner-block">
				<div class="we__inner">
					<div class="we__inner-img">
						<img src="../../public/01/09.webp" alt="#"/>
					</div>
					<div class="we__inner-row">
						<h2 class="we__inner-title">Organic Foods Only</h2>
						<p class="we__inner-text">Simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum</p>
					</div>
				</div>
				<div class="we__inner">
					<div class="we__inner-img">
						<img src="../../public/01/10.webp" alt="#"/>
					</div>
					<div class="we__inner-row">
						<h2 class="we__inner-title">Quality Standards</h2>
						<p class="we__inner-text">Simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum</p>
					</div>
				</div>
				</div>
			</div>
				<div class="button__wrap button__wrap_blue">
				<a class="button__btn button__btn_blue" href="#">Shop Now</a>
				<div class="button__arrow">
					<img src="../../public/Vector.svg" class="food__arrow-1" alt="#"/>
				</div>
			</div>
		</div>
	</div>
</section>
    </>
  )
}
