import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import { dataUpdate } from '../modules/reserve';
import './RoomItem.css';

const RoomItem = ({item}) => {
	const navigate= useNavigate();
	const price = Number(item.r_price).toLocaleString('ko-KR');
	const dispatch= useDispatch();
	const onReserve=()=>{
		dispatch(dataUpdate({
			name:"rv_room",
			value:{
				rv_roomname: item.r_name,
				rv_roomno: item.r_no,
				rv_price: item.r_price
			}
		}))
		navigate("/reservation/register")
	}
	return (
		<li className='roomitem'>
			<div>
				<img src={`${API_URL}/upload/event/${item.r_img1}`} alt=''/>
			</div>
			<div>
				<h3>{item.r_name}</h3>
				<p>기준 인원 : 2 <br/> 최대인원 : 3</p>
			</div>
			<div>
				<div className='price'>{price} <br/> 원 /1박</div>
				<div>
					<Link to={`/roomdetail/${item.r_no}`}><button>객실 상세보기</button></Link>
					<button onClick={onReserve}>객실 예약하기</button>
				</div>
			</div>
		</li>
	);
};

export default RoomItem;