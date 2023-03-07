// action type
const DATA_UPDATE = 'reserve/DATA_UPDATE';

// ACTION 객체 생성
export const dataUpdate=(data)=>({
	type: DATA_UPDATE,
	payload: data
})

// 초기 상태
const initialState= {
	rv_date: {
		rv_checkin: "",
		rv_checkout: "",
	},
	rv_adult: "1",
	rv_child: "0",
	rv_room:{
		roomname: "",
		roomno: "",
		price: ""
	}
}

export default function reserve(state=initialState, action){
	switch(action.type){
		case DATA_UPDATE:
			return {
				...state,
				[action.payload.name]: action.payload.value
			};
			default:
				return state;
	}
}