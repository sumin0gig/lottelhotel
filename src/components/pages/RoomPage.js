import React from 'react';
import RoomItem from '../RoomItem';
import Title from '../Title';

const RoomPage = ({data, isreserve, reserveRoom}) => {
	// reserveRoom배열이 빈 배열이 아닐 때
	// 객실 항목 배열 data를 filtering한다
	// 항목의 r_no가 reserveRoom 배열의 요소에 없는 항목만 새로운 배열로 리턴
	// ex> reserveRoom가 [21,22]이면 ---> 21번과 22번 항목만 제외하고 새로운 배열로 리턴
	const listitems= reserveRoom?
	data.filter(da=>reserveRoom.indexOf(da.r_no)===-1).map(item=><RoomItem item={item}/>)
	:data.map(item=><RoomItem item={item}/>);
	return (
		<div className='inner'>
			{!isreserve?<Title title='Room'/>:<div></div>}
			<ul>
				{listitems}
			</ul>
		</div>
	);
};

export default RoomPage;