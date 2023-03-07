import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RoomDetailPage from '../components/pages/RoomDetailPage';
import { API_URL } from '../config/apiurl';
import { getData } from '../modules/special';

const RoomDetailContainer = () => {
	const {no}= useParams();
	const {loading,data,error}= useSelector(state=> state.special.special)
	// const getRoomData= async (no)=>{
	// 	const data= await axios.get(`${API_URL}/room/${no}`)
	// 	return data;
	// }
	const dispatch= useDispatch();
	const getRoomData= async ()=>{
		const data= await axios.get(`${API_URL}/room/${no}`)
		return data;
	}
	useEffect(()=>{
		dispatch(getData(getRoomData))
	},[dispatch,no])
	if(loading) return <div>로딩중 입니다.</div>
	if(error) return <div>에러가 발생했습니다.</div>
	if(!data) return <div>no data</div>
	return (
		<RoomDetailPage data={data}/>
	);
};

export default RoomDetailContainer;