import { Carousel } from 'antd';
import React from 'react';
const contentStyle = {
  margin: 0,
  height: '60px',
  color: '#fff',
  lineHeight: '60px',
  textAlign: 'center',
	position: 'absolute',
	left:'50%',
	bottom:'80px',
	transform: 'translateX(-50%)'
};
const backStyle1={
	backgroundImage: "URL('/img/visual_main22.jpg')",
	position: 'relative',
	height: '500px'
}
const backStyle2={
	backgroundImage: "URL('/img/visual_main23.jpg')",
	position: 'relative',
	height: '500px'
}
const backStyle3={
	backgroundImage: "URL('/img/visual_main24.jpg')",
	position: 'relative',
	height: '500px'
}
const backStyle4={
	backgroundImage: "URL('/img/visual_main25.jpg')",
	position: 'relative',
	height: '500px'
}
const VisualSlider = () => {
		const onChange = (currentSlide) => {
			console.log(currentSlide);
		};
		return (
			<div>
				<Carousel afterChange={onChange} autoplay>
				<div>
					<div style={backStyle1}>
						<h3 style={contentStyle}>1/4</h3>
					</div>
				</div>
				<div>
					<div style={backStyle2}>
						<h3 style={contentStyle}>2/4</h3>
					</div>
				</div>
				<div>
					<div style={backStyle3}>
						<h3 style={contentStyle}>3/4</h3>
					</div>
				</div>
				<div>
					<div style={backStyle4}>
						<h3 style={contentStyle}>4/4</h3>
					</div>
				</div>

			</Carousel>
			</div>
		);
};

export default VisualSlider;