const getCourseData = (data, id) => {
  return data?.find((course) => course.id === id)
}

export default getCourseData
