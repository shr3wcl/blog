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

const imgLink = "https://avatars.githubusercontent.com/u/89400593"

const navigation = [
    {name: 'Article', href: '/', logo: '📜', current: false},
    {name: 'Project', href: '/project', logo: '🚩', current: false},
    // {name: 'Saved', href: '/article', logo: '📰', current: false},
    // {name: 'Video', href: '/video', logo: '🎞️', current: false},
    {name: 'About Me', href: '/me', logo: '🙋', current: false},
    { name: 'Certificate', href: '/certificate', logo: '🎓', current: false},
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
        <Disclosure as="nav" className="z-10 bg-white border-b border-gray-200 dark:bg-gray-900 dark:text-white dark:border-gray-600">
            {({ open }) => (
                <nav>
                    <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
                        <div className="relative flex h-12 items-center justify-between flex-row">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 h-full items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link href={"/"} className="block w-auto dark:text-gray-50 font-bold">
                                        My Blog
                                    </Link>
                                </div>
                                <div className="hidden h-full sm:ml-6 sm:block">
                                    <div className="flex space-x-4 items-center justify-center h-full">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    router.pathname === item.href ? 'border-b-2 border-blue-500' : 'hover:bg-gray-700 hover:text-white',
                                                    'text-gray-500 dark:text-gray-300 inline-flex items-center px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={router.pathname.includes(item.href)}
                                            >
                                                <span className="mr-2">{item.logo}</span>{item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                {DarkModeButton(isDarkMode, setDarkMode)}
                                <Link href={"/me"} className="relative ml-3">
                                    <img src={imgLink} alt="avatar" className="w-9 h-9 rounded-full" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium flex'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    <span className={"relative top-1 mr-2"}>{item.logo}</span> {item.name}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </nav>
            )}
        </Disclosure>

    )
}

export default Header;
