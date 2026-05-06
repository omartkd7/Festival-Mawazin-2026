import spalch from "../../assets/spalch.jpeg"
import data from "../../assets/data.png"

export default function Consrtcard (){

    return (

        <section>

            <div className="relative w-fit">
              <img src={spalch} className="block" />


              <img src={data} className="w-200 mt-55 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

             <h2 className=" text-amber-50 text-bold border-4 border-amber-400 text-7xl mt-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">Festival Mawazin 2026</h2>


            </div>

        </section>


    )


}