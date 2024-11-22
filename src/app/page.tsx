'use client'
import ServerManage from "@/app/components/ServerManage";
import Console from "@/app/components/Console";
import ServerInfo from "@/app/components/ServerInfo";
import QuickFeature from "@/app/components/QuickFeature";
import {createContext, useCallback, useRef, useState} from "react";



export default function Home(){
    console.log("page组件被渲染了")

    let [sharedValue,setSharedValue]=useState({
        isServerOffline: true,
        name:"",
        map:"",
        players: {
            online: 0,
            max: 9,
            bots: 0
        },
        ping:0
    })

    const handleValueChange = useCallback((serverInfo:any) => {
        setSharedValue(serverInfo)
        console.log('来自page组件用于检查serverInfo是否变化',serverInfo)
    },[])

    return(

        <div style={{width:'1920',height:'930'}}>

                <div className="grid grid-cols-4 grid-rows-4 gap-1">
                    <div className="row-span-4 mx-2.5">
                        <ServerManage onValueChange={handleValueChange}/>
                    </div>
                    <div
                        className="直线1 absolute left-[-65px] top-[450px] transform -rotate-90 border border-gray-600 border-opacity-40"
                        style={{width: 950, height: 1,}}/>

                    <div className="col-span-2 row-span-2"><ServerInfo sharedValue={sharedValue}/></div>
                    <div className="col-span-2 row-span-2 col-start-2 row-start-3">3</div>
                    <div className="row-span-4 col-start-4 row-start-1">4</div>
                </div>

            );


        </div>

    );
}