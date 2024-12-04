export default function Home() {
    return (
        <div className="w-full h-screen bg-blue-300">
            <div className="w-full h-24 ">
                <div className="relative flex w-full h-24 p-8 justify-center items-center space-x-4">
                   <h1 className="absolute left-0 mx-16 text-3xl text-bold text-white">ARSHA</h1>
                   <h1 className="text-xl text-whtie">Home</h1>
                   <h1 className="text-xl text-whtie">About</h1>
                   <h1 className="text-xl text-whtie">Service</h1>
                   <h1 className="text-xl text-whtie">Portfolio</h1>
                   <h1 className="text-xl text-whtie">Team</h1>
                   <button className="flex text-xl text-whtie">
                    Drop down 
                    <img src="https://cdn-icons-png.flaticon.com/512/54/54785.png" className="w-6 h-6 "></img></button>
                   <h1 className="text-xl text-whtie">Contact</h1>
                   <button className="border-2 border-blue-300 rounded-xl border-inherit text-xl text-white">Get Started</button>
                </div>
            </div>
            <div className="flex w-full h-96 justify-center items-center space-x-6">
                <div className="">
                    <p className="text-white text-6xl">Better Solutions For 
                        Your Business</p>
                    <p className="text-slate-500 text-3xl">We are team of talented designers making
                         websites with Bootstrap</p>
                    <button className="text-white border-2 border-inherit rounded-full mx-8 border-blue-400 bg-blue-400 text-2xl">Get Started</button>
                    <button className="flex text-white text-2xl mx-8">
                        <img src="https://cdn-icons-png.flaticon.com/512/0/375.png" className="w-6 h-6"></img>
                        Watch Video</button>
                </div>
                <div className="">
                    <img src="https://www.touchstar.co.uk/files/myimages/iot.png"
                         className="w-80 h-80"
                    ></img>
                </div>
            </div>
        </div>
          
    );
;}
