"use strict";

document.head.innerHTML += "\n  <style>\n\n:root {\n    --color-light: #999999;       --color: #555555;       --color-dark: #111111;\n    --background-light: #FEFEFE;  --background: #FCFCFC;  --background-dark: #FAFAFA;\n    --border-light: #D2D0CE;      --border: #C8C6C4;      --border-dark: #BDBBB8;\n    --image-filter: 0;\n}\n\n[data-theme=\"dark\"] {\n    --background-light: #333333;   --background: #222222; --background-dark: #111111;\n    --color-light: #FEFEFE;        --color:#FCFCFC;       --color-dark: #FAFAFA;\n    --border-light: #666666;       --border: #555555;     --border-dark: #444444;\n    --image-filter: 1;\n}\n\n[data-theme=\"blue\"]  {\n  --color-light: #FEFEFE;       --color: #FCFCFC;       --color-dark: #FAFAFA;\n  --background-light: #3ba4f6;  --background: #2098f6;  --background-dark: #0a8aee;\n  --border-light: #666666;      --border: #555555;      --border-dark: #444444;\n  --image-filter: 1;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator ,\ninput[type=\"time\"]::-webkit-calendar-picker-indicator{\n  cursor: pointer;\n  border-radius: 4px;\n  margin-right: 2px;\n  opacity: 0.7;\n  filter: invert(var(--image-filter));\n}\n\n\n.rmtMainContainer img.rmtIcon {\n    opacity: 0.7;\n    filter: invert(var(--image-filter))\n}\n.rmtMainContainer img.rmtIcon:hover {\n  opacity: 0.7;\n  filter: var(--image-filter)\n}\na {\n    color: inherit\n}\n\n.rmtMainContainer table {\n    border-collapse: collapse;\n}\n\n.rmtMainContainer td,\n.rmtMainContainer th {\n    border: 1px solid var(--border);\n    text-align: left;\n    padding: 8px;\n    white-space: nowrap;\n}\n\n.rmtMainContainer th {\n    background: var(--background-dark);\n}\n\n.rmtMainContainer tr:hover {\n    background: var(--background-light)\n}\n\n.rmtMainContainer thead tr:nth-child(2) {\n    position: sticky;\n    top: -1px;\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px -4px;\n    z-index: 4\n}\n\n.rmtMainContainer thead {}\n\n.rmtMainContainer tbody {}\n\n.rmtMainContainer .trans {\n    -webkit-transition: all .5s ease;\n    -moz-transition: all .5s ease;\n    -o-transition: all .5s ease;\n    -ms-transition: all .5s ease;\n    transition: all .5s ease;\n}\n\n.rmtMainContainer ul {\n    list-style: none;\n    display: block;\n    margin: 0;\n    padding: 0\n}\n\n.rmtMainContainer ul li {\n  position: relative;\n    display: inline-block\n}\n\n.rmtMainContainer ul li a {\n    margin: 0 3px;\n    padding: 5px 10px;\n    text-decoration: none;\n    color: inherit;\n    display: inline-block\n}\n\n.rmtMainContainer ul li img {\n    padding: 5px;\n}\n\n.rmtMainContainer ul li a:hover,\n.rmtMainContainer ul li img:hover,\n.rmtMainContainer ul li a.active {\n    background: var(--color-light)\n}\n\n.rmtMainContainer select,\n.rmtMainContainer input {\n    background: var(--background-dark);\n    color: var(--color);\n    border: 1px solid var(--border);\n    border-radius: 3px;\n}\n\n.rmtMainContainer input[type=\"text\"i],\n.rmtMainContainer input[type=\"search\"i] {\n    padding: 4px\n}\n\n.rmtMainContainer input[type=\"date\"i] ,\n.rmtMainContainer input[type=\"time\"i]{\n    padding: 0 4px;\n}\n\n\n.rmtMainContainer input[type=\"checkbox\"] {\n    border: 1px solid var(--border)\n}\n\n.rmtMainContainer .input-search,\n.rmtMainContainer .input-select,\n.rmtMainContainer .input-date{\n  border:none;\n  color: var(--color-dark);\n  background: var(--background-light);\n  padding:0 10px;\n}\n\n.rmtMainContainer .input-search{\n  width: calc(100% - 20px);\n  min-height:32px\n}\n\n.rmtMainContainer .input-select{\n  width: calc(100% - 0px);\n  min-height:36px\n}\n\n.rmtMainContainer .input-date{\n  width: calc(100% - 10px);\n  min-height:34px\n}\n\n\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator:hover {\n  opacity: 1\n}\n\n::-webkit-input-placeholder {\n    color: var(--color-light);\n}\n\n:-ms-input-placeholder {\n    color: var(--color-light);\n}\n\n::placeholder {\n    color: var(--color-light);\n\n}\n\n::-webkit-scrollbar {\n\n    height: 8px;\n    width: 8px;\n}\n\n::-webkit-scrollbar-track {\n    background-color: var(--background-dark);\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: var(--background-dark);\n    box-shadow: inset 0 0 6px var(--color-light);\n}\n\n\n\n\n.rmtMainContainer div {\n    display: block\n}\n\n.rmtMainContainer .lh-1 {\n    line-height: 1em\n}\n\n.rmtMainContainer .lh-2 {\n    line-height: 2em\n}\n\n.rmtMainContainer .fl {\n    float: left\n}\n\n.rmtMainContainer .fr {\n    float: right\n}\n\n.rmtMainContainer .db {\n    display: block\n}\n\n.rmtMainContainer .dib {\n    display: inline-block\n}\n\n.rmtMainContainer .df {\n    display: flex\n}\n\n.rmtMainContainer .ws-nr {\n    white-space: noWrap\n}\n\n.rmtMainContainer .ml-1 {\n    margin-left: 1em\n}\n\n.rmtMainContainer .ml-2 {\n    margin-left: 2em\n}\n\n.rmtMainContainer .mr-01 {\n    margin-right: 0.1em\n}\n\n.rmtMainContainer .m-0 {\n    margin: 0\n}\n\n.rmtMainContainer .mr-1 {\n    margin-right: 1em\n}\n\n.rmtMainContainer .mr-2 {\n    margin-right: 2em\n}\n\n.rmtMainContainer .pd-0 {\n  padding: 0\n}\n\n.rmtMainContainer .pd-05 {\n    padding: 0.5em\n}\n\n.rmtMainContainer .pd-1 {\n    padding: 1em\n}\n\n.rmtMainContainer .w-50 {\n    width: 50%\n}\n\n.rmtMainContainer .w-100 {\n    width: 100%\n}\n\n.rmtMainContainer .va-m {\n    vertical-align: middle\n}\n\n.rmtMainContainer .va-b {\n    vertical-align: bottom\n}\n\n.rmtMainContainer .cr-p {\n    cursor: pointer\n}\n\n.rmtMainContainer .cr-p:hover {\n    \n}\n\n.rmtMainContainer .tx-c {\n    text-align: center\n}\n\n.rmtMainContainer .tx-r {\n    text-align: right\n}\n\n.rmtMainContainer .p-a {\n    position: absolute\n}\n\n.rmtMainContainer .p-r {\n    position: relative\n}\n\n.rmtMainContainer .p-s {\n    position: sticky;\n}\n\n.rmtMainContainer .p-f {\n    position: fixed;\n}\n\n.rmtMainContainer .t-0 {\n    top: 0px\n}\n\n.rmtMainContainer .l-0 {\n    left: 0px\n}\n\n.rmtMainContainer .b-0 {\n    bottom: 0px\n}\n\n.rmtMainContainer .r-0 {\n    right: 0px\n}\n\n.rmtMainContainer  .searchBox {\n    -webkit-transition: all .5s ease;\n    -moz-transition: all .5s ease;\n    -o-transition: all .5s ease;\n    -ms-transition: all .5s ease;\n    transition: all .5s ease;\n}\n\n.rmtMainContainer {\n    font-family: arial, sans-serif;\n    color: var(--color);\n    background: var(--background-light);\n    font-size: 13px;\n    position: relative;\n}\n\n.rmtMainContainer  .rmtTableContainer {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    overflow-x: auto;\n    border-left: 1px solid var(--border);\n    border-right: 1px solid var(--border);\n}\n\n.rmtMainContainer .dropdown {\n    //  position: relative;\n    //  display: inline-block;\n}\n\n\n.rmtMainContainer .dropdown .dropbtn {\n    background: none;\n    border: none;\n    border-radius: 4px;\n    padding: 2px;\n}\n\n.rmtMainContainer .dropdown .dropbtn img {\n    // vertical-align: middle\n}\n\n.rmtMainContainer .dropdown:hover .dropbtn {\n    // background: var(--background);\n    // cursor: pointer;\n}\n\n.rmtMainContainer .dropdown-content {\n    display: none;\n   \n    top: 0px;\n    position: absolute;\n    background-color: var(--background-light);\n    min-width: 150px;\n    border: 1px solid var(--border-light);\n    z-index: 1;\n    border-radius: 2px;\n    overflow:auto;\n    max-height:300px\n}\n\n.rmtMainContainer .dropdown-content a {\n    color: var(--color);\n    padding: 8px 5px;\n    text-decoration: none;\n    display: block;\n    border-bottom: 1px solid var(--border);\n    text-align: left\n}\n\n.rmtMainContainer .dropdown-content a:hover {\n    background-color: var(--background-dark);\n}\n\n.rmtMainContainer .dropdown:hover .dropdown-content {\n    display: block;\n\n}\n\n.rmtMainContainer .subHeading {\n    margin: 0;\n    padding: 2px 0;\n    font-size: 80%\n}\n\n.rmtMainContainer .rmtToolbar,\n.rmtMainContainer .rmtPagnation {\n    display: block;\n    float: left;\n    width: calc(100% - 10px);\n    padding: 5px;\n    background: var(--background-light);\n    position: relative;\n    \n}\n\n.rmtMainContainer .rmtToolbar {\n    border-right: 1px solid var(--border-light);\n    border-left: 1px solid var(--border-light);\n    border-top: 1px solid var(--border-light);\n    z-index: 9;\n    position:relative\n}\n\n.rmtMainContainer .rmtPagnation {\n    border-right: 1px solid var(--border-light);\n    border-left: 1px solid var(--border-light);\n    border-bottom: 1px solid var(--border-light);\n    z-index: 1;\n    position:relative\n}\n\n\n\n.rmtMainContainer .overflow-200 {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    max-width: 200px;\n}\n\n.rmtMainContainer .rmtPagination {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    float: right\n}\n\n.rmtMainContainer .rmtPaginationItem,\n.rmtMainContainer .rmtPrev,\n.rmtMainContainer .rmtNext {\n    display: inline-block;\n    padding: 6px 10px;\n    margin-right: 4px;\n    border-radius: 3px;\n    border: solid 1px var(--border);\n    background: var(--background);\n\n    font-size: .875em;\n    font-weight: bold;\n    text-decoration: none;\n    color: var(--color);\n\n    cursor: pointer\n}\n\n.rmtMainContainer .rmtPaginationItem:hover,\n.rmtMainContainer .rmtPrev:hover,\n.rmtMainContainer .rmtNext:hover {\n    background: var(--background-dark);\n    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(var(--background-dark); ), to(var(--background-dark); ));\n    background: -moz-linear-gradient(0% 0% 270deg, var(--background-dark); , var(--background-dark); );\n}\n\n.rmtMainContainer .rmtPaginationItem.active {\n    border: none;\n    background: var(--background-light);\n    border: solid 1px var(--border-light);\n    color: var(--color-light);\n\n}\n\n.rmtMainContainer .rmtPaginationItem span {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    display: contents;\n}\n\n.rmtMainContainer .rmtPrev.disabled,\n.rmtMainContainer .rmtNext.disabled {\n    pointer-events: none;\n    box-shadow: none;\n    color: var(--color-light);\n    background: var(--background-light);\n}\n\n.rmtMainContainer .noDataAvaliable {\n    color: var(--color-light);\n}\n\n.rmtMainContainer .NA_text {\n    color: var(--color-light);\n}\n        \n  </style>";