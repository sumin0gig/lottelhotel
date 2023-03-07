import ReactDOM from 'react-dom';

const PopupDom = ({children}) => {
	const el= document.getElementById("popupDom")
	return ReactDOM.createPortal(children,el);
	// el에 children을 넣음
};

export default PopupDom;