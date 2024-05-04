import React from 'react'
import instagram from '../images/5335781_camera_instagram_social media_instagram logo_icon.png'
import twitter from '../images/5305170_bird_social media_social network_tweet_twitter_icon.png'
import telegram from '../images/4875780_telegram_icon.png'
import youtube from '../images/5305164_play_video_youtube_youtube logo_icon.png'
import linkedin from '../images/5305157_connection_linkedin_network_linkedin logo_icon.png'
import applestore from '../images/applestore.webp'
import playstore from '../images/playstore.webp'
import './Footer.css'

const Footer = () => {
  return (
  <>
    <div style={{backgroundColor:'rgb(115 86 232 )', width:'100%', height:'40em', display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>


<div style={{marginTop:'3em'}}>
<h1 style={{ color:'#fff', fontSize:'2em', fontWeight:'800', textAlign:'center'}}>Get In Touch</h1>
    <p style={{ color:'#fff', fontSize:'1.5em', fontWeight:'400', textAlign:'center'}}>Contact Us To Talk About Meditation, Collaboration, Queries (or Even Just For a Chat)</p>
</div>

<div>
    <form>
         <div style={{display:'flex'}}>
            <input type="text" value={''} placeholder='Your Name' style={{margin:'0 10px', width:'25em', height:'3em',boxShadow:'rgba(0, 0, 0, 0.16) 18px 7px 46px inset',background:'transparent', border:'1px solid #6b7280', color:'#fff', padding:'10px', borderRadius:'10px'}}/>
            <input type="text" value={''} placeholder='Your Email' style={{width:'25em', height:'3em',boxShadow:'rgba(0, 0, 0, 0.16) 18px 7px 46px inset',background:'transparent', border:'1px solid #6b7280', color:'#fff', padding:'10px', borderRadius:'10px'}}/>
         </div>   
         <div style={{marginTop:'2em', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <textarea id="" cols="30" rows="10" placeholder='Type in your message' style={{width:'50em', height:'10em',boxShadow:'rgba(0, 0, 0, 0.16) 18px 7px 46px inset',background:'transparent', border:'1px solid #6b7280', color:'#fff', padding:'10px', borderRadius:'10px'}}></textarea>
         </div>

         <div style={{marginTop:'2em', display:'flex', alignItems:'center', justifyContent:'center'}}>
         <button style={{background:'transparent', border:'4px solid #fff', color:'#fff', width:'10em', height:'4em', borderRadius:'10px'}}> <h3>Submit</h3> </button>
         </div>

    </form>
</div>

    </div>

    <div style={{width:'100%', height:'8em'}}></div>
    <div style={{width:'100%', height:'15em', backgroundColor:'rgb(225 220 246)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <div>
    <h1 style={{fontWeight:'800', textAlign:'center'}}>Join A Community Of SuperMinds</h1>
    </div>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center',}}>
       <img src={instagram} alt="social media" style={{width:'3em', margin:'0 20px'}} /> 
       <img src={youtube} alt="social media" style={{width:'3em', margin:'0 20px'}} /> 
       <img src={linkedin} alt="social media" style={{width:'2.5em', margin:'0 20px'}}/> 
       <img src={telegram} alt="social media" style={{width:'3em', margin:'0 20px'}}/> 
       <img src={twitter} alt="social media" style={{width:'3em', margin:'0 20px'}}/> 
    </div>
    </div>
    <div style={{width:'100%', height:'20em', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <div>
    <h1 style={{fontWeight:'800', textAlign:'center'}}>Download Level SuperMind Now</h1>
    </div>
    <div>
        <img src={playstore} alt="playstore" style={{width:'15em'}}/>
        <img src={applestore} alt="applestore" style={{width:'15em'}}/>
    </div>
    </div>
    <div style={{width:'100%', height:'30em', backgroundColor:'#fff', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
      <div>
        <ul>
            <li style={{margin:'10px 0'}}>Cookie Policy</li>
            <li style={{margin:'10px 0'}}>Privacy Policy</li>
            <li style={{margin:'10px 0'}}>Terms & Conditions</li>
            <li style={{margin:'10px 0'}}>Copyright Disclaimer</li>
            <li style={{margin:'10px 0'}}>Cancellation & Refund Policy</li>
            <li style={{margin:'10px 0'}}>Help</li>
        </ul>
      </div>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <button style={{backgroundColor:'yellow', border:'none', borderRadius:'10px'}}>
           <strong>Work with Us</strong>
        </button>
        <ul>
            <li style={{margin:'10px 0'}}>About Us</li>
            <li style={{margin:'10px 0'}}>Meet the Team</li>
            <li style={{margin:'10px 0'}}>our Blog</li>
            <li style={{margin:'10px 0'}}>FAQs (Meditations)</li>
            <li style={{margin:'10px 0'}}>FAQs (General)</li>
            <li style={{margin:'10px 0'}}>Join Our Discord</li>
            <li style={{margin:'10px 0'}}>Our Work Culture</li>
        </ul>
      </div>
      <div>
      <ul>
      <li style={{margin:'10px 0'}}>Contact Us</li>
            <li style={{margin:'10px 0'}}>
             Office No. 313, 3rd Floor, C Wing, Trade World Kamala <br />
            Mills Compound, Senapati Bapat Marg, Lower Parel, <br />
             Mumbai, Maharashtra 400013 
             </li>
            
            <li style={{margin:'10px 0'}}>Phone No.: +91 8356971988</li>
      </ul>
     
      </div>
    </div>
   <div style={{width:'100%', height:'2em', backgroundColor:'rgb(234, 234, 234)', display:'flex', justifyContent:'center', alignItems:'center'}}>
   <span>© 2024 Level Fittech Pvt. Ltd.</span>
   </div>
  </>
  )
}

export default Footer
