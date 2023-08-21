import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const Header_vue_vue_type_style_index_0_lang = '.site-header{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);background:#fff;box-shadow:0 0 20px rgba(0,102,136,.2);position:sticky;top:0;z-index:1}.site-header:after{background-image:linear-gradient(90deg,var(--primary),var(--secondary));content:"";display:block;height:3px}.site-header .header-bar{align-items:center;display:grid;grid-template-columns:1fr auto;padding:1rem 1.8rem}.site-header .header-bar .home-link{color:var(--primary);font-size:1.4rem;font-style:italic;font-weight:700}.site-header .header-bar .home-link em{color:var(--secondary)}.site-header .header-bar .logo-with-sub{align-items:center;display:grid;grid-template-columns:auto 1fr}.site-header .header-bar .sub-title{border-left:1px solid #aaa;color:#aaa;display:inline-block;line-height:1;margin-left:1rem;overflow:hidden;padding-left:1rem;text-overflow:ellipsis;white-space:nowrap}.site-header a{text-decoration:none}.site-header a:hover{text-decoration:initial}';

const Footer_vue_vue_type_style_index_0_lang = ".site-footer{padding:2rem 1.8rem;text-align:center}";

const default_vue_vue_type_style_index_0_lang = ":root{--primary:#f7b530;--secondary:#1ec6dd;--tertiary:#78ba2a;--white:#fcfcfc;--black:#111;--red:#f84c47;--green:#93cb5c;--blue:#29b0c3;--textfield-border-color:#654;--textfield-focus-border-color:#789;--alert-border:#ffa09c;--alert-bg:#ffd2d0;--carousel-pagination:var(--green)}html{background:#fff;background-image:url(" + publicAssetsURL("images/dot_bg.png") + ");background-size:300px 300px;color:#222;font-family:sans-serif;font-size:16px}body{margin:0}a{color:currentColor}h2{-webkit-background-clip:text;background-clip:text;background-image:linear-gradient(90deg,#29b0c3,#abc329);color:transparent;width:-moz-fit-content;width:fit-content}hr{background:#fff;border:3px solid #eee;border-radius:100px;height:2px;margin:2rem 0}input,textarea{border:2px solid var(--textfield-border-color);border-radius:.2rem;box-sizing:border-box;display:block;font-size:1rem;outline:none;padding:.8rem .4rem;width:100%}input:focus,textarea:focus{border-color:var(--textfield-focus-border-color)}.btn,button{background:var(--primary);border:2px solid var(--primary);border-radius:.4rem;box-sizing:border-box;color:currentColor;cursor:pointer;display:inline-block;font-size:1rem;font-weight:700;margin:.4rem;padding:.8rem 2.2rem;text-align:center;transition:filter .3s,box-shadow .3s}.btn.active,.btn:hover,button.active,button:hover{filter:brightness(1.1)}.btn.active,button.active{border-color:rgba(0,0,0,.267)}.btn:disabled,button:disabled{filter:grayscale(80%) brightness(1.2);pointer-events:none}.btn.outline,button.outline{background:var(--white);color:var(--primary)}.btn.outline.active,.btn.outline:hover,button.outline.active,button.outline:hover{background:var(--primary);color:currentColor}.btn.secondary,button.secondary{background:var(--secondary);border:2px solid var(--secondary)}.btn.outline.secondary,button.outline.secondary{background:var(--white);color:var(--secondary)}.btn.outline.secondary.active,.btn.outline.secondary:hover,button.outline.secondary.active,button.outline.secondary:hover{background:var(--secondary);color:currentColor}.btn.tertiary,button.tertiary{background:var(--tertiary);border:2px solid var(--tertiary)}.btn.outline.tertiary,button.outline.tertiary{background:var(--white);color:var(--tertiary)}.btn.outline.tertiary.active,.btn.outline.tertiary:hover,button.outline.tertiary.active,button.outline.tertiary:hover{background:var(--tertiary);color:currentColor}.btn.small,button.small{font-size:.75rem;padding:.2rem 1rem}table{background:var(--white);border-collapse:separate;border-spacing:0;text-align:center;width:100%}table th{background:var(--green)}table th:first-child{border-top-left-radius:1rem}table th:last-child{border-top-right-radius:1rem}table td,table th{border-bottom:1px solid var(--green);border-right:1px solid var(--green);padding:.8rem 1rem}table td:first-child,table th:first-child{border-left:1px solid var(--green)}table tbody tr:last-child td:first-child{border-bottom-left-radius:1rem}table tbody tr:last-child td:last-child{border-bottom-right-radius:1rem}.alert{background:var(--alert-bg);border:1px solid var(--alert-border);border-radius:.4rem;margin:1rem 0;padding:.75rem}.alert .title{font-weight:700}.layout .main{padding:1rem 1.8rem}.google-ad{margin:2rem 0}.google-ad ins[data-ad-status=unfilled]{display:none!important}._test .actions{text-align:center}@media (max-width:767px){._test .actions button{display:block;margin:.4rem 0;width:100%}}._test .answers{text-align:center}._test .answers .answer-head{font-weight:700;margin-bottom:2rem}._test .result{color:var(--primary);font-size:2rem;margin-top:2rem;text-align:center}._test .notice-list{padding:1rem 0 1rem 2.4rem}._test .notice-list,._test .voc-list{background:var(--green);border-radius:1rem;color:var(--white);font-weight:700;line-height:2}._test .voc-list{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;padding:1rem 1.4rem}@media (max-width:991px){._test .voc-list{grid-template-columns:1fr 1fr 1fr}}@media (max-width:767px){._test .voc-list{grid-template-columns:1fr 1fr}}";

const defaultStyles_1448f12a = [Header_vue_vue_type_style_index_0_lang, Footer_vue_vue_type_style_index_0_lang, default_vue_vue_type_style_index_0_lang, default_vue_vue_type_style_index_0_lang];

export { defaultStyles_1448f12a as default };
//# sourceMappingURL=default-styles.1448f12a.mjs.map