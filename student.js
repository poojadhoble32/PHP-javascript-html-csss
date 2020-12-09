function validation()
{
	if(document.Registration.firstname.value=="")
	{
		alert("please enter firstname");
		document.Registration.firstname.focus();
		return false;
    }

    if(document.Registration.middlename.value=="")
	{
		alert("please enter middlename");
		document.Registration.middlename.focus();
		return false;
    }

    if(document.Registration.lastname.value=="")
	{
		alert("please enter lastname");
		document.Registration.lastname.focus();
		return false;
    }

    if(document.Registration.Address.value=="")
	{
		alert("please enter Address");
		document.Registration.Address.focus();
		return false;
    }

}