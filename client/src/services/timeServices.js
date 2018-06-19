export default {

	convert24to12(time) {
		let sections = time.split(':')
		let result = sections.slice(0,2)
		let ending = 'AM'
		if(parseInt(result[0]) > 12) {
			result[0] = (parseInt(result[0])-12).toString()
			ending = 'PM'
		}
		return `${result[0]}:${result[1]}${ending}`
	}
}