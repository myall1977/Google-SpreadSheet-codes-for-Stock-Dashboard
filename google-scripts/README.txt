1. Google spreadsheet 에서 JSON을 Parsing하는 함수 script
- https://www.chicagocomputerclasses.com/google-sheets-import-json-importjson-function/ 참고
- 사용 예제
=IMPORTJSON("http://stock.kakao.com/api/securities/KOREA-E4012001/investors.json?limit=3","investors/0")

2. IMPORTXML 함수를 통해서 html을 parsing하여 Google spreadsheet에 표시하기
- http://joshclub.tistory.com/266 참고
- 사용 예제=IMPORTXML("https://kr.investing.com/commodities/real-time-futures","//table[@class='genTbl closedTbl crossRatesTbl']//tr")

3. 추가로 Daum stock에서 정보를 가저와서 가공하기
- http://joshclub.tistory.com/266 참고

4. 주식 및 원자재 현재 가격 data 실시간으로 가져오기 위한 Source data
# 수급
- KOSPI 수급 : http://stock.kakao.com/api/securities/KOREA-D0011001/investors.json?limit=20
- KOSDAQ 수급 : http://stock.kakao.com/api/securities/KOREA-E4012001/investors.json?limit=20
- 종목 Code로 URL을 변경하면 개별 종목에 대한 data를 가져올 수 있음.
- 수급 그래프 : http://stock.kakao.com/api/assets/KOREA-A009540/quotations/foreign.json (json 안에 그래프 link가 있음.)
# 개별 종목 data
- 현대중공업 : http://stock.kakao.com/api/securities/KOREA-A009540.json
# 원자재 data
- investing.com : https://kr.investing.com/commodities/real-time-futures
# 암호화폐
- Coinone 암호화폐 실시간 가격 : https://api.coinone.co.kr/ticker/?currency=all&format=json

5. Daum stock 및 Kakao Stock data parsing script
# importDAUMSTOCK.gs : 실시간 전종목 가격정보를 가져와서 Parsing하는 script
- 사용예제
=IMPORTDAUMSTOCK("http://finance.daum.net/xml/xmlallpanel.daum?stype=P&type=S")
# investors.gs : 수급 data를 가져와서 parsing
- 사용예제
=ANALYSISINVESTORS("http://stock.kakao.com/api/securities/KOREA-E4012001/investors.json?limit=18")

6. 주식 거래 수수료 계산 script
- stock_calc.gs : NH투자증권 및 유안타증권 의 수수료 계산 script
- 사용 예제
=STOCKBUY(증권사,주식수,Price)
=STOCKSELL(증권사,Type,주식수,Price)

