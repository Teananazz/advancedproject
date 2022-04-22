
import {useRef} from 'react'

const SavedLogs =
	() => {

		const child1 = useRef(null)

		const Logcheck1 =
			<div>
				<li className="HostMessages"> hello man, how are you? </li>
				<li className="ServerMessages">
					<img id="SmallImg" src="/logo1.jpg" width={200} height={200} alt="willian-justen-de-vasconcellos-Bu9xrH0ufkI-unsplash.jpg" />
					<div id="ModalImg" className="modal"><span className="close"> &times </span><img className="modal-content" id="BigImg" /></div> </li><li className="ServerMessages">  {/* */}traveling, how about you?{/* */} </li><li className="HostMessages">  <audio controls><source src="blob:http://localhost:3000/ca052044-b862-43cd-8bb1-3c01533a7045" /></audio> </li><li className="ServerMessages">  {/* */}k talk to you when i'm home{/* */} </li>
			</div>
		

	
		console.log(Logcheck1.props);
		return (Logcheck1);




	}
export default SavedLogs;