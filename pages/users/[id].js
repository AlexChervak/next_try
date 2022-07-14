import { useRouter } from "next/router"
import MainConteiner from "../../components/mainConteiner"


export default function ({ user }) {

    return (
        <MainConteiner>
            <div>
                id: {user.id}
            </div>
            <div>
                name: {user.name}
            </div>
            <div>
                username: {user.username}
            </div>
            <div>
                email: {user.email}
            </div>
            <div>
                website: {user.website}
            </div>
            <div>
                phone: {user.phone}
            </div>

        </MainConteiner>
    )
}


export async function getServerSideProps({ params }) {


    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()


    return {
        props: { user }
    }
}