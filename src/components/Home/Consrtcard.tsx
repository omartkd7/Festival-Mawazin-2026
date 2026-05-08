import spalch from "../../assets/spalchimage.png"
import data from "../../assets/data.png"

export default function Consrtcard (){

    return (

        <section className="">

            <div className=" relative w-fit">
              <img src={spalch} className="block " />

              <img src={data} className="w-200 mt-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />


             <div className="absolute bottom-150 left-1/2 -translate-x-1/2 flex items-center justify-center">
             <button className="bg-amber-400 text-black px-25 py-5 rounded-2xl hover:bg-blue-600" onClick={()=> alert("TEST")}>Click me</button>
             </div>

            </div>

        </section>

    )


}