var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="regex.data";var REMOTE_PACKAGE_BASE="regex.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","regex-2021.7.6-py3.9.egg-info",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","regex",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:418364,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1362,2587,3927,5190,6278,7367,8420,9452,10309,11531,12805,14016,15191,16469,17824,18929,20087,21174,22412,23866,24896,25996,27279,28363,29655,30981,31787,32561,33526,34622,35961,37145,38371,39720,40960,42421,43759,44997,46345,47562,48634,49658,50648,51644,52642,53640,54637,55636,56634,57633,58628,59627,60622,61650,62967,64014,65127,66500,67990,69433,70474,72129,73742,75380,76419,77681,78999,80134,81427,82725,84075,85098,86126,87408,88631,89698,91057,92398,93528,94652,96022,97155,98179,99610,100637,101896,103118,104266,105406,106343,107395,108417,109576,110386,111836,113110,114579,115734,116556,117736,119139,120282,121524,122758,124150,125067,126400,127796,129062,130440,131506,132471,133350,134235,135272,136526,137961,139327,140227,141241,142565,143494,144800,145801,147074,148157,149274,150326,151715,153122,154223,155522,156851,157847,159330,160533,162013,162756,164353,165925,167435,168713,169959,171278,172706,173902,175069,176584,178027,179401,180912,182507,183909,185278,186172,187130,188221,189186,189968,191275,192121,192906,194113,195674,196884,198307,199772,201086,202654,204118,205494,206316,207216,208344,209176,209930,210586,211244,211932,212592,213074,213699,214438,214683,214875,215056,215237,215423,215604,215785,215971,216141,216331,216519,216696,216879,217250,218365,218870,219613,220254,220854,221253,221716,222418,223139,223598,223974,224632,224892,226217,226915,227685,228662,229543,230212,231038,231769,232621,233284,234129,235009,236288,236941,237893,239257,239832,240410,241074,241669,242259,242742,243912,245088,245912,246097,247090,247963,248339,248775,249204,249719,250353,250948,251548,252064,252597,252807,253359,253662,254030,254797,256041,256894,257808,258716,259856,260575,261523,262112,263024,263907,264692,265822,266256,266609,267009,267330,268279,269082,270071,270488,271525,272335,273700,274520,274931,276175,276902,277523,278510,279214,280167,280501,281028,281534,282089,283001,283198,283851,284634,285551,286491,287299,287790,288764,289484,290175,290907,291732,292485,293340,294098,294805,295626,296395,297189,298098,298989,299762,300479,301124,301975,302329,303024,303646,304217,304695,305219,305761,306260,306899,307467,308241,308822,309301,309878,310398,310939,311491,312164,312936,313747,314548,315318,316044,316771,317470,317994,318877,319704,320434,321233,321946,322651,323397,324390,325301,326093,326795,327631,328438,329493,330299,331783,333831,335879,337845,339767,341555,343492,345382,347244,348542,349953,351349,352636,353787,354640,355459,356655,357614,358537,359606,360530,361549,362380,363447,364552,365654,366585,367598,368679,369844,370778,371914,373188,374159,375179,376506,377562,378425,379490,380466,381377,382089,383106,384042,385163,386240,387391,388370,389249,390194,391324,392278,393300,394370,395380,396195,397220,398275,399445,400534,401359,402419,403505,404644,405801,406653,407608,408618,409700,410781,411514,412280,413278,414508,415728,416960,418109],sizes:[1362,1225,1340,1263,1088,1089,1053,1032,857,1222,1274,1211,1175,1278,1355,1105,1158,1087,1238,1454,1030,1100,1283,1084,1292,1326,806,774,965,1096,1339,1184,1226,1349,1240,1461,1338,1238,1348,1217,1072,1024,990,996,998,998,997,999,998,999,995,999,995,1028,1317,1047,1113,1373,1490,1443,1041,1655,1613,1638,1039,1262,1318,1135,1293,1298,1350,1023,1028,1282,1223,1067,1359,1341,1130,1124,1370,1133,1024,1431,1027,1259,1222,1148,1140,937,1052,1022,1159,810,1450,1274,1469,1155,822,1180,1403,1143,1242,1234,1392,917,1333,1396,1266,1378,1066,965,879,885,1037,1254,1435,1366,900,1014,1324,929,1306,1001,1273,1083,1117,1052,1389,1407,1101,1299,1329,996,1483,1203,1480,743,1597,1572,1510,1278,1246,1319,1428,1196,1167,1515,1443,1374,1511,1595,1402,1369,894,958,1091,965,782,1307,846,785,1207,1561,1210,1423,1465,1314,1568,1464,1376,822,900,1128,832,754,656,658,688,660,482,625,739,245,192,181,181,186,181,181,186,170,190,188,177,183,371,1115,505,743,641,600,399,463,702,721,459,376,658,260,1325,698,770,977,881,669,826,731,852,663,845,880,1279,653,952,1364,575,578,664,595,590,483,1170,1176,824,185,993,873,376,436,429,515,634,595,600,516,533,210,552,303,368,767,1244,853,914,908,1140,719,948,589,912,883,785,1130,434,353,400,321,949,803,989,417,1037,810,1365,820,411,1244,727,621,987,704,953,334,527,506,555,912,197,653,783,917,940,808,491,974,720,691,732,825,753,855,758,707,821,769,794,909,891,773,717,645,851,354,695,622,571,478,524,542,499,639,568,774,581,479,577,520,541,552,673,772,811,801,770,726,727,699,524,883,827,730,799,713,705,746,993,911,792,702,836,807,1055,806,1484,2048,2048,1966,1922,1788,1937,1890,1862,1298,1411,1396,1287,1151,853,819,1196,959,923,1069,924,1019,831,1067,1105,1102,931,1013,1081,1165,934,1136,1274,971,1020,1327,1056,863,1065,976,911,712,1017,936,1121,1077,1151,979,879,945,1130,954,1022,1070,1010,815,1025,1055,1170,1089,825,1060,1086,1139,1157,852,955,1010,1082,1081,733,766,998,1230,1220,1232,1149,255],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_regex.data")}Module["addRunDependency"]("datafile_regex.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/regex-2021.7.6-py3.9.egg-info/top_level.txt",start:0,end:6,audio:0},{filename:"/lib/python3.9/site-packages/regex-2021.7.6-py3.9.egg-info/PKG-INFO",start:6,end:39263,audio:0},{filename:"/lib/python3.9/site-packages/regex-2021.7.6-py3.9.egg-info/SOURCES.txt",start:39263,end:39857,audio:0},{filename:"/lib/python3.9/site-packages/regex-2021.7.6-py3.9.egg-info/dependency_links.txt",start:39857,end:39858,audio:0},{filename:"/lib/python3.9/site-packages/regex/regex.py",start:39858,end:72401,audio:0},{filename:"/lib/python3.9/site-packages/regex/_regex.so",start:72401,end:742750,audio:0},{filename:"/lib/python3.9/site-packages/regex/_regex_core.py",start:742750,end:882968,audio:0},{filename:"/lib/python3.9/site-packages/regex/__init__.py",start:882968,end:883033,audio:0}],remote_package_size:422460,package_uuid:"6edc02f2-6653-4517-a88e-10493d74a6d3"})})();