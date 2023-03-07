import React from 'react';
import './Footer.css'

const Footer = () => {
	return (
		<footer>
			<div className='footermenu'>
				<div className='inner'>
					<ul>
						<li>호텔 소개</li>
						<li>이용 약관</li>
						<li>개인정보 처리 방침</li>
						<li>이메일 무단 수집 금지</li>
					</ul>
				</div>
			</div>
			<div className='inner'>
				인스타그램 바로가기 <br/>
				기다란주소입니다~~~~~~~~~ <br/>
				copyright @ 저엊냐냔아랸야란야냐냐냐 <br/>
			</div>
		</footer>
	);
}

export default Footer;