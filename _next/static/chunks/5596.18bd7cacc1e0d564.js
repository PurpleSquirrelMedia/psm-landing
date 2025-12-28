"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5596],{4054:function(t,e,i){i.d(e,{a:function(){return d},e:function(){return z},f:function(){return b},m:function(){return k},n:function(){return o},o:function(){return l},r:function(){return s}});var n=i(17718);let r={attribute:!0,type:String,converter:n.u,reflect:!1,hasChanged:n.h},a=(t=r,e,i)=>{let{kind:n,metadata:a}=i,o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===n){let{name:n}=i;return{set(i){let r=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,r,t)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){let{name:n}=i;return function(i){let r=this[n];e.call(this,i),this.requestUpdate(n,r,t)}}throw Error("Unsupported decorator location: "+n)};function o(t){return(e,i)=>"object"==typeof i?a(t,e,i):((t,e,i)=>{let n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function s(t){return o({...t,state:!0,attribute:!1})}let l=t=>t??n.E,c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,h=t=>void 0===t.strings,d=t=>(...e)=>({_$litDirective$:t,values:e}),g=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},u=(t,e)=>{let i=t._$AN;if(void 0===i)return!1;for(let t of i)t._$AO?.(e,!1),u(t,e);return!0},p=t=>{let e,i;do{if(void 0===(e=t._$AM))break;(i=e._$AN).delete(t),t=e}while(i?.size===0)},w=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),y(e)}};function f(t){void 0!==this._$AN?(p(this),this._$AM=t,w(this)):this._$AM=t}function v(t,e=!1,i=0){let n=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size){if(e){if(Array.isArray(n))for(let t=i;t<n.length;t++)u(n[t],!1),p(n[t]);else null!=n&&(u(n,!1),p(n))}else u(this,t)}}let y=t=>{2==t.type&&(t._$AP??=v,t._$AQ??=f)};class b extends g{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),w(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(u(this,t),p(this))}setValue(t){if(h(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class m{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class ${constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}let S=t=>!c(t)&&"function"==typeof t.then;class x extends b{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cbt=[],this._$CK=new m(this),this._$CX=new $}render(...t){return t.find(t=>!S(t))??n.T}update(t,e){let i=this._$Cbt,r=i.length;this._$Cbt=e;let a=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){let n=e[t];if(!S(n))return this._$Cwt=t,n;t<r&&n===i[t]||(this._$Cwt=1073741823,r=0,Promise.resolve(n).then(async t=>{for(;o.get();)await o.get();let e=a.deref();if(void 0!==e){let i=e._$Cbt.indexOf(n);i>-1&&i<e._$Cwt&&(e._$Cwt=i,e.setValue(t))}}))}return n.T}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}let k=d(x),z=d(class extends g{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let i=t.element.classList;for(let t of this.st)t in e||(i.remove(t),this.st.delete(t));for(let t in e){let n=!!e[t];n===this.st.has(t)||this.nt?.has(t)||(n?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return n.T}})},95596:function(t,e,i){i.d(e,{U:function(){return o},c:function(){return s}});var n=i(17718),r=i(4054),a=i(19872);let o={getSpacingStyles:(t,e)=>Array.isArray(t)?t[e]?`var(--wui-spacing-${t[e]})`:void 0:"string"==typeof t?`var(--wui-spacing-${t})`:void 0,getFormattedDate:t=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t),getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString:({string:t,charsStart:e,charsEnd:i,truncate:n})=>t.length<=e+i?t:"end"===n?`${t.substring(0,e)}...`:"start"===n?`...${t.substring(t.length-i)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(i))}`,generateAvatarColors(t){let e=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),i=this.hexToRgb(e),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),r=100-3*Number(n?.replace("px","")),a=`${r}% ${r}% at 65% 40%`,o=[];for(let t=0;t<5;t+=1){let e=this.tintColor(i,.15*t);o.push(`rgb(${e[0]}, ${e[1]}, ${e[2]})`)}return`
    --local-color-1: ${o[0]};
    --local-color-2: ${o[1]};
    --local-color-3: ${o[2]};
    --local-color-4: ${o[3]};
    --local-color-5: ${o[4]};
    --local-radial-circle: ${a}
   `},hexToRgb(t){let e=parseInt(t,16);return[e>>16&255,e>>8&255,255&e]},tintColor(t,e){let[i,n,r]=t;return[Math.round(i+(255-i)*e),Math.round(n+(255-n)*e),Math.round(r+(255-r)*e)]},isNumber:t=>/^[0-9]+$/u.test(t),getColorTheme:t=>t||("u">typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)")?.matches?"dark":"light":"dark"),splitBalance(t){let e=t.split(".");return 2===e.length?[e[0],e[1]]:["0","00"]},roundNumber:(t,e,i)=>t.toString().length>=e?Number(t).toFixed(i):t,formatNumberToLocalString:(t,e=2)=>void 0===t?"0.00":"number"==typeof t?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})};function s(t){return function(e){return"function"==typeof e?(customElements.get(t)||customElements.define(t,e),e):function(t,e){let{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){customElements.get(t)||customElements.define(t,e)}}}(t,e)}}let l=(0,n.i)`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var c=function(t,e,i,n){var r,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(a<3?r(o):a>3?r(e,i,o):r(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o};let h=class extends n.e{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&o.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&o.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&o.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&o.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&o.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&o.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&o.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&o.getSpacingStyles(this.margin,3)};
    `,(0,n.x)`<slot></slot>`}};h.styles=[a.r,l],c([(0,r.n)()],h.prototype,"flexDirection",void 0),c([(0,r.n)()],h.prototype,"flexWrap",void 0),c([(0,r.n)()],h.prototype,"flexBasis",void 0),c([(0,r.n)()],h.prototype,"flexGrow",void 0),c([(0,r.n)()],h.prototype,"flexShrink",void 0),c([(0,r.n)()],h.prototype,"alignItems",void 0),c([(0,r.n)()],h.prototype,"justifyContent",void 0),c([(0,r.n)()],h.prototype,"columnGap",void 0),c([(0,r.n)()],h.prototype,"rowGap",void 0),c([(0,r.n)()],h.prototype,"gap",void 0),c([(0,r.n)()],h.prototype,"padding",void 0),c([(0,r.n)()],h.prototype,"margin",void 0),h=c([s("wui-flex")],h);class d{constructor(){this.cache=new Map}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}}let g=new d,u=(0,n.i)`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var p=function(t,e,i,n){var r,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(a<3?r(o):a>3?r(e,i,o):r(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o};let w={add:async()=>(await i.e(1005).then(i.bind(i,81005))).addSvg,allWallets:async()=>(await i.e(7331).then(i.bind(i,57331))).allWalletsSvg,arrowBottomCircle:async()=>(await i.e(8259).then(i.bind(i,88259))).arrowBottomCircleSvg,appStore:async()=>(await i.e(6708).then(i.bind(i,86708))).appStoreSvg,apple:async()=>(await i.e(4998).then(i.bind(i,84998))).appleSvg,arrowBottom:async()=>(await i.e(2298).then(i.bind(i,32298))).arrowBottomSvg,arrowLeft:async()=>(await i.e(5308).then(i.bind(i,85308))).arrowLeftSvg,arrowRight:async()=>(await i.e(2540).then(i.bind(i,2540))).arrowRightSvg,arrowTop:async()=>(await i.e(915).then(i.bind(i,40915))).arrowTopSvg,bank:async()=>(await i.e(9385).then(i.bind(i,49385))).bankSvg,browser:async()=>(await i.e(6973).then(i.bind(i,26973))).browserSvg,card:async()=>(await i.e(9422).then(i.bind(i,59422))).cardSvg,checkmark:async()=>(await i.e(9782).then(i.bind(i,39782))).checkmarkSvg,checkmarkBold:async()=>(await i.e(2120).then(i.bind(i,42120))).checkmarkBoldSvg,chevronBottom:async()=>(await i.e(1431).then(i.bind(i,61431))).chevronBottomSvg,chevronLeft:async()=>(await i.e(9556).then(i.bind(i,39556))).chevronLeftSvg,chevronRight:async()=>(await i.e(5804).then(i.bind(i,75804))).chevronRightSvg,chevronTop:async()=>(await i.e(5226).then(i.bind(i,25226))).chevronTopSvg,chromeStore:async()=>(await i.e(8278).then(i.bind(i,98278))).chromeStoreSvg,clock:async()=>(await i.e(6737).then(i.bind(i,26737))).clockSvg,close:async()=>(await i.e(4692).then(i.bind(i,94692))).closeSvg,compass:async()=>(await i.e(3124).then(i.bind(i,33124))).compassSvg,coinPlaceholder:async()=>(await i.e(8959).then(i.bind(i,18959))).coinPlaceholderSvg,copy:async()=>(await i.e(4196).then(i.bind(i,44196))).copySvg,cursor:async()=>(await i.e(9377).then(i.bind(i,9377))).cursorSvg,cursorTransparent:async()=>(await i.e(8179).then(i.bind(i,58179))).cursorTransparentSvg,desktop:async()=>(await i.e(7324).then(i.bind(i,37324))).desktopSvg,disconnect:async()=>(await i.e(7406).then(i.bind(i,37406))).disconnectSvg,discord:async()=>(await i.e(9526).then(i.bind(i,39526))).discordSvg,etherscan:async()=>(await i.e(1523).then(i.bind(i,11523))).etherscanSvg,extension:async()=>(await i.e(3508).then(i.bind(i,73508))).extensionSvg,externalLink:async()=>(await i.e(5558).then(i.bind(i,25558))).externalLinkSvg,facebook:async()=>(await i.e(3182).then(i.bind(i,53182))).facebookSvg,farcaster:async()=>(await i.e(7006).then(i.bind(i,87006))).farcasterSvg,filters:async()=>(await i.e(6712).then(i.bind(i,76712))).filtersSvg,github:async()=>(await i.e(8631).then(i.bind(i,58631))).githubSvg,google:async()=>(await i.e(3154).then(i.bind(i,83154))).googleSvg,helpCircle:async()=>(await i.e(8356).then(i.bind(i,18356))).helpCircleSvg,image:async()=>(await i.e(1618).then(i.bind(i,61618))).imageSvg,id:async()=>(await i.e(8478).then(i.bind(i,38478))).idSvg,infoCircle:async()=>(await i.e(2238).then(i.bind(i,2238))).infoCircleSvg,lightbulb:async()=>(await i.e(7753).then(i.bind(i,77753))).lightbulbSvg,mail:async()=>(await i.e(4979).then(i.bind(i,64979))).mailSvg,mobile:async()=>(await i.e(5620).then(i.bind(i,85620))).mobileSvg,more:async()=>(await i.e(5238).then(i.bind(i,75238))).moreSvg,networkPlaceholder:async()=>(await i.e(9119).then(i.bind(i,89119))).networkPlaceholderSvg,nftPlaceholder:async()=>(await i.e(3381).then(i.bind(i,33381))).nftPlaceholderSvg,off:async()=>(await i.e(9534).then(i.bind(i,79534))).offSvg,playStore:async()=>(await i.e(3306).then(i.bind(i,83306))).playStoreSvg,plus:async()=>(await i.e(8559).then(i.bind(i,68559))).plusSvg,qrCode:async()=>(await i.e(8588).then(i.bind(i,88588))).qrCodeIcon,recycleHorizontal:async()=>(await i.e(7180).then(i.bind(i,27180))).recycleHorizontalSvg,refresh:async()=>(await i.e(5668).then(i.bind(i,55668))).refreshSvg,search:async()=>(await i.e(1360).then(i.bind(i,51360))).searchSvg,send:async()=>(await i.e(1766).then(i.bind(i,51766))).sendSvg,swapHorizontal:async()=>(await i.e(6882).then(i.bind(i,46882))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await i.e(4863).then(i.bind(i,4863))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await i.e(4515).then(i.bind(i,34515))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await i.e(6021).then(i.bind(i,86021))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await i.e(2734).then(i.bind(i,62734))).swapVerticalSvg,telegram:async()=>(await i.e(4389).then(i.bind(i,44389))).telegramSvg,threeDots:async()=>(await i.e(7218).then(i.bind(i,67218))).threeDotsSvg,twitch:async()=>(await i.e(4346).then(i.bind(i,4346))).twitchSvg,twitter:async()=>(await i.e(7143).then(i.bind(i,77143))).xSvg,twitterIcon:async()=>(await i.e(9043).then(i.bind(i,39043))).twitterIconSvg,verify:async()=>(await i.e(1755).then(i.bind(i,31755))).verifySvg,verifyFilled:async()=>(await i.e(7055).then(i.bind(i,47055))).verifyFilledSvg,wallet:async()=>(await i.e(9841).then(i.bind(i,99841))).walletSvg,walletConnect:async()=>(await i.e(2312).then(i.bind(i,42312))).walletConnectSvg,walletConnectLightBrown:async()=>(await i.e(2312).then(i.bind(i,42312))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await i.e(2312).then(i.bind(i,42312))).walletConnectBrownSvg,walletPlaceholder:async()=>(await i.e(5866).then(i.bind(i,35866))).walletPlaceholderSvg,warningCircle:async()=>(await i.e(7231).then(i.bind(i,17231))).warningCircleSvg,x:async()=>(await i.e(7143).then(i.bind(i,77143))).xSvg,info:async()=>(await i.e(7963).then(i.bind(i,27963))).infoSvg,exclamationTriangle:async()=>(await i.e(6044).then(i.bind(i,1744))).exclamationTriangleSvg,reown:async()=>(await i.e(539).then(i.bind(i,80539))).reownSvg};async function f(t){if(g.has(t))return g.get(t);let e=(w[t]??w.copy)();return g.set(t,e),e}let v=class extends n.e{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
      --local-aspect-ratio: ${this.aspectRatio}
    `,(0,n.x)`${(0,r.m)(f(this.name),(0,n.x)`<div class="fallback"></div>`)}`}};v.styles=[a.r,a.k,u],p([(0,r.n)()],v.prototype,"size",void 0),p([(0,r.n)()],v.prototype,"name",void 0),p([(0,r.n)()],v.prototype,"color",void 0),p([(0,r.n)()],v.prototype,"aspectRatio",void 0),v=p([s("wui-icon")],v);let y=(0,n.i)`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var b=function(t,e,i,n){var r,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(a<3?r(o):a>3?r(e,i,o):r(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o};let m=class extends n.e{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){let t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,(0,n.x)`<slot class=${(0,r.e)(t)}></slot>`}};m.styles=[a.r,y],b([(0,r.n)()],m.prototype,"variant",void 0),b([(0,r.n)()],m.prototype,"color",void 0),b([(0,r.n)()],m.prototype,"align",void 0),b([(0,r.n)()],m.prototype,"lineClamp",void 0),m=b([s("wui-text")],m);let $=(0,n.i)`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var S=function(t,e,i,n){var r,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(a<3?r(o):a>3?r(e,i,o):r(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o};let x=class extends n.e{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let t=this.iconSize||this.size,e="lg"===this.size,i="xl"===this.size,r="gray"===this.background,a="opaque"===this.background,o="accent-100"===this.backgroundColor&&a||"success-100"===this.backgroundColor&&a||"error-100"===this.backgroundColor&&a||"inverse-100"===this.backgroundColor&&a,s=`var(--wui-color-${this.backgroundColor})`;return o?s=`var(--wui-icon-box-bg-${this.backgroundColor})`:r&&(s=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${s};
       --local-bg-mix: ${o||r?"100%":e?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${e?"xxs":i?"s":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,(0,n.x)` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};x.styles=[a.r,a.e,$],S([(0,r.n)()],x.prototype,"size",void 0),S([(0,r.n)()],x.prototype,"backgroundColor",void 0),S([(0,r.n)()],x.prototype,"iconColor",void 0),S([(0,r.n)()],x.prototype,"iconSize",void 0),S([(0,r.n)()],x.prototype,"background",void 0),S([(0,r.n)({type:Boolean})],x.prototype,"border",void 0),S([(0,r.n)()],x.prototype,"borderColor",void 0),S([(0,r.n)()],x.prototype,"icon",void 0),x=S([s("wui-icon-box")],x);let k=(0,n.i)`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var z=function(t,e,i,n){var r,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(a<3?r(o):a>3?r(e,i,o):r(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o};let C=class extends n.e{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,(0,n.x)`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};C.styles=[a.r,a.k,k],z([(0,r.n)()],C.prototype,"src",void 0),z([(0,r.n)()],C.prototype,"alt",void 0),z([(0,r.n)()],C.prototype,"size",void 0),C=z([s("wui-image")],C);let _=(0,n.i)`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var j=function(t,e,i,n){var r,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(a<3?r(o):a>3?r(e,i,o):r(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o};let A=class extends n.e{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let t="md"===this.size?"mini-700":"micro-700";return(0,n.x)`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};A.styles=[a.r,_],j([(0,r.n)()],A.prototype,"variant",void 0),j([(0,r.n)()],A.prototype,"size",void 0),A=j([s("wui-tag")],A);let R=(0,n.i)`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var P=function(t,e,i,n){var r,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(a<3?r(o):a>3?r(e,i,o):r(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o};let O=class extends n.e{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${"inherit"===this.color?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,(0,n.x)`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};O.styles=[a.r,R],P([(0,r.n)()],O.prototype,"color",void 0),P([(0,r.n)()],O.prototype,"size",void 0),P([s("wui-loading-spinner")],O)}}]);