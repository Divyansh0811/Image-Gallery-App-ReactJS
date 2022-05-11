import './App.css';
import axios from "axios"
import {useState, useEffect} from "react"
import {FaSearch} from 'react-icons/fa'
import ImageModal from './Components/ImageModal/ImageModal';
function App() {
  const API_LINK = "https://api.unsplash.com/photos/?client_id=7e77ZDTiplGh4iAI_dDimxMd3OLP-_Gi3IsQgpcaAOI"
  const [images, setImages] = useState([])
  const [searchKeyword, setSearchKeyword] = useState("")
  const [result, setResult] = useState([])

  
  const getImages = () => {
    axios.get(API_LINK).then((response) => {
      setImages(response.data)
    })
  }
  const changePhoto = () => {
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${searchKeyword}&client_id=7e77ZDTiplGh4iAI_dDimxMd3OLP-_Gi3IsQgpcaAOI`).then((response) => {
      setResult(response.data.results)
    })
  }
  useEffect(() => {
    getImages()
  })
  useEffect(() => {
    changePhoto()
  }, [searchKeyword])

  return (
    <div className="App">
      <div className='search-bar'>
      <span>ImageMart</span>
      <input type="text" className="search-bar" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value) }/>
      <button type='submit' onClick={changePhoto}>
        <FaSearch /> 
      </button>
      </div>
      <div className='images-div'>
        { searchKeyword === '' ? (
          images.map((value, index) => {
            return(
              <ImageModal image={value.urls.small} username={value.user.username} likes={value.likes} key={index}/>
            )
          }) 
        ):
          (
            result.map((value, index) => {
              return(
                <ImageModal image={value.urls.small} username={value.user.username} likes={value.likes} key={index}/>
              )
            })
          )
        }

      </div>
    </div>
  );
}

export default App;
