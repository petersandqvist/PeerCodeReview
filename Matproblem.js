var middagProblem = prompt("Kul att du ska laga middag! Har du ingredienserna hemma?");

if(middagProblem == "ja" || middagProblem == "Ja"){

    alert("gå och laga mat!")
    
    }else{
      var beslut = prompt("Vill du handla ingredienserna eller köpa hämtmat?");
    if(beslut == "handla ingredienser" || beslut == "ingredienser" || beslut == "jag vill handla ingredienser"){
        alert("Gå och handla, jag är hungrig!")
    }else{
        alert("Vi kör på thaikiosken!")
    }
    
    }


    

    




