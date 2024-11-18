
    async function execRconCommand(RconCommand:any) {
        let response = await fetch('http://localhost:3001/api/execRconCommand/',{

                headers:new Headers({
                    'Content-Type': 'application/json',
                }),
                method: 'POST',
                body: JSON.stringify(RconCommand)
            }

        )
    }

export {execRconCommand}

/*
RconCommand的数据格式
 {
   ip:"192.168.5.9",
   port:27016,
   password:"123",
   command:"sv_cheats 1"
 }

 * */


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