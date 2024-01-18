import './App.css';
import lake from "./image/lake.JPG";
import Header from './components/HeaderSection/Header.jsx';
import imageData from './components/DataComponent/Data';
import Footer from './components/FooterSection/GallaryFooter.jsx';
import Body from './components/BodySection/Body.jsx';


function App() {
  return (
    <div>
      <Header/> 
      <Body data={imageData}/>
      <Footer/>
    </div>
  )
}

export default App;
