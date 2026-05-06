

 type Hello = {

    first: string

 }


   export default function Hello (props:any){

    console.log (props)

    return (
        <div>

            <h1>Hello {props.lastname}</h1>
            <p> description new project here </p>


        </div>
    )

}