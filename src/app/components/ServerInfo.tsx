export default function ServerInfo() {
    return (
        <div className="inline-flex flex-col space-y-96 items-center justify-center" style={{width: 875, height: 380,}}>
            <div className="transform -rotate-90 w-72 h-0.5 border border-gray-600 border-opacity-40"/>
            <div className="relative bg-gray-300 bg-opacity-5 shadow border rounded-xl border-white border-opacity-20"
                 style={{width: 875, height: 380,}}>
                <p className="absolute text-xl font-medium leading-normal text-white"
                   style={{width: 403, height: 31, left: 21, top: 15,}}>服务器名:L1mit的高质量死斗服务器</p>
                <p className="w-60 h-8 absolute text-xl font-medium leading-normal text-white"
                   style={{left: 21, top: 70,}}>当前地图:de_mirage</p>
                <p className="w-60 h-8 absolute text-xl font-medium leading-normal text-white"
                   style={{left: 21, top: 43,}}>标签:DM,CN,L1mit</p>
                <p className="w-60 h-8 absolute text-xl font-medium leading-normal text-white"
                   style={{left: 21, top: 96,}}>当前人数: 14 / 29 (0bots)</p>
                <p className="w-60 h-24 absolute text-5xl font-medium leading-normal text-center text-white"
                   style={{left: 523, top: 123,}}>玩家列表区</p>
                <img className="w-48 h-36 absolute" style={{left: 21, top: 128,}}
                     src="https://via.placeholder.com/199.99996948242188x140.3141326904297"/>
            </div>
        </div>
    );
}