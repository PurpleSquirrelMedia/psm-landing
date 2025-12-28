"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[374],{40374:function(e,t,i){i.r(t),i.d(t,{W3mModal:function(){return _}});var o=i(17718),r=i(4054),a=i(19872),s=i(95596);let n=(0,o.p)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),c={state:n,subscribe:e=>(0,o.s)(n,()=>e(n)),subscribeKey:(e,t)=>(0,o.a)(n,e,t),showTooltip({message:e,triggerRect:t,variant:i}){n.open=!0,n.message=e,n.triggerRect=t,n.variant=i},hide(){n.open=!1,n.message="",n.triggerRect={width:0,height:0,top:0,left:0}}},l=(0,o.i)`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`,w=class extends o.e{render(){return(0,o.x)`<slot></slot>`}};w.styles=[a.r,l],w=function(e,t,i,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,i,s):r(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s}([(0,s.c)("wui-card")],w);let d=(0,o.i)`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;var p=function(e,t,i,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,i,s):r(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let u=class extends o.e{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `,(0,o.x)`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){a.l.close()}};u.styles=[a.r,d],p([(0,r.n)()],u.prototype,"message",void 0),p([(0,r.n)()],u.prototype,"backgroundColor",void 0),p([(0,r.n)()],u.prototype,"iconColor",void 0),p([(0,r.n)()],u.prototype,"icon",void 0),u=p([(0,s.c)("wui-alertbar")],u);let h=(0,o.i)`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;var m=function(e,t,i,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,i,s):r(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let v={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}},g=class extends o.e{constructor(){super(),this.unsubscribe=[],this.open=a.l.state.open,this.onOpen(!0),this.unsubscribe.push(a.l.subscribeKey("open",e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=a.l.state,i=v[t];return(0,o.x)`
      <wui-alertbar
        message=${e}
        backgroundColor=${i?.backgroundColor}
        iconColor=${i?.iconColor}
        icon=${i?.icon}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};g.styles=h,m([(0,r.r)()],g.prototype,"open",void 0),g=m([(0,s.c)("w3m-alertbar")],g);let f=(0,o.i)`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var b=function(e,t,i,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,i,s):r(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let y=class extends o.e{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){let e="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",t="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
`,(0,o.x)`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};y.styles=[a.r,a.e,a.k,f],b([(0,r.n)()],y.prototype,"size",void 0),b([(0,r.n)({type:Boolean})],y.prototype,"disabled",void 0),b([(0,r.n)()],y.prototype,"icon",void 0),b([(0,r.n)()],y.prototype,"iconColor",void 0),y=b([(0,s.c)("wui-icon-link")],y);let x=(0,o.i)`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var k=function(e,t,i,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,i,s):r(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let C=class extends o.e{constructor(){super(...arguments),this.imageSrc=""}render(){return(0,o.x)`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?(0,o.x)`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:(0,o.x)`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};C.styles=[a.r,a.e,a.k,x],k([(0,r.n)()],C.prototype,"imageSrc",void 0),C=k([(0,s.c)("wui-select")],C);let R=(0,o.i)`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var S=function(e,t,i,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,i,s):r(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let O=["SmartSessionList"];function N(){let e=a.R.state.data?.connector?.name,t=a.R.state.data?.wallet?.name,i=a.R.state.data?.network?.name,o=t??e,r=a.C.getConnectors();return{Connect:`Connect ${1===r.length&&r[0]?.id==="w3m-email"?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:o??"Connect Wallet",ConnectingWalletConnect:o??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:o?`Get ${o}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Profile:void 0,SwitchNetwork:i??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:a.o.state.socialProvider?a.o.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In"}}let T=class extends o.e{constructor(){super(),this.unsubscribe=[],this.heading=N()[a.R.state.view],this.network=a.j.state.activeCaipNetwork,this.networkImage=a.c.getNetworkImage(this.network),this.buffering=!1,this.showBack=!1,this.prevHistoryLength=1,this.view=a.R.state.view,this.viewDirection="",this.headerText=N()[a.R.state.view],this.unsubscribe.push(a.g.subscribeNetworkImages(()=>{this.networkImage=a.c.getNetworkImage(this.network)}),a.R.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.headerText=N()[e]},a.m.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),a.d.subscribeKey("buffering",e=>this.buffering=e),a.j.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=a.c.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,o.x)`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){a.E.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),a.R.push("WhatIsAWallet")}async onClose(){"UnsupportedChain"===a.R.state.view||await a.n.isSIWXCloseDisabled()?a.M.shake():a.M.close()}rightHeaderTemplate(){let e=a.O?.state?.features?.smartSessions;return"Account"===a.R.state.view&&e?(0,o.x)`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>a.R.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return(0,o.x)`
      <wui-icon-link
        ?disabled=${this.buffering}
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){let e=O.includes(this.view);return(0,o.x)`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e?(0,o.x)`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){let{view:e}=a.R.state,t="Connect"===e,i=a.O.state.enableEmbedded,s=a.O.state.enableNetworkSwitch;return"Account"===e&&s?(0,o.x)`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,r.o)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,r.o)(this.networkImage)}
      ></wui-select>`:this.showBack&&!("ApproveTransaction"===e||"ConnectingSiwe"===e||t&&i)?(0,o.x)`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:(0,o.x)`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(a.E.sendEvent({type:"track",event:"CLICK_NETWORKS"}),a.R.push("Networks"))}isAllowedNetworkSwitch(){let e=a.j.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find(({id:e})=>e===this.network?.id);return t||!i}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){let{history:e}=a.R.state,t=a.m.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=a.m.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){let{history:e}=a.R.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){a.R.goBack()}};T.styles=R,S([(0,r.r)()],T.prototype,"heading",void 0),S([(0,r.r)()],T.prototype,"network",void 0),S([(0,r.r)()],T.prototype,"networkImage",void 0),S([(0,r.r)()],T.prototype,"buffering",void 0),S([(0,r.r)()],T.prototype,"showBack",void 0),S([(0,r.r)()],T.prototype,"prevHistoryLength",void 0),S([(0,r.r)()],T.prototype,"view",void 0),S([(0,r.r)()],T.prototype,"viewDirection",void 0),S([(0,r.r)()],T.prototype,"headerText",void 0),T=S([(0,s.c)("w3m-header")],T);let A=(0,o.i)`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var E=function(e,t,i,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,i,s):r(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let W=class extends o.e{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return(0,o.x)`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?(0,o.x)`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:"default"===this.iconType?(0,o.x)`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:(0,o.x)`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};W.styles=[a.r,A],E([(0,r.n)()],W.prototype,"backgroundColor",void 0),E([(0,r.n)()],W.prototype,"iconColor",void 0),E([(0,r.n)()],W.prototype,"icon",void 0),E([(0,r.n)()],W.prototype,"message",void 0),E([(0,r.n)()],W.prototype,"loading",void 0),E([(0,r.n)()],W.prototype,"iconType",void 0),W=E([(0,s.c)("wui-snackbar")],W);let $=(0,o.i)`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var I=function(e,t,i,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,i,s):r(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let P={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},j=class extends o.e{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=a.h.state.open,this.unsubscribe.push(a.h.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t,svg:i}=a.h.state,r=P[t],{icon:s,iconColor:n}=i??r??{};return(0,o.x)`
      <wui-snackbar
        message=${e}
        backgroundColor=${r?.backgroundColor}
        iconColor=${n}
        icon=${s}
        .loading=${"loading"===t}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),a.h.state.autoClose&&(this.timeout=setTimeout(()=>a.h.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};j.styles=$,I([(0,r.r)()],j.prototype,"open",void 0),j=I([(0,s.c)("w3m-snackbar")],j);let D=(0,o.i)`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var B=function(e,t,i,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,i,s):r(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let z=class extends o.e{constructor(){super(),this.unsubscribe=[],this.open=c.state.open,this.message=c.state.message,this.triggerRect=c.state.triggerRect,this.variant=c.state.variant,this.unsubscribe.push(c.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;let e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,(0,o.x)`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};z.styles=[D],B([(0,r.r)()],z.prototype,"open",void 0),B([(0,r.r)()],z.prototype,"message",void 0),B([(0,r.r)()],z.prototype,"triggerRect",void 0),B([(0,r.r)()],z.prototype,"variant",void 0),z=B([(0,s.c)("w3m-tooltip"),(0,s.c)("w3m-tooltip")],z);let L=(0,o.i)`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;var U=function(e,t,i,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,i,s):r(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let M=class extends o.e{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=a.R.state.view,this.viewDirection="",this.unsubscribe.push(a.R.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(([e])=>{let t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",t),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=t,this.style.animation="unset"},a.m.ANIMATION_DURATIONS.ModalHeight)}),this.resizeObserver?.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return(0,o.x)`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return(0,o.x)`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return(0,o.x)`<w3m-account-view></w3m-account-view>`;case"AllWallets":return(0,o.x)`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return(0,o.x)`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return(0,o.x)`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return(0,o.x)`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return(0,o.x)`<w3m-connect-view></w3m-connect-view>`;case"Create":return(0,o.x)`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return(0,o.x)`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return(0,o.x)`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return(0,o.x)`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return(0,o.x)`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return(0,o.x)`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return(0,o.x)`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return(0,o.x)`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return(0,o.x)`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return(0,o.x)`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return(0,o.x)`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return(0,o.x)`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return(0,o.x)`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return(0,o.x)`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return(0,o.x)`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return(0,o.x)`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return(0,o.x)`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return(0,o.x)`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return(0,o.x)`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return(0,o.x)`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return(0,o.x)`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return(0,o.x)`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return(0,o.x)`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return(0,o.x)`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return(0,o.x)`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return(0,o.x)`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return(0,o.x)`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return(0,o.x)`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return(0,o.x)`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return(0,o.x)`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return(0,o.x)`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return(0,o.x)`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return(0,o.x)`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return(0,o.x)`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return(0,o.x)`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return(0,o.x)`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return(0,o.x)`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return(0,o.x)`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return(0,o.x)`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return(0,o.x)`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return(0,o.x)`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return(0,o.x)`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return(0,o.x)`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return(0,o.x)`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return(0,o.x)`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return(0,o.x)`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`}}onViewChange(e){c.hide();let t=a.m.VIEW_DIRECTION.Next,{history:i}=a.R.state;i.length<this.prevHistoryLength&&(t=a.m.VIEW_DIRECTION.Prev),this.prevHistoryLength=i.length,this.viewDirection=t,setTimeout(()=>{this.view=e},a.m.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){return this.shadowRoot?.querySelector("div")}};M.styles=L,U([(0,r.r)()],M.prototype,"view",void 0),U([(0,r.r)()],M.prototype,"viewDirection",void 0),M=U([(0,s.c)("w3m-router")],M);let H=(0,o.i)`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.embedded) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.embedded) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var K=function(e,t,i,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,i,s):r(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let X="scroll-lock",_=class extends o.e{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=a.O.state.enableEmbedded,this.open=a.M.state.open,this.caipAddress=a.j.state.activeCaipAddress,this.caipNetwork=a.j.state.activeCaipNetwork,this.shake=a.M.state.shake,this.filterByNamespace=a.C.state.filterByNamespace,this.initializeTheming(),a.A.prefetchAnalyticsConfig(),this.unsubscribe.push(a.M.subscribeKey("open",e=>e?this.onOpen():this.onClose()),a.M.subscribeKey("shake",e=>this.shake=e),a.j.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),a.j.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),a.O.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e),a.C.subscribeKey("filterByNamespace",e=>{this.filterByNamespace===e||a.j.getAccountData(e)?.caipAddress||(a.A.fetchRecommendedWallets(),this.filterByNamespace=e)}))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded){a.M.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded?(0,o.x)`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?(0,o.x)`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return(0,o.x)` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,r.o)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){"UnsupportedChain"===a.R.state.view||await a.n.isSIWXCloseDisabled()?a.M.shake():a.M.close()}initializeTheming(){let{themeVariables:e,themeMode:t}=a.T.state,i=s.U.getColorTheme(t);(0,a.p)(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),a.h.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=X,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${X}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){let{tagName:i}=t.target;!i||i.includes("W3M-")||i.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){let t=a.j.state.isSwitchingNamespace,i=a.a.getPlainAddress(e);i||t?t&&i&&a.R.goBack():a.M.close(),await a.n.initializeIfEnabled(),this.caipAddress=e,a.j.setIsSwitchingNamespace(!1)}onNewNetwork(e){let t=this.caipNetwork?.caipNetworkId?.toString(),i=e?.caipNetworkId?.toString(),o=a.j.state.isSwitchingNamespace,r=this.caipNetwork?.name===a.f.UNSUPPORTED_NETWORK_NAME,s="ConnectingExternal"===a.R.state.view,n=!this.caipAddress,c="UnsupportedChain"===a.R.state.view;a.M.state.open&&!s&&(n||c||t&&i&&t!==i&&!r&&!o)&&a.R.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(a.A.prefetch(),a.A.fetchWallets({page:1}),this.hasPrefetched=!0)}};_.styles=H,K([(0,r.n)({type:Boolean})],_.prototype,"enableEmbedded",void 0),K([(0,r.r)()],_.prototype,"open",void 0),K([(0,r.r)()],_.prototype,"caipAddress",void 0),K([(0,r.r)()],_.prototype,"caipNetwork",void 0),K([(0,r.r)()],_.prototype,"shake",void 0),K([(0,r.r)()],_.prototype,"filterByNamespace",void 0),_=K([(0,s.c)("w3m-modal")],_)}}]);