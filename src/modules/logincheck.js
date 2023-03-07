// action type, action fun , reducer

// 1. action type
const SET_LOGIN = "SET_LOGIN";
const SET_LOGOUT= "SET_LOGOUT";
const SET_ID= "SET_ID";

// 2. action fun
export const setLogin=()=>({
	type: SET_LOGIN
})
export const setLogout=()=>({
	type: SET_LOGOUT
})
export const setId=(id)=>({
	type: SET_ID,
	id: id
})

// 3.
const initalState={
	isLogin: false,
	updateId: ""
}
// 홈으로 이동
export const goToHome=(navigate)=>{
	navigate('/');
}

// 4. reducer
export default function loginCheck(state=initalState,action){
	switch (action.type) {
		case SET_LOGIN:
			return {
				...state,
				isLogin: true
			};
		case SET_LOGOUT:
			return {
				...state,
				isLogin: false
			};
		case SET_ID:
			return {
				...state,
				updateId: action.id
			};
	
		default:
			return state;
	}
}