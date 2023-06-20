import Head from "next/head";
const imgLink = "https://lh3.googleusercontent.com/fife/APg5EOZZL6j3r6b5HZIB_g03FdOGP1xU2TsEYLRMeX7SWgZip_JgM2kImftJPtg1q7j388cxGyC7Jw1hmRONLc_Dj7YBOTeRfJtqcXcU4dL0l9k9nnU72tSSecdm8_6w6lJoaHJSRgjnb91El8S4LEFTwlp0q9jqgtcLRZXYmFWukjpbSrpq2OL20k9C_0Rrgkvgg1NszMQynNW0jl5y3WygII31bWBguz9dJZG-zAMkdSDRnb3s4KrtCmKX7-TGi_vpuXKPrRYLjJjb1XZ0f0Zgay6oVmeJehTv2cF4Gh0D0hVlpC2t7JSZQOofAo6Yj8p24yTr73ndODgnwJexM89MqBJG1wrrQuTNbgfBMI_IZaFKuohXDO2MsLitbEY7hN2tyqX9Y-jcld7PwilbO-UXxKRIb8n3IauNp1E7aGRiSC8T3PHxmApq9yo3yOp1G6FaSeDAhoLvQKw2mb43f8s25bS27S2CJO6vsOjasU7Mu3G1r9HtnW0ZWdRaj5zzjbQo7PJvy2GFyFN45GlUsgAzb8FZviyA3fP7l9YMuQT4wKUG4SP_es4brmd9mfDsu0eDJerCvjkTCyu8sjV2YWO40J51UC7caBE0vgTYizAAOc676jXccVTlshwrDV2oXX6W6Katn8WtHCGei5lwV4-_N7kX63ShKx6As19clfXPh_BKfJeZg5WC-HPvwIW9vh2JJsKUFL-veav0bo0BkoVj3Wij8WMDHqzsLsx0RYSynOwU9AoxHugPv_LKYCEMn48sLKFjQnQU-8etSR4a_wdrrirlc_flQ1Ih1hMdpCfNcN6md06NsjcFpF22vTqwW3_UbmUvZjg7xtV5ai-HRulcMv0dK9bWcxFrbxj2ct-Me64tz-HFxjim0_cl8BE7em2YgNJZkC4NFGABdRHSleUvAUGeu4pW2cmoeAy93cMdVCimq7cnPMoRhZ-GP3dNNPVKoL2nVbXZyvY_wXZms_g2iYtfKaGIHxGXi6vwNTU33svX_6HRZyES59r6huXdVsEaQPyCLg1mqzZ-Lrc8iDwOBKIH7QqcjSvyoGwhkMBT0pJuW7C4e8HOzMmFS12fvwfkP_scLJPU7mws2SbtykJ7GsBWC-f5afIMY0I7NbnerF0DQcGlgH7MGs_v81vkA89QDd-ZSMAsk536bfM-gPBhd2e-O4SisIEFJQQOSbkWmvb9Np-az-Zenmr6gdj7ItkiTsk4no6r5zz8XeBXeOPQj1LW7SXh4V6oxAeEHgnUsgXqKrC-RzBHbajjwCGtnD-Nxqcrw-_1Gh4ScyGCXtGK4TXO51VheB356SZxVAjTMs8EXpDpwRfZHtTdHXWubez_w0LHQ-TDCk4iVDCROrmTZOTeUkLE0lS0HIc1AmIl8zjj1ZPFX3jgiSU6RD4kussqX6f1PYhAle191UPbY4b-edJio8-gYUNHcR2MCiJDWFSaSQM_5s1Vm3QsaR0ndQhDm4CsGKkTWpvtQT8eH1wnTvO0mfiaEFyD3JRPFfUTiGRv86_ewJsAlITtSFdOVFuAAXF4Eg=w1920-h950"

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
