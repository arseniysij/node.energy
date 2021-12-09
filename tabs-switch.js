var Webflow = Webflow || [];
Webflow.push(function () {
   const tabs = $('.ts-tabsmenu .w-tab-link');
   let tabDelay = 2000;
   let tabCounter = 0;
   let exitFunc = false;
   function switchTab() {
      if (exitFunc) {
         $('.ts-tabsmenu').unbind();
         return;
      }
      $('.ts-tabsmenu').unbind();
      tabs[tabCounter].click();
      $('.ts-tabsmenu').click(function () {
         exitFunc = true;
      });
      tabCounter += 1;
      setTimeout(switchTab, tabDelay);
      if (tabs.length == tabCounter) {
         tabCounter = 0;
      }
   }
   switchTab();
   $('.page-button_cta.cc-combo_width.w-button').click(function () {
      if (exitFunc == false) {
         exitFunc = true;
         setTimeout(CheckFormOpened, 1000);
      }
   })
   function CheckFormOpened() {
      if ($('.pop-up-mailchimp').css('display') == 'none') {
         exitFunc = false;
         switchTab();
      } else {
         setTimeout(CheckFormOpened, 1000);
      }
   }
});