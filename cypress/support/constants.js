// Generate date/time value
const d = new Date();
export const dateTime = () => {
    return `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}