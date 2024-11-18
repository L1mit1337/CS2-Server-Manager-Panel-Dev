import ServerManage from "@/app/components/ServerManage";
import Console from "@/app/components/Console";
import ServerInfo from "@/app/components/ServerInfo";
import QuickFeature from "@/app/components/QuickFeature";

export default function Home(){
    return(

        <div style={{width:'1920',height:'930'}}>


            <div className="grid grid-cols-4 grid-rows-4 gap-1">
                <div className="row-span-4 mx-2.5">
                    <ServerManage/>
                </div>
                <div className="直线1 absolute left-[-65px] top-[450px] transform -rotate-90 border border-gray-600 border-opacity-40"
                     style={{width: 950, height: 1,}}/>
                <div className="col-span-2 row-span-2">2</div>
                <div className="col-span-2 row-span-2 col-start-2 row-start-3">3</div>
                <div className="row-span-4 col-start-4 row-start-1">4</div>
            </div>


        </div>

    );
}