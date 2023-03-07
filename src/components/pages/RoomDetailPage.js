import React from 'react';
import { API_URL } from '../../config/apiurl';
import Title from '../Title';
import './RoomDetail.css'

const RoomDetailPage = ({data}) => {
	const amenity= data.r_amenity.split("*");
	return (
		<div className='inner roomdetail'>
			<Title title={data.r_name}/>
			<div>
				<img src={`${API_URL}/upload/event/${data.r_img1}`} alt=""/>
				<div className='roomtitle'>
					<h3>{data.r_name}</h3>
					<button>객실 예약</button>
				</div>
				<ul className='roominfo'>
					<li>
						<h4>기본 정보</h4>
						<ul>
							<li>객실크기: 13평</li>
							<li>체크인: 15:00</li>
							<li>이용요금: {data.r_price}</li>
							<li>베드타입: {data.r_bed}</li>
							<li>체크아웃: 11:00</li>
							<li>이용문의: 052-589-1234</li>
						</ul>
					</li>
					<li>
						<h4>어메니티</h4>
						<ul>
							{amenity.map((ame,i)=><li key={i}>{ame}</li>)}
						</ul>
					</li>
					<li>
						<h4>이용안내</h4>
						<ul>
							<li>수용인원: 기준2인 (최대3인)</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default RoomDetailPage;