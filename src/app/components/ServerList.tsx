import '@/app/globals.css'
import React, {memo, useCallback, useContext, useEffect, useState} from "react";


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
            if(server.isFake){
                console.log('暂时不发请求以免发生错误')
            }else{
                // 每1秒调用一次 getServerInfo

                const intervalId = setInterval(getServerInfo, 5000);
                // 清理定时器，防止内存泄漏
                return () => clearInterval(intervalId);
            }

        }, [server]);


        return (
            <div className="mx-4 my-4">
                <div className="服务器在线Card02-改颜色 relative" style={{width: 318, height: 71,}}>

                    <button
                        onClick={handleClickServer}
                        className="图标在线 relative left-0 top-0 bg-gray-700 rounded-[13px] hover:shadow-[0_0_10px_0_rgba(255,255,255,0.8)] transition-all duration-300 focus:bg-[#42566C] focus:shadow-[inset_0px_0px_10px_0px_rgba(255,_255,_255,_0.3)]"
                        style={{width: 350, height: 71,}}>
                        <div className="px-2 py-3.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="42.498291015625"
                                 height="40" viewBox="0 0 42.498291015625 40" fill="none">
                                <path fillRule="evenodd" fill="#FFFFFF"
                                      d="M4.88898 3L35.1109 3C36.1543 3 36.9999 3.89532 36.9999 5.00016L36.9999 36.9998C36.9999 38.1047 36.1543 39 35.1109 39L4.88898 39C3.84552 39 2.99994 38.1047 2.99994 36.9998L2.99994 5.00016C2.99994 3.89532 3.84552 3 4.88898 3ZM33.2222 7L33.2222 19L6.77774 19L6.77774 7L33.2222 7ZM10.5555 11L16.2222 11L16.2222 15L10.5555 15L10.5555 11ZM6.77774 35L6.77774 23L33.2222 23L33.2222 35L6.77774 35ZM16.2222 31L10.5555 31L10.5555 27L16.2222 27L16.2222 31Z">
                                </path>
                                <circle cx="28.740966796875" cy="13" r="3" fill="#52C41A">
                                </circle>
                            </svg>
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