import axios from 'axios';
import React, { useState } from 'react';
import PopupDom from '../PopupDom';
import PopupPostCode from '../PopupPostCode';
import Title from '../Title';
import {API_URL} from '../../config/apiurl'

const JoinPage = () => {
	const [formData,setFormData]= useState({
		m_name:"",
		m_pass:"",
		m_passch:"",
		m_nickname:"",
		m_email:"",
		m_phone:"",
		m_add1:"",
		m_add2:""
	});
	const onChange=(e)=>{
		const {name,value}=e.target;
		setFormData({
			...formData,
			[name]:value
		})
	}
	// 팝업창 상태관리
	const [isPopupOpen,setIsPopupOpen]= useState(false);
	// 팝업창 열기
	const openPostCode=()=>{
		setIsPopupOpen(true)
	}
	// 팝업창 닫기
	const closePostCode=()=>{
		setIsPopupOpen(false)
	}
	// 주소 넣기
	const onAddData=(data)=>{
		console.log(data);
		setFormData({
			...formData,
			m_add1: data.address
		})
	}

	// form 전송 이벤트
	const onSubmit=(e)=>{
		e.preventDefault()
		// 입력되어있는지 확인
		if(formData.m_name!==""&&
		formData.m_pass!==""&&
		formData.m_passch!==""&&
		formData.m_email!==""&&
		formData.m_phone!==""&&
		formData.m_add1!==""&&
		formData.m_add2!==""
		){
			addMember();
		}else{
			console.log("값입력!");
		}
	}
	const addMember=()=>{
		console.log("고고고고");
		axios.post(`${API_URL}/join`,formData)
		.then(res=>{
			alert('등록되었습니다.')
		})
		.catch(e=>{
			console.log(e);
		})
	}

	return (
		<div>
			<Title title="Join"/>
			<div className='inner'>
				<form onSubmit={onSubmit}>
					<table className='defaulttable'>
						<tbody>
							<tr>
								<td>이름</td>
								<td><input name="m_name" value={formData.m_name} onChange={onChange} /></td>
							</tr>
							<tr>
								<td>패스워드</td>
								<td><input name="m_pass" value={formData.m_pass} onChange={onChange} /></td>
							</tr>
							<tr>
								<td>패스워드체크</td>
								<td><input name="m_passch" value={formData.m_passch} onChange={onChange} /></td>
							</tr>
							<tr>
								<td>닉네임</td>
								<td><input name="m_nickname" value={formData.m_nickname} onChange={onChange} /></td>
							</tr>
							<tr>
								<td>이메일</td>
								<td><input name="m_email" value={formData.m_email} onChange={onChange} /></td>
							</tr>
							<tr>
								<td>전화번호</td>
								<td><input name="m_phone" value={formData.m_phone} onChange={onChange} /></td>
							</tr>
							<tr>
								<td>주소</td>
								<td><input name="m_add1" value={formData.m_add1} onChange={onChange} /></td>
								<td><input name="m_add2" value={formData.m_add2} onChange={onChange} /></td>
								<td><button onClick={openPostCode} type='button'>우편번호 검색</button>
									<div id="popupDom">
										{isPopupOpen&&(<PopupDom><PopupPostCode onclose={closePostCode} onAddData={onAddData} /></PopupDom>)}
									</div>
								</td>
							</tr>
							<tr>
								<td colSpan={2}>
									<button type='submit'>등록</button>
									<button type='reset'>취소</button>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
			</div>
		</div>
	);
};

export default JoinPage;