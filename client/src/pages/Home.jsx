import { UAParser } from "ua-parser-js"
const UAParse = new UAParser();
  console.log("browser :: ",UAParse.getBrowser().name)
function Home() {

  
  return (
    <div>Home</div>
  )
}

export default Home