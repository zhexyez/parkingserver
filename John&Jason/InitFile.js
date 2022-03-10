// User System
// Init File

class Init
{
	// Run main process
	runProgram(OldOrNew, UserInput)
	{
		this.#run_processinguserinput(OldOrNew, UserInput)
	}
	// Run user input processing
	#run_processinguserinput (OldOrNew, UserInput)
	{
		// 0 - user already in system, 1 - new user
		const ReadWrite = require("./DB_ReadWrite.js")
		let readwrite = new ReadWrite()
		if (OldOrNew == 0)
		{
			let UserLine = UserInput[0] + UserInput[1] + UserInput[2] + UserInput[3]
			return readwrite.Read(UserLine)
		}
		else if (OldOrNew == 1)
		{
			const date = new Date()

			let DateArray = [
				date.getFullYear(), 
				date.getMonth(), 
				date.getDay(), 
				date.getTimezoneOffset(), 
				date.getHours(),
				date.getMinutes(),
				date.getSeconds(),
				date.getMilliseconds()]
			
			return readwrite.Write(UserInput, DateArray)
		}
	}
}

let init = new Init

//TODO: place input in JSON file and invoke InitFile.js with C
//TODO: make microservice to remove unactive or unpaid users
// old - 0, new - 1, update - 2
let OldOrNew = 1
//let UserInput = ["Vitaliy","Borisov","753864","AI5678HE", [1, null], 45]
//let UserInput = ["Boris","Johnson","728675","AK2345IE", [3, "09:00-20:00"], 74]
let UserInput = ["Egor","Valetov","354657","CA0810EA", [4, "10:00-17:00"], null]

init.runProgram(OldOrNew, UserInput)