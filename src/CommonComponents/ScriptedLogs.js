
import {useRef} from 'react'

const SavedLogs =
	() => {

		const logs = [Logcheck1, Logcheck2, Logcheck3, Logcheck4, Logcheck5]

		const child1 = useRef(null)

		
		const Logcheck1 =
			<div>
				<li className="HostMessages"> hello man, how are you? </li>
				<li className="ServerMessages">
					<img id="SmallImg" src="/logo1.jpg" width={200} height={200} alt="willian-justen-de-vasconcellos-Bu9xrH0ufkI-unsplash.jpg" />
					<div id="ModalImg" className="modal"><span className="close"> &times </span><img className="modal-content" id="BigImg" /></div> </li><li className="ServerMessages">  {/* */}traveling, how about you?{/* */} </li><li className="HostMessages">  <audio controls><source src="/People Talking.mp3" /></audio> </li><li className="ServerMessages">  {/* */}lol I can't here you{/* */} </li>
			</div>
		
		const Logcheck2 =
		<div>
			<li className="HostMessages"> hello friend! </li>
			<li className="ServerMessages">
				<img id="SmallImg" src="/flower.jpg" width={200} height={200} alt="willian-justen-de-vasconcellos-Bu9xrH0ufkI-unsplash.jpg" />
				<div id="ModalImg" className="modal"><span className="close"> &times </span><img className="modal-content" id="BigImg" /></div> </li><li className="ServerMessages"> {/* */}nice flower :){/* */} </li><li className="ServerMessages">  {/* */}talk to you later{/* */} </li>
		</div>

		const Logcheck3 =
		<div>
			<li className="HostMessages"> {/* */}hey{/* */} </li>
			<li className="HostMessages"> {/* */}I'm sending you this video{/* */} </li>
			<li className="HostMessages">  <video controls><source src="/cute dog.mp4" width={100} height={100} /></video> </li>
			<li className="ServerMessages"> {/* */}thank you!{/* */} </li>
		</div>

		const Logcheck4 =
		<div>
			<li className="HostMessages"> {/* */}I miss you!{/* */} </li>
			<img id="SmallImg" src="/heart.png" width={200} height={200} />
			<li className="ServerMessages"> {/* */}I miss you too!{/* */} </li>
			<li className="ServerMessages"> {/* */}we just need to finally meet again{/* */} </li>
		</div>

		const Logcheck5 =
		<div>
			<li className="ServerMessages"> {/* */}hi bro, how are you?{/* */} </li>
			<li className="HostMessages"> {/* */}great, you just have to watch this video!{/* */} </li>
			<li className="HostMessages">  <video controls><source src="/illusions.mp4" width={100} height={100} /></video> </li>
			<li className="ServerMessages"> {/* */}OMG I LOVE IT!{/* */} </li>
		</div>		

	
		console.log(Logcheck1.props);
		console.log(Logcheck2.props);
		console.log(Logcheck3.props);
		console.log(Logcheck4.props);
		console.log(Logcheck5.props);
		return (Logcheck3);




	}
export default SavedLogs;