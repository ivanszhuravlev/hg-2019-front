
const reformatDate = (timestamt) => {
        const 
            date = new Date(timestamt),
            day = `${date.getDate()}`.length > 1 ? date.getDate() : '0' + date.getDate(),
            month = `${date.getMonth()}`.length > 1 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1),
            year = date.getFullYear(),
            hours = date.getHours(),
            minutes = date.getMinutes()
    
        return `${day}.${month}.${year} в ${hours}:${minutes}`
}

export default reformatDate