function ANALYSISINVESTORS(url){
  
  try{
    var res = UrlFetchApp.fetch(url);
    var content = res.getContentText();
    var json = JSON.parse(content);
    var limit = parseInt(url.split("limit=")[1]);
    
    json = json["investors"];
    var tempArr = [];
    
    for(var i = 0; i < limit; i++) {
      var json_sub = json[i];
      tempArr.push([json_sub["date"].split("T")[0],json_sub["foreignStraightPurchasePrice"],json_sub["individualStraightPurchasePrice"],json_sub["institutionStraightPurchasePrice"]]);
    }
    return tempArr;
  }   
  catch(err){
      return "Error getting data";  
  } 
}
