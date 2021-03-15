const axios = require('axios')
const APIURL = 'https://nlp-translation.p.rapidapi.com/v1/translate'

const reqConfig = {
    headers: {
    "x-rapidapi-key": "0d460a999fmsh617603937590951p1530d9jsn15202dadffa5",
	"x-rapidapi-host": "nlp-translation.p.rapidapi.com",

    },
    params: {text: '<--will be redefined with request', to: "en", from: "sr"}
}
const translate = async (text, from, to) => {
    reqConfig.params.text = text 
    reqConfig.params.from = from
    reqConfig.params.to = to 

    try {
    const res = await axios.get(APIURL, reqConfig)

    const parsedResponse = res.data 
    const translatedText = parsedResponse.translated_text

    return translatedText
    
    } catch(err) {

        return "an error occurred! " + err 

    }
}
exports.translate = translate

