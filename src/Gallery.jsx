import './Gallery.css'
import {useState} from "react"
import image1 from './assets/output.png';
import image2 from './assets/poza2.png';
import image3 from './assets/poza3.png';
import image4 from './assets/poza4.png';

function Gallery(){
      const imagini=[{
    img:image1
  },
  {
    img:image2
  },
  {
    img:image3
  },
  {
    img:image4
  },
  {
    img:'./assets/poza5.png'
  },
  {
    img:'./assets/poza6.png'
  }]

  const [slideNumber,setSlideNumber] = useState(0);
  const [open,setOpen] = useState(false);
    return(
        <div className='galerie'>
          {
            imagini && imagini.map((slide,index)=>{
              return(<div className='single' key={index}><img src={slide.img} alt=''></img></div>)
            })
          }
        </div>
    )
}

export default Gallery;