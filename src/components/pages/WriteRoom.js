import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config/apiurl';
import Title from '../Title';
import { useSelector } from 'react-redux';
import { getCookie } from '../../util/cookie';

const WriteRoom = () => {
	const {isLogin}= useSelector(state=>state.loginCheck);
	const username= getCookie("username");
	const [amenitys,setAmenitys]= useState([
		{id:1, text:"북한산 전망의 발코니", checked: false},
		{id:2, text:"프리미엄 덕다운 침구 세트", checked: false},
		{id:3, text:"LG 43인치 LED TV (케이블TV 채널)", checked: false},
		{id:4, text:"최대 1기가 유/무선 인터넷 무료", checked: false},
		{id:5, text:"북한산 전망의 발코니", checked: false},
		{id:6, text:"프리미엄 덕다운 침구 세트", checked: false},
		{id:7, text:"LG 43인치 LED TV (케이블TV 채널)", checked: false},
		{id:8, text:"최대 1기가 유/무선 인터넷 무료", checked: false},
		{id:9, text:"북한산 전망의 발코니", checked: false},
		{id:10, text:"프리미엄 덕다운 침구 세트", checked: false},
	])
	const checkClick=(id)=>{
		setAmenitys(amenitys.map(ame=>ame.id===id? {...ame, checked:!ame.checked}: ame))
	}
	const navigate=useNavigate()
	const [formData,setFormData]= useState({
		r_name: "",
		r_size: "13평",
		r_price: 0,
		r_bed: "퀸 베드 1개",
		r_amenity: "",
		r_desc: "",
		r_img1: "",
		r_img2: "",
		r_img3: "",
		r_img4: "",
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
		addRoom();
	}
	const addRoom=()=>{
		// checked가 true인 요소만 새로운 배열로 생성
		// [{},{},{}] ---> [{},{}] ---> ["내용1","내용2"] ---> "내용1*내용2"
		const formData2={
			...formData,
			r_amenity: amenitys.filter(am=>am.checked).map(am=>am.text).join("*")
		}
		axios.post(`${API_URL}/room`,formData2)
		.then(res=>{
			alert("등록되었습니다.")
			navigate('/room')
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
		<div className='inner'>
			<Title title='Room'/>
			<form onSubmit={onSubmit}>
				<table className='defaulttable'>
					<tbody>
						<tr>
							<td>방 이름</td>
							<td>
								<input type='text' name='r_name'
								value={formData.r_name} onChange={onChange}/>
							</td>
						</tr>
						<tr>
							<td>베드 타입</td>
							<td>
								<select name='r_bed' onChange={onChange} value={formData.r_bed}>
									<option value="퀸 베드 1개">퀸 베드 1개</option>
									<option value="퀸 베드 1개">싱글 베드 1개 & 세미 더블 베드 1개</option>
									<option value="할리우드 베드 1개">할리우드 베드 1개</option>
									<option value="싱글 베드 2개 & 침구류 1세트">싱글 베드 2개 & 침구류 1세트</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>객실 크기</td>
							<td>
								<select name='r_size' onChange={onChange} value={formData.r_size}>
									<option value="13평">13평</option>
									<option value="18평">18평</option>
									<option value="24평">24평</option>
									<option value="32평">32평</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>어메니티</td>
							<td>
								{amenitys.map(ame=><div key={ame.id}>{ame.text}
									<input type='checkbox' value={ame.text} checked={ame.checked}
									onChange={()=>checkClick(ame.id)}/>
								</div>)}
							</td>
						</tr>
						<tr>
							<td>이용요금</td>
							<td>
								<input type='number' min={50000} step={1000} name='r_price'
								value={formData.r_price} onChange={onChange}/>
							</td>
						</tr>
						<tr>
							<td>이미지1</td>
							<td>
								{/* 폼에 파일데이터 추가 => upload 경로로 post 전송 => 전송 응답을 받아서 e_img:"응답결과"로 출력하고자 함 */}
								{/* 데이터를 추가하기 위함이다. */}
								<input type="file" name='r_img1' onChange={onChangeImage}/>
								{formData.e_img1 && <div><img src={`${API_URL}/upload/event/${formData.r_img1}`} width="100px" alt=''/></div>}
							</td>
						</tr>
						<tr>
							<td>이미지2</td>
							<td>
								<input type="file" name='r_img2' onChange={onChangeImage}/>
								{formData.e_img2 && <div><img src={`${API_URL}/upload/event/${formData.r_img2}`} width="100px" alt=''/></div>}
							</td>
						</tr>
						<tr>
							<td>이미지3</td>
							<td>
								<input type="file" name='r_img3' onChange={onChangeImage}/>
								{formData.e_img2 && <div><img src={`${API_URL}/upload/event/${formData.r_img3}`} width="100px" alt=''/></div>}
							</td>
						</tr>
						<tr>
							<td>이미지4</td>
							<td>
								<input type="file" name='r_img4' onChange={onChangeImage}/>
								{formData.e_img2 && <div><img src={`${API_URL}/upload/event/${formData.r_img4}`} width="100px" alt=''/></div>}
							</td>
						</tr>
						<tr>
							<td>상세 설명</td>
							<td><textarea name='r_desc' value={formData.r_desc} onChange={onChange}>
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

export default WriteRoom;