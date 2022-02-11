import axios from 'axios'

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: 'Bearer cKSW1QMiu-hDcI8UUfXsJXZuLOg521VrlKktFCFWsHGxPXJrv_zmqcS00PNquCe8sW5f1aFa_iYwdInLYHxjV61iUvfMI9RwciPcIvY5ll2XmFI9d3HPPG9dv00CYnYx'
        //Authorization: 'Bearer 74yYuiiyGbnjqlCH-cHk4YsI034D-nI0NtsQETm3q8JBkbYZOSPPnxUGuEpW0stGqeqZvtYVw7A27-u5SGnMWQiUJAI_swV8hiuIrdZIKFfkl_ynC2fg4kYL8sEDYnYx'
    }
})
