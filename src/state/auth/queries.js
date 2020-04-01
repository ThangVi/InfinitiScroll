import axios from 'axios'
import api from '../../utils/services'

export const userLogin = (values) => {
	let postData = {
		username: values.username,
		password: values.password
	};

	return axios.post(
		api.url + `/login`, 
		postData
	)
	.then(res => res.data)
	.catch(err => err.response.data)
};