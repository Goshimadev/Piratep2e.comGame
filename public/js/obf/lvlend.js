var _0x1cb2=["\x6C\x76\x6C\x2D\x65\x6E\x64","\x73\x70\x72\x69\x74\x65","\x61\x64\x64","\x63\x65\x6E\x74\x65\x72\x58","\x77\x6F\x72\x6C\x64","\x68\x62\x75\x74\x74\x6F\x6E","\x62\x75\x74\x74\x6F\x6E","\x78","\x79","\x6E\x65\x78\x74\x4C\x62\x75\x74\x74\x6F\x6E","\x63\x65\x6E\x74\x65\x72\x59","\x67\x65\x6D","\x45\x6E\x65\x6D\x69\x65\x73\x20\x6B\x69\x6C\x6C\x65\x64\x20\x3A\x20","\x20\x28\x20\x2B\x20","\x20\x29","\x62\x69\x74\x6D\x61\x70\x54\x65\x78\x74","\x74\x69\x6E\x74","\x41\x63\x63\x75\x72\x61\x63\x79\x20\x3A\x20","\x25\x20\x28\x20\x2B\x20","\x54\x69\x6D\x65\x20\x54\x61\x6B\x65\x6E\x20\x3A\x20","\x73\x20\x28\x20\x2B\x20","\x4C\x65\x76\x65\x6C\x20\x53\x63\x6F\x72\x65\x20\x3A\x20","\x6C\x2D\x65\x6E\x64","\x61\x75\x64\x69\x6F","\x70\x6C\x61\x79","\x74\x6F\x46\x69\x78\x65\x64","\x66\x6C\x6F\x6F\x72","\x73\x65\x6E\x64\x53\x63\x6F\x72\x65","\x65\x6D\x69\x74","\x73\x74\x6F\x70","\x67\x63\x6F\x6D\x70\x6C\x65\x74\x65","\x73\x74\x61\x72\x74","\x73\x74\x61\x74\x65","\x47\x68\x6F\x73\x74","\x4D\x61\x69\x6E","\x53\x74\x61\x72\x74"];var socket=io();var eKilled;var ekScore;var accuracy;var acScore;var tTaken;var tTakenScore;var levelScore;var lvlEndMusic;function preloadLvl(){calcScore()}function createLvl(){game[_0x1cb2[2]][_0x1cb2[1]](0,0,_0x1cb2[0]);hbutton= game[_0x1cb2[2]][_0x1cb2[6]](game[_0x1cb2[4]][_0x1cb2[3]]- 150,450,_0x1cb2[5],goToStartPageFromLvlEnd,this,1,0);nextLbutton= game[_0x1cb2[2]][_0x1cb2[6]](hbutton[_0x1cb2[7]]+ 150,hbutton[_0x1cb2[8]],_0x1cb2[9],startNextLevel,this,1,0);EnemiesKilledText= game[_0x1cb2[2]][_0x1cb2[15]](game[_0x1cb2[4]][_0x1cb2[3]]- 300,game[_0x1cb2[4]][_0x1cb2[10]]- 130,_0x1cb2[11],_0x1cb2[12]+ eKilled+ _0x1cb2[13]+ ekScore+ _0x1cb2[14],30);EnemiesKilledText[_0x1cb2[16]]= 0x223344;AccuracyText= game[_0x1cb2[2]][_0x1cb2[15]](EnemiesKilledText[_0x1cb2[7]],EnemiesKilledText[_0x1cb2[8]]+ 50,_0x1cb2[11],_0x1cb2[17]+ accuracy+ _0x1cb2[18]+ acScore+ _0x1cb2[14],30);AccuracyText[_0x1cb2[16]]= 0x223344;TimeTakenText= game[_0x1cb2[2]][_0x1cb2[15]](EnemiesKilledText[_0x1cb2[7]],EnemiesKilledText[_0x1cb2[8]]+ 100,_0x1cb2[11],_0x1cb2[19]+ tTaken+ _0x1cb2[20]+ tTakenScore+ _0x1cb2[14],30);TimeTakenText[_0x1cb2[16]]= 0x223344;LevelScoreText= game[_0x1cb2[2]][_0x1cb2[15]](EnemiesKilledText[_0x1cb2[7]]- 35,EnemiesKilledText[_0x1cb2[8]]+ 160,_0x1cb2[11],_0x1cb2[21]+ levelScore,50);LevelScoreText[_0x1cb2[16]]= 0x223344;lvlEndMusic= game[_0x1cb2[2]][_0x1cb2[23]](_0x1cb2[22],1,true);lvlEndMusic[_0x1cb2[24]]()}function updateLvl(){}function calcScore(){eKilled= enemiesKilled;ekScore= lvlScore;cannonsFired= noCannons[level]- lvlCannons;if(cannonsFired){accuracy= (hits/ cannonsFired* 100)[_0x1cb2[25]](2)}else {accuracy= 0};acScore= Math[_0x1cb2[26]](5000* accuracy/ 100);tTaken= Math[_0x1cb2[26]]((lvlEnd- lvlStart)/ 1000);tTakenScore= 5000- tTaken* 25;levelScore= ekScore+ acScore+ tTakenScore;gameScore+= levelScore;socket[_0x1cb2[28]](_0x1cb2[27],gameScore)}function up(){}function over(){}function out(){}function startNextLevel(){level+= 1;if(level> 3){lvlEndMusic[_0x1cb2[29]]();game[_0x1cb2[32]][_0x1cb2[31]](_0x1cb2[30])}else {if(level> 2){lvlEndMusic[_0x1cb2[29]]();game[_0x1cb2[32]][_0x1cb2[31]](_0x1cb2[33])}else {lvlEndMusic[_0x1cb2[29]]();game[_0x1cb2[32]][_0x1cb2[31]](_0x1cb2[34])}}}function goToStartPageFromLvlEnd(){gameReset();lvlEndMusic[_0x1cb2[29]]();game[_0x1cb2[32]][_0x1cb2[31]](_0x1cb2[35])}