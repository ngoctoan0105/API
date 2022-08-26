import axios from "axios"
export const getOganizations = () => {
   return axios.get('https://62fc8fb8b9e38585cd412ba3.mockapi.io/oganizations/')
}

export const getOganization = (id) => {
   return axios.get(`https://62fc8fb8b9e38585cd412ba3.mockapi.io/oganizations/${id}`)
}

export const createOganization = (formData) => {
   return axios.post('https://62fc8fb8b9e38585cd412ba3.mockapi.io/oganizations/', formData)
}

export const editOganizations = (id,formData) => {
   return axios.put(`https://62fc8fb8b9e38585cd412ba3.mockapi.io/oganizations/`,formData)
}

export const deletetOganizations = (id) => {
   return axios.delete(`https://62fc8fb8b9e38585cd412ba3.mockapi.io/oganizations/${id}`)
}