import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpecalOffer from '../components/pages/SpecalOffer';
import SpecialOfferPage from '../components/pages/SpecialOfferPage';
import { getDatas } from '../modules/special';
import axios from "axios";
import { API_URL } from "../config/apiurl";

const Specialcontainer = ({isMain,limits}) => {
	const specialData= async ()=>{
		const data= axios.get(`${API_URL}/specials/${limits}`)
		return data;
	}
	const {loading,data,error}= useSelector(state=>state.special.specials)
	const dispatch= useDispatch();
	useEffect(()=>{
		dispatch(getDatas(specialData))
	},[dispatch])
	if(loading) return <div>로딩중입니다...</div>
	if(error) return <div>에러발생</div>
	if(!data) return <div>not data</div>
	if(isMain){
		return (
			<div>
				<SpecalOffer data={data}/>
			</div>
		);
	}else {
		return(
			<div>
				<SpecialOfferPage data={data}/>
			</div>
		)
	}
};

export default Specialcontainer;