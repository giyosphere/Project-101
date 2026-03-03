import { StrictMode } from 'react'  
import { createRoot } from 'react-dom/client'
import './index.css'
import SearchAppBar from './components/searchfield.jsx'
import SimpleContainer from './components/loginform.jsx'


createRoot(document.getElementById('root')).render(
<StrictMode>


 
<SearchAppBar/>
<SimpleContainer/>

</StrictMode>

);
