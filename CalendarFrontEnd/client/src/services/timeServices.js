export default {

	convert24to12(time) {
		let sections = time.split(':')
		let result = sections.slice(0,2)
        result[0] = parseInt(result[0])
		let ending = 'AM'
		if(result[0] > 12) {
			result[0] = result[0]-12
			ending = 'PM'
		} else if(result[0] === 12) {
			ending = 'PM'
		} else if(result[0] === 0) {
			result[0] = 12
		}
		return `${result[0]}:${result[1]}${ending}`
	}
}