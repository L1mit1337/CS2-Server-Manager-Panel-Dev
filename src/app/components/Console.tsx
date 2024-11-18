export default function Console(){
    return (
        <div className="relative" style={{width: "573px",height: "949.98px"}}>
            <div className="relative bg-gray-300 bg-opacity-5 shadow border rounded-xl border-white border-opacity-20"
                 style={{width: "554px",height: "862px",left: "19px",top:"51px"}}>
                <div className="absolute bg-black bg-opacity-30 shadow"
                     style={{width: "532px",height: "817px", left: "11px", top: "15px"}}></div>
                <input
                    className="flex-1 h-full text-xl font-65medium leading-snug text-white pl-2 py-0.5 absolute bg-gray-700 border border-black border-opacity-10"
                    style={{width: "387px", height: "40px", left: "20px", top: "776px"}} placeholder="请输入"></input>
                <div
                    className="inline-flex items-center justify-center w-12 h-8 px-2 py-0.5 absolute bg-[#2F6043] rounded"
                    style={{left: "416px", top: "780px",}}>
                    <p className="text-center text-white">发送</p>
                </div>
                <div
                    className="inline-flex items-center justify-center w-12 h-8 px-2 py-0.5 absolute bg-red-900 rounded"
                    style={{left: "485px", top: "780px"}}>
                    <p className="text-center text-white">清除</p>
                </div>
            </div>
            <div className="transform -rotate-180 absolute border border-gray-600 border-opacity-40"
                 style={{width: "532px", height: "1px", left: "-908px", top: "274px"}}></div>
            <p className="w-24 h-8 absolute text-2xl font-65medium leading-normal text-white"
               style={{left: "58px", top: "10px"}}>控制台</p>
            <div className="transform -rotate-90 absolute left-0 top-0 border border-gray-600 border-opacity-40"
                 style={{width: "950px", height: "1px"}}></div>
            <div className="relative w-8 h-8" style={{left: "23px", top: "10px",}}></div>
        </div>
    );
}