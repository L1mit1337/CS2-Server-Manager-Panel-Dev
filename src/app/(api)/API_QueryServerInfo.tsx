async function getServerInfo(ServerIP_Port:Object){

    let response = await fetch('http://localhost:3001/api/getInfo/',{

            headers:new Headers({
                'Content-Type': 'application/json',
            }),
            method: 'POST',
            body: JSON.stringify(ServerIP_Port)
        }
    )

}

export {getServerInfo}

/*ServerIP_Port的格式

  {
    ip:"192.168.5.9",
    port:27016,
  }

**/


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