import '@/app/globals.css'
import React, {memo, useCallback, useContext, useEffect, useRef, useState} from "react";
import Image from "next/image";


function  ServerList({ onValueChange}:any) {
    
    console.log("ServerList被渲染了")
    let [serverListData, setServerListData] = useState([{
        id:Number,
        gameId:Number,
        ip:'',
        isFake:true,
    }])

    async function getServerListData() {

        await fetch('http://localhost:3001/api/db/queryAllServerList', {
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            method: 'POST'
        }).then((res) => {
            return res.json()
        }).then((data) => {
            setServerListData(data)

        });

    }

    useEffect(() => {
        getServerListData();


    }, []);

    function ServerCard({server}:any) {

        const serverCard =useRef(null);
        const buttonRef = useRef(null); // 创建一个引用

        let [isServerOffline,setIsServerOffline]=useState(true);
        let queryServerInfoParameter = {
            ip: server.ip, port: server.port,
        }
        let [serverInfo, setServerInfo] = useState(
            {
                address:"",
                map:"",
                players: {
                    online: 0,
                    max: 9,
                    bots: 0
                },
                ping:0
            })

        let [serverInfoForPlayers,setServerInfoForPlayers] = useState({
            online:0,
            max:0,
            bots:0
        })


        const handleClickServer = () => {
            sessionStorage.setItem('currentServerId',server.id)
            console.log('从ServerList组件传值',serverInfo)
            onValueChange({isServerOffline:isServerOffline,...serverInfo});


        };

        async function getServerInfo() {
            let response = await fetch('http://localhost:3001/api/getInfo/', {
                    headers: new Headers({
                        'Content-Type': 'application/json',
                    }),
                    method: 'POST',
                    body: JSON.stringify(queryServerInfoParameter)
                }
            ).then((res) => {

                if(res.status ==500){
                    setIsServerOffline(true)
                }else{
                    setIsServerOffline(false)
                }

                return res.json()
            }).then(function (data) {
                setServerInfo(data);
            });

        }




        useEffect(() => {
            console.log("server发生变化")
            if(server.isFake){
                console.log('暂时不发请求以免发生错误')
            }else{
                // 每1秒调用一次 getServerInfo

                const intervalId = setInterval(getServerInfo, 5000);

                // 清理定时器，防止内存泄漏
                return () => clearInterval(intervalId);
            }

        }, [server]);

        useEffect(() => {

            if(sessionStorage.getItem('currentServerId')==server.id){

                console.log('从ServerList组件传值', serverInfo,sessionStorage.getItem('currentServerId'),server.id,);

                onValueChange({ isServerOffline: isServerOffline, ...serverInfo });
            }else{

            }

        }, [serverInfo]);

        let [isButtonFocus,setIsButtonFocus]=useState(false);

        return (
            <div ref={serverCard} className="mx-4 my-4">
                <div className="服务器在线Card02-改颜色 relative" style={{width: 318, height: 71,}}>

                    <button
                        ref={buttonRef}
                        onFocus={()=>{setIsButtonFocus(true)}}
                        onBlur={()=>{setIsButtonFocus(false)}}
                        onClick={handleClickServer}
                        className={`relative left-0 top-0 rounded-[13px] hover:shadow-[0_0_10px_0_rgba(255,255,255,0.8)] transition-all duration-300 ${isButtonFocus?'bg-[#42566C] shadow-[inset_0px_0px_10px_0px_rgba(255,_255,_255,_0.3)]':'bg-gray-700'}`}
                        style={{width: 350, height: 71}}>
                        <div className="px-2 py-3.5">

                            <Image
                                src={`/img/ico/${server.gameId}.ico`}
                                alt="Picture of the author"
                                width={42}
                                height={40}
                            />


                        </div>

                        <p className=" w-44 h-4 absolute text-left text-xl font-medium text-white"
                           style={{left: 60, top: 4,}}>{server.ip}:{server.port}</p>

                        {isServerOffline && (
                            <p className="28ms w-12 absolute text-base font-65medium text-red-400"
                               style={{left: 295, top: 23,}}>离线</p>
                        )}


                        {!isServerOffline && (
                            <>
                                <p className="de_mirage w-20 h-4 absolute  text-gray-400"
                                   style={{left: 63, top: 35,}}>{serverInfo.map}</p>
                                <p className="14/29 w-16 h-5 absolute  text-gray-400"
                                   style={{
                                       left: 170,
                                       top: 35,
                                   }}>{serverInfoForPlayers.online}/{serverInfoForPlayers.max}</p>

                                <p className="28ms w-12 absolute text-base font-65medium text-green-400"
                                   style={{left: 295, top: 23,}}>{serverInfo.ping}ms</p>
                            </>
                        )}


                    </button>

                </div>
            </div>
        );
    }

    return (
        /*
        打算这里做一个<ui><li><ServerListDetailed></li><ui/>
        传值然和遍历
        * */
        <>

            <div>
                {
                    serverListData.map(server => (

                        <ServerCard key={server.id} server={server}/>
                    ))
                }
            </div>

        </>

    );
}

export default React.memo(ServerList)