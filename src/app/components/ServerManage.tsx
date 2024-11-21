'use client'
import {SettingOutlined} from "@ant-design/icons";
import ServerList from "./ServerList";
import toast, { Toaster } from 'react-hot-toast';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Select, SelectItem
} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {useState} from "react";

export default function ServerManage(){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const ipRegex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const portRegex = /^(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{0,3}|0)$/;
    const [addServerConst,setAddServerConst]=useState({
        gameId:730,
        ip:"",
        port:27015,
        password:""
    });
    const addServerConstStatic={
        gameId:730,
        ip:"",
        port:27015,
        password:""
    }

    let portAsString=String(addServerConst.port)
    let [isLoadingButton,setIsLoadingButton]=useState(false);
    const selectGame=[{key:730,label:"CSGO"},{key:740,label:"CS2"}]

    function alert_success(isSuccess:boolean){
        if(isSuccess){
            toast.success('添加成功',{duration:3000});
        }else{
            toast.error('添加失败',{duration:3000});
        }

    }

    function initAddServerFormData(){
        setAddServerConst(addServerConstStatic)
        setIsLoadingButton(false);
    }

    async function handleSubmit(){
        console.log(JSON.stringify(addServerConst))
        let success= false;
        let response = await fetch('http://localhost:3001/api/db/insertNewServer',{
            headers:new Headers({
                'Content-Type': 'application/json',
            }),
            method: 'POST',
            body: JSON.stringify(addServerConst)
        }).then((response) => {return response.json()}).then((res) => {success=res.success});
        return success

    }

    return (
        <>
        <Toaster/>
        <div className="服务器列表 relative" style={{width: 408.39, height: 949.98,}}>

            <div className="mx-10">
                <p className="服务器管理 w-32 h-8 text-xl leading-normal text-white">
                    <SettingOutlined style={{color: "white"}}/>服务器管理</p>
            </div>

            <div className="矩形1 bg-gray-300 bg-opacity-5 shadow-xl border rounded-xl border-white border-opacity-20"
                 style={{width: 387, height: 862,}}>

                <div className="relative left-4 top-1.5">
                    <Button
                        size="sm"
                        onClick={onOpen}
                        className="w-14 h-8 px-2 py-0.5 bg-[#305B96] rounded-[7px] ">
                        <p className="text-xl leading-snug text-center text-white">添加</p>
                    </Button>

                    <Button
                        size="sm"
                        className="left-4 w-14 h-8 px-2 py-0.5 bg-[#842D2E] rounded-[7px]">
                        <p className="text-xl font-medium leading-snug text-center text-white">删除</p>
                    </Button>
                </div>

                <ServerList/>



            </div>



        </div>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => <>
                        <ModalHeader className="flex flex-col gap-1">添加服务器</ModalHeader>
                        <ModalBody>
                            <div className="w-full flex flex-col gap-2 max-w-[240px]">
                                <Select
                                    isRequired
                                    variant="bordered"
                                    isInvalid={!addServerConst.gameId}
                                    errorMessage={"必须选择一个"}
                                    label="游戏"
                                    placeholder="服务器是哪个游戏的?"
                                    className="max-w-xs"
                                    defaultSelectedKeys={["730"]}
                                    onChange={(e: any) => {
                                        setAddServerConst({...addServerConst, gameId: e.target.value});
                                    }}
                                >
                                    {selectGame.map((game) => (
                                        <SelectItem key={game.key}>
                                            {game.label}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <p className="text-small text-default-500">Selected: {addServerConst.gameId}</p>

                            </div>

                            <div className="w-full flex flex-col gap-2 max-w-[240px]">
                                <Input
                                    defaultValue={addServerConst.ip}
                                    variant="bordered"
                                    isRequired
                                    isInvalid={!ipRegex.test(addServerConst.ip) || addServerConst.ip == ""}
                                    errorMessage={addServerConst.ip == "" ? "IP地址不能为空" : "请输入正确格式的IP地址"}
                                    label="服务器IP地址"
                                    placeholder="请输入IP地址"
                                    onChange={(e) => {
                                        setAddServerConst({...addServerConst, ip: e.target.value});
                                        console.log(ipRegex.test(addServerConst.ip))
                                    }}
                                />
                                <p className="text-default-500 text-small">Input value: {addServerConst.ip}</p>
                            </div>

                            <div className="w-full flex flex-col gap-2 max-w-[240px]">
                                <Input
                                    type="number"
                                    defaultValue={String(addServerConst.port)}
                                    variant="bordered"
                                    isRequired
                                    isInvalid={!portRegex.test(portAsString) || isNaN(addServerConst.port)}
                                    errorMessage={isNaN(addServerConst.port) ? "端口号不能为空" : "请输入正确的端口号"}
                                    label="端口号"
                                    placeholder="请输入服务器的端口号"
                                    onChange={(e) => {
                                        setAddServerConst({...addServerConst, port: parseInt(e.target.value)});
                                    }}
                                />
                                <p className="text-default-500 text-small">Input value: {addServerConst.port}</p>
                            </div>

                            <div className="w-full flex flex-col gap-2 max-w-[240px]">
                                <Input
                                    type="password"
                                    variant="bordered"
                                    label="Rcon密码"
                                    placeholder="请输入Rcon密码(如果有)"
                                    onChange={(e) => {
                                        setAddServerConst({...addServerConst, password: e.target.value})
                                    }}
                                />

                                <p className="text-default-500 text-small">Input value: {addServerConst.password}</p>

                            </div>

                        </ModalBody>
                        <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                                关闭
                            </Button>
                            <Button  color="success" isLoading={isLoadingButton} onPress={async () => {
                                setIsLoadingButton(true);
                                if (await handleSubmit()){
                                    onClose();
                                    initAddServerFormData()
                                    alert_success(true)
                                }else{
                                    onClose();
                                    initAddServerFormData()
                                    alert_success(false)
                                }
                            }}>
                                添加
                            </Button>
                        </ModalFooter>
                    </>}
                </ModalContent>
            </Modal>

        </>
    );
}