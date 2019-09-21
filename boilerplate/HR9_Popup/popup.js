
document.addEventListener('DOMContentLoaded', function() {

  var Comp140check = document.getElementById('Comp140');
  var Comp182check = document.getElementById('Comp182');
  var Comp215check = document.getElementById('Comp215');
  var Comp310check = document.getElementById('Comp310');
  var Comp321check = document.getElementById('Comp321');
  var Comp322check = document.getElementById('Comp322');
  var Comp382check = document.getElementById('Comp382');
  var Comp411check = document.getElementById('Comp411');
  var Comp412check = document.getElementById('Comp412');
  var Comp421check = document.getElementById('Comp421');
  var Donecheck = document.getElementById('Done');
  var classes = []

   
  Comp140check.addEventListener('click', function() {
     var curColour = Comp140check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp140check.style.backgroundColor = "darkblue";
        
     	//Comp140check.style.backgroundColor = lightColor
     	if(classes.length > 0)
     	{
     		classes.pop();
     	}
     	
     }
     else
     {
     	Comp140check.style.backgroundColor = "dodgerblue";
     	//Comp140check.style.backgroundColor = darkColor
     	// var curColour = rgb(64,123,233)
     	classes.push("Comp140");
     	
     } 

  }, false);

  Comp182check.addEventListener('click', function() {
     var curColour = Comp182check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp182check.style.backgroundColor = "darkblue";
        if(classes.length > 0)
     	{
     		classes.pop();
     	}
        
     	//Comp140check.style.backgroundColor = lightColor
     }
     else
     {
     	Comp182check.style.backgroundColor = "dodgerblue";
     	//Comp140check.style.backgroundColor = darkColor
     	// var curColour = rgb(64,123,233)
     	classes.push("Comp182");
     	
     } 

  }, false);

  Comp215check.addEventListener('click', function() {
     var curColour = Comp215check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp215check.style.backgroundColor = "darkblue";
        
     	//Comp140check.style.backgroundColor = lightColor
     	if(classes.length > 0)
     	{
     		classes.pop();
     	}
     	
     }
     else
     {
     	Comp215check.style.backgroundColor = "dodgerblue";
     	//Comp140check.style.backgroundColor = darkColor
     	// var curColour = rgb(64,123,233)
     	classes.push("Comp215");
     	
     } 

  }, false);

  Comp310check.addEventListener('click', function() {
     var curColour = Comp310check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp310check.style.backgroundColor = "darkblue";
        
        if(classes.length > 0)
     	{
     		classes.pop();
     	}
     	//Comp140check.style.backgroundColor = lightColor
     }
     else
     {
     	Comp310check.style.backgroundColor = "dodgerblue";
     	//Comp140check.style.backgroundColor = darkColor
     	// var curColour = rgb(64,123,233)
     	classes.push("Comp310");
     	
     } 

  }, false);

  Comp321check.addEventListener('click', function() {
     var curColour = Comp321check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp321check.style.backgroundColor = "darkblue";
        if(classes.length > 0)
     	{
     		classes.pop();
     	}
        
     	//Comp140check.style.backgroundColor = lightColor
     }
     else
     {
     	Comp321check.style.backgroundColor = "dodgerblue";
     	//Comp140check.style.backgroundColor = darkColor
     	// var curColour = rgb(64,123,233)
     	classes.push("Comp321");
     	
     } 

  }, false);

  Comp322check.addEventListener('click', function() {
     var curColour = Comp322check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp322check.style.backgroundColor = "darkblue";
        if(classes.length > 0)
     	{
     		classes.pop();
     	}
        
        
     	//Comp140check.style.backgroundColor = lightColor
     }
     else
     {
     	Comp322check.style.backgroundColor = "dodgerblue";
     	//Comp140check.style.backgroundColor = darkColor
     	// var curColour = rgb(64,123,233)
     	classes.push("Comp322");
     	
     } 

  }, false);

  Comp382check.addEventListener('click', function() {
     var curColour = Comp382check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp382check.style.backgroundColor = "darkblue";
        
        if(classes.length > 0)
     	{
     		classes.pop();
     	}
        
     	//Comp140check.style.backgroundColor = lightColor
     }
     else
     {
     	Comp382check.style.backgroundColor = "dodgerblue";
     	
     	//Comp140check.style.backgroundColor = darkColor
     	// var curColour = rgb(64,123,233)
     	classes.push("Comp382");
     	
     } 



  }, false);

  Comp411check.addEventListener('click', function() {
     var curColour = Comp411check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp411check.style.backgroundColor = "darkblue";
        if(classes.length > 0)
     	{
     		classes.pop();
     	}
        
        
     	//Comp140check.style.backgroundColor = lightColor
     }
     else
     {
     	Comp411check.style.backgroundColor = "dodgerblue";
     	//Comp140check.style.backgroundColor = darkColor
     	// var curColour = rgb(64,123,233)
     	classes.push("Comp411");
     	
     } 

  }, false);

  Comp412check.addEventListener('click', function() {
     var curColour = Comp412check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp412check.style.backgroundColor = "darkblue";
        if(classes.length > 0)
     	{
     		classes.pop();
     	}
        
        
     	//Comp140check.style.backgroundColor = lightColor
     }
     else
     {
     	Comp412check.style.backgroundColor = "dodgerblue";
     	//Comp140check.style.backgroundColor = darkColor
     	// var curColour = rgb(64,123,233)
     	classes.push("Comp412");
     	
     } 

  }, false);

  Comp421check.addEventListener('click', function() {
     var curColour = Comp421check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp421check.style.backgroundColor = "darkblue";
        
        if(classes.length > 0)
     	{
     		classes.pop();
     	}
        
     	//Comp140check.style.backgroundColor = lightColor
     }
     else
     {
     	Comp421check.style.backgroundColor = "dodgerblue";
     	//Comp140check.style.backgroundColor = darkColor
     	// var curColour = rgb(64,123,233)
     	classes.push("Comp421");
     	
     } 

  }, false);


  Donecheck.addEventListener('click', function() {
     
     window.open('https://calendar.google.com/calendar/r');

  }, false);

  
}, false);