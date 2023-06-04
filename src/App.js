import "./App.css";
import { Route, Navigate, Routes } from "react-router-dom";
import Authentication from "./components/Authentication/Authentication";
import { useDispatch, useSelector } from "react-redux";
import Product from "./components/Pages/Product";
import { useEffect } from "react";
import { authActions } from "./store/auth-slice";
import Header from "./components/Layout/Header";
import { fetchCandyData, senCandyData } from "./store/choco-slice-action";
import Cart from "./components/Pages/Cart";

let initial = true
function App() {
  const { isAuthenticated, email, token} = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const candy = useSelector(state => state.candy)
  console.log(candy)
  const changed = useSelector(state => state.candy.changed)
  useEffect(() => {
    const savedEmail = localStorage.getItem('email')
    const savedtoken = localStorage.getItem('token')
    if(savedEmail && savedtoken) {
      dispatch(authActions.login({token: savedtoken, email: savedEmail}))
    }
  }, [dispatch])
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    }
  }, [isAuthenticated, email, token]);
  useEffect(() => {
    if(initial){
      initial = false
      return
    }
    if(candy.changed){
      dispatch(senCandyData(candy, email))
    }
  }, [candy, dispatch, email, changed])
  useEffect(() => {
    console.log(isAuthenticated)
    
      dispatch(fetchCandyData(email))
  }, [])
  return (
    <div className="app">
      <Header/>
      {isAuthenticated && <Cart/>}
      <Routes>
        <Route
          path="/"
          element={!isAuthenticated ? <Authentication /> : <Navigate to="/product" />}
        />
        <Route path="/product" element={isAuthenticated ? <Product/>: <Navigate to='/' />}/>
      </Routes>
    </div>
  );
}

export default App;
