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

const imgLink = "https://lh3.googleusercontent.com/fife/APg5EOZZL6j3r6b5HZIB_g03FdOGP1xU2TsEYLRMeX7SWgZip_JgM2kImftJPtg1q7j388cxGyC7Jw1hmRONLc_Dj7YBOTeRfJtqcXcU4dL0l9k9nnU72tSSecdm8_6w6lJoaHJSRgjnb91El8S4LEFTwlp0q9jqgtcLRZXYmFWukjpbSrpq2OL20k9C_0Rrgkvgg1NszMQynNW0jl5y3WygII31bWBguz9dJZG-zAMkdSDRnb3s4KrtCmKX7-TGi_vpuXKPrRYLjJjb1XZ0f0Zgay6oVmeJehTv2cF4Gh0D0hVlpC2t7JSZQOofAo6Yj8p24yTr73ndODgnwJexM89MqBJG1wrrQuTNbgfBMI_IZaFKuohXDO2MsLitbEY7hN2tyqX9Y-jcld7PwilbO-UXxKRIb8n3IauNp1E7aGRiSC8T3PHxmApq9yo3yOp1G6FaSeDAhoLvQKw2mb43f8s25bS27S2CJO6vsOjasU7Mu3G1r9HtnW0ZWdRaj5zzjbQo7PJvy2GFyFN45GlUsgAzb8FZviyA3fP7l9YMuQT4wKUG4SP_es4brmd9mfDsu0eDJerCvjkTCyu8sjV2YWO40J51UC7caBE0vgTYizAAOc676jXccVTlshwrDV2oXX6W6Katn8WtHCGei5lwV4-_N7kX63ShKx6As19clfXPh_BKfJeZg5WC-HPvwIW9vh2JJsKUFL-veav0bo0BkoVj3Wij8WMDHqzsLsx0RYSynOwU9AoxHugPv_LKYCEMn48sLKFjQnQU-8etSR4a_wdrrirlc_flQ1Ih1hMdpCfNcN6md06NsjcFpF22vTqwW3_UbmUvZjg7xtV5ai-HRulcMv0dK9bWcxFrbxj2ct-Me64tz-HFxjim0_cl8BE7em2YgNJZkC4NFGABdRHSleUvAUGeu4pW2cmoeAy93cMdVCimq7cnPMoRhZ-GP3dNNPVKoL2nVbXZyvY_wXZms_g2iYtfKaGIHxGXi6vwNTU33svX_6HRZyES59r6huXdVsEaQPyCLg1mqzZ-Lrc8iDwOBKIH7QqcjSvyoGwhkMBT0pJuW7C4e8HOzMmFS12fvwfkP_scLJPU7mws2SbtykJ7GsBWC-f5afIMY0I7NbnerF0DQcGlgH7MGs_v81vkA89QDd-ZSMAsk536bfM-gPBhd2e-O4SisIEFJQQOSbkWmvb9Np-az-Zenmr6gdj7ItkiTsk4no6r5zz8XeBXeOPQj1LW7SXh4V6oxAeEHgnUsgXqKrC-RzBHbajjwCGtnD-Nxqcrw-_1Gh4ScyGCXtGK4TXO51VheB356SZxVAjTMs8EXpDpwRfZHtTdHXWubez_w0LHQ-TDCk4iVDCROrmTZOTeUkLE0lS0HIc1AmIl8zjj1ZPFX3jgiSU6RD4kussqX6f1PYhAle191UPbY4b-edJio8-gYUNHcR2MCiJDWFSaSQM_5s1Vm3QsaR0ndQhDm4CsGKkTWpvtQT8eH1wnTvO0mfiaEFyD3JRPFfUTiGRv86_ewJsAlITtSFdOVFuAAXF4Eg=w1920-h950"

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
