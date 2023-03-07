import React from 'react';
import Specialcontainer from '../../containers/Specialcontainer';
import Promotion from './Promotion';
import VisualSlider from './VisualSlider';

const Main = () => {
	return (
		<div>
			<VisualSlider/>
			<Specialcontainer isMain={true} limits={3}/>
			<Promotion/>
		</div>
	);
};

export default Main;