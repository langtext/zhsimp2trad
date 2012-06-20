zhsimp2trad
===========

JavaScript utility for translating to and from simplified and traditional chinese characters 工具爲雙向翻譯簡體漢字至於繁體

Description:
------------
This is a JavaScript utility that translate to and from simplified and traditional chinese characters. It contains 3 files including a fully working HTML user interface example.

Modules: 
---------
1) zhsimp2trad_code.js - contains JavaScript function zhsimp2trad() that takes a parameter with value 'S2T' to translate the value of maintext HTML textarea from simplified to traditional, or 'T2S' to translate from traditional to simplified.
2) zhsimp2trad_data.js - contains the data arrays used in the translation.
3) zhsimp2trad_demo.html - fully working example HTML user interface with example calls to zhsimp2trad

Usage Examples:
---------------
1) translating from simplified to traditional:
document.getElementById('S2T').onclick=function(){ zhsimp2trad('S2T'); alert('done!'); };
2) translating from traditional to simplified:
document.getElementById('T2S').onclick=function(){ zhsimp2trad('T2S'); alert('done!'); };