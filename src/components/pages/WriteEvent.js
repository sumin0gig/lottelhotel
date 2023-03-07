import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config/apiurl';
import Title from '../Title';
import { useSelector } from 'react-redux';
import { getCookie } from '../../util/cookie';

const WriteEvent = () => {
	const {isLogin}= useSelector(state=>state.loginCheck);
	const username= getCookie("username");
	const navigate=useNavigate()
	const [formData,setFormData]= useState({
		e_title: "",
		e_time: "",
		e_titledesc: "",
		e_desc: "",
		e_category: "special",
		e_img1: "",
		e_img2: "",
	})
	const onChange=(e)=>{
		const {name,value}= e.target;
		setFormData({
			...formData,
			[name]:value
		})
	}
	// 타입이 file인 input이 onChange 되었을 때 호출되는 함수
	// 변경된 file을 서버로 업로드 
	const onChangeImage=(e)=>{
		const {name}=e.target;
		// form 태그 생성
		const imageFomrData= new FormData();
		// form 태그에 데이터 추가하기
		// 아래의 append('img')의 img는 server에서 받기로 한 키 값이다.
		imageFomrData.append('img', e.target.files[0]);
		// 전송
		axios.post(`${API_URL}/upload`,imageFomrData,{
			headers:{'content-type':'multipart/formdata'}
		}).then(res=>{console.log(res)
			setFormData({
				...formData,
				[name]: res.data.imageUrl
			})}
		)
		.catch(e=>console.log(e))
	}
	const onSubmit=(e)=>{
		// form 태그 전송 이벤트 삭제
		e.preventDefault();
		addEvent();
	}
	const addEvent=()=>{
		axios.post(`${API_URL}/event`,formData)
		.then(res=>{
			alert("등록되었습니다.")
			navigate('/special')
		})
		.catch(e=>{
			alert(e);
		})
	}
	useEffect(()=>{
		if(!isLogin || username !== 'admin'){
			alert("관리자만 접근할 수 있습니다.");
			navigate("/");
		}
	},[isLogin,username,navigate])
	if(!isLogin || username !== 'admin'){
		return  null;
	}
	return (
		<div>
			<Title title='Evnet'/>
			<form onSubmit={onSubmit}>
				<table>
					<tbody>
						<tr>
							<td>제목</td>
							<td>
								<input type='text' name='e_title'
								value={formData.e_title} onChange={onChange}/>
							</td>
						</tr>
						<tr>
							<td>기간</td>
							<td>
								<input type='text' name='e_time'
								value={formData.e_time} onChange={onChange}/>
							</td>
						</tr>
						<tr>
							<td>간략설명</td>
							<td>
								<input type='text' name='e_titledesc'
								value={formData.e_titledesc} onChange={onChange}/>
							</td>
						</tr>
						<tr>
							<td>분류</td>
							<td>
								<select name='e_category' onChange={onChange}>
									<option value="special">스페셜</option>
									<option value="promotion">프로모션</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>이미지1</td>
							<td>
								{/* 폼에 파일데이터 추가 => upload 경로로 post 전송 => 전송 응답을 받아서 e_img:"응답결과"로 출력하고자 함 */}
								{/* 데이터를 추가하기 위함이다. */}
								<input type="file" name='e_img1' onChange={onChangeImage}/>
								{formData.e_img1 && <div><img src={`${API_URL}/upload/event/${formData.e_img1}`} width="100px" alt=''/></div>}
							</td>
						</tr>
						<tr>
							<td>이미지2</td>
							<td>
								<input type="file" name='e_img2' onChange={onChangeImage}/>
								{formData.e_img2 && <div><img src={`${API_URL}/upload/event/${formData.e_img2}`} width="100px" alt=''/></div>}
							</td>
						</tr>
						<tr>
							<td>상세 설명</td>
							<td><textarea name='e_desc' value={formData.e_desc} onChange={onChange}>
								</textarea></td>
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
	);
};

export default WriteEvent;