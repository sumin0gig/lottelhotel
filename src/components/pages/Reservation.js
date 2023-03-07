import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataUpdate } from '../../modules/reserve';
import Title from '../Title';
import Example from './Example';
import './Reservation.css'
import RoomContainer from '../../containers/RoomContainer'
import axios from 'axios';
import { API_URL } from '../../config/apiurl';
import { Route, Routes } from 'react-router-dom';
import ReservationSign from './ReservationSign';

const Reservation = () => {
	const [isShow,setisShow]= useState(false);
	// checkin checkout store에서 받아오기
	const rv_data= useSelector(state=>state.reserve.rv_date);
	const dispatch=useDispatch();

	// 예약이 불가능한 방 목록
	const [reserveRoom, setReserveRoom]= useState([]);
	const hideDateDiv=(start,end)=>{
		if(start&&end){
			dispatch(dataUpdate({
				name: "rv_date",
				value: {
					rv_checkin: start,
					rv_checkout: end
				}
			}))
			console.log(start,end);
			setisShow(false);
		}else {
			return;
		}

	}
	const onChange=(e)=>{
		const {name, value}= e.target;
		dispatch(dataUpdate({
			name: name,
			value: value
		}))
	}

	// 해당 날짜에 예약이 되어 있는 객실번호 불러오기
	const serachRoom=(start,end)=>{
		axios.get(`${API_URL}/searchRoom?start=${start}&end=${end}`)
		.then(res=>{
			console.log(res.data);
			setReserveRoom(res.data)
		})
		.catch(e=>{
			console.log(e)
		})
	}

	return (
		<div className='inner'>
			<Title title="reservation"/>
			<Routes>
				<Route path='/*' element={
					<div>
						<div className='reservation'>
							<ul className='reservsearch'>
										<li>
											<div>
												<span>Check in</span>
												<input name='rv_checkin' onClick={()=>{setisShow(!isShow)}}
													value={rv_data.rv_checkin}
												/>
											</div>
											<div>
												<span>Check out</span>
												<input name='rv_checkout' onClick={()=>{setisShow(!isShow)}}
													value={rv_data.rv_checkout}
												/>
											</div>
											{ isShow &&
											<div className='checkdate'>
												<Example hideDateDiv={hideDateDiv} />
											</div>}
										</li>
										<li>
											<div>
												<span>Adults</span>
												<select name='rv_adult' onChange={onChange}>
													<option value={1}>1</option>
													<option value={2}>2</option>
													<option value={3}>3</option>
													<option value={4}>4</option>
												</select>
											</div>
										</li>
										<li>
											<div>
												<span>Children</span>
												<select name='rv_child' onChange={onChange}>
													<option value={1}>1</option>
													<option value={2}>2</option>
													<option value={3}>3</option>
													<option value={4}>4</option>
												</select>
											</div>
										</li>
										<li onClick={()=>serachRoom(rv_data.rv_checkin, rv_data.rv_checkout)}>
											<div>
												<span>검색</span>
				
											</div>
										</li>
							</ul>
						</div>
						<RoomContainer isreserve={true} reserveRoom={reserveRoom}/>
					</div>
				}/>
				<Route path='/register' element={<ReservationSign/>}/>

			</Routes>
		</div>
	);
};

export default Reservation;