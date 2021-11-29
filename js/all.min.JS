window.onscroll = function(oEvent) {scrollFunction()};

				function scrollFunction() {
				if (document.documentElement.scrollTop > 80  ) {
					document.getElementById("h1").style.display = "none";
                    document.getElementById("navbar").style.height = "150px";
					document.getElementById("invisibal").style.height = "150px";
					document.getElementById("topo").style.display = "inline-block";
					
				}
		

				else {
				document.getElementById("h1").style.display = "block";
                document.getElementById("navbar").style.height = "220px";
				document.getElementById("topo").style.display = "none";
				document.getElementById("invisibal").style.height = "220px"
				
			}
			
			}




