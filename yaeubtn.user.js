// ==UserScript==
// @name         Yandex EU Button
// @namespace    Venterum
// @version      1.1
// @author       Venterum
// @match        *://yandex.ru/search*
// @match        *://ya.ru/search*
// @grant        none
// @run-at       document-end
// @license      GPL-3.0-or-later
// ==/UserScript==

(function(){
    'use strict';
    const addButton=()=>{
        const bingLink=document.querySelector('a[href*="bing.com/search"]');
        if(!bingLink || document.querySelector('.yandex-eu-added')) return;
        const query=new URLSearchParams(window.location.search).get('text')||'';
        const yandexEu=document.createElement('a');
        yandexEu.className=bingLink.className + ' yandex-eu-added';
        yandexEu.target='_blank';
        yandexEu.tabIndex=0;
        yandexEu.href=`https://yandex.eu/search/?text=${encodeURIComponent(query)}`;
        yandexEu.textContent='Yandex.eu (Европейская выдача)';
        bingLink.insertAdjacentElement('afterend', yandexEu);
    };
    
    new MutationObserver(addButton).observe(document,{childList:true,subtree:true});
    addButton();
    })();