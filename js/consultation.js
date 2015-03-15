function submit(){
	alert(
		"Hello "
		+document.getElementById('gender').value
		+" "
		+document.getElementById('firstName').value
		+" "
		+document.getElementById('lastName').value
		+"\n"
		+"Your phone number is "
		+document.getElementById('phone').value
		+"\n"
		+"Your email is "
		+document.getElementById('email').value
		+"\n"
		+"Your are a "
		+getRadio('occupationOption')
		+"\n"
		+"You want to learn "
		+GetCheckedValue()
		);
}

function getRadio(targetName){
	var value = $('input[name='+targetName+']:checked').val();
	if (value!='Other') {return(value)}
	else{
		var otherId=targetName+'_other';
		return(document.getElementById(otherId).value);
	}
	
}



$("#clickAll").click(function() {

	if($("#clickAll").prop("checked"))
	{
		$("input[name='languages[]']").each(function() {
			$(this).prop("checked", true);
		});
	}
	else
	{
		$("input[name='languages[]']").each(function() {
			$(this).prop("checked", false);
		});           
	}
});

function GetCheckedValue(){
	var cbxVehicle = new Array();
	$('input:checkbox:checked[name="languages[]"]').each(function(i) { cbxVehicle[i] = this.value; });
	return(cbxVehicle);
}

