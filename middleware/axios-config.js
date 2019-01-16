import axios from 'axios'

export default function(context) {
  axios.defaults.baseURL = process.env.WEB_API_DOMAIN
}
