
import A from "../components/A"
import Head from "next/head"

function MainConteiner({ children, keywords }) {
    return (
        <>
            <Head>
                <meta keywords={"Aleksey Petrovivh developer" + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div className='navbar'>
                <A href={"/"} text={"Main"} />

                <A href={"/users"} text={"Users"} />
            </div>
            <div>
                {children}
            </div>

        </>
    )
}

export default MainConteiner