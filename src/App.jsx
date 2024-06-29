
import './App.css'

import { Route, Routes} from "react-router-dom";
import HelloPage from "./pages/HelloPage/HelloPage.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import AutoPage from "./pages/AutoPage/AutoPage.jsx";
import MapPage from "./pages/MAP/MapPage.jsx";
import PaymentPage from "./pages/Payment/PaymentPage.jsx";
import WalletPage from "./pages/WalletPage/WalletPage.jsx";
import AddBalancePage from "./pages/AddBalancePage/AddBalancePage.jsx";
import HistoryPage from "./pages/HistoryPage/HistoryPage.jsx";



function App() {


  return (
    <div className="App">
        <Routes>

            {/*<Route index element={<ProductList />}/>*/}
            {/*<Route path={'form'} element={<Form />}/>*/}
            <Route path='/hellopage' element={<HelloPage/>}/>
            <Route path='/mainpage' element={<MainPage/>}/>
            <Route path='/auto' element={<AutoPage/>}/>
            <Route path='/map' element={<MapPage/>}/>
            <Route path='/payment' element={<PaymentPage/>}/>
            <Route path="/wallet" element={<WalletPage/>}/>
            <Route path='/addbalance' element={<AddBalancePage/>}/>
            <Route path='/history' element={<HistoryPage/>}/>
        </Routes>


    </div>
  )
}

export default App
