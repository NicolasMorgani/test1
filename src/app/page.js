import List from "./components/List.jsx";
import { getData } from "./data.js";



export default async function Home() {
  const data = await getData()
  
  return (
    <div >
      <main >
        <List  />
      </main>
      
    </div>
  );
}
