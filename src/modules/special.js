// redux aciontype, initialState, actionFun, reducer
// import axios from "axios";
// import { API_URL } from "../config/apiurl";

// actiontype
const GET_DATAS= 'special/GET_DATAS';
const GET_DATAS_SUCCESS= 'special/GET_DATAS_SUCCESS';
const GET_DATAS_ERROR= 'special/GET_DATAS_ERROR';
const GET_DATA= 'special/GET_DATA';
const GET_DATA_SUCCESS= 'special/GET_DATA_SUCCESS';
const GET_DATA_ERROR= 'special/GET_DATA_ERROR';

// 
const initialState={
	specials:{
		loading: false,
		data:null,
		error:null
	},
	special:{
		loading: false,
		data:null,
		error:null
	}
}

// redux middlewear함수 생성
// thunk 함수를 사용해서 액션 객체를 dispatch하기 
export const getDatas=(callback)=> async dispatch =>{
	dispatch({type: GET_DATAS}) // 요청 시작
	try{
		const response= await callback();
		const data= response.data;
		dispatch({type: GET_DATAS_SUCCESS, data:data})
	}
	catch(e){
		dispatch({type: GET_DATAS_ERROR, error:e})
	}
}
export const getData=(callback)=> async dispatch =>{
	dispatch({type: GET_DATA}) // 요청 시작
	try{
		const response= await callback();
		const data= response.data;
		dispatch({type: GET_DATA_SUCCESS, data:data})
	}
	catch(e){
		dispatch({type: GET_DATA_ERROR, error:e})
	}
}

// reducer
export default function special(state=initialState,action){
	switch (action.type) {
		case GET_DATAS:
			return {
				...state,
				specials:{
					loading: true,
					data: null,
					error: null
				}
			};
		case GET_DATAS_SUCCESS:
			return {
				...state,
				specials:{
					loading: false,
					data: action.data,
					error: null
				}
			};
		case GET_DATAS_ERROR:
			return {
				...state,
				specials:{
					loading: false,
					data: null,
					error: action.error
				}
			};
		case GET_DATA:
			return {
				...state,
				special:{
					loading: true,
					data: null,
					error: null
				}
			};
		case GET_DATA_SUCCESS:
			return {
				...state,
				special:{
					loading: false,
					data: action.data,
					error: null
				}
			};
		case GET_DATA_ERROR:
			return {
				...state,
				special:{
					loading: false,
					data: null,
					error: action.error
				}
			};
		default:
			return state;
	}
}

