'use client';
import {useContext, useEffect, useRef, useState} from "react";
import Image from "next/image";
import Console from "@/app/components/Console";
import QuickFeature from "@/app/components/QuickFeature";
export default function ServerInfo({ sharedValue }:any) {

    let [serverInfo,setServerInfo]= useState(
        {
            isServerOffline: true,
            name:"",
            map:"",
            players: {
                online: 0,
                max: 9,
                bots: 0
            },
            ping:0
        });



    useEffect(() => {

        setServerInfo(sharedValue)


    }, [sharedValue]);


    return (
        <>
            {serverInfo.isServerOffline &&(
                <p>请点击左侧在线服务器来查看详细信息</p>
            )}

            {!serverInfo.isServerOffline && (
                <>
                    <div className="relative left-[-45px] top-[30px]" style={{width: 875, height: 380,}}>
                        <div
                            className="transform relative left-[250px] top-[191px] -rotate-90 w-[380px] h-0.5 border border-gray-600 border-opacity-40"/>
                        <div
                            className="relative bg-[#C4C4C4] bg-opacity-5 shadow border rounded-xl border-white border-opacity-20"
                            style={{width: 875, height: 380,}}>
                            <p className="absolute text-xl font-medium leading-normal text-white"
                               style={{width: 403, height: 31, left: 21, top: 15,}}>服务器名:{serverInfo.name}</p>
                            <p className="w-60 h-8 absolute text-xl font-medium leading-normal text-white"
                               style={{left: 21, top: 70,}}>当前地图:{serverInfo.map}</p>
                            <p className="w-60 h-8 absolute text-xl font-medium leading-normal text-white"
                               style={{left: 21, top: 43,}}>标签:DM,CN,L1mit</p>
                            <p className="w-60 h-8 absolute text-xl font-medium leading-normal text-white"
                               style={{
                                   left: 21,
                                   top: 96,
                               }}>当前人数:{serverInfo.players.online} / {serverInfo.players.max} ({serverInfo.players.bots}bots)</p>
                            <p className="w-60 h-24 absolute text-5xl font-medium leading-normal text-center text-white"
                               style={{left: 523, top: 123,}}>玩家列表区</p>
                            <div className="absolute" style={{left: 21, top: 128,}}>
                                <Image
                                    src={`/img/${serverInfo.map}.png`}
                                    alt="Picture of the author"
                                    width={192}
                                    height={144}
                                />
                            </div>

                        </div>
                    </div>

                    <QuickFeature/>
                </>
            )}
        </>


    );
}