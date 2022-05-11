import './App.css';
import axios from "axios"
import {useState} from "react"
import {FaSearch} from 'react-icons/fa'
import ImageModal from './Components/ImageModal/ImageModal';
function App() {
  const API_LINK = "https://api.unsplash.com/photos/?client_id=7e77ZDTiplGh4iAI_dDimxMd3OLP-_Gi3IsQgpcaAOI"
  // const API_QUERY_LINK = "https://api.unsplash.com/search/photos?page=1&query=office"
  const [Images, setImages] = useState([])
  const [keyword, setKeyword] = useState('')
  const getImages = () => {
    axios.get(API_LINK).then((response) => {
      setImages(response.data)
      // console.log(response.data)
    })
  }
  getImages()
  return (
    <div className="App">
      <div className='search-bar'>
      <span>ImageMart</span>
      <input type="text" className="search-bar" value={keyword} onChange={(e) => setKeyword(e.target.value) }/>
      <span>
        <FaSearch /> 
      </span>
      </div>
      <div className='images-div'>
        {
          Images.map((value) => {
            return(
              <ImageModal image={value.urls.small} username={value.user.username} likes={value.likes}/>
            )
          })
        }

      </div>
    </div>
  );
}

export default App;
