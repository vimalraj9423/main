import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useMatch,
  useLocation,
  useNavigate,
  
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

const Users =({path}) =>{
  const params = useParams();
  const match = useLocation();
  const match1 = useMatch("/users/me/d");
  const navigate= useNavigate();
  // useEffect(()=>{
  //   navigate("/users/me",{data:"22"})
  // },[])
  console.log(params,match,match1)
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Routes>
        <Route path="*" element={<div>404</div>}/>
        <Route path="me" element={<div>me</div>} />
      </Routes>
    </div>
  );
}

export default App;
