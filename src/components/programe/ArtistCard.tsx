import image1 from "../../assets/artiset liest/image1.png"
import image2 from "../../assets/artiset liest/image2.png"
import image3 from "../../assets/artiset liest/image3.png"
import image4 from "../../assets/artiset liest/image4.png"

const artists = [
    { id: 1, name: "ElGrandeToto", image: image1 },
    { id: 2, name: "l'Morphine",   image: image2 },
    { id: 3, name: "Pause Flow",   image: image3 },
    { id: 4, name: "Don Bigg",     image: image4 },
]

export default function ArtistCard() {
    return (
        <section className="bg-black py-16 px-8">

            <div className="max-w-7xl mx-auto">

                <h2 className="text-4xl font-bold text-white text-center mb-12">
                    Top <span className="text-amber-400">Artists</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {artists.map((artist) => (
                        <div
                            key={artist.id}
                            className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            <div className="w-full h-64 overflow-hidden">
                                <img
                                    src={artist.image}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-white font-semibold text-lg">{artist.name}</h3>
                                <p className="text-zinc-400 text-sm mt-1">Festival Mawazin 2026</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}
