import React,{ useState, useEffect } from 'react'
import Caousel from './Caousel'
import coin from '../images/coin-stack.webp'
import coinjar from '../images/coin-jar.webp'
import golden  from '../images/producthunt-finalist.webp'
import producthunt from '../images/productHunt.webp'
import appscale from '../images/appscale.webp'
import mind from '../images/mindmobile.webp'
import body from '../images/bodymobile.webp'
import journal from '../images/journalmobile.webp'
import sleep from '../images/sleepmobile.webp'
import './Main.css'

const Main = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        if (prevOffset === -100) {
          // Reset back to the initial position when reaching the end
          return 0;
        } else {
          // Move the cards one step to the left
          return prevOffset - 1;
        }
      });
    }, 50); // Adjust the speed of the animation here (smaller values for faster animation)

    return () => clearInterval(interval);
  }, []);

  return (
    <>
        <div>
        <h2 style={{fontSize:'2em', textAlign:'center',}}>How To Get a SuperMind?</h2>
        </div>
        <div style={{position:'relative'}}>
        <section className='section1' style={{width:'100%', height:'100vh', display:'flex', top:'0', position:'sticky'}}>
        <div style={{width:'40%', height:'100vh', color:'#fff', backgroundColor:'rgb(47, 144, 237)', display:'flex', alignItems:'center', flexDirection:'column', justifyContent:'center' }}>
        <h1 style={{fontSize:'2em', fontWeight:'800'}}>Meditations, Music & Breathwork</h1>
        <p style={{fontSize:'1.5em', lineHeight:'0.5em'}}>To Enhance Your Clarity, Focus, Memory and Creativity.</p>
        <p style={{fontSize:'1.5em', lineHeight:'3em'}}></p>
            <p style={{fontSize:'1.5em', lineHeight:'0.5em'}}>
            Our most popular activities: <br /><br /> <br />
            -Train Your Mind Series by Ranveer Allahbadia <br /><br /><br />
             -Focus Series by Harshil Karia <br /><br />  <br />
             -Music-Raag for Stress Relief
              </p>
           
        </div>
        <div style={{display:'flex', justifyContent:'center', width:'60%', height:'100vh', color:'#fff', backgroundColor:'rgb(166, 231, 255)' }}>
         
         
         <img src={mind} alt="mind" style={{width:'45em', position:'absolute', bottom:'0'}} />
        
        </div>
        </section>
        <section style={{ position:'sticky', top:'0'}}>
        <div style={{height:'100vh', backgroundColor:'rgb(249, 206, 71)'}}>
        <div style={{position: 'absolute', bottom: '0', width:'60%', height:'95vh', color:'#fff', backgroundColor:'rgb(255, 234, 116)' , display:'flex', justifyContent:'center', alignItems:'center'}}>
        <img src={body} alt="mind" style={{width:'45em', position:'absolute', bottom:'0', }} />
       </div>
        </div>
        </section>
        <section style={{ position:'sticky', top:'0'}}>
        <div style={{height:'100vh', backgroundColor:'rgb(219, 103, 76)'}}>
        <div style={{position: 'absolute', bottom: '0',right:'0', width:'60%', height:'95vh', color:'#fff', backgroundColor:'rgb(248, 171, 153)', display:'flex', justifyContent:'center', alignItems:'center' }}>
        <img src={journal} alt="mind" style={{width:'45em', position:'absolute', bottom:'0'}} />
       </div>
        </div>
        </section>
        <section style={{ position:'sticky'}}>
        <div style={{height:'100vh', backgroundColor:'rgb(27, 5, 38)'}}>
        <div style={{position: 'absolute', bottom: '0', width:'60%', height:'95vh', color:'#fff', backgroundColor:'rgb(76, 27, 102)', display:'flex', justifyContent:'center', alignItems:'center' }}>
        <img src={sleep} alt="mind" style={{width:'45em', position:'absolute', bottom:'0'}} />
       </div>
        </div>
        </section>
        </div>
        {/* <div>

        </div> */}
       

     <div>
     <div>
        <Caousel/>
        </div>

      <div style={{marginTop:'1em'}}>
     <h1 style={{fontSize:'2em', fontWeight:'800', textAlign:'center'}}>The Best Subscription For Your Mind</h1>
     <p style={{fontSize:'1.5em', textAlign:'center'}}>Unlimited Access To 500+ Meditations, Sleep Stories, Journals and Workouts</p>
      </div>

      <div style={{margin:'3em', display:'flex', justifyContent:'center'}}>
      <button style={{border:'none', background:'transparent', width:'2em', height:'2px', margin:'2em 3em', fontSize:'1.5rem'}}>Android</button>
      <button style={{border:'none', background:'transparent', width:'2em', height:'2px',margin:'2em 3em', fontSize:'1.5rem'}}>iOS</button>
     </div>

     <div style={{position:'relative', height:'100%'}}>
     <div style={{ width:'100vw', height:'60%',background:'linear-gradient(rgb(242, 239, 255), rgb(242, 239, 255), rgb(218, 212, 242), rgba(142, 122, 220, 0.52))'}}>
         
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
     
     <div className='pricebox-outside'>
     <div className='pricebox-inside'>
     <div style={{display:'flex',justifyContent:'center', alignItems:'center', height:'100%'}}>
     <input type="radio" />
     <strong>299</strong><span>.00/</span><strong>Month</strong><span>(Paid Monthly)</span>
     </div>
 </div>
     </div>
   
    
    
     <div className='pricebox-outside'>
     <div className='pricebox-inside-popular'>
     <span style={{backgroundColor:'rgb(115 86 232 )', borderRadius:'3px', transform:'translateY(-50%)', position:'absolute', marginLeft:'1em', color:'#fff'}}>Most Popular</span>
     <div style={{display:'flex',justifyContent:'center', alignItems:'center', height:'100%'}}>
     <input type="radio" />
     <strong>208</strong><span>.17/</span><strong>Month</strong><span>(Paid Half Yearly)</span>
     </div>
 </div>
     </div>
     <div className='pricebox-outside'>
     <div className='pricebox-inside'>
     <span style={{backgroundColor:'#fff',border:'1px solid rgb(115 86 232 )', borderRadius:'3px', transform:'translateY(-50%)', position:'absolute', marginLeft:'1em', color:'rgb(115 86 232 )'}}>Best Deal</span>
     <div style={{display:'flex',justifyContent:'center', alignItems:'center', height:'100%'}}>
     <input type="radio" />
     <strong>129</strong><span>.00/</span><strong>Month</strong><span>(Paid Annually)</span>
     </div>
 </div>
     </div>
    
     </div>
     </div>
     <div style={{ width:'100vw', height:'40%', background:'linear-gradient(350.8deg, rgb(242, 239, 255), rgb(242, 239, 255), rgb(242, 239, 255), rgb(218, 212, 242), rgba(142, 122, 220, 0.52), rgb(103, 88, 210))'}}>
     <div>
   <img src={coin} alt="coin" style={{width:'12em', marginLeft:'20em'}}/>
   </div>
   <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
   <button style={{backgroundColor:'rgb(115 86 232)', border:'none',width:'20em', height:'5em',borderRadius:'10px',}}>
       <span style={{color:'#fff', fontWeight:'600', fontSize:'1.5em'}}>Start 7 Days Free Trial</span>   
   </button>  
   </div>
   <div>
   <img src={coinjar} alt="coinjar" style={{width:'12em', marginLeft:'60em'}}/>
   </div>
     </div>
   </div>
     </div>

     <div style={{marginTop:'4em'}}>
<div style={{height:'0.7em', width:'100%', backgroundColor:'rgb(124 97 233)'}}></div>
<div style={{marginTop:'1em', height:'10em', width:'100%'}}>
  <p style={{textAlign:'center', fontSize:'1.5em', fontWeight:'800', lineHeight:'4em'}}>Reviews From Our App Users</p>
  <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
    <img className='rankImage' src={golden} alt="goldenkitty" style={{marginRight:'1em'}}/>
    <img className='rankImage' src={producthunt} alt="producthunt" style={{marginRight:'1em'}}/>
    <img className='rankImage' src={appscale} alt="appscale"  />
  </div>
</div>

     </div>

<div style={{marginTop:'2em',}}>
<div style={{backgroundColor:'#fff', height:'20em', width:'100%',}}>
<div className='cardsContainer' style={{backgroundColor:'#fff', height:'20em', width:'100%',alignItems:'center',display:'flex', transform: `translateX(${offset}%)`,}}>

<div style={{margin:'0 2em', flex: '0 0 35em', height:'10em', borderRadius:'40px', backgroundColor:'rgb(242, 239, 255)', boxShadow:'rgba(115, 86, 232, 0.23) 0px 8px 30px inset', border:'none'}}></div>
<div style={{margin:'0 2em', flex: '0 0 35em', height:'10em', borderRadius:'40px', backgroundColor:'rgb(242, 239, 255)', boxShadow:'rgba(115, 86, 232, 0.23) 0px 8px 30px inset', border:'none'}}></div>
<div style={{margin:'0 2em', flex: '0 0 35em', height:'10em', borderRadius:'40px', backgroundColor:'rgb(242, 239, 255)', boxShadow:'rgba(115, 86, 232, 0.23) 0px 8px 30px inset', border:'none'}}></div>
<div style={{margin:'0 2em', flex: '0 0 35em', height:'10em', borderRadius:'40px', backgroundColor:'rgb(242, 239, 255)', boxShadow:'rgba(115, 86, 232, 0.23) 0px 8px 30px inset', border:'none'}}></div>
<div style={{margin:'0 2em', flex: '0 0 35em', height:'10em', borderRadius:'40px', backgroundColor:'rgb(242, 239, 255)', boxShadow:'rgba(115, 86, 232, 0.23) 0px 8px 30px inset', border:'none'}}></div>
<div style={{margin:'0 2em', flex: '0 0 35em', height:'10em', borderRadius:'40px', backgroundColor:'rgb(242, 239, 255)', boxShadow:'rgba(115, 86, 232, 0.23) 0px 8px 30px inset', border:'none'}}></div>
<div style={{margin:'0 2em', flex: '0 0 35em', height:'10em', borderRadius:'40px', backgroundColor:'rgb(242, 239, 255)', boxShadow:'rgba(115, 86, 232, 0.23) 0px 8px 30px inset', border:'none'}}></div>
<div style={{margin:'0 2em', flex: '0 0 35em', height:'10em', borderRadius:'40px', backgroundColor:'rgb(242, 239, 255)', boxShadow:'rgba(115, 86, 232, 0.23) 0px 8px 30px inset', border:'none'}}></div>

</div>
</div>

</div>

     
    </>
  )
}

export default Main
