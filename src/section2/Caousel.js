import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'
import Manisha from '../images/manisha.e2b69de4.jpg'
import har from '../images/harshil-aayush-ranveer.cce7f63b.webp'
import student from '../images/india-tv__students.7824c3e6.webp'
import brandequity from '../images/brandequity.5c383983.webp'
import lokmat from '../images/lokmattimes.04f10a1d.webp'
import lokhindi from '../images/lokmattimes-hindi.5a345bc6.webp'
import newstrack from '../images/newstrack.fa4fe581.webp'
import indiatv from '../images/indiatv.e879eecf.webp'
import outlook from '../images/outlook.4e3bfe02.webp'

const Caousel = () => {
  return (
    <Carousel indicators={false} wrap={true} interval={1000} pause={true}>
    <Carousel.Item>
    <section style={{display:'flex', height:'100vh'}}>
    <div style={{width:'50%', minHeight:'100vh', background:'linear-gradient(rgb(249, 206, 71), rgba(164, 104, 16, 0.7))',borderBottom:'3px solid rgb(103, 88, 210)'}}>
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
      <img src={student} alt="Manisha" style={{width:'25em', border:'8px solid rgba(0,0,0,.2)'}} />
     </div>
</div>
<div style={{width:'50%', minHeight:'100vh',background:'linear-gradient(rgb(246, 180, 52), rgba(164, 104, 16, 0.7))', borderBottom:'3px solid rgb(103, 88, 210)'}}>

</div>
    </section>
    </Carousel.Item>
    <Carousel.Item>
    <section style={{display:'flex', height:'100vh'}}>
    <div style={{width:'50%', minHeight:'100vh', background:'linear-gradient(rgb(166, 230, 255), rgba(11, 128, 183, 0.41))',borderBottom:'3px solid rgb(103, 88, 210)'}}>
     <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
      <img src={Manisha} alt="Manisha" style={{width:'25em', border:'8px solid rgba(0,0,0,.2)'}} />
     </div>
</div>
<div style={{width:'50%', minHeight:'100vh',background:'linear-gradient(rgb(30, 174, 241), rgba(11, 128, 183, 0.41))', borderBottom:'3px solid rgb(103, 88, 210)'}}>

</div>
    </section>
    </Carousel.Item>
    <Carousel.Item>
    <section style={{display:'flex', height:'100vh'}}>
    <div style={{width:'50%', minHeight:'100vh', background:'linear-gradient(rgba(57, 19, 214, 0.42), rgb(115, 86, 232))',borderBottom:'3px solid rgb(103, 88, 210)'}}>
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
      <img src={har} alt="Manisha" style={{width:'25em', border:'8px solid rgba(0,0,0,.2)'}} />
     </div>
</div>
<div style={{width:'50%', minHeight:'100vh',background:'linear-gradient(rgba(57, 19, 214, 0.42), rgb(25, 9, 86))', borderBottom:'3px solid rgb(103, 88, 210)'}}>

</div>
    </section>
      
    </Carousel.Item>
    <Carousel.Item>
    <section style={{display:'flex', height:'100vh'}}>
    <div style={{width:'100%', minHeight:'100vh', background:'linear-gradient(180.8deg, rgb(242, 239, 255), rgb(242, 239, 255), rgb(242, 239, 255), rgb(218, 212, 242), rgba(142, 122, 220, 0.52))', borderBottom:'3px solid rgb(103, 88, 210)'}}>
    <div style={{height:'100%', display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
    <div>
    <img style={{width:'15em', margin:'2em'}} src={brandequity} alt="news" />
      <img style={{width:'15em', margin:'2em'}} src={outlook} alt="news" />
      <img style={{width:'15em', margin:'2em'}} src={lokhindi} alt="news" />
    </div>
    <div>
      <img style={{width:'15em', margin:'2em'}} src={lokmat} alt="news" />
      <img style={{width:'10em', margin:'2em'}} src={indiatv} alt="news" />
      <img style={{width:'10em', margin:'2em'}} src={newstrack} alt="news" />
    </div>
 
    </div>
</div>
    </section>
    
    </Carousel.Item>
  </Carousel>
  )
}

export default Caousel
