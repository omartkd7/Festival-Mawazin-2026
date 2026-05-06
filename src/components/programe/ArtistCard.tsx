import image1 from "../../assets/artiset liest/image1.png"
import image2 from "../../assets/artiset liest/image2.png"
import image3 from "../../assets/artiset liest/image3.png"
import image4 from "../../assets/artiset liest/image4.png"


export default function ArtistCard (){

    return (

        <nav>

            <div  >
                <h2 className=" grid place-items-center  text-5xl ">Top Artist</h2>
            </div>

            <div>
                <ul itemID="lest artiset" className="w-450 flex content-center" >

                  <div id="cart 1">
                    <img src={image1} className="image1"></img>
                    <h3></h3>
                    <p></p>

                  </div>

                   <div id="cart 2">

                    <img src={image2} className="image2"></img>
                    <h3></h3>
                    <p></p>

                  </div>

                   <div id="cart 3">

                    <img src={image3} className="iamge3"></img>
                    <h3></h3>
                    <p></p>

                  </div>

                   <div id="cart 4">

                    <img src={image4} className="image4"></img>
                    <h3></h3>
                    <p></p>

                  </div>


                </ul>

            </div>


        </nav>

    )


}