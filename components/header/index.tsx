import Link from "next/link";
import {Switch} from '@headlessui/react';
import {Disclosure} from '@headlessui/react';
import useDarkMode from "./useDarkMode";
import {useRouter} from "next/router";
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {BiMoon, BiSun} from "react-icons/bi";
import {CiStickyNote, CiVideoOn} from "react-icons/ci";
import {GoLightBulb} from "react-icons/go";
import {MdOutlineArticle} from "react-icons/md";
import {IoPersonOutline} from "react-icons/io5";

const imgLink = "https://lh3.googleusercontent.com/fife/APg5EOatR7kRbNjZd66QVMej9pwZg2zNTPM1qU7Ci6Cbr0IDMc_nErZrxwdu_Ch8tFZSk5VKUJWbKQoD2-_fxGkasg8TYjh6gJWCFA1Hb3e8t4r1Xt5fB2QyMcVK347TNXsDcVCzY2P8xg8jp2DsU4UTE4QxMuwc1N3M9JjE0wneOrSB98Kjh4xQakDFzsXpk6aEgUi6Fi2iv2nsR853W8v7z0SM7fkYtu0MU84eAzS4qxnCRxFg390celmqd_N-QQdlq74G96bfrPH1SNFYdn-CwXXcbo_ZPVnIzZQdipCFjlO-qrIzziqgQ0aCFB6qfDMIwWLW5nhCKHIBWqLY8x9_Vu95e2t6BJnC9I2kqs1zu_8Tzs2E5Q4OxU3-NuN3e1LDSk7fLPzGjmll0IlKOrwgCdnTP6xWc1M8jN8DUP2c9YczFji8EnxeUfXk3JOKy9hG63Tmdw-vzDXwPYtdDzOM5pelQ1-VMknGxvVD0qyjXT6WX-zaRk39dQlG4AbwyUxIO5QPasnHWdBdoW8v6rGcbtPw6T1hrTJjr8hDnH_HzqxwmwtXtorfZto4j50dehbEHrNuh4p7J7cUFmB1tDMbF8NtsgKUYLCuh73Hk1sIjgNMLqKtO1HeXRR6rQPL6DgIrN-UN7A2yNgu2i3n6t4WDqkd9fbg_XOTEFUgUYJrNqSe6rRxkvtP5xTFPmHTpht5BETyS6h6hduaLfFn1NMZY9ygT0w3MHjYQuTT8WpOHS43lZvFQdDvZmb6CLv7Z8qPAh7uC4tJFxn_S1488damgeKgmmIMU38LBogMq3rAraX5yDubXnstamhyIRmMLj0Mo9hMSEk4WkGjLX3r4QUlMaeuXJXe-FP6zfVnhvyC0nCYo_nbRqIYXvMihxgxnLJ_T9NbhFdF4nU1sxl8re_GdFVt2Ww9LC44Ujm8xEzivCB4rc89cz9fzvfiBVkRFxN4KTiIkdnnCGMPu37YclX9ceJcFl78GDzaxf5r0t-wwn7w6txgGuF3yDn9HkPNelMuCHY-IjmlU7ehisu8JhppqYyd7lcBbddla-n7Eg8fPTXwluoNL2MSh78HHrtzyKaj6qBnVgBTCkbmZegmiOqu-AolzA0kAp0gW9culG5Dp0TsuWrW1tpWF9GnrJRDpBMbGa6gccsYzHYyMuYraVnXWxYE1lUsW_xynWBjOmvdWmrK5P8bKjl3KH-AagdETBefBrmAwEE5_tUid-mPCx3d1OC_uSzcee9ohY1kNnerwbPFfyzwHP5hXg518-JY46oQgB1joHPf7qRyPyFWyZYXty2hlgbRGLf4H38lq_CogrwRiufrtqzLTVqMwIgwzRigrpw8OYUdoJPqdGKo6e_jsoMljzneOm81NTgbxw8CgAb4vKilljkGQQW0uSEHciJaCBQuLdZP8z1wingrme-pKnHyA5iCPX7dDtf7MmJq1r6eULfxsXjL5_9vwhHvKAoleEi-489t_I3slYHNJmW2IY3YF5dckvLvORhIGHKwt45qcErwxttYHjNKjENV_Au5MEVzpw=w1920-h950"

const navigation = [
    {name: 'Blog', href: '/', logo: '📜', current: false},
    {name: 'Projects', href: '/projects', logo: '🚩', current: false},
    {name: 'Saved', href: '/article', logo: '📰', current: false},
    {name: 'Video', href: '/video', logo: '🎞️', current: false},
    {name: 'Self', href: '/me', logo: '🙋', current: false},
    {name: 'Certificate', href: '/cert', logo: '🎓', current: false},
]

function DarkModeButton(isDarkMode: any, setDarkMode: any) {
    return (
        <div className="grid place-items-center text-gray-500">
            <Switch
                checked={isDarkMode}
                onChange={setDarkMode}
                className={`${isDarkMode ? 'bg-blue-600' : 'bg-gray-200'}
                relative inline-flex h-[26px] w-[46px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`${isDarkMode ? 'translate-x-5' : 'translate-x-0'}
                                                pointer-events-none flex justify-center items-center inline-block h-[22px] w-[22px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}>
                    {isDarkMode ? <BiMoon className={"text-blue-400"}/> : <BiSun className={"text-red-500"}/>}
                </span>
            </Switch>
        </div>
    )
}


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {
    const [isDarkMode, setDarkMode] = useDarkMode();
    const router = useRouter();
    return (
        <Disclosure as="nav"
                    className="z-10 bg-white border-b border-gray-200 dark:bg-gray-900 dark:text-white dark:border-gray-600">
            {({open}) => (
                <nav>
                    <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
                        <div className="relative flex h-12 items-center justify-between flex-row">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div
                                className="flex flex-1 h-full items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link href={"/"}
                                          className="block w-auto dark:text-gray-50"
                                    >
                                        Bin blog
                                    </Link>
                                </div>
                                <div className="hidden h-full sm:ml-6 sm:block">
                                    <div className="flex space-x-4 items-center justify-center h-full">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    router.pathname === item.href ? 'border-b-blue-500 hover' : 'over:bg-gray-700 hover:border-gray-300',
                                                    'border-transparent text-gray-500 h-full  dark:text-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                                                )}
                                                aria-current={router.pathname.includes(item.href)}
                                            >
                                                <span className={"mr-2"}>{item.logo}</span>{item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex">
                                {DarkModeButton(isDarkMode, setDarkMode)}
                                <Link href={"/me"} className="relative ml-3">
                                    <img src={imgLink} alt="avatar"
                                         className={"w-[36px] h-[36px] rounded-xl"}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium flex'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    <span className={"relative top-1 mr-2 "}>{item.logo}</span> {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </nav>
            )}

        </Disclosure>
    )
}

export default Header;
