import logo from './logo.svg';
import './App.css';
import Header from './header/header';
function App() {
  return (
    <div className="
    h-screen
    w-scren
    white
    px-16
    
    flex
    flex-col
    justify-evenly
    ">
<Header></Header>
<main className='
w-full
h-[28%]
justify-between

flex
 
'>
<div className=' w-[80%]  flex flex-col justify-between
'> 
<div className='py-0 '>
   <p className='  font-inter text-8xl   py-6 font-normal leading-10 font-medium tracking-widet'> Sustainable</p>
<p className=" font-inter text-8xl tracking-wider leading-10 py-6  font-medium" > renewable Energy</p>

</div>
<div className=' h-[30%] flex items-end  '>

<button className=' rounded-3xl  w-[15%] h-9 font-inter font-semibold text-xs bg-blue-100' >Contact</button>
<button  className='w-10 h-9 mx-4 p-3  rounded-3xl flex justify-center items-center bg-blue-100'> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 7H17V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
   </button>
   <div className=' w-[40%]'>
      <p className=' font-inter font-medium text-xs '>Renewable energy is energy obtained from naturally replenished resources that have a minimal environmental impact and are sustainable</p>
   </div>
 
</div>
</div>
<div className=' rounded-3xl 
border-2
border-blue-100
p-5 relative
h-[90%] w-[13%]'>

<div className='bg-gray-300 w-[100%] rounded-2xl  h-[80%]'></div>

<div className=' h-[20%] flex justify-center  '>
   <div className='w-10 h-10 bg-blue-100 rounded-full absolute  -translate-y-5'></div>
   <p className='font-inter text-xs p-5'>experience energy</p>
</div>
</div>
</main>
<div className='
bg-gradient-to-b from-blue-100
w-full
rounded-2xl
h-[53%]
p-4
relative
'>
<div className='  absolute right-10 top-20 h-[60%] w-[9%] rounded-xl bg-gray-400'></div>
   <div></div>

</div>
    </div>
  );
}

export default App;
