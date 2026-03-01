import { StrictMode } from 'react'  
import { createRoot } from 'react-dom/client'
import './index.css'
import Topdrawer from './components/drawer.jsx'
import SearchAppBar from './components/searchfield.jsx'


createRoot(document.getElementById('root')).render(
<StrictMode>


  <Topdrawer />
  <SearchAppBar/>

</StrictMode>

);
