import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getData } from '../modules/special';

const SpDetailcontainer = () => {
	const {no}= useParams();
	const {data,loading,error}= useSelector(state=>state.special.special);
	const dispatch= useDispatch();
	useEffect(()=>{
		dispatch(getData(no))
	},[dispatch,no])
	if(loading) return <div>로잊웆ㅇ..</div>
	if(error) return <div>에러</div>
	if(!data) return <div>no datdda</div>
	console.log(data);
	return (
		<div>
			<h2>{data[0].e_title}</h2>
		</div>
	);
};

export default SpDetailcontainer;