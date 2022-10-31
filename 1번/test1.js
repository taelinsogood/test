window.onload = function() {
    var jsonArray = new Array(createBread());
    
    var result = "";
    for (i = 0; i < jsonArray[0].type.length; ++i) {
      var jo = jsonArray[0].type[i];
      result += "breadType: " + jo.breadType + "\n";
  
      var childObj = jo.recipe;
      result += "recipe\nflour: " + childObj.flour + "\n";
      result += "water: " + childObj.water + "\n";
      result += jo.breadType + ": " + childObj + "\n\n";
    }
    console.log(result);
  }
  
  function createBread() {
    return {
      type: [
        createCream(),
        createSugar(),
        createButter()
      ]
    }
  }
  
  function createCream() {
    return {
      breadType: "cream",
      recipe: {
        "flour": 100,
        "water": 100,
        "cream": 200
      }
    }
  }
  
  function createSugar() {
    return {
      breadType: "sugar",
      recipe: {
        "flour": 100,
        "water": 50,
        "sugar": 200
      }
    }
  }
  
  function createButter() {
    return {
      breadType: "butter",
      recipe: {
        "flour": 100,
        "water": 100,
        "butter": 50
      }
    }
  }
  
  
  