'use client'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {execRconCommand} from "@/app/(api)/API_SendCommand";

function alert_success(){
    toast.success('命令成功发送！');
}


export default function Home() {


    const [command_str,setCommandStr]=useState('');
    let [serverInfoState,setServerInfoState]=useState({game:'',map:'',ping:0,players:{online:0,max:0,bots:0}});
    let [visible,setVisible]=useState(false);


    // async function execRconCommand() {
    //     let response = await fetch('http://localhost:3001/api/execRconCommand/',{
    //
    //             headers:new Headers({
    //                 'Content-Type': 'application/json',
    //             }),
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 ip:"192.168.5.9",
    //                 port:27016,
    //                 password:"123",
    //                 command:command_str.valueOf()
    //             })
    //         }
    //
    //     )
    //     console.log(command_str);
    //     alert_success();
    // }

    // async function getServerInfo(){
    //
    //     let response = await fetch('http://localhost:3001/api/getInfo/',{
    //
    //             headers:new Headers({
    //                 'Content-Type': 'application/json',
    //             }),
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 ip:"192.168.5.9",
    //                 port:27016,
    //             })
    //         }
    //      ).then((res)=>{if(res.status==200) alert_success();return res.json()}).then(function (data){setServerInfoState(data);console.log(data);});
    //     setVisible(true);
    //
    //     console.log('serverInfoState:',serverInfoState);
    // }

return (
        <div>
            <Toaster/>
            <div className="absolute">

                <div className="fixed top-5 left-5 right-0">
                    <input
                        type="text"
                        placeholder="请输入需要执行的命令"
                        className="input input-bordered input-accent w-full max-w-xs text-white"
                        value={command_str}
                        onChange={(e) => setCommandStr(e.target.value)}/>

                    <button className="btn btn-primary text-white" onClick={execRconCommand}>执行命令</button>

                    <br/>
                    <div className="divider"></div>
                    <div>
                        <button className="btn btn-primary text-white">获取服务器信息</button>
                    </div>

                    <div className="divider"></div>
                    <span>服务器列表:</span>
                    <div style={{ display: visible ? 'block' : 'none' }} className="overflow-x-auto">
                        <table className="table table-zebra text-white">
                            {/* head */}
                            <thead>
                            <tr>
                                <th></th>
                                <th>服务器</th>
                                <th>地图</th>
                                <th>人数</th>
                                <th>延迟</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>{serverInfoState.game}</td>
                                <td>{serverInfoState.map}</td>
                                <td>{serverInfoState.players.online} / {serverInfoState.players.max} ({serverInfoState.players.bots} bots)</td>
                                <td>{serverInfoState.ping}</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>

                </div>


            </div>
        </div>


);
}
