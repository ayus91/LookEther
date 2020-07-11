import axios from "axios"

const getWeatherData = ({ lat, lon, key }, callback) => {
	axios
		.get(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${key}&units=metric`
		)
		.then((res) => {
			callback(res.data)
		})
		.catch((err) => {
			console.log(err)
		})
}

const reverseGeo = ({ lat, lon }, callback) => {
	axios
		.get(
			`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
		)
		.then((res) => {
			callback(res.data)
		})
}

export { getWeatherData, reverseGeo }
