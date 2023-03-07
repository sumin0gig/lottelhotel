import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RoomPage from '../components/pages/RoomPage';
import { API_URL } from '../config/apiurl';
import { getDatas } from '../modules/special';

const roomData= async () => {
	const data= await axios.get(`${API_URL}/room`);
	return data;
}
const RoomContainer = ({isreserve,reserveRoom}) => {
	const {loading, data,error}=useSelector(state=>state.special.specials);
	const dispatch= useDispatch();
	useEffect(()=>{
		dispatch(getDatas(roomData))
	},[dispatch])
	if(loading) return <div>로딩중</div>
	if(error) return <div>에러</div>
	if(!data) return <div>no data</div>
	return (
		<RoomPage data={data} isreserve={isreserve} reserveRoom={reserveRoom}/>
	);
};

export default RoomContainer;