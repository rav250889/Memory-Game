let elem = document.documentElement;

function fullscreen()
{
if(elem.requestFullscreen)
{
elem.requestFullscreen();
}

else if(elem.webkitRequestFullscreen)
{ //Safari
elem.webkitRequestFullscreen();
}

else if(elem.msRequestFullscreen)
{ // IE11
elem.msRequestFullscreen();
}
}

function normalscreen()
{
if(document.exitFullscreen)
{
document.exitFullscreen();
}

else if(document.webkitExitFullscreen)
{ /* Safari */
document.webkitExitFullscreen();
}

else if(document.msExitFullscreen)
{ /* IE11 */
document.msExitFullscreen();
}
}

$("document").ready(function(){
		
	//FULLSCREEN MODE
	
	
	$("#fullscreen").click(function(){

		if($(this).attr("src") == "img/fullscreen.png")
		{
			$("#fullscreen").attr("src", "img/notfullscreen.png");
			
			fullscreen();
		}
		
		else
		{
			$(this).attr("src", "img/fullscreen.png");
			
			normalscreen();
		}
		
	});
	//KONIEC FULLSCREEN MODE
	//-----------------------------------------------------------------------------
	    
    const easyDinosaurs = ["brahiosaurus", "brahiosaurus", "dimetro", "dimetro", "gorgosaurus", "gorgosaurus", "karnotaur", "karnotaur", "kecalkoatl", "kecalkoatl", "mozazaur", "mozazaur", "stegozaur", "stegozaur", "tyranozaur", "tyranozaur", "velociraptor", "velociraptor"]; //tablica przechowująca dinozaury dla poziomu easy
	
    const mediumDinosaurs = ["brahiosaurus", "brahiosaurus", "dimetro", "dimetro", "gorgosaurus", "gorgosaurus", "karnotaur", "karnotaur", "kecalkoatl", "kecalkoatl", "mozazaur", "mozazaur", "stegozaur", "stegozaur", "tyranozaur", "tyranozaur", "velociraptor", "velociraptor", "ankylozaur", "ankylozaur", "parazaurolof", "parazaurolof", "spinozaur", "spinozaur", "triceratops", "triceratops", "tsintozaur", "tsintozaur", "velociraptorblue", "velociraptorblue"]; //tablica przechowująca dinozaury dla poziomu medium

    const hardDinosaurs = ["brahiosaurus", "brahiosaurus", "dimetro", "dimetro", "gorgosaurus", "gorgosaurus", "karnotaur", "karnotaur", "kecalkoatl", "kecalkoatl", "mozazaur", "mozazaur", "stegozaur", "stegozaur", "tyranozaur", "tyranozaur", "velociraptor", "velociraptor", "ankylozaur", "ankylozaur", "parazaurolof", "parazaurolof", "spinozaur", "spinozaur", "triceratops", "triceratops", "tsintozaur", "tsintozaur", "velociraptorblue", "velociraptorblue", "alamozaur", "alamozaur", "allozaur", "allozaur", "diplodok", "diplodok", "iguanodon", "iguanodon", "plejozaur", "plejozaur", "pteronodon", "pteronodon", "spinozaur2", "spinozaur2", "tarbozaur", "tarbozaur", "yiqi", "yiqi"]; //tablica przechowująca dinozaury dla poziomu hard
    
    //TABLICA Z CIEKAWOSTKAMI, LOSOWANIE, DODANIE OPISU
    const curiosites = [];
    
    curiosites[0] = new Image();
        
    curiosites[0].src = "../img/curiosites/Allosaurus.png";
    
    curiosites[0].setAttribute("class", "allosaurus");

    curiosites[1] = new Image();

    curiosites[1].src = "../img/curiosites/Triceratops.png";
    
    curiosites[1].setAttribute("class", "triceratops");

    curiosites[2] = new Image();

    curiosites[2].src = "../img/curiosites/Stegosaurus.png";
    
    curiosites[2].setAttribute("class", "stegosaurus");
	
	curiosites[3] = new Image();
        
    curiosites[3].src = "../img/curiosites/Pteranodon.png";
	
	curiosites[3].setAttribute("class", "pteranodon");
    
    curiosites[4] = new Image();
        
    curiosites[4].src = "../img/curiosites/T-Rex.png";
	
	curiosites[4].setAttribute("class", "trex");
    
    let position = Math.floor(Math.random() * curiosites.length);
                
    $("#curiosites-img").attr("class", curiosites[position].getAttribute("class")).css({

        "background": "url("+curiosites[position].src+")",
        "background-size": "100% 100%",
        "display": "block"
    });
    
    if($("#curiosites-img").attr("class") == "allosaurus")
    {
        $("#curiosites .opis").text("Allosaurus was a large predator with a huge skull equipped with sharp teeth. It was about 8.5 meters long");
    }

    if($("#curiosites-img").attr("class") == "stegosaurus")
    {
        $("#curiosites .opis").text("A puzzle still unexplained in stegosaurus is a large chamber in the hip area. Probably there was a second (auxiliary) brain");
    }

    if($("#curiosites-img").attr("class") == "triceratops")
    {
        $("#curiosites .opis").text("Triceratops was a large horned dinosaur reaching 9 meters long and weighing about 10 ton");
    }

    if($("#curiosites-img").attr("class") == "pteranodon")
    {
        $("#curiosites .opis").text("Pteranodon was a pterosaur which means he wasn`t a dinosaur. However the people often associate him with a dinosaur");
    }
    
    if($("#curiosites-img").attr("class") == "trex")
    {
        $("#curiosites .opis").text("Tyranosaurus Rex is a one of the largest land predators on earth. It grew up to 12 meters long, 6 meters high and weighed 6.5 tons");
    }
    //KONIEC TABLICA Z CIEKAWOSTKAMI ORAZ JEJ LOSOWANIE
    //-----------------------------------------------------------------------------
    
    let audio = document.createElement("audio");
		
	let nick, level; //zmienne przechowujace nazwe uzytkownika, wybrany poziom trudnosci
    
    $("#nick").val(localStorage.getItem("nick"));
        
	//ANIMACJA STRONA TYTUŁOWA I LOGO
	const menu_start = document.getElementById("img-start");
    
	const menu_end = document.getElementById("img-end");
    
	const logo_start = document.getElementById("img-logo-start");
    
	const logo_end = document.getElementById("img-logo-end");
    
	$("#logo-start img").css({"animation": "logo-start 3s both"});
	
	menu_start.addEventListener("animationend", () => {
        
		$("#menu-end img").css({"animation": "menu-start 3s both 0.1s"});
	});
	
	menu_end.addEventListener("animationend", () => {
        
		$("#menu-start").css({"display": "none"});
        
		$("#menu-end").css({"display": "none"});
        
		$("#menu").fadeIn(500);
        
		$("header").fadeIn(500);
		
		if(localStorage.getItem("BestEasyTime") != null)
		{
			$(".besttime .easyStorage").text(localStorage.getItem("BestEasyTime"));

			$(".besttime").fadeIn(500);
		}
		
		if(localStorage.getItem("BestMediumTime") != null)
		{
			$(".besttime .mediumStorage").text(localStorage.getItem("BestMediumTime"));

			$(".besttime").fadeIn(500);
		}
		
		if(localStorage.getItem("BestHardTime") != null)
		{
			$(".besttime .hardStorage").text(localStorage.getItem("BestHardTime"));

			$(".besttime").fadeIn(500);
		}
				
	});
			
	logo_start.addEventListener("animationend", () => {
        
		$("#logo-end img").css({"animation": "logo-start 3s both 0.1s"});
        
		$("#logo-start img").css({"animation": "none"});
	});
	
	logo_end.addEventListener("animationend", (e) => {
        
		$("#logo-start img").css({"animation": "logo-start 3s both 0.1s"});
        
		$("#logo-end img").css({"animation": "none"});
	});
    //KONIEC ANIMACJA STRONA TYTUŁOWA I LOGO
    //-----------------------------------------------------------------------------
        
    if(localStorage.getItem("language") != null)
    {
        $("#changeLanguageBtn").val(localStorage.getItem("defaultLanguage"));
    }
    
    else
    {
        $("#changeLanguageBtn").val("PL");
    }
    
    //ZMIANA JĘZYKA
    $("#changeLanguageBtn").click(function(){
        
        if($("#changeLanguageBtn").val() == "PL")
        {
            $("#changeLanguageBtn").val("EN");

            localStorage.setItem("defaultLanguage", "EN");

            localStorage.setItem("language", "PL");
        }

        else
        {
            $("#changeLanguageBtn").val("PL");

            localStorage.setItem("defaultLanguage", "PL");

            localStorage.setItem("language", "EN");
        }
    });

    function changeLanguage(selector, pl, en){
        
        $("#changeLanguageBtn").click(function(){
        
            if($("#changeLanguageBtn").val() == "EN")
            {
                $(selector).text(pl);
				
                $("#nick").attr("placeholder", "Twój nick");
				
				$("#easyLevelList").val("Łatwy");
				
				$("#mediumLevelList").val("Średni");
				
				$("#hardLevelList").val("Trudny");
				
				$("#photoGameList").val("Zdjęcia");
				
				$("#photoCuriositesList").val("Ciekawostki");
				
				$("#authorList").val("Autor");
                
                if($("#curiosites-img").attr("class") == "allosaurus")
                {
                    $("#curiosites .opis").text("Allozaur był dużym dwunożnym drapieżnikiem z wielką wyposażoną w ostre zęby czaszką. MIerzył przeciętnie 8,5 metra długości");
                }
                
                if($("#curiosites-img").attr("class") == "stegosaurus")
                {
                    $("#curiosites .opis").text("Niwyjaśnioną do dzisiaj zagadką u stegozaurów jest pokaźna komora w okolicy biodra. Prawdopodobnie był tam drugi (pomocniczy) mózg");
                }
                
                if($("#curiosites-img").attr("class") == "triceratops")
                {
                    $("#curiosites .opis").text("Triceratops był dużym dinozaurem rogatym, osiągającym 9 metrów długości i ważącym ok. 10 ton");
                }
                
                if($("#curiosites-img").attr("class") == "pteranodon")
                {
                    $("#curiosites .opis").text("Pteranodon był pterozaurem, co oznacza, że nie jest dinozaurem. Niemniej jednak pteranodon często silnie kojarzony jest z dinozaurami");
                }
                
                if($("#curiosites-img").attr("class") == "trex")
                {
                    $("#curiosites .opis").text("Tyranozaur Rex to jeden z największych drapieżników lądowych na ziemi. Dorastał do 12 metrów długości, 6 metrów wysokości i ważył 6 i pół tony");
                }
            }

            else
            {
                $(selector).text(en);
				
                $("#nick").attr("placeholder", "Your nick");
				
				$("#easyLevelList").val("Easy");
				
				$("#mediumLevelList").val("Medium");
				
				$("#hardLevelList").val("Hard");
				
				$("#photoGameList").val("Photos");
				
				$("#photoCuriositesList").val("Curiosites");
				
				$("#authorList").val("Author");
                
                if($("#curiosites-img").attr("class") == "allosaurus")
                {
                    $("#curiosites .opis").text("Allosaurus was a large predator with a huge skull equipped with sharp teeth. It was about 8.5 meters long");
                }
                
                if($("#curiosites-img").attr("class") == "stegosaurus")
                {
                    $("#curiosites .opis").text("A puzzle still unexplained in stegosaurus is a large chamber in the hip area. Probably there was a second (auxiliary) brain");
                }
                
                if($("#curiosites-img").attr("class") == "triceratops")
                {
                    $("#curiosites .opis").text("Triceratops was a large horned dinosaur reaching 9 meters long and weighing about 10 ton");
                }
                
                if($("#curiosites-img").attr("class") == "pteranodon")
                {
                    $("#curiosites .opis").text("Pteranodon was a pterosaur which means he wasn`t a dinosaur. However the people often associate him with a dinosaur");
                }
                
                if($("#curiosites-img").attr("class") == "trex")
                {
                    $("#curiosites .opis").text("Tyranosaurus Rex is a one of the largest land predators on earth. It grew up to 12 meters long, 6 meters high and weighed 6.5 tons");
                }
            }
        });
        
        if($("#changeLanguageBtn").val() == "EN")
        {
            $("#nick").attr("placeholder", "Twój nick");
			
			$("#easyLevelList").val("Łatwy");
			
			$("#mediumLevelList").val("Średni");
				
			$("#hardLevelList").val("Trudny");
			
			$("#photoGameList").val("Zdjęcia");
				
			$("#photoCuriositesList").val("Ciekawostki");

			$("#authorList").val("Autor");
            
            if($("#curiosites-img").attr("class") == "allosaurus")
            {
                $("#curiosites .opis").text("Allozaur był dużym dwunożnym drapieżnikiem z wielką wyposażoną w ostre zęby czaszką. MIerzył przeciętnie 8,5 metra długości");
            }
            
            if($("#curiosites-img").attr("class") == "stegosaurus")
            {
                $("#curiosites .opis").text("Niwyjaśnioną do dzisiaj zagadką u stegozaurów jest pokaźna komora w okolicy biodra. Prawdopodobnie był tam drugi (pomocniczy) mózg");
            }
            
            if($("#curiosites-img").attr("class") == "triceratops")
            {
                $("#curiosites .opis").text("Triceratops był dużym dinozaurem rogatym, osiągającym 9 metrów długości i ważącym ok. 10 ton");
            }
            
            if($("#curiosites-img").attr("class") == "pteranodon")
            {
                $("#curiosites .opis").text("Pteranodon był pterozaurem, co oznacza, że nie jest dinozaurem. Niemniej jednak pteranodon często silnie kojarzony jest z dinozaurami");
            }
            
            if($("#curiosites-img").attr("class") == "trex")
            {
                $("#curiosites .opis").text("Tyranozaur Rex to jeden z największych drapieżników lądowych na ziemi. Dorastał do 12 metrów długości, 6 metrów wysokości i ważył 6 i pół tony");
            }

            $(selector).text(pl);
        }
        
        if($("#changeLanguageBtn").val() == "PL")
        {
            $("#nick").attr("placeholder", "Your nick");
			
			$("#easyLevelList").val("Easy");
			
			$("#mediumLevelList").val("Medium");
				
			$("#hardLevelList").val("Hard");
			
			$("#photoGameList").val("Photos");
				
			$("#photoCuriositesList").val("Curiosites");

			$("#authorList").val("Author");

            
            if($("#curiosites-img").attr("class") == "allosaurus")
            {
                $("#curiosites .opis").text("Allosaurus was a large predator with a huge skull equipped with sharp teeth. It was about 8.5 meters long");
            }
            
            if($("#curiosites-img").attr("class") == "stegosaurus")
            {
                $("#curiosites .opis").text("A puzzle still unexplained in stegosaurus is a large chamber in the hip area. Probably there was a second (auxiliary) brain");
            }
            
            if($("#curiosites-img").attr("class") == "triceratops")
            {
                $("#curiosites .opis").text("Triceratops was a large horned dinosaur reaching 9 meters long and weighing about 10 ton");
            }
            
            if($("#curiosites-img").attr("class") == "pteranodon")
            {
                $("#curiosites .opis").text("Pteranodon was a pterosaur which means he wasn`t a dinosaur. However the people often associate him with a dinosaur");
            }
            
            if($("#curiosites-img").attr("class") == "trex")
            {
                $("#curiosites .opis").text("Tyranosaurus Rex is a one of the largest land predators on earth. It grew up to 12 meters long, 6 meters high and weighed 6.5 tons");
            }

            $(selector).text(en);
        }
    }
        
    changeLanguage("#menu .newGame", "Nowa Gra", "New Game");
	
    changeLanguage("#menu .rankingList", "Lista Rankingowa", "Ranking List");
	
    changeLanguage("#menu .copyrights", "Prawa Autorskie", "Copyrights");
	
    changeLanguage("#menu .gameRules", "Zasady Gry", "Game Rules");
	
	changeLanguage(".besttime table th:first-child", "Łatwy", "Easy");
	
	changeLanguage(".besttime table th:nth-child(2)", "Średni", "Medium");
	
	changeLanguage(".besttime table th:last-child", "Trudny", "Hard");
	
	changeLanguage(".besttime span", "Twój Najlepszy Czas", "Your Best Time");
	
	changeLanguage("#difficulty #easy", "Łatwy", "Easy");
	
	changeLanguage("#difficulty #medium", "Średni", "Medium");
	
	changeLanguage("#difficulty #hard", "Trudny", "Hard");
	
	changeLanguage("#rankingList .user", "Gracz", "User");
	
	changeLanguage("#rankingList .level", "Poziom", "Level");
	
	changeLanguage("#rankingList .time", "Czas (s)", "Time (s)");
	
	changeLanguage(".backToMenu", "Wróć Do Menu", "Back To Menu");
    
    changeLanguage(".restart", "Jeszcze Raz", "One More Time");
		
	changeLanguage("#copyrights .link a", "Źródło Zdjęcia", "Source Of Photo");
	
	changeLanguage("#copyrights #name", "Imię i Nazwisko: ", "Name: ");
	
	changeLanguage("#copyrights #phone", "Numer Telefonu: ", "Name: ");
    	
	changeLanguage("#gameRules p", "Poznaj świat dinozaurów bawiąc się i jednoczeście trenując pamięć. Gdy rozpoczniesz nową grę zegar ruszy mierząc twój czas. Sprawdź swój refleks. Trenuj go, aż dostaniesz się na szczyt listy rankingowej (na każdym poziomie trudności). Dopasuj do siebie wszystkie pary kart, a dowiesz się jakiego dinozaura wylosowałeś. Każdy wylosowany dinozaur zawiera jedyną w swoim rodzaju ciekawostkę. Gra MEMORY jednocześnie bawi i uczy.", "Explore the world of the dinosaurs by having fun and training your memory. When you start a new game, the clock starts measuring your time. Check your reflexes. Train it until you get to the top of the ranking list (at every levels of difficulty). Match all pairs of cards and you will find which dinosaur you drew. Any dinosaur what you draw have a one of the kind curiosites. The MEMORY game is a both fun and teaches.");
    //KONIEC ZMIANA JĘZYKA
    //-----------------------------------------------------------------------------
  	
	//MENU
    $("#menu .newGame").click(function(){
        
        if($("#nick").val() != "")
        {			
			nick = $("#nick").val();
            
            $("#nick").css({"border-top": "1px solid grey", "border-bottom": "1px solid grey"});
            
            localStorage.setItem("nick", $("#nick").val());
			
			setTimeout(function(){
			
				$("#menu").css({"display": "none"});

				$("#difficulty").fadeIn(500);
			},270);
        }
        
        if($("#nick").val() == "")
        {
           $("#nick").css({"border-top": "1px solid red", "border-bottom": "1px solid red"}); 
        }
    });
	
	$("#menu .rankingList").click(function(){

        $(".easyuser").html("");
	$(".easylevel").html("");
	$(".easytime").html("");

        getData("../php/getDataFromEasy.php", "easyuser", "easylevel", "easytime");
						
        $("#rankingList").fadeIn(500);
		
        $("#menu").css({"display": "none"});
		
		const lasteasyelement = $("#easyTable #lasteasyelement").text()*1000;
		
		const lastmediumelement = $("#mediumTable #lastmediumelement").text()*1000;
		
		const lasthardelement = $("#hardTable #lasthardelement").text()*1000;
				
		if(lasteasyelement != "" || lastmediumelement != "" || lasthardelement != "") $.post("../php/cleanBase.php", {"Easyelement": lasteasyelement, "Mediumelement": lastmediumelement, "Hardelement": lasthardelement});
	});
	
	$("#menu .copyrights").click(function(){
		
        $("#copyrights").fadeIn(500);

        $("#menu").css({"display": "none"});
	});
	
	$("#menu .gameRules").click(function(){
		
        $("#gameRules").fadeIn(500);

        $("#menu").css({"display": "none"});
	
	});
	
	$(".backToMenu").click(function(){

        $("#menu").fadeIn(500);

        $("section:not(#menu)").css({"display": "none"});
	});
	//KONIEC MENU
	//-----------------------------------------------------------------------------
	
	//DIFFICULTY
	$("#difficulty #easy").click(function(){

        fullscreen();
        
        $("#easy-game").fadeIn(500);

        $("#easy-game div").fadeIn(500).css({"opacity": 1});
        
        setTimeout(function(){
            
            $("#curiosites").fadeIn(500).css({"z-index": "-1","position": "absolute", "top": 0});
        },3000); // po 3 sekundach ujawnia wylosowaną ciekawostkę

        $("#difficulty").css({"display": "none"});

        $("header").css({"display": "none"});

        level = "Easy";

        gameStart("#easy-game div", "#easy-game", easyDinosaurs, 3000, "BestEasyTime"); //start gry poziom easy

    });
	
	$("#difficulty #medium").click(function(){

        fullscreen();
        
        $("#medium-game").fadeIn(500);

        $("#medium-game div").fadeIn(500).css({"opacity": 1});
        
        setTimeout(function(){
            
            $("#curiosites").fadeIn(500).css({"z-index": "-1","position": "absolute", "top": 0});
        },5000); // po 5 sekundach ujawnia wylosowaną ciekawostkę

        $("#difficulty").css({"display": "none"});

        $("header").css({"display": "none"});

        level = "Medium";
        
        gameStart("#medium-game div", "#medium-game", mediumDinosaurs, 7000, "BestMediumTime"); //start gey poziom medium
	});
	
	$("#difficulty #hard").click(function(){

        fullscreen();
             
        $("#hard-game").fadeIn(500);

        $("#hard-game div").fadeIn(500).css({"opacity": 1});
        
        setTimeout(function(){
            
            $("#curiosites").fadeIn(500).css({"z-index": "-1","position": "absolute", "top": 0});
        },5000); // po 5 sekundach ujawnia wylosowaną ciekawostkę

        $("#difficulty").css({"display": "none"});

        $("header").css({"display": "none"});

        level = "Hard";
        
        gameStart("#hard-game div"/*tablica z divami*/, "#hard-game"/*caly section z grą który ma zostać ukryty  na koniec gry*/, hardDinosaurs/*tablica do losowania dinozaurów*/, 10000/*czas po ktorym wylosowane dinozaury mają zostać ukryte*/, "BestHardTime"); //start gry poziom hard	
	});
	//KONIEC DIFFICULTY
	//-----------------------------------------------------------------------------

	//RANKING LIST
	$("#mediumTable").css({"display": "none"});

    $("#hardTable").css({"display": "none"});

	let easyLevelList = document.getElementById("easyLevelList");

	easyLevelList.disabled = true;

	easyLevelList.style.color = "darkgrey";

	let mediumLevelList = document.getElementById("mediumLevelList");

	mediumLevelList.style.color = "#fff";

	let hardLevelList = document.getElementById("hardLevelList");

	hardLevelList.style.color = "#fff";

	function changeTable(button1, button2, button3, table1, table2, table3)
	{
		button1.disabled = true;

		button1.style.color = "darkgrey";

		button2.disabled = false;

		button2.style.color = "#fff";

		button3.disabled = false;

		button3.style.color = "#fff";

		$(table1).hide();

		$(table2).hide();

		$(table3).fadeIn(500);
	}

	$("#easyLevelList").click(function(){

		changeTable (easyLevelList, mediumLevelList, hardLevelList, "#mediumTable", "#hardTable", "#easyTable");
	});
    
    $("#mediumLevelList").click(function(){

	$(".mediumuser").html("");
	$(".mediumlevel").html("");
	$(".mediumtime").html("");
		
	getData("../php/getDataFromMedium.php", "mediumuser", "mediumlevel", "mediumtime");
        
        changeTable (mediumLevelList, hardLevelList, easyLevelList, "#easyTable", "#hardTable", "#mediumTable");				
    });
        
    $("#hardLevelList").click(function(){

	$(".harduser").html("");
	$(".hardlevel").html("");
	$(".hardtime").html("");
		
	getData("../php/getDataFromHard.php", "harduser", "hardlevel", "hardtime");
        
	changeTable (hardLevelList, easyLevelList, mediumLevelList, "#easyTable", "#mediumTable", "#hardTable");
    });
        
    function getData (file, userClass, levelClass, timeClass) //pobieranie danych z bazy
    {
        $.post(file,function(data){
            
            var nick = $("nick", data); //pobiera nazwe uzytkownika

            var level = $("level", data); //pobiera wybrany poziom trudnosci

            var time = $("time", data); //pobiera czas gry

            var userlevel = document.getElementsByClassName(userClass); //kolumna user w tabeli rankinlist

            var levelname = document.getElementsByClassName(levelClass); //kolumna level w tabeli rankinlist

            var timelevel = document.getElementsByClassName(timeClass); //kolumna time w tabeli rankinlist

            for(var i = 0; i < userlevel.length; i++) //iteruje wszystkie elemeny w kolumnie user
            {
                if(nick[i] == undefined) userlevel[i].innerHTML = ""; //jesli wylosowany nick nie ma wartosci to ustawia puste pole w kolumnie user

                else userlevel[i].prepend(nick[i]); //gdy nick ma wartosc dodaje go do kolumy user
            }

            for(var i = 0; i < levelname.length; i++) //iteruje wszystkie elemeny w kolumnie level
            {
                if(level[i] == undefined) levelname.innerHTML = ""; //jesli wylosowany level nie ma wartosci to ustawia puste pole w kolumnie

                else levelname[i].prepend(level[i]); //gdy level ma wartosc dodaje go do kolumy level      
            }

            for(var i = 0; i < timelevel.length; i++) //iteruje wszystkie elemeny w kolumnie time
            {
                if(time[i] == undefined) timelevel.innerHTML = ""; //jesli wylosowany time nie ma wartosci to ustawia puste pole w time

                else timelevel[i].prepend(time[i]); //gdy time ma wartosc dodaje go do kolumy time
            }
        });
    }
	
	//KONIEC RANKING LIST	
	//-----------------------------------------------------------------------------
	
	//CURIOSITES
	$("#photosOfCuriosites").css({"display": "none"});

    $("#personaldata").css({"display": "none"});

	let photoGameList = document.getElementById("photoGameList");

	photoGameList.disabled = true;

	photoGameList.style.color = "darkgrey";

	let photoCuriositesList = document.getElementById("photoCuriositesList");

	photoCuriositesList.style.color = "#fff";

	let authorList = document.getElementById("authorList");

	authorList.style.color = "#fff";

	function changeTable(button1, button2, button3, table1, table2, table3)
	{
		button1.disabled = true;

		button1.style.color = "darkgrey";

		button2.disabled = false;

		button2.style.color = "#fff";

		button3.disabled = false;

		button3.style.color = "#fff";

		$(table1).hide();

		$(table2).hide();

		$(table3).fadeIn(500);
	}

	$("#photoGameList").click(function(){

		changeTable (photoGameList, photoCuriositesList, authorList, "#photosOfCuriosites", "#personaldata", "#gameOfPhotos");

	});
    
    $("#photoCuriositesList").click(function(){
        
       changeTable (photoCuriositesList, photoGameList, authorList, "#gameOfPhotos", "#personaldata", "#photosOfCuriosites"); 
        
    });
        
    $("#authorList").click(function(){
        
       changeTable (authorList, photoGameList, photoCuriositesList, "#gameOfPhotos", "#photosOfCuriosites", "#personaldata");
        
    });
	//KONIEC CURIOSITES
	//-----------------------------------------------------------------------------

	//GRA
    function gameStart(card, div, arrayType, time, storage)
    {
        let divList = [...$(card)]; //przekształcenie wszystkich divów na tablice

        const startGame = new Date().getTime(); //Aktualna czas w milisekundach

        let currentlyClicked = ""; //aktualnie kliknięty div (dinozaur)

        const identicalDinosaurs = []; //tablica dla dwóch identycznych divow (dinozaurów)

        const identicalDinosaursLength = divList.length / 2; // suma wszystkich par, łącznie 9 dinozaurów, każdy ma swoją parę

        let gameResult = 0; // wynik informujący ile par udało sie odgadnąć

        const clickDinosaur = function ()
        {
            currentlyClicked = this; // to co zostało kliknięte

            if (currentlyClicked == identicalDinosaurs[0]) return; //sprawsza czy kliknięty został ten sam element

            currentlyClicked.classList.remove("questionMark"); //odslania div który został kliknięty

            if (identicalDinosaurs.length === 0) //sprawdza czy to pierwsze kliknięcie
            {
                identicalDinosaurs[0] = currentlyClicked; //przypisuje do pierwszej pozycji w tablicy div z pierwszego kliknięcia

                return;
            }

            else //sprawsza czy to drugie kliknięcie
            {
                divList.forEach(function(div){

                    div.removeEventListener("click", clickDinosaur); //na chwilę wyłącza możliwośc kliknięcia w div

                });

                identicalDinosaurs[1] = currentlyClicked; //przypisuje do drugiej pozycji w tablicy div z drugiego kliknięcia

                setTimeout(function(){

                    if (identicalDinosaurs[0].className === identicalDinosaurs[1].className) //sprawdza czy zostały odsłonięte takie same divy (dinozaury) 
                    {
                        identicalDinosaurs.forEach(function(div){

                            div.classList.add("turnOff"); //ukrywa odsloniete takie same dinozaury

                            audio.src = "../audio/yes.mp3"; //dodaje dzwiek dla odkrytych takim samych dinozarow

                            $(audio).on("loadstart", function(){ //odtwrza dzwiek

                                audio.volume = 0.7;

                                audio.play();

                            });
                        });

                        gameResult++;

                        divList = divList.filter(div => !div.classList.contains("turnOff"));

                        if (gameResult == identicalDinosaursLength) //Sprawdza czy to koniec gry
                        {
                            const endTime = new Date().getTime();

                            const gameTime = (endTime - startGame);

                            $.post("../php/saveData.php",{"nick": nick, "level": level, "time": gameTime});

                            $(".restart").click(function(){

                            window.location.reload();

                            }).css({"display": "block"});

                            $(div).css({"display": "none"});
							
							if(localStorage.getItem(storage) == null) localStorage.setItem(storage, gameTime/1000);
							
							if((gameTime/1000) < localStorage.getItem(storage)) localStorage.setItem(storage, gameTime/1000);

                            $("#time").text(gameTime/1000 + " s");

                            $("#curiosites").fadeIn(500).css({"z-index": "1"});
                        }
                    }

                    else //jeśli odsłonięte divy (dinozaury) są różne ponownie je ukrywa
                    {

                        identicalDinosaurs.forEach(function(div){

                            div.classList.add("questionMark"); //przywraca znak zapytania

                            audio.src = "../audio/no.mp3"; //odtwarza dzwiek

                            $(audio).on("loadstart", function()
                            {
                                audio.volume = 0.7;

                                audio.play();
                            });
                        });
                    }

                    //reset dla nowej gry

                    currentlyClicked = ""; //nie ma aktualnie klikniętego diva (dinozaura);

                    identicalDinosaurs.length = 0; //wyzerowanie tablicy dla identycznych divów (dinozaurów)

                    divList.forEach(function(div){

                        div.addEventListener("click", clickDinosaur);  

                    }); //w tym miejscu jest przywrócona możliwość kliknięcia w div (dinozaura)

                }, 500);
            }
        };

        const start = function ()
        {
            divList.forEach(function(div){ //losowanie klasy do każdego diva

                const position = Math.floor(Math.random() * arrayType.length); //pozycja z tablicy przechowującej dinozaury

                div.classList.add(arrayType[position]); //dodanie klasy do danego diva

                arrayType.splice(position, 1); //zmniejsza długość tablicy przechowyjącej dinozaury o wylosowany element, przy kolejnym losowaniu tablica będzie krótsza
            });

            setTimeout(function(){

                divList.forEach(function(div){

                    div.classList.add("questionMark"); //po trzech sekundach ukrywa dinozaury poprzez dodanie klasy questionMark

                    div.addEventListener("click", clickDinosaur); // po trzech sekundach dodaje możliwość kliknięcia w div

                });

            },time);
        }
        
        start();
    }
	//KONIEC GRA
	//-----------------------------------------------------------------------------	
});