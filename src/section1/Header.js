import React from 'react'
import levelsupermind from '../images/levelsupermind_logo.webp' 
import android from '../images/androidaward.webp'
import iosaward from '../images/iosaward.webp'
import iso_1 from '../images/ISO-IMAGE-1png.webp'
import iso_2 from '../images/ISO-IMAGE-2.webp'
import appscale from '../images/appscale.webp'
import phone from '../images/PHONE-MOCKUP-WITH-GOOGLE-IMAGE.webp'
import producthunt from '../images/productHunt.webp'
import golden from '../images/producthunt-finalist.webp'
import agenda from '../images/agenda.webp'
import health from '../images/good-health.webp'
import whistle from '../images/whistle.webp'
import laurel from '../images/laurel.png'
import boat from '../images/boat.8670d8fe.png'
import decathlon from '../images/Decathlon.fc7da951.png'
import jio from '../images/jio2.2312f5da.png'
import pharmeasy from '../images/pharmEasy.b8cd034e.png'
import rage from '../images/rage.8ded8e68.png'
import union from '../images/union.347faf50.png'
import './Header.css'

const Header = () => {

  return (
    <>
        <div className='navContainer'>
        <div className="logoDiv">
       <img src={levelsupermind} alt="logoImage" className='logoImage' />
      </div>
      <div className='headerUI'>
        <ul>
            <li style={{display:'inline', padding:'1.5em'}}>Home</li>
            <li style={{display:'inline', padding:'1.5em'}}>Reviews</li>
            <li style={{display:'inline', padding:'1.5em'}}>Meditate</li>
            <li style={{display:'inline', padding:'1.5em'}}>Blogs</li>
            <li style={{display:'inline', padding:'1.5em'}}>Affirmations</li>
            <li style={{display:'inline', padding:'1.5em'}}>Our Team</li>
            <li style={{display:'inline', padding:'1.5em'}}>LSM Subscription</li>
            <li style={{display:'inline', padding:'1.5em'}}>Partner with us</li>
        </ul>
      </div>
        </div>
        <div className='advertisement'>
        <div style={{marginLeft:'10em'}}>
        <div className='awards'>
                <img className='awardsImage' src={android} alt="android" />
                <img className='awardsImage' src={iosaward} alt="isoaward" />
                <img className='stampImage' src={iso_2} alt="iso_2" />
                <img className='stampImage' src={iso_1} alt="iso_1" />
            </div>
            <div className='ranks'>
               <img className='rankImage' src={producthunt} alt="producthunt" style={{marginRight:'1em'}}/>
               <img className='rankImage' src={golden} alt="golden" style={{marginRight:'1em'}}/>
               <img className='rankImage' src={appscale} alt="appscale" />
            </div>
            <div>
            <h1 style={{fontSize:'3rem', fontWeight:'800', lineHeight:'2'}}>SUPERCHANGE YOUR MIND</h1>
                <p style={{fontSize:'2rem', fontWeight:'300', lineHeight:'1.5'}}>With Our Neuroscience-backed Routines</p>
                <button style={{backgroundColor:'rgb(115 86 232)', border:'none',width:'23em',borderRadius:'5px'}}>
                    <h2 style={{color:'#fff'}}>Start Your Free Trial Now!</h2>
                </button>  
            </div>
            <section style={{display:'flex', flexWrap:'wrap', flexDirection:'row', gap:'1rem', marginTop:'2em'}}>
                <div className='guideSection'>
                <img className='guideImage' src={whistle} alt="guide" />
                <span className='guideSpan'>Guided Meditations</span>
                </div>
                <div className='guideSection'>
                <img className='guideImage' src={agenda} alt="guide" />
                <span className='guideSpan'>Daily Journals</span>
                </div>
                </section>
                <section style={{display:'flex', flexWrap:'wrap', flexDirection:'row', gap:'1rem', marginTop:'1em'}}>
                <div className='guideSection'>
                <img className='guideImage' src={laurel} alt="guide" />
                <span className='guideSpan'>Enriching Stories</span>
                </div>
                <div className='guideSection'>
                <img className='guideImage' src={health} alt="guide" />
                <span className='guideSpan'>Mind-Muscle <br/> Workouts</span>
                </div>
            </section>
        </div>
           <div>
            <img src={phone} alt="phone" style={{width:'30em'}} />
           </div> 
        </div>
        <div style={{width:'100vw', height:'10em', backgroundColor:'#e1dcf6', marginTop:'2em', marginBottom:'2em'}}>
         <div>
          <p style={{fontSize:'2em', textAlign:'center',}}>Our Brand Collabs</p>
         
         <div className='brandNames'>
         <div className='brands'>
             
             <img style={{width:'10em'}} src={boat} alt="brands" className='brandImage'/>
     
            
             <img style={{width:'14em'}} src={decathlon} alt="brands" className='brandImage'/>
           
            
             <img style={{width:'14em'}} src={pharmeasy} alt="brands" className='brandImage'/>
          
          
             <img style={{width:'8em'}} src={rage} alt="brands" className='brandImage' />
           
        
             <img style={{width:'10em'}} src={union} alt="brands" className='brandImage'/>
          
           
             <img style={{width:'4em'}} src={jio} alt="brands" className='brandImage'/>
          

           </div>
        
           <div className='brands'>
            
            <img style={{width:'7em'}} src={boat} alt="brands" className='brandImage'/>
    
           
            <img style={{width:'14em'}} src={decathlon} alt="brands" className='brandImage'/>
          
           
            <img style={{width:'14em'}} src={pharmeasy} alt="brands" className='brandImage'/>
         
         
            <img style={{width:'8em'}} src={rage} alt="brands" className='brandImage' />
          
       
            <img style={{width:'10em'}} src={union} alt="brands" className='brandImage'/>
         
          
            <img style={{width:'4em'}} src={jio} alt="brands" className='brandImage'/>
         

          </div>
         </div>
           
           
            
            
         
          
         </div>
        </div>
        
    </>
  )
}

export default Header
