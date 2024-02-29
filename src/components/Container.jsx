import React from 'react'
import TrophyImg from '../assets/1.png'
import Image from '../assets/2.png';
import Tools from '../assets/3.png';
 
export const Container = () => {
  return (
    <div className=' bg-yellow-100 h-full w-full'>
         <div className='flex justify-between max-w-[1200px] md:max-w-[2000px]'>
             <div className='max-w-[300px] sm:max-w-[370px] mx-auto'>
             <img src={TrophyImg}  alt="trophy image" />   
            </div>
            <div className='max-w-[550px] sm:max-w-[750px] mx-auto'>
                <h1 className='font-bold text-[12px] mb-2'>
                    C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
                    <ol className='text-[11px] mb-2'>
                    <li> <p>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for 
                    various projects across the globe to save energy.</p></li>
                    <li> <p>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the
                        old inefficient pumps with 5 Star rated energy efficient smart pumps with lot enabled control panel.</p></li>
                    </ol>
               
               
                <img src={Image} alt="award image" />
                <p className='text-[11px] mt-2 '>Government of India has awarded the <span className='font-bold'>"National Energy Conservation Award 2018"</span>. Mr. G. of C.R.L. 
                    Group received the award from Smt. Sumitra Mahajan, Speaker of Minister of State. Selvaraj, 
                    Joint Managing Director Lok</p>
            </div>
         </div>

         <div className='bg-yellow-100 max-w-[1200px]  md:max-w-[2000px] py-7'>
            <h1 className='font-bold text-center text-[10px] sm:text-[14px]'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSET ACROSS THE COUNTRY 
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION</h1>
            <div class="flex justify-center items-center">
            <img className='max-w-[600px] sm:max-w-[800px]'  src={Tools} alt="tools image" />
</div>
            
            <h5 className=' font-bold text-[9px] sm:text-[12px] text-center py-2'>Valves-Pumps-Pipes-Iot Drives & Controller- Wires & Cables- Solar System- Motors</h5>
            <div className='bg-red-600 h-1'></div>
            <h1 className='py-5 text-[13px] font-bold text-center'> C.R.I FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h1>
            <p className='text-center text-[12px]'>CHEMICALS & PROCESS|POWER|WATER & WASTE|OILS & GAS|PHARMA|SUGARS & DISTILLERIES|PAPER & PULP|MARINE & DEFENCE|METAL & MINING|
            FOOD & BEVERAGE|PTEROCHEMICALS & REFINERIES|SOLAR|BUILDING|HVAC|FIRE FOIGHTING|AGRICULTURE & RESIDENTIAL</p> 
            
         </div>
          

    </div>
  )
}

export default Container
