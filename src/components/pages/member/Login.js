import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../../../config/apiurl';
import Title from '../../Title';
import {setCookie} from '../../../util/cookie'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setLogin } from '../../../modules/logincheck';
import { goToHome } from '../../../modules/logincheck';

const Login = () => {
	const dispatch= useDispatch();
	const navigator= useNavigate();
	const [loginData, setLoginData]= useState({
		useremail:"",
		userpass: ""
	});
	const onChange=(e)=>{
		const {name,value}= e.target;
		setLoginData({
			...loginData,
			[name]:value
		})
	}
	const onsubmit=(e)=>{
		// form 전송 이벤트 제거 
		e.preventDefault();
		// input에 입력 되었는지 체크
		if(loginData.useremail==="" || loginData.userpass===""){
			alert("이메일과 비밀번호를 입력해주세요.");
		}else{
			axios.post(`${API_URL}/Login`, loginData)
			.then((result)=>{
				console.log(result);
				const {m_email,m_nickname}= result.data[0]
				if(m_email && m_nickname){
					alert("로그인되었습니다.");
					// 현재 시간 객체 생성
					let expires= new Date();
					// 현재 시간에서 60분을 더한 값
					expires.setMinutes(expires.getMinutes()+1);
					setCookie('useremail',`${m_email}`,{path:'/', expires});
					setCookie('username',`${m_nickname}`,{path:'/', expires});
					dispatch(setLogin());
					dispatch(goToHome(navigator))
				}
				console.log(m_email,m_nickname);
			})
			.catch(e=>{console.log(e);})
		}
	}
	return (
		<div className='inner' id='login'>
			<Title title={"Login"} />
			<form onSubmit={onsubmit}>
				<table className='defaulttable small'>
					<tr>
						<td>ID 이메일 주소</td>
						<td><input type="text" name="useremail" onChange={onChange} value={loginData.useremail}/></td>
					</tr>
					<tr>
						<td>PW</td>
						<td><input type="password" name='userpass' onChange={onChange} value={loginData.userpass}/></td>
					</tr>
					<tr>
						<td colSpan={2}>
						<button type='submit'>login</button>
						<button>join</button>
						</td>
					</tr>
					<tr>
						<td colSpan={2}>
						<Link to="/findid"><span>ID 찾기</span></Link>
						<Link to="/findpass"><span>PW 찾기</span></Link>
						</td>
					</tr>
				</table>
			</form>
		</div>
	);
};

export default Login;