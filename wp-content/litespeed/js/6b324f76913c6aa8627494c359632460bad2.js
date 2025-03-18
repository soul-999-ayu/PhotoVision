(()=>{"use strict";const e=window.wp.i18n,t=e=>Math.abs(parseInt(e,10)),a=(e,t,a)=>{const n=new CustomEvent(`wpcf7${t}`,{bubbles:!0,detail:a});"string"==typeof e&&(e=document.querySelector(e)),e.dispatchEvent(n)},n=(e,t)=>{const n=new Map([["init","init"],["validation_failed","invalid"],["acceptance_missing","unaccepted"],["spam","spam"],["aborted","aborted"],["mail_sent","sent"],["mail_failed","failed"],["submitting","submitting"],["resetting","resetting"],["validating","validating"],["payment_required","payment-required"]]);n.has(t)&&(t=n.get(t)),Array.from(n.values()).includes(t)||(t=`custom-${t=(t=t.replace(/[^0-9a-z]+/i," ").trim()).replace(/\s+/,"-")}`);const r=e.getAttribute("data-status");if(e.wpcf7.status=t,e.setAttribute("data-status",t),e.classList.add(t),r&&r!==t){e.classList.remove(r);const t={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,prevStatus:r};a(e,"statuschanged",t)}return t},r=e=>{const{root:t,namespace:a="contact-form-7/v1"}=wpcf7.api;return c.reduceRight(((e,t)=>a=>t(a,e)),(e=>{let n,r,{url:c,path:o,endpoint:s,headers:i,body:l,data:p,...d}=e;"string"==typeof s&&(n=a.replace(/^\/|\/$/g,""),r=s.replace(/^\//,""),o=r?n+"/"+r:n),"string"==typeof o&&(-1!==t.indexOf("?")&&(o=o.replace("?","&")),o=o.replace(/^\//,""),c=t+o),i={Accept:"application/json, */*;q=0.1",...i},delete i["X-WP-Nonce"],p&&(l=JSON.stringify(p),i["Content-Type"]="application/json");const f={code:"fetch_error",message:"You are probably offline."},u={code:"invalid_json",message:"The response is not a valid JSON response."};return window.fetch(c||o||window.location.href,{...d,headers:i,body:l}).then((e=>Promise.resolve(e).then((e=>{if(e.status>=200&&e.status<300)return e;throw e})).then((e=>{if(204===e.status)return null;if(e&&e.json)return e.json().catch((()=>{throw u}));throw u}))),(()=>{throw f}))}))(e)},c=[];function o(e,t={}){const{target:a,scope:r=e,...c}=t;if(void 0===e.wpcf7?.schema)return;const o={...e.wpcf7.schema};if(void 0!==a){if(!e.contains(a))return;if(!a.closest(".wpcf7-form-control-wrap[data-name]"))return;if(a.closest(".novalidate"))return}const p=r.querySelectorAll(".wpcf7-form-control-wrap"),d=Array.from(p).reduce(((e,t)=>(t.closest(".novalidate")||t.querySelectorAll(":where( input, textarea, select ):enabled").forEach((t=>{if(t.name)switch(t.type){case"button":case"image":case"reset":case"submit":break;case"checkbox":case"radio":t.checked&&e.append(t.name,t.value);break;case"select-multiple":for(const a of t.selectedOptions)e.append(t.name,a.value);break;case"file":for(const a of t.files)e.append(t.name,a);break;default:e.append(t.name,t.value)}})),e)),new FormData),f=e.getAttribute("data-status");Promise.resolve(n(e,"validating")).then((n=>{if(void 0!==swv){const n=swv.validate(o,d,t);for(const t of p){if(void 0===t.dataset.name)continue;const c=t.dataset.name;if(n.has(c)){const{error:t,validInputs:a}=n.get(c);i(e,c),void 0!==t&&s(e,c,t,{scope:r}),l(e,c,null!=a?a:[])}if(t.contains(a))break}}})).finally((()=>{n(e,f)}))}r.use=e=>{c.unshift(e)};const s=(e,t,a,n)=>{const{scope:r=e,...c}=null!=n?n:{},o=`${e.wpcf7?.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi,""),s=e.querySelector(`.wpcf7-form-control-wrap[data-name="${t}"] .wpcf7-form-control`);(()=>{const t=document.createElement("li");t.setAttribute("id",o),s&&s.id?t.insertAdjacentHTML("beforeend",`<a href="#${s.id}">${a}</a>`):t.insertAdjacentText("beforeend",a),e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(t)})(),r.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e=>{const t=document.createElement("span");t.classList.add("wpcf7-not-valid-tip"),t.setAttribute("aria-hidden","true"),t.insertAdjacentText("beforeend",a),e.appendChild(t),e.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","true")})),e.querySelectorAll(".wpcf7-form-control").forEach((e=>{e.classList.add("wpcf7-not-valid"),e.setAttribute("aria-describedby",o),"function"==typeof e.setCustomValidity&&e.setCustomValidity(a),e.closest(".use-floating-validation-tip")&&(e.addEventListener("focus",(e=>{t.setAttribute("style","display: none")})),t.addEventListener("click",(e=>{t.setAttribute("style","display: none")})))}))}))},i=(e,t)=>{const a=`${e.wpcf7?.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi,"");e.wpcf7.parent.querySelector(`.screen-reader-response ul li#${a}`)?.remove(),e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e=>{e.querySelector(".wpcf7-not-valid-tip")?.remove(),e.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","false")})),e.querySelectorAll(".wpcf7-form-control").forEach((e=>{e.removeAttribute("aria-describedby"),e.classList.remove("wpcf7-not-valid"),"function"==typeof e.setCustomValidity&&e.setCustomValidity("")}))}))},l=(e,t,a)=>{e.querySelectorAll(`[data-reflection-of="${t}"]`).forEach((e=>{if("output"===e.tagName.toLowerCase()){const t=e;0===a.length&&a.push(t.dataset.default),a.slice(0,1).forEach((e=>{e instanceof File&&(e=e.name),t.textContent=e}))}else e.querySelectorAll("output").forEach((e=>{e.hasAttribute("data-default")?0===a.length?e.removeAttribute("hidden"):e.setAttribute("hidden","hidden"):e.remove()})),a.forEach((a=>{a instanceof File&&(a=a.name);const n=document.createElement("output");n.setAttribute("name",t),n.textContent=a,e.appendChild(n)}))}))};function p(e,t={}){if(wpcf7.blocked)return d(e),void n(e,"submitting");const c=new FormData(e);t.submitter&&t.submitter.name&&c.append(t.submitter.name,t.submitter.value);const o={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(c,(e=>{const t=e[0],a=e[1];return!t.match(/^_/)&&{name:t,value:a}})).filter((e=>!1!==e)),formData:c};r({endpoint:`contact-forms/${e.wpcf7.id}/feedback`,method:"POST",body:c,wpcf7:{endpoint:"feedback",form:e,detail:o}}).then((t=>{const r=n(e,t.status);return o.status=t.status,o.apiResponse=t,["invalid","unaccepted","spam","aborted"].includes(r)?a(e,r,o):["sent","failed"].includes(r)&&a(e,`mail${r}`,o),a(e,"submit",o),t})).then((t=>{t.posted_data_hash&&(e.querySelector('input[name="_wpcf7_posted_data_hash"]').value=t.posted_data_hash),"mail_sent"===t.status&&(e.reset(),e.wpcf7.resetOnMailSent=!0),t.invalid_fields&&t.invalid_fields.forEach((t=>{s(e,t.field,t.message)})),e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend",t.message),e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=t.message}))})).catch((e=>console.error(e)))}r.use(((e,t)=>{if(e.wpcf7&&"feedback"===e.wpcf7.endpoint){const{form:t,detail:r}=e.wpcf7;d(t),a(t,"beforesubmit",r),n(t,"submitting")}return t(e)}));const d=e=>{e.querySelectorAll(".wpcf7-form-control-wrap").forEach((t=>{t.dataset.name&&i(e,t.dataset.name)})),e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText="",e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=""}))};function f(e){const t=new FormData(e),c={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(t,(e=>{const t=e[0],a=e[1];return!t.match(/^_/)&&{name:t,value:a}})).filter((e=>!1!==e)),formData:t};r({endpoint:`contact-forms/${e.wpcf7.id}/refill`,method:"GET",wpcf7:{endpoint:"refill",form:e,detail:c}}).then((t=>{e.wpcf7.resetOnMailSent?(delete e.wpcf7.resetOnMailSent,n(e,"mail_sent")):n(e,"init"),c.apiResponse=t,a(e,"reset",c)})).catch((e=>console.error(e)))}r.use(((e,t)=>{if(e.wpcf7&&"refill"===e.wpcf7.endpoint){const{form:t,detail:a}=e.wpcf7;d(t),n(t,"resetting")}return t(e)}));const u=(e,t)=>{for(const a in t){const n=t[a];e.querySelectorAll(`input[name="${a}"]`).forEach((e=>{e.value=""})),e.querySelectorAll(`img.wpcf7-captcha-${a.replaceAll(":","")}`).forEach((e=>{e.setAttribute("src",n)}));const r=/([0-9]+)\.(png|gif|jpeg)$/.exec(n);r&&e.querySelectorAll(`input[name="_wpcf7_captcha_challenge_${a}"]`).forEach((e=>{e.value=r[1]}))}},m=(e,t)=>{for(const a in t){const n=t[a][0],r=t[a][1];e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${a}"]`).forEach((e=>{e.querySelector(`input[name="${a}"]`).value="",e.querySelector(".wpcf7-quiz-label").textContent=n,e.querySelector(`input[name="_wpcf7_quiz_answer_${a}"]`).value=r}))}};function w(e){const a=new FormData(e);e.wpcf7={id:t(a.get("_wpcf7")),status:e.getAttribute("data-status"),pluginVersion:a.get("_wpcf7_version"),locale:a.get("_wpcf7_locale"),unitTag:a.get("_wpcf7_unit_tag"),containerPost:t(a.get("_wpcf7_container_post")),parent:e.closest(".wpcf7"),get schema(){return wpcf7.schemas.get(this.id)}},wpcf7.schemas.set(e.wpcf7.id,void 0),e.querySelectorAll(".has-spinner").forEach((e=>{e.insertAdjacentHTML("afterend",'<span class="wpcf7-spinner"></span>')})),(e=>{e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t=>{t.addEventListener("change",(t=>{const a=t.target.getAttribute("name");e.querySelectorAll(`input[type="checkbox"][name="${a}"]`).forEach((e=>{e!==t.target&&(e.checked=!1)}))}))}))})(e),(e=>{e.querySelectorAll(".has-free-text").forEach((t=>{const a=t.querySelector("input.wpcf7-free-text"),n=t.querySelector('input[type="checkbox"], input[type="radio"]');a.disabled=!n.checked,e.addEventListener("change",(e=>{a.disabled=!n.checked,e.target===n&&n.checked&&a.focus()}))}))})(e),(e=>{e.querySelectorAll(".wpcf7-validates-as-url").forEach((e=>{e.addEventListener("change",(t=>{let a=e.value.trim();a&&!a.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==a.indexOf(".")&&(a=a.replace(/^\/+/,""),a="http://"+a),e.value=a}))}))})(e),(e=>{if(!e.querySelector(".wpcf7-acceptance")||e.classList.contains("wpcf7-acceptance-as-validation"))return;const t=()=>{let t=!0;e.querySelectorAll(".wpcf7-acceptance").forEach((e=>{if(!t||e.classList.contains("optional"))return;const a=e.querySelector('input[type="checkbox"]');(e.classList.contains("invert")&&a.checked||!e.classList.contains("invert")&&!a.checked)&&(t=!1)})),e.querySelectorAll(".wpcf7-submit").forEach((e=>{e.disabled=!t}))};t(),e.addEventListener("change",(e=>{t()})),e.addEventListener("wpcf7reset",(e=>{t()}))})(e),(e=>{const a=(e,a)=>{const n=t(e.getAttribute("data-starting-value")),r=t(e.getAttribute("data-maximum-value")),c=t(e.getAttribute("data-minimum-value")),o=e.classList.contains("down")?n-a.value.trim().length:a.value.trim().length;e.setAttribute("data-current-value",o),e.innerText=o,r&&r<a.value.length?e.classList.add("too-long"):e.classList.remove("too-long"),c&&a.value.length<c?e.classList.add("too-short"):e.classList.remove("too-short")},n=t=>{t={init:!1,...t},e.querySelectorAll(".wpcf7-character-count").forEach((n=>{const r=n.getAttribute("data-target-name"),c=e.querySelector(`[name="${r}"]`);c&&(c.value=c.defaultValue,a(n,c),t.init&&c.addEventListener("keyup",(e=>{a(n,c)})))}))};n({init:!0}),e.addEventListener("wpcf7reset",(e=>{n()}))})(e),window.addEventListener("load",(t=>{wpcf7.cached&&e.reset()})),e.addEventListener("reset",(t=>{wpcf7.reset(e)})),e.addEventListener("submit",(t=>{wpcf7.submit(e,{submitter:t.submitter}),t.preventDefault()})),e.addEventListener("wpcf7submit",(t=>{t.detail.apiResponse.captcha&&u(e,t.detail.apiResponse.captcha),t.detail.apiResponse.quiz&&m(e,t.detail.apiResponse.quiz)})),e.addEventListener("wpcf7reset",(t=>{t.detail.apiResponse.captcha&&u(e,t.detail.apiResponse.captcha),t.detail.apiResponse.quiz&&m(e,t.detail.apiResponse.quiz)})),e.addEventListener("change",(t=>{t.target.closest(".wpcf7-form-control")&&wpcf7.validate(e,{target:t.target})})),e.addEventListener("wpcf7statuschanged",(t=>{const a=t.detail.status;e.querySelectorAll(".active-on-any").forEach((e=>{e.removeAttribute("inert"),e.classList.remove("active-on-any")})),e.querySelectorAll(`.inert-on-${a}`).forEach((e=>{e.setAttribute("inert","inert"),e.classList.add("active-on-any")}))}))}document.addEventListener("DOMContentLoaded",(t=>{var a;if("undefined"!=typeof wpcf7)if(void 0!==wpcf7.api)if("function"==typeof window.fetch)if("function"==typeof window.FormData)if("function"==typeof NodeList.prototype.forEach)if("function"==typeof String.prototype.replaceAll){wpcf7={init:w,submit:p,reset:f,validate:o,schemas:new Map,...null!==(a=wpcf7)&&void 0!==a?a:{}},document.querySelectorAll("form .wpcf7[data-wpcf7-id]").forEach((t=>{const a=document.createElement("p");a.setAttribute("class","wpcf7-form-in-wrong-place");const n=document.createElement("strong");n.append((0,e.__)("Error:","contact-form-7"));const r=(0,e.__)("This contact form is placed in the wrong place.","contact-form-7");a.append(n," ",r),t.replaceWith(a)})),document.querySelectorAll(".wpcf7 > form").forEach((e=>{wpcf7.init(e),e.closest(".wpcf7").classList.replace("no-js","js")}));for(const e of wpcf7.schemas.keys())r({endpoint:`contact-forms/${e}/feedback/schema`,method:"GET"}).then((t=>{wpcf7.schemas.set(e,t)}))}else console.error("Your browser does not support String.replaceAll().");else console.error("Your browser does not support NodeList.forEach().");else console.error("Your browser does not support window.FormData().");else console.error("Your browser does not support window.fetch().");else console.error("wpcf7.api is not defined.");else console.error("wpcf7 is not defined.")}))})()
;

document.querySelectorAll("a").forEach(link => {
    if (link.textContent.trim() === "Camera Sales for Tenders: Supply of Nikon cameras and lenses for institutional and government tenders") {
        link.textContent = "Nikon Cameras & Lenses for Institutional & Government Tenders";
    }
    if (link.textContent.trim() === "Authorized Service Center: Repairs, maintenance, and support for Nikon DSLRs, mirrorless cameras, and lenses") {
        link.textContent = "Authorized Service Center: Nikon camera and lens repairs and support.";
    }

    if (link.textContent.trim() === 'Hand-Held Auto Refractor Keratometer') {
        link.textContent = "Hand-Held Auto Refractor Keratometer";
    }
    if (link.textContent.trim() === 'Auto Refractor Keratometer') {
        link.textContent = "Auto Refractor Keratometer";
    }
    if (link.textContent.trim() === 'Hand-Held Auto Refractometer') {
        link.textContent = "Hand-Held Auto Refractometer";
    }
    if (link.textContent.trim() === 'Slit lamps') {
        link.textContent = "Slit lamps";
    }
});


function hide(text){
    if(text=='s'){
        document.getElementById("contoo").style.display = 'none'
        document.getElementById("hider1").style.display = 'none'
        document.getElementById("shower1").style.display = 'block'
    }
    if(text=='h'){
        document.getElementById("contoo").style.display = 'block'
        document.getElementById("hider1").style.display = 'block'
        document.getElementById("shower1").style.display = 'none'
    } 
}


function hide1(text){
    if(text=='s'){
        document.getElementById("contoo1").style.display = 'none'
        document.getElementById("hider2").style.display = 'none'
        document.getElementById("shower2").style.display = 'block'
    }
    if(text=='h'){
        document.getElementById("contoo1").style.display = 'block'
        document.getElementById("hider2").style.display = 'block'
        document.getElementById("shower2").style.display = 'none'
    } 
}

function mirrorless(){
    if(document.getElementById('mirrorless1').style.display=='none'){
        document.getElementById('mirrorless1').style.display='block';
        document.getElementById('mirrorless2').style.display='block';
        document.getElementById('mirrorless').innerHTML = "< Mirrorless Cameras";
    }
    else{
        document.getElementById('mirrorless1').style.display='none';
        document.getElementById('mirrorless2').style.display='none';
        document.getElementById('mirrorless').innerHTML = "> Mirrorless Cameras";
    }
}


function dslr(){
    if(document.getElementById('dslr1').style.display=='none'){
        document.getElementById('dslr1').style.display='block';
        document.getElementById('dslr2').style.display='block';
        document.getElementById('dslr').innerHTML = "< DSLR";
    }
    else{
        document.getElementById('dslr1').style.display='none';
        document.getElementById('dslr2').style.display='none';
        document.getElementById('dslr').innerHTML = "> DSLR";
    }
}

function cc(){
    if(document.getElementById('cc1').style.display=='none'){
        document.getElementById('cc1').style.display='block';
        document.getElementById('cc2').style.display='block';
        document.getElementById('cc').innerHTML = "< Compact Camera";
    }
    else{
        document.getElementById('cc1').style.display='none';
        document.getElementById('cc2').style.display='none';
        document.getElementById('cc').innerHTML = "> Compact Camera";
    }
}

function wap(){
    if(document.getElementById('wap1').style.display=='none'){
        document.getElementById('wap1').style.display='block';
        document.getElementById('wap2').style.display='block';
        document.getElementById('wap').innerHTML = "< Wide Angle Prime (6)";
    }
    else{
        document.getElementById('wap1').style.display='none';
        document.getElementById('wap2').style.display='none';
        document.getElementById('wap').innerHTML = "> Wide Angle Prime (6)";
    }
}

function hide2(text){
    if(text=='s'){
        document.getElementById("contoo2").style.display = 'none'
        document.getElementById("hider3").style.display = 'none'
        document.getElementById("shower3").style.display = 'block'
    }
    if(text=='h'){
        document.getElementById("contoo2").style.display = 'block'
        document.getElementById("hider3").style.display = 'block'
        document.getElementById("shower3").style.display = 'none'
    } 
}

function sp(){
    if(document.getElementById('sp1').style.display=='none'){
        document.getElementById('sp1').style.display='block';
        document.getElementById('sp2').style.display='block';
        document.getElementById('sp').innerHTML = "< Standard Prime (8)";
    }
    else{
        document.getElementById('sp1').style.display='none';
        document.getElementById('sp2').style.display='none';
        document.getElementById('sp').innerHTML = "> Standard Prime (8)";
    }
}

function hide3(text){
    if(text=='s'){
        document.getElementById("contoo3").style.display = 'none'
        document.getElementById("hider4").style.display = 'none'
        document.getElementById("shower4").style.display = 'block'
    }
    if(text=='h'){
        document.getElementById("contoo3").style.display = 'block'
        document.getElementById("hider4").style.display = 'block'
        document.getElementById("shower4").style.display = 'none'
    } 
}

function waz(){
    if(document.getElementById('waz1').style.display=='none'){
        document.getElementById('waz1').style.display='block';
        document.getElementById('waz2').style.display='block';
        document.getElementById('waz').innerHTML = "< Wide Angle Zoom (4)";
    }
    else{
        document.getElementById('waz1').style.display='none';
        document.getElementById('waz2').style.display='none';
        document.getElementById('waz').innerHTML = "> Wide Angle Zoom (4)";
    }
}

function hide4(text){
    if(text=='s'){
        document.getElementById("contoo4").style.display = 'none'
        document.getElementById("hider5").style.display = 'none'
        document.getElementById("shower5").style.display = 'block'
    }
    if(text=='h'){
        document.getElementById("contoo4").style.display = 'block'
        document.getElementById("hider5").style.display = 'block'
        document.getElementById("shower5").style.display = 'none'
    } 
}

function sz(){
    if(document.getElementById('sz1').style.display=='none'){
        document.getElementById('sz1').style.display='block';
        document.getElementById('sz2').style.display='block';
        document.getElementById('sz').innerHTML = "< Standard Zoom (8)";
    }
    else{
        document.getElementById('sz1').style.display='none';
        document.getElementById('sz2').style.display='none';
        document.getElementById('sz').innerHTML = "> Standard Zoom (8)";
    }
}

function hide5(text){
    if(text=='s'){
        document.getElementById("contoo5").style.display = 'none'
        document.getElementById("hider6").style.display = 'none'
        document.getElementById("shower6").style.display = 'block'
    }
    if(text=='h'){
        document.getElementById("contoo5").style.display = 'block'
        document.getElementById("hider6").style.display = 'block'
        document.getElementById("shower6").style.display = 'none'
    } 
}

function t(){
    if(document.getElementById('t1').style.display=='none'){
        document.getElementById('t1').style.display='block';
        document.getElementById('t2').style.display='block';
        document.getElementById('t').innerHTML = "< Telephoto (10)";
    }
    else{
        document.getElementById('t1').style.display='none';
        document.getElementById('t2').style.display='none';
        document.getElementById('t').innerHTML = "> Telephoto (10)";
    }
}

function hide6(text){
    if(text=='s'){
        document.getElementById("contoo6").style.display = 'none'
        document.getElementById("hider7").style.display = 'none'
        document.getElementById("shower7").style.display = 'block'
    }
    if(text=='h'){
        document.getElementById("contoo6").style.display = 'block'
        document.getElementById("hider7").style.display = 'block'
        document.getElementById("shower7").style.display = 'none'
    } 
}

function st(){
    if(document.getElementById('st1').style.display=='none'){
        document.getElementById('st1').style.display='block';
        document.getElementById('st2').style.display='block';
        document.getElementById('st').innerHTML = "< Super Telephoto (5)";
    }
    else{
        document.getElementById('st1').style.display='none';
        document.getElementById('st2').style.display='none';
        document.getElementById('st').innerHTML = "> Super Telephoto (5)";
    }
}

function hide7(text){
    if(text=='s'){
        document.getElementById("contoo7").style.display = 'none'
        document.getElementById("hider8").style.display = 'none'
        document.getElementById("shower8").style.display = 'block'
    }
    if(text=='h'){
        document.getElementById("contoo7").style.display = 'block'
        document.getElementById("hider8").style.display = 'block'
        document.getElementById("shower8").style.display = 'none'
    } 
}

function t2(){
    if(document.getElementById('t21').style.display=='none'){
        document.getElementById('t21').style.display='block';
        document.getElementById('t22').style.display='block';
        document.getElementById('t2').innerHTML = "< Teleconverter (2)";
    }
    else{
        document.getElementById('t21').style.display='none';
        document.getElementById('t22').style.display='none';
        document.getElementById('t2').innerHTML = "> Teleconverter (2)";
    }
}

function hide8(text){
    if(text=='s'){
        document.getElementById("contoo8").style.display = 'none'
        document.getElementById("hider9").style.display = 'none'
        document.getElementById("shower9").style.display = 'block'
    }
    if(text=='h'){
        document.getElementById("contoo8").style.display = 'block'
        document.getElementById("hider9").style.display = 'block'
        document.getElementById("shower9").style.display = 'none'
    } 
}

function m(){
    if(document.getElementById('m1').style.display=='none'){
        document.getElementById('m1').style.display='block';
        document.getElementById('m2').style.display='block';
        document.getElementById('m').innerHTML = "< Micro (2)";
    }
    else{
        document.getElementById('m1').style.display='none';
        document.getElementById('m2').style.display='none';
        document.getElementById('m').innerHTML = "> Micro (2)";
    }
}

function hide9(text){
    if(text=='s'){
        document.getElementById("contoo9").style.display = 'none'
        document.getElementById("hider10").style.display = 'none'
        document.getElementById("shower10").style.display = 'block'
    }
    if(text=='h'){
        document.getElementById("contoo9").style.display = 'block'
        document.getElementById("hider10").style.display = 'block'
        document.getElementById("shower10").style.display = 'none'
    } 
}

function f(){
    if(document.getElementById('f1').style.display=='none'){
        document.getElementById('f1').style.display='block';
        document.getElementById('f2').style.display='block';
        document.getElementById('f').innerHTML = "< All (28)";
    }
    else{
        document.getElementById('f1').style.display='none';
        document.getElementById('f2').style.display='none';
        document.getElementById('f').innerHTML = "> All (28)";
    }
}

function hide10(text){
    if(text=='s'){
        document.getElementById("contoo10").style.display = 'none'
        document.getElementById("hider11").style.display = 'none'
        document.getElementById("shower11").style.display = 'block'
    }
    if(text=='h'){
        document.getElementById("contoo10").style.display = 'block'
        document.getElementById("hider11").style.display = 'block'
        document.getElementById("shower11").style.display = 'none'
    } 
}


function sl(){
    if(document.getElementById('sl1').style.display=='none'){
        document.getElementById('sl1').style.display='block';
        document.getElementById('sl2').style.display='block';
        document.getElementById('sl').innerHTML = "< Speedlight (4)";
    }
    else{
        document.getElementById('sl1').style.display='none';
        document.getElementById('sl2').style.display='none';
        document.getElementById('sl').innerHTML = "> Speedlight (4)";
    }
}

function hide11(text){
    if(text=='s'){
        document.getElementById("contoo11").style.display = 'none'
        document.getElementById("hider12").style.display = 'none'
        document.getElementById("shower12").style.display = 'block'
    }
    if(text=='h'){
        document.getElementById("contoo11").style.display = 'block'
        document.getElementById("hider12").style.display = 'block'
        document.getElementById("shower12").style.display = 'none'
    } 
}

function bat(){
    if(document.getElementById('bat1').style.display=='none'){
        document.getElementById('bat1').style.display='block';
        document.getElementById('bat2').style.display='block';
        document.getElementById('bat').innerHTML = "< Batteries (8)";
    }
    else{
        document.getElementById('bat1').style.display='none';
        document.getElementById('bat2').style.display='none';
        document.getElementById('bat').innerHTML = "> Batteries (8)";
    }
}

function hide12(text){
    if(text=='s'){
        document.getElementById("contoo12").style.display = 'none'
        document.getElementById("hider13").style.display = 'none'
        document.getElementById("shower13").style.display = 'block'
    }
    if(text=='h'){
        document.getElementById("contoo12").style.display = 'block'
        document.getElementById("hider13").style.display = 'block'
        document.getElementById("shower13").style.display = 'none'
    } 
}

function cha(){
    if(document.getElementById('cha1').style.display=='none'){
        document.getElementById('cha1').style.display='block';
        document.getElementById('cha2').style.display='block';
        document.getElementById('cha').innerHTML = "< Chargers (11)";
    }
    else{
        document.getElementById('cha1').style.display='none';
        document.getElementById('cha2').style.display='none';
        document.getElementById('cha').innerHTML = "> Chargers (11)";
    }
}

function hide13(text){
    if(text=='s'){
        document.getElementById("contoo13").style.display = 'none'
        document.getElementById("hider14").style.display = 'none'
        document.getElementById("shower14").style.display = 'block'
    }
    if(text=='h'){
        document.getElementById("contoo13").style.display = 'block'
        document.getElementById("hider14").style.display = 'block'
        document.getElementById("shower14").style.display = 'none'
    } 
}

document.querySelectorAll('.navbar-brand')[0].setAttribute('href', '../../index.html');

document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    if (link.href === 'tel:+91 98102-73742') {
        link.href = 'tel:+91-9810064040';
        link.textContent = "Sales : +91-9810064040";
    }

    if (link.href === 'tel:+91 87001-08970') {
        link.href = 'tel:+91-011-47007093';
        link.textContent = "Service : +91-011-47007093";
    }
});

document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    if (link.href === 'tel:011-40648803') {
        link.href = 'tel:+91-9810064040';
        link.textContent = "+91-9810064040";
    }
});

document.querySelector(".whatsappbtn").setAttribute("href", "https://wa.link/yrtkts");

document.addEventListener("DOMContentLoaded", function() {
    let menuItem = document.getElementById("menu-item-406");
    if (menuItem) {
        menuItem.remove();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let categoryItem = document.querySelector(".cat-item.cat-item-20");
    if (categoryItem) {
        categoryItem.remove();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let navbarBrand = document.querySelector(".navbar-brand");
    if (navbarBrand) {
        navbarBrand.style.marginLeft = "-27px";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let schemaScript = document.querySelector('script.yoast-schema-graph');
    if (schemaScript) {
        let schemaJSON = JSON.parse(schemaScript.innerText);
        let schemaString = JSON.stringify(schemaJSON).replace(/towasales\.in/g, "photovision.co.in");
        schemaScript.innerText = schemaString;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a[href]").forEach(link => {
        link.href = link.href
            .replace(/indirect-ophthalmoscope-with-camera/g, "nikon-service")
            .replace(/indirect-ophthalmoscope/g, "nikon-products");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let searchForm = document.querySelector(".search-form");
    if (searchForm) {
        searchForm.action = searchForm.action.replace("towasales.in", "photovision.co.in");
    }
});

document.querySelector(".searchicon").remove();

(async function () {
    await import("https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js");

    // Initialize EmailJS
    emailjs.init("6jfa0_Zaw_1tvuoZ4"); // Replace with your public key
})();


if (document.getElementById('ServiceEnquiry') != null) {
    
    // Get the original image's data-src before replacing the content
    let originalImg = document.querySelector("#ServiceEnquiry img");
    let originalDataSrc = originalImg ? originalImg.getAttribute("data-src") : "../../wp-content/uploads/2023/08/service.png";

    document.getElementById("ServiceEnquiry").innerHTML = `

    <div class="container">
        <div class="row">
            <div class="col-lg-6" style="background: #f7f9fb; border-radius: 15px;">
                <div class="service-enquiry-form">
                    <h3 class="heading text-center"><strong>Sales & Service</strong> Enquiry</h3>
                    <form id="enquiry-form">
                        <div class="row">
                            <div class="col-md-6">
                                <p><input class="form-control" id="first-name" name="first-name" placeholder="First Name" required style="border-radius: 10px;"/></p>
                            </div>
                            <div class="col-md-6">
                                <p><input class="form-control" id="last-name" name="last-name" placeholder="Last Name" required style="border-radius: 10px;"/></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <p><input class="form-control" id="phone-number" name="phone-number" placeholder="Phone Number" type="tel" required style="border-radius: 10px;"/></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <p><input class="form-control" id="your-email" name="your-email" placeholder="Your Email" type="email" required style="border-radius: 10px;"/></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <p><textarea class="form-control" id="message" name="message" placeholder="Message" rows="5" required style="border-radius: 10px; resize: none;"></textarea></p>
                            </div>
                        </div>
                        <center>
                            <div class="g-recaptcha" data-sitekey="6LcBHOEqAAAAABTmy_ymLdlz_lB8Cak_YbsSB495"></div>
                        </center>
                        <p><input class="btn btn-primary" id="submit-enquiry" type="submit" value="Submit" /></p>
                    </form>
                    <p id="response-message" style="color: green; text-align: center;"></p>
                </div>
            </div>
            <div class="col-lg-6" style="background: #f7f9fb;">
                <div class="service-enquiry-image">
                    <img data-src="${originalDataSrc}" data-lazyloaded="1" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MzMiIGhlaWdodD0iNTUzIiB2aWV3Qm94PSIwIDAgNjMzIDU1MyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGw6I2NmZDRkYjtmaWxsLW9wYWNpdHk6IDAuMTsiLz48L3N2Zz4=" width="633" height="553" class="img-fluid" alt="Sales & Service Enquiry for Ophthalmology Equipment" />
                </div>
            </div>
        </div>
    </div>

    `;
}


if(document.getElementById('careerlll')!=null){
    
document.getElementById('careerlll').innerHTML = `


            <h3 class="heading text-center"><strong>Enquiry Form</strong></h3>
            <form id="enquiry-form">
                <div class="row">
                    <div class="col-md-6">
                        <p><input class="form-control" id="first-name" name="first-name" placeholder="First Name" required style="border-radius: 10px;"/></p>
                    </div>
                    <div class="col-md-6">
                        <p><input class="form-control" id="last-name" name="last-name" placeholder="Last Name" required style="border-radius: 10px;"/></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <p><input class="form-control" id="phone-number" name="phone-number" placeholder="Phone Number" type="tel" required style="border-radius: 10px;"/></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <p><input class="form-control" id="your-email" name="your-email" placeholder="Your Email" type="email" required style="border-radius: 10px;"/></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <p><textarea class="form-control" id="message" name="message" placeholder="Message" rows="5" required style="border-radius: 10px; resize: none;"></textarea></p>
                    </div>
                </div>
                <center>
                    <div class="g-recaptcha" data-sitekey="6LcBHOEqAAAAABTmy_ymLdlz_lB8Cak_YbsSB495"></div>
                    <p><input class="btn btn-primary" id="submit-enquiry" type="submit" value="Submit" /></p>
                </center>
                
            </form>
            <p id="response-message" style="color: green; text-align: center;"></p>
       
`

}


if(document.getElementById('contact-form1')!=null){
    
    document.getElementById('contact-form1').innerHTML = `
    
    
                <h3 class="heading text-center"><strong>Send a Message</strong></h3>
                <form id="enquiry-form">
                    <div class="row">
                        <div class="col-md-6">
                            <p><input class="form-control" id="first-name" name="first-name" placeholder="First Name" required style="border-radius: 10px;"/></p>
                        </div>
                        <div class="col-md-6">
                            <p><input class="form-control" id="last-name" name="last-name" placeholder="Last Name" required style="border-radius: 10px;"/></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p><input class="form-control" id="phone-number" name="phone-number" placeholder="Phone Number" type="tel" required style="border-radius: 10px;"/></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p><input class="form-control" id="your-email" name="your-email" placeholder="Your Email" type="email" required style="border-radius: 10px;"/></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p><textarea class="form-control" id="message" name="message" placeholder="Message" rows="5" required style="border-radius: 10px; resize: none;"></textarea></p>
                        </div>
                    </div>
                    <center>
                        <div class="g-recaptcha" data-sitekey="6LcBHOEqAAAAABTmy_ymLdlz_lB8Cak_YbsSB495"></div>
                        <p><input class="btn btn-primary" id="submit-enquiry" type="submit" value="Submit" /></p>
                    </center>
                    
                </form>
                <p id="response-message" style="color: green; text-align: center;"></p>
           
    `
    
    }

document.addEventListener("DOMContentLoaded", function () {
    let visionixLink = document.querySelector("#menu-item-1370 a");
    if (visionixLink) {
        visionixLink.href = "https://photovision.co.in/product-categories/hand-held-autorefractor-keratometer/index.html"; // Replace with your new URL
    }
});

// document.getElementById('menu-item-1370').href = 'photovision.co.in/product-categories/hand-held-autorefractor-keratometer/index.html';

document.getElementById("contact-form1").addEventListener("submit", function(event){
    event.preventDefault();

    emailjs.send("service_6el6djc", "template_y13nutu", {
        first_name: document.getElementById("first-name").value,
        last_name: document.getElementById("last-name").value,
        phone: document.getElementById("phone-number").value,
        email: document.getElementById("your-email").value,
        message: document.getElementById("message").value
    }).then(function(response) {
        document.getElementById("response-message").innerText = "Message sent successfully!";
        document.getElementById("enquiry-form").reset();
        grecaptcha.reset();
    }, function(error) {
        document.getElementById("response-message").innerText = "Failed to send message. Please try again.";
    });
});

document.getElementById("enquiry-form").addEventListener("submit", function(event){
    event.preventDefault();

    emailjs.send("service_6el6djc", "template_y13nutu", {
        first_name: document.getElementById("first-name").value,
        last_name: document.getElementById("last-name").value,
        phone: document.getElementById("phone-number").value,
        email: document.getElementById("your-email").value,
        message: document.getElementById("message").value
    }).then(function(response) {
        document.getElementById("response-message").innerText = "Message sent successfully!";
        document.getElementById("enquiry-form").reset();
        grecaptcha.reset();
    }, function(error) {
        document.getElementById("response-message").innerText = "Failed to send message. Please try again.";
    });
});



document.getElementById("career-form").addEventListener("submit", function(event){
    event.preventDefault();

    emailjs.send("service_6el6djc", "template_y13nutu", {
        first_name: document.getElementById("first-name").value,
        last_name: document.getElementById("last-name").value,
        phone: document.getElementById("phone-number").value,
        email: document.getElementById("your-email").value,
        message: document.getElementById("message").value
    }).then(function(response) {
        document.getElementById("response-message").innerText = "Message sent successfully!";
        document.getElementById("enquiry-form").reset();
        grecaptcha.reset();
    }, function(error) {
        document.getElementById("response-message").innerText = "Failed to send message. Please try again.";
    });
});


