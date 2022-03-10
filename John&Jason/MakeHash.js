// User System
// Make Hashes

class MakeHash
{
	#CheckUser
	#UsersData
	#Hash
	#crypto
	#fs
	constructor(UserInput, UsersData)
	{
		this.crypto = require("crypto")
		this.fs = require("fs")
		this.CheckUser = UserInput
		this.UsersData = UsersData
		this.Hash = this.crypto.createHash('sha256').update(this.CheckUser).digest('base64')
	}
	HashRequest()
	{
		return this.Hash
	}
	UserCheck()
	{
		return this.#CheckWork()
	}
	MakeNewUser(DateArray, UserInput, UserInput2)
	{
		return this.#MakeNew(DateArray, UserInput, UserInput2)
	}
	#CheckWork()
	{
		// Read Data
		let UsersData = JSON.parse(this.fs.readFileSync(this.UsersData, "utf-8", function(err, data){})).UserProfiles
		let answer = false
		for (let i = 0; i < UsersData.length; i++)
		{
			if (this.Hash == UsersData[i].UserHash)
			{
				answer = true
				break
			}
		}
		return answer
	}
	#MakeNew(DateArray, UserInput, UserInput2)
	{
		let UsersData = JSON.parse(this.fs.readFileSync(this.UsersData, "utf-8", function(err, data){})).UserProfiles
		let NewObject = {
			UserHash : this.Hash,
			Package : UserInput,
			Lot : UserInput2,
			LastActive : DateArray,
			Paid : 1
		}
		UsersData.push(NewObject)
		let DataToEscape = {"UserProfiles" : UsersData}
		let DataToJSON = JSON.stringify(DataToEscape)
		this.fs.writeFileSync("DB_Users.json", DataToJSON)

		return true
	}
}

module.exports = MakeHash