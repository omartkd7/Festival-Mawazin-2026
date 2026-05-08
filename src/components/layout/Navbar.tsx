
import "tailwindcss";
import logo from "../../assets/logositeweb.png";







export default  function Navbar () {



    



    return (

        <div className=" bg-black ">

        <nav className="  flex container  justify-between relative bg-black after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10  mx-auto " >

            <div className="text-xl font-bold text-gray-800" >
                <img className="w-25" src={logo}></img>
                
            </div>

            <div className=" container  hidden md:flex items-center space-x-8">

                <ul><a className="text-amber-50 hover:text-blue-600 transition duration-300" href="#">Home</a></ul>
                <ul><a className="text-amber-50 hover:text-blue-600 transition duration-300" href="#">Programme</a></ul>
                <ul><a className="text-amber-50 hover:text-blue-600 transition duration-300" href="#">Détail Artiste</a></ul>
                <ul><a className="text-amber-50 hover:text-blue-600 transition duration-300" href="#">Mon Planning</a></ul>

            </div>

        </nav>

        </div>




       

    );
}





