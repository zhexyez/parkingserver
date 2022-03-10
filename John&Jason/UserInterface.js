// User System
// User Interface
class UserProfile
{
	#Name
	#Surname
	#DriverLicense
	#Carplate
	#Package
	constructor (Name, Surname, DriverLicense, Carplate, Package)
	{
		this.Name = Name
		this.Surname = Surname
		this.DriverLicense = DriverLicense
		this.Carplate = Carplate
		this.Package = Package
	}
	RequestData()
	{
		return this.Name
	}
}

module.exports = UserProfile