import { Cookies } from "react-cookie";

const cookies= new Cookies();
// cookie 생성하기
export const setCookie= (name,value,options)=>{
	return cookies.set(name,value,{...options})
}

// cookie 접근
export const getCookie= (name)=>{
	return cookies.get(name);
}
// cookie 삭제
export const removeCookie=(name)=>{
	return cookies.remove(name)
}