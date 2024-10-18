export const formatDate = (dateString) => {
    if (!dateString) return null

    const options = {year: "numeric", month: "long", day: "numeric"}
    const date = new Date(dateString)
    const formattedDate = date.toLocaleDateString("en-US", options)

    return `${formattedDate}`
}