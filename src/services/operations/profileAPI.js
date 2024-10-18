import { profileEndpoints } from "../apis"


const { GET_USER_DETAILS_API, GET_USER_ENROLLED_COURSES_API, GET_INSTRUCTOR_DATA_API } = profileEndpoints


export async function getUserEnrolledCourses(token) {
    let result = []
    try {
      const response = await apiConnector("GET", GET_USER_ENROLLED_COURSES_API, {token}, { Authorization: `Bearer ${token}`, })
  
      console.log("GET_USER_ENROLLED_COURSES_API API RESPONSE............", response)
  
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      result = response.data.data
    } catch (error) {
      console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error)
      toast.error("Could Not Get Enrolled Courses")
    }
    return result   
  }