function IMPORTDAUMSTOCK(url) {

    try {
        // /rates/EUR
        //var url = "http://finance.daum.net/xml/xmlallpanel.daum?stype=P&type=S"
        var res = UrlFetchApp.fetch(url);
        var content = "[" + res.getContentText().split("=")[1].split("[")[1].split("]")[0].replace(/^\s+|\s+$/g, '').replace(/code/gim, '"code"').replace(/updn/gim, '"updn"').replace(/name/gim, '"name"').replace(/cost/gim, '"cost"').replace(/rate/gim, '"rate"') + "]";
        var json = JSON.parse(content);
        var tempArr = [];
        for (var i = 0; i < json.length; i++) {
            var jsonitem = json[i];

            //Logger.log(typeof(json));

            if (typeof(jsonitem) === "undefined") {
                return "Node Not Available";
            } else if (typeof(jsonitem) === "object") {
                tempArr.push([jsonitem["name"], jsonitem["code"], jsonitem["cost"], jsonitem["rate"]])
            } else if (typeof(jsonitem) !== "object") {
                return jsonitem;
            }
        }
        return tempArr;
    } catch (err) {
        return "Error getting data";
    }

}
