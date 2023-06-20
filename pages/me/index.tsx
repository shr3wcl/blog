import Head from "next/head";
const imgLink = "https://lh3.googleusercontent.com/fife/APg5EOatR7kRbNjZd66QVMej9pwZg2zNTPM1qU7Ci6Cbr0IDMc_nErZrxwdu_Ch8tFZSk5VKUJWbKQoD2-_fxGkasg8TYjh6gJWCFA1Hb3e8t4r1Xt5fB2QyMcVK347TNXsDcVCzY2P8xg8jp2DsU4UTE4QxMuwc1N3M9JjE0wneOrSB98Kjh4xQakDFzsXpk6aEgUi6Fi2iv2nsR853W8v7z0SM7fkYtu0MU84eAzS4qxnCRxFg390celmqd_N-QQdlq74G96bfrPH1SNFYdn-CwXXcbo_ZPVnIzZQdipCFjlO-qrIzziqgQ0aCFB6qfDMIwWLW5nhCKHIBWqLY8x9_Vu95e2t6BJnC9I2kqs1zu_8Tzs2E5Q4OxU3-NuN3e1LDSk7fLPzGjmll0IlKOrwgCdnTP6xWc1M8jN8DUP2c9YczFji8EnxeUfXk3JOKy9hG63Tmdw-vzDXwPYtdDzOM5pelQ1-VMknGxvVD0qyjXT6WX-zaRk39dQlG4AbwyUxIO5QPasnHWdBdoW8v6rGcbtPw6T1hrTJjr8hDnH_HzqxwmwtXtorfZto4j50dehbEHrNuh4p7J7cUFmB1tDMbF8NtsgKUYLCuh73Hk1sIjgNMLqKtO1HeXRR6rQPL6DgIrN-UN7A2yNgu2i3n6t4WDqkd9fbg_XOTEFUgUYJrNqSe6rRxkvtP5xTFPmHTpht5BETyS6h6hduaLfFn1NMZY9ygT0w3MHjYQuTT8WpOHS43lZvFQdDvZmb6CLv7Z8qPAh7uC4tJFxn_S1488damgeKgmmIMU38LBogMq3rAraX5yDubXnstamhyIRmMLj0Mo9hMSEk4WkGjLX3r4QUlMaeuXJXe-FP6zfVnhvyC0nCYo_nbRqIYXvMihxgxnLJ_T9NbhFdF4nU1sxl8re_GdFVt2Ww9LC44Ujm8xEzivCB4rc89cz9fzvfiBVkRFxN4KTiIkdnnCGMPu37YclX9ceJcFl78GDzaxf5r0t-wwn7w6txgGuF3yDn9HkPNelMuCHY-IjmlU7ehisu8JhppqYyd7lcBbddla-n7Eg8fPTXwluoNL2MSh78HHrtzyKaj6qBnVgBTCkbmZegmiOqu-AolzA0kAp0gW9culG5Dp0TsuWrW1tpWF9GnrJRDpBMbGa6gccsYzHYyMuYraVnXWxYE1lUsW_xynWBjOmvdWmrK5P8bKjl3KH-AagdETBefBrmAwEE5_tUid-mPCx3d1OC_uSzcee9ohY1kNnerwbPFfyzwHP5hXg518-JY46oQgB1joHPf7qRyPyFWyZYXty2hlgbRGLf4H38lq_CogrwRiufrtqzLTVqMwIgwzRigrpw8OYUdoJPqdGKo6e_jsoMljzneOm81NTgbxw8CgAb4vKilljkGQQW0uSEHciJaCBQuLdZP8z1wingrme-pKnHyA5iCPX7dDtf7MmJq1r6eULfxsXjL5_9vwhHvKAoleEi-489t_I3slYHNJmW2IY3YF5dckvLvORhIGHKwt45qcErwxttYHjNKjENV_Au5MEVzpw=w1920-h950"

//https://avatars.githubusercontent.com/u/89400593

const Myself = () => {
    return (
        <div>
            <Head>
                <title>Me</title>
            </Head>
            <div className={"flex justify-center flex-col items-center mt-6 px-4 font-personal"}>
                <figure className="max-w-screen-md mx-auto text-center">
                    <blockquote>
                        <p className="text-2xl italic font-medium text-gray-900 dark:text-white">❝Being the richest man in the cemetery does not matter to me … Going to bed at night saying we’ve done something wonderful … that’s what matters to me.❞</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-2 space-x-3 float-right">
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <cite className="pr-3 font-medium text-gray-900 dark:text-white">Steve Jobs</cite>
                                <cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at
                                    Apple</cite>
                            </div>
                    </figcaption>
                </figure>

                <img className="w-24 h-24 mb-3 mt-5 rounded-full shadow-lg"
                     src={imgLink}
                     alt="Avatar"/>
                <h5 className="text-blue-500 mb-1 text-xl font-medium dark:text-white">Phạm Minh Trí</h5>
                <h6 className="text-blue-500 mb-1 text-xl dark:text-white">A.k.a: <b>Bin</b></h6>
                <span className="text-sm text-gray-500 dark:text-gray-400">Software Engineer - Penetration Testing</span>

            </div>

        </div>
    )
}

export default Myself;
