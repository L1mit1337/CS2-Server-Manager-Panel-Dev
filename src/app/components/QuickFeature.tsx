export default function QuickFeature(){
    return (
        <div className="快捷功能区 inline-flex flex-col space-y-36 items-start justify-start pr-96"
             style={{width: 915, height: 470.50,}}>
            <div className="直线1 transform -rotate-180 border border-gray-600 border-opacity-40"
                 style={{width: 915, height: 1,}}/>
            <p className="快捷功能区 w-32 h-10 text-2xl font-medium leading-normal text-white">快捷功能区</p>
            <div className="Icon图标/Line/doubleright relative w-6 h-6"/>
            <div className="游戏相关设定 flex flex-col space-y-64 items-start justify-start w-full">
                <div className="直线1 transform -rotate-180 w-64 h-0.5 border border-gray-600 border-opacity-40"/>
                <div className="直线1 transform -rotate-180 w-64 h-0.5 border border-gray-600 border-opacity-40"/>
                <div
                    className="矩形1 flex flex-col items-end justify-start w-full flex-1 pl-5 pr-10 pt-2.5 pb-9 bg-gray-300 bg-opacity-5 shadow border rounded-xl border-white border-opacity-20">
                    <p className="游戏相关设定 w-1/2 h-8 text-xl font-65medium leading-normal text-white">游戏相关设定</p>
                    <div
                        className="数据录入/Select选择器/亮色/大-未选择 inline-flex space-x-2 items-center justify-start w-2/3 px-3 py-2 bg-gray-700 border rounded-lg border-black border-opacity-10">
                        <p className="Text flex-1 text-base font-medium leading-normal text-white">请选择</p>
                        <img className="Icon图标/Line/Down transform -rotate-180 w-3.5 h-3.5 rounded-full"
                             src="https://via.placeholder.com/14x14"/>
                    </div>
                    <p className="游戏模式 w-24 h-7 text-lg font-65medium leading-normal text-white">游戏模式</p>
                    <div
                        className="数据录入/Select选择器/亮色/大-未选择 inline-flex space-x-2 items-center justify-start w-2/3 px-3 py-2 bg-gray-700 border rounded-lg border-black border-opacity-10">
                        <p className="Text flex-1 text-base font-medium leading-normal text-white">请选择</p>
                        <img className="Icon图标/Line/Down transform -rotate-180 w-3.5 h-3.5 rounded-full"
                             src="https://via.placeholder.com/14x14"/>
                    </div>
                    <p className="游戏地图 w-24 h-7 text-lg font-65medium leading-normal text-white">游戏地图</p>
                    <div
                        className="Buttons按钮/主按钮/亮色/小 inline-flex items-center justify-center w-12 h-8 px-2 py-0.5 bg-gray-700 rounded">
                        <p className="主按钮 text-xl font-medium leading-snug text-center text-white">更改</p>
                    </div>
                    <div
                        className="Buttons按钮/主按钮/亮色/小 inline-flex items-center justify-center w-24 h-8 px-2 py-0.5 bg-gray-600 rounded">
                        <p className="主按钮 text-xl font-medium leading-snug text-center text-white">结束热身</p>
                    </div>
                    <div
                        className="Buttons按钮/主按钮/亮色/小 inline-flex items-center justify-center w-24 h-8 px-2 py-0.5 bg-gray-600 rounded">
                        <p className="主按钮 text-xl font-medium leading-snug text-center text-white">重启回合</p>
                    </div>
                </div>
            </div>
            <div className="矩形2 w-52 h-16 bg-gray-300"/>
        </div>
    );
}