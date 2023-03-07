import React from 'react';
import { useSelector } from 'react-redux';

import './ReservationSign.css'

const ReservationSign = () => {
	const reserve= useSelector(state=>state.reserve)
	console.log(reserve);
	return (
		<div className='reserveSign'>
			<div className='reserveCustomer'>
				<h3>고객정보입력</h3>
				<table className='defaulttable'>
					<tbody>
						<tr>
							<td>성명</td>
							<td>
								<input type="text" name='rv_name'/>
							</td>
						</tr>
						<tr>
							<td>이메일</td>
							<td>
								<input type="text" name='rv_email'/>
							</td>
						</tr>
						<tr>
							<td>연락처</td>
							<td>
								<input type="text" name='rv_phone'/>
							</td>
						</tr>
						<tr>
							<td>기타 요청사항</td>
							<td>
								<textarea />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className='reserveInfo'>
				<h3>예약정보</h3>
				<ul>
					<li>
						<span>체크인</span>
						<span>{reserve.rv_date.rv_checkin}</span>
					</li>
					<li>
						<span>체크아웃</span>
						<span>{reserve.rv_date.rv_checkout}</span>
					</li>
					<li>
						<span>투숙인원</span>
						<span>성인: {reserve.rv_adult}명 어린이: {reserve.rv_child}명</span>
					</li>
					<li>
						<span>객실타입</span>
						<span>{reserve.rv_room.rv_roomname}</span>
					</li>
				</ul>
				<div className='totalPrice'>
					<div>총합계금액</div>
					<div className='price'>{reserve.rv_room.rv_price}<span>원</span></div>
				</div>
				<div>
					<button>예약하기</button>
				</div>
			</div>
			
		</div>
	);
};

export default ReservationSign;