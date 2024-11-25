import {DoubleRightOutlined} from "@ant-design/icons";
import {Card, CardHeader, CardBody, CardFooter, Divider, Select, SelectItem,Button} from "@nextui-org/react";
import {useEffect, useState} from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function QuickFeature(){
    let [gameModeCommand,setGameModeCommand]=useState("game_type 0;game_mode 0;");
    let [gameMapCommand,setGameMapCommand]=useState("map de_mirage");
    let [gameCommand,setGameCommand]=useState(gameModeCommand+gameMapCommand);
    const selectGameMode=[
        {key:"game_type 0;game_mode 0;",label:"休闲模式"},
        {key:"game_type 0;game_mode 1;",label:"竞技模式(长时赛)"},
        {key:"game_type 0;game_mode 1;sv_game_mode_flags 32;sv_skirmish_id 0;",label:"竞技模式(短时赛)"},
        {key:"game_type 0;game_mode 2;",label: "搭档模式"},
        {key:"game_type 1;game_mode 0;",label: "军备竞赛"},
        {key:"game_type 1;game_mode 1;",label: "爆破模式"},
        {key:"game_type 1;game_mode 2;",label: "死亡竞赛(团队)"},
        {key:"game_type 1;game_mode 2;sv_game_mode_flags 32;",label: "死亡竞赛(个人)"},
        {key:"game_type 3;",label: "自定义"},
    ]

    const selectGameMap=[
        {key:"map de_mirage;",label:"荒漠迷城"},
        {key:"map de_dust2;",label:"炙热沙城"},
        {key:"map de_inferno;",label:"炼狱小镇"},
        {key:"map de_anubis;",label:"阿努比斯"},
        {key:"map de_nuke;",label:"核子危机"},
        {key:"map de_vertigo;",label:"殒命大厦"},
        {key:"map de_overpass;",label:"死亡游乐园"},
        {key:"map de_train;",label:"列车停放站"},
        {key:"map de_office;",label:"办公室"},
        {key:"map de_italy;",label:"意大利小镇"},
        {key:"map de_thera;",label:"thera"},
        {key:"map de_,mills;",label:"mills"},
    ]

    useEffect(()=>{
        console.log("游戏模式 游戏地图选择发送变化");
        setGameCommand(gameModeCommand+gameMapCommand);
    },[gameModeCommand,gameMapCommand])

   async function sendGameCommand(command:any){
        let serverData:any=sessionStorage.getItem("currentServer");
        serverData=JSON.parse(serverData)
        command={command:command,ip:serverData.ip,port:serverData.port,password:serverData.password};

        let response = await fetch('http://localhost:3001/api/execRconCommand/', {
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
                method: 'POST',
                body:JSON.stringify(command),
            }
        ).then((res)=>{
            if(res.status ==200){
                toast.success('更改成功',{duration:3000});
            }else{
                toast.success('更改失败',{duration:3000});
            }
        })
    }

    return (

        <div className="relative top-5">
            <Toaster/>
            <div className="relative left-[-65px] top-[40px]">
                <div
                    className="transform relative -rotate-180 w-[915px] h-0.5 border border-gray-600 border-opacity-40"/>

                <div className="mx-2">
                    <p className="服务器管理 w-32 h-8 text-xl leading-normal text-white">
                        <DoubleRightOutlined style={{color: "#2EA13E"}}/>快捷功能区</p>
                </div>

                <div
                    className="relative mx-5 my-2 "
                    style={{width: 875, height: 380,}}
                >

                    <Card className="max-w-[500px] max-h-[400px] bg-[#C4C4C4] bg-opacity-5">
                        <CardHeader className="flex gap-3">
                            <div className="flex flex-col">
                                <p className="text-xl">游戏相关设定</p>
                            </div>
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <Select
                                isRequired
                                variant="bordered"
                                label="地图"
                                placeholder="请选择游戏地图"
                                className="max-w-[170px] my-2"
                                defaultSelectedKeys={["map de_mirage;"]}
                                onChange={(e:any)=>{setGameMapCommand(e.target.value);}}
                            >
                                {selectGameMap.map((gameMap) => (
                                    <SelectItem key={gameMap.key}>
                                        {gameMap.label}
                                    </SelectItem>
                                ))}
                            </Select>

                            <Select
                                isRequired
                                variant="bordered"
                                label="游戏模式"
                                placeholder="请选择游戏模式"
                                className="max-w-[170px]"
                                defaultSelectedKeys={["game_type 0;game_mode 0;"]}
                                onChange={(e:any)=>{setGameModeCommand(e.target.value);}}
                            >
                                {selectGameMode.map((gameMode) => (
                                    <SelectItem key={gameMode.key}>
                                        {gameMode.label}
                                    </SelectItem>
                                ))}
                            </Select>

                            <Button className="w-[15px] text-[15px] absolute left-[200px] top-[10px]"
                                    variant='ghost'
                                    color="primary"
                                    onClick={()=>{
                                        sendGameCommand("mp_warmup_end 1;")
                                    }}
                            >结束热身</Button>

                            <Button className=" text-[15px] absolute left-[200px] top-[60px]"
                                    variant='ghost'
                                    color="primary"
                                    onClick={()=>{
                                        sendGameCommand("mp_restartgame 1;")
                                    }}
                            >重新开始游戏</Button>

                            <Button className="w-[15px] text-[15px] absolute left-[200px] top-[110px]"
                                    size="sm"
                                    color="success"
                                    onClick={()=>{
                                        sendGameCommand(gameCommand);
                                    }}>更改设定</Button>


                        </CardBody>
                        <Divider/>
                        <CardBody>
                            <p>{gameCommand}</p>

                        </CardBody>
                        <CardFooter>

                        </CardFooter>

                    </Card>


                </div>

            </div>

        </div>
    );
}