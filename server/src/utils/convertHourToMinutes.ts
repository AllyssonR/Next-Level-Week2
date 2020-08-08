export default function convertHourToMinutes(time:string){
const[hour,minutes] = time.split(':').map(Number);
const timeinMinuites = (hour *60) + minutes;
return timeinMinuites;
}