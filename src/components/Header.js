import React, { useEffect } from 'react';
import './Header.css';
import { MdFace } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie, removeCookie } from '../util/cookie';
import { setLogin, setLogout } from '../modules/logincheck';

const Header = () => {
	const isLogin= useSelector(state=>state.loginCheck.isLogin);
	const username= getCookie("username");
	const dispatch= useDispatch();
	const logoutClick=()=>{
		removeCookie('username');
		removeCookie('useremail');
		dispatch(setLogout());
	}
	// 새로 고침해도 로그아웃 되지 않게 지정
	useEffect(()=>{
		if(username){
			dispatch(setLogin());
		}
	},[])

	return (
		<header>
			<h1><Link to="/"><img src='/img/logo2.png' alt=''/></Link></h1>
			<ul className='menu'>
				<li><Link to="/special">스페셜 오퍼</Link></li>
				<li><Link to="/room">객실 안내</Link></li>
				<li><Link to="/reservation">객실 예약</Link></li>
				<li>이용 안내</li>
				{isLogin&&username==='admin'? <li><Link to='/writeevent'>이벤트 등록</Link></li>: null}
				{isLogin&&username==='admin'? <li><Link to='/writeroom'>객실 등록</Link></li>: null}
			</ul>
			<div>
				<div className='icon-div'>
					<MdFace/>
					<ul className='membermenu'>
						{isLogin?
						<>
							<li onClick={logoutClick}>로그아웃</li>
							<li><Link to="/">회원정보</Link></li>
						</> :
						<>
							<li><Link to="/login">로그인</Link></li>
							<li><Link to="/join">회원가입</Link></li>
						</>
						}

				</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;