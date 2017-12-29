function STOCKBUY(com,no,price) {
  var nh_fee = 0.0052;
  var yuanta_fee = 0.1;
  try{
    if (com === "NH"){
      var fee = nh_fee;
    } else {
      var fee = yuanta_fee;
    }
    var total_price = no * price;
    var trans_fee = parseInt((total_price * fee / 100) * 0.1) * 10;
    var result_calc =  total_price + trans_fee;
    
    return result_calc;
  }
  catch(err){
    return "-";
  }
}

function STOCKSELL(com,goods,no,price) {
  var nh_fee = 0.0052;
  var yuanta_fee = 0.1;
  var tax = 0.3;
  try{
    if (com === "NH"){
      var fee = nh_fee;
    } else {
      var fee = yuanta_fee;
    }
    if (goods === "ETF" || goods === "ETN") {
      var tax = 0;
    }
    var total_price = no * price;
    var trans_fee = parseInt((total_price * fee / 100) * 0.1) * 10;
    var sell_tax = parseInt(total_price * tax / 100);
    var result_calc =  total_price - trans_fee - sell_tax;
    
    return result_calc;
  }
  catch(err){
    return "-";
  }
}
