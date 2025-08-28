(function(){let recaptchaWidgets=[];recaptchaCallback=function(){let forms=document.getElementsByTagName('form');let pattern=/(^|\s)g-recaptcha(\s|$)/;for(let i=0;i<forms.length;i++){let recaptchas=forms[i].getElementsByClassName('wpcf7-recaptcha');for(let j=0;j<recaptchas.length;j++){let sitekey=recaptchas[j].getAttribute('data-sitekey');if(recaptchas[j].className&&recaptchas[j].className.match(pattern)&&sitekey){let params={'sitekey':sitekey,'type':recaptchas[j].getAttribute('data-type'),'size':recaptchas[j].getAttribute('data-size'),'theme':recaptchas[j].getAttribute('data-theme'),'align':recaptchas[j].getAttribute('data-align'),'badge':recaptchas[j].getAttribute('data-badge'),'tabindex':recaptchas[j].getAttribute('data-tabindex')};let callback=recaptchas[j].getAttribute('data-callback');if(callback&&'function'==typeof window[callback]){params.callback=window[callback]}
let expired_callback=recaptchas[j].getAttribute('data-expired-callback');if(expired_callback&&'function'==typeof window[expired_callback]){params['expired-callback']=window[expired_callback]}
let widget_id=grecaptcha.render(recaptchas[j],params);recaptchaWidgets.push(widget_id);break}}}};document.addEventListener('wpcf7submit',function(event){switch(event.detail.status){case 'spam':case 'mail_sent':case 'mail_failed':for(let i=0;i<recaptchaWidgets.length;i++){grecaptcha.reset(recaptchaWidgets[i])}}},!1)})()
;

// Wait for the entire page, including all scripts and styles, to load
window.addEventListener('load', function() {
    
    // Add a tiny delay to ensure any menu-building scripts have finished
    //setTimeout(function() {
        // 1. Select the target menu and the link we'll use as a template
        const takagiSubMenu = document.querySelector('#menu-item-470 .dropdown-menu');
        const digitalImagingLink = document.querySelector('#menu-item-398 a'); // The "Digital Imaging Systems" link

        // 2. Check if BOTH elements were found before proceeding
        if (takagiSubMenu && digitalImagingLink) {
            
            // 3. Get the URL from the existing link and create the new one
            const referenceUrl = digitalImagingLink.href;
            const newUrl = referenceUrl.replace('/digital-imaging-system/', '/diagnostic/'); // Dynamically create the new path

            // 4. Create a new, empty <li> element
            const newLi = document.createElement('li');

            // 5. Set the necessary classes and attributes
            newLi.id = "menu-item-501"; // A new unique ID
            newLi.className = "menu-item menu-item-type-taxonomy menu-item-object-product_categories menu-item-501";
            newLi.setAttribute('itemscope', 'itemscope');
            newLi.setAttribute('itemtype', 'https://www.schema.org/SiteNavigationElement');
            
            // 6. Set its inner HTML using the NEW, dynamic URL
            newLi.innerHTML = `<a title="Diagnostic & Specialist" href="${newUrl}" class="dropdown-item">
                <i class="fa fa-fw" aria-hidden="true"></i>Diagnostic & Specialist
            </a>`;

            // 7. Append the new list item to the submenu
            takagiSubMenu.appendChild(newLi);

        } else {
            console.log("Error: Could not find the Takagi submenu or the Digital Imaging link.");
        }
    //}, 100); // 100 milliseconds delay

});
