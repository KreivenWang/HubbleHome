import Vue from 'vue';
import VueI18n from 'vue-i18n';
import $ from 'jquery';
Vue.use(VueI18n);

// ---- example ----
// var getLangPacks = () => {
//   return {
//     en: {
//       message: {
//         hello: 'hello world'
//       }
//     },
//     zh: {
//       message: {
//         hello: '你好世界'
//       }
//     }
//   };
// };

let getLangPack = () => {
  let langPack = {};
  let langs = [
    'en',
    'zh'
  ];
  $.ajaxSettings.async = false;
  langs.forEach(function (lang) {
    var jsonUrl = '/static/lang/' + lang + '.json';
    $.getJSON(jsonUrl, (langData) => {
      Object.assign(langPack, langData);
    });
  });
  $.ajaxSettings.async = true;
  return langPack;
};

export default new VueI18n({
  locale: 'zh',
  messages: getLangPack()
});
