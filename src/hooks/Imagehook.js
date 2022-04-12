import React, { useState } from "react";
import { Link } from 'react-router-dom';
const Imagehook = (defaultValue) => {
	const [file, setFile] = useState();
	const onChange = (e) => {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		{file, setFile, onChange}

	)
}

export default Imagehook;
