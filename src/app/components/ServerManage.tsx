import {SettingOutlined} from "@ant-design/icons";
import ServerList from "./ServerList";
export default function ServerManage(){
    return (
        <div className="服务器列表 relative" style={{width: 408.39, height: 949.98,}}>

            <div className="mx-10">
                <p className="服务器管理 w-32 h-8 text-xl leading-normal text-white">
                    <SettingOutlined style={{color: "white"}}/>服务器管理</p>
            </div>

            <div className="矩形1 bg-gray-300 bg-opacity-5 shadow-xl border rounded-xl border-white border-opacity-20"
                 style={{width: 387, height: 862,}}>
                <ServerList/>
                <ServerList/>


            </div>

        </div>
    );
}