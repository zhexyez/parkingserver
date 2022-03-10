// User System
// Read/Write DB of Users

class ReadWrite
{
	Read (UserInput)
	{
		const MakeHash = require("./MakeHash.js")
		let HashCheck = new MakeHash(UserInput, "DB_Users.json")
		let Hash = HashCheck.HashRequest()
		let Answer = HashCheck.UserCheck()
		if (Answer == false)
		{
			console.log("Profile does not exist!")
			HashCheck = null

			return false
		} else if (Answer == true) {
			console.log("Profile does exist!")
			HashCheck = null

			return true
		}
	}
	Write (UserInput, DateArray)
	{
		// Add New User Profile to DB
		const MakeHash = require("./MakeHash.js")
		let UserLine = UserInput[0] + UserInput[1] + UserInput[2] + UserInput[3]
		let HashCheck = new MakeHash(UserLine, "DB_Users.json")
		let Hash = HashCheck.HashRequest()
		let Answer = HashCheck.UserCheck()
		if (Answer == false)
		{
			HashCheck.MakeNewUser(DateArray, UserInput[4], UserInput[5])
			console.log("Profile is created!")
			HashCheck = null

			return true
		} else if (Answer == true) {
			console.log("Profile is already exist!")
			HashCheck = null

			return false
		}
	}
}

module.exports = ReadWrite