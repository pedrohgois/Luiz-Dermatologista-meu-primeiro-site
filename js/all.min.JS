window.onscroll = function(oEvent) {scrollFunction()};

				function scrollFunction() {

				if (document.documentElement.scrollTop > 80  ) {
					document.getElementById("cabecalholz").style.display = "none";
          document.getElementById("navbar").style.height = "150px";
					document.getElementById("home").style.height = "220px";
					document.getElementById("topo").style.display = "inline-block";
          
					
				}
		

				else {
				document.getElementById("cabecalholz").style.display = "block";
        document.getElementById("navbar").style.height = "190px";
        document.getElementById("home").style.height = "220px";
				document.getElementById("topo").style.display = "none";
				
				
			}
			
			}
      scrollFunction()


