function detail()
		{
			window.alert(document.getElementById("firstname").value);
			window.alert(document.getElementById("lastname").value);
			window.alert(document.getElementById("mobnumber").value);
			window.alert(document.getElementById("email").value);
			window.alert(document.getElementById("city").value);
			window.alert(document.getElementById("dat").value);
			var ele = document.getElementsByName("gender");
			for(var i=0;i<ele.length;i++)
			{
				if(ele[i].checked)
				{
					window.alert(ele[i].value);
				}
			}
			var cb = document.getElementsByName("hobby");
			for(var i of cb)
			{
				if(i.checked)
					window.alert(i.value);
			}		
		}