import { useState } from 'react'
const Filehook = (defaultValue) => {
	const [value, setValue] = useState(null);
	var val;
	const onChange = (e) => {
		val = e.target.files[0];
		setValue(e.target.files[0]);
		console.log(val)
	}

	return (
		{ value, setValue, onChange, val }
	)
}
export default Filehook;