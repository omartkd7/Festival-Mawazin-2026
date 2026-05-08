import spalch from "../../assets/spalchimage.png"
import data from "../../assets/data.png"

export default function Consrtcard() {
    return (
        <section className="w-full bg-black">

            <div className="relative w-full flex justify-center items-center">

                <img
                    src={spalch}
                    className="w-full  object-cover opacity-80"
                />

                <div className="absolute inset-0  from-black/20 to-black/60" />

                <div className="absolute flex flex-col items-center gap-8">

                    <img
                        src={data}
                        className="w-72 md:w-96 drop-shadow-2xl"
                    />

                    <button
                        className="bg-amber-400 text-black font-bold px-10 py-3 rounded-full text-lg hover:bg-amber-300 hover:scale-105 transition-all duration-300 shadow-lg"
                        onClick={() => alert("Buy Tickets!")}
                    >
                        Acheter Billets
                    </button>

                </div>

            </div>

        </section>
    )
}
