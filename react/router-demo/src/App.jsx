import React from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      this is home Page
      <button onClick={() => {navigate('/about?id=123',{replace:true})}}>跳去关于页面</button>
    </div>
  );
};
const About = () => {
  let [params] = useSearchParams()
  console.log(params.get('id'))
  return (
    <div>
      this is About Page
    </div>
  )
};

const App = (props) => {
  return (
    <div className="app">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
