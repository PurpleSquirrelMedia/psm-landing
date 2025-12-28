"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6478],{50156:function(t,e,i){i.r(e),i.d(e,{W3mAllWalletsView:function(){return il},W3mConnectingWcBasicView:function(){return eN},W3mDownloadsView:function(){return ih}});var r,o=i(17718),n=i(4054),a=i(75563),s=i(8824),l=i(63753),c=i(58191),u=i(4823);let d=(0,o.i)`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var h=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let p=class extends o.e{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return t="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),(0,o.x)`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?(0,o.x)`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?(0,o.x)`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:(0,o.x)`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};p.styles=[a.e,a.r,d],h([(0,n.n)()],p.prototype,"size",void 0),h([(0,n.n)()],p.prototype,"name",void 0),h([(0,n.n)()],p.prototype,"imageSrc",void 0),h([(0,n.n)()],p.prototype,"walletIcon",void 0),h([(0,n.n)({type:Boolean})],p.prototype,"installed",void 0),h([(0,n.n)()],p.prototype,"badgeSize",void 0),p=h([(0,s.c)("wui-wallet-image")],p);let g=(0,o.i)`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var w=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let f=class extends o.e{constructor(){super(...arguments),this.walletImages=[]}render(){let t=this.walletImages.length<4;return(0,o.x)`${this.walletImages.slice(0,4).map(({src:t,walletName:e})=>(0,o.x)`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${(0,n.o)(e)}
            ></wui-wallet-image>
          `)}
      ${t?[...Array(4-this.walletImages.length)].map(()=>(0,o.x)` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};f.styles=[a.r,g],w([(0,n.n)({type:Array})],f.prototype,"walletImages",void 0),f=w([(0,s.c)("wui-all-wallets-image")],f);let b=(0,o.i)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var m=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let v=class extends o.e{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return(0,o.x)`
      <button ?disabled=${this.disabled} tabindex=${(0,n.o)(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?(0,o.x)` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?(0,o.x)` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?(0,o.x)`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:(0,o.x)`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?(0,o.x)`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?(0,o.x)`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?(0,o.x)`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};v.styles=[a.r,a.e,b],m([(0,n.n)({type:Array})],v.prototype,"walletImages",void 0),m([(0,n.n)()],v.prototype,"imageSrc",void 0),m([(0,n.n)()],v.prototype,"name",void 0),m([(0,n.n)()],v.prototype,"tagLabel",void 0),m([(0,n.n)()],v.prototype,"tagVariant",void 0),m([(0,n.n)()],v.prototype,"icon",void 0),m([(0,n.n)()],v.prototype,"walletIcon",void 0),m([(0,n.n)()],v.prototype,"tabIdx",void 0),m([(0,n.n)({type:Boolean})],v.prototype,"installed",void 0),m([(0,n.n)({type:Boolean})],v.prototype,"disabled",void 0),m([(0,n.n)({type:Boolean})],v.prototype,"showAllWallets",void 0),m([(0,n.n)({type:Boolean})],v.prototype,"loading",void 0),m([(0,n.n)({type:String})],v.prototype,"loadingSpinnerColor",void 0),v=m([(0,s.c)("wui-list-wallet")],v);var y=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let x=class extends o.e{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=a.C.state.connectors,this.count=a.A.state.count,this.filteredCount=a.A.state.filteredWallets.length,this.isFetchingRecommendedWallets=a.A.state.isFetchingRecommendedWallets,this.unsubscribe.push(a.C.subscribeKey("connectors",t=>this.connectors=t),a.A.subscribeKey("count",t=>this.count=t),a.A.subscribeKey("filteredWallets",t=>this.filteredCount=t.length),a.A.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.connectors.find(t=>"walletConnect"===t.id),{allWallets:e}=a.O.state;if(!t||"HIDE"===e||"ONLY_MOBILE"===e&&!a.a.isMobile())return null;let i=a.A.state.featured.length,r=this.count+i,s=this.filteredCount>0?this.filteredCount:r<10?r:10*Math.floor(r/10),l=`${s}`;return this.filteredCount>0?l=`${this.filteredCount}`:s<r&&(l=`${s}+`),(0,o.x)`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${l}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${(0,n.o)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){a.E.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),a.R.push("AllWallets")}};y([(0,n.n)()],x.prototype,"tabIdx",void 0),y([(0,n.r)()],x.prototype,"connectors",void 0),y([(0,n.r)()],x.prototype,"count",void 0),y([(0,n.r)()],x.prototype,"filteredCount",void 0),y([(0,n.r)()],x.prototype,"isFetchingRecommendedWallets",void 0),x=y([(0,s.c)("w3m-all-wallets-widget")],x);var C=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let $=class extends o.e{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=a.C.state.connectors,this.unsubscribe.push(a.C.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.connectors.filter(t=>"ANNOUNCED"===t.type);return t?.length?(0,o.x)`
      <wui-flex flexDirection="column" gap="xs">
        ${t.filter(a.b.showConnector).map(t=>(0,o.x)`
              <wui-list-wallet
                imageSrc=${(0,n.o)(a.c.getConnectorImage(t))}
                name=${t.name??"Unknown"}
                @click=${()=>this.onConnector(t)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${t.id}`}
                .installed=${!0}
                tabIdx=${(0,n.o)(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){"walletConnect"===t.id?a.a.isMobile()?a.R.push("AllWallets"):a.R.push("ConnectingWalletConnect"):a.R.push("ConnectingExternal",{connector:t})}};C([(0,n.n)()],$.prototype,"tabIdx",void 0),C([(0,n.r)()],$.prototype,"connectors",void 0),$=C([(0,s.c)("w3m-connect-announced-widget")],$);var k=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let R=class extends o.e{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=a.C.state.connectors,this.loading=!1,this.unsubscribe.push(a.C.subscribeKey("connectors",t=>this.connectors=t)),a.a.isTelegram()&&a.a.isIos()&&(this.loading=!a.d.state.wcUri,this.unsubscribe.push(a.d.subscribeKey("wcUri",t=>this.loading=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let{customWallets:t}=a.O.state;if(!t?.length)return this.style.cssText="display: none",null;let e=this.filterOutDuplicateWallets(t);return(0,o.x)`<wui-flex flexDirection="column" gap="xs">
      ${e.map(t=>(0,o.x)`
          <wui-list-wallet
            imageSrc=${(0,n.o)(a.c.getWalletImage(t))}
            name=${t.name??"Unknown"}
            @click=${()=>this.onConnectWallet(t)}
            data-testid=${`wallet-selector-${t.id}`}
            tabIdx=${(0,n.o)(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(t){let e=a.S.getRecentWallets(),i=this.connectors.map(t=>t.info?.rdns).filter(Boolean),r=e.map(t=>t.rdns).filter(Boolean),o=i.concat(r);if(o.includes("io.metamask.mobile")&&a.a.isMobile()){let t=o.indexOf("io.metamask.mobile");o[t]="io.metamask"}return t.filter(t=>!o.includes(String(t?.rdns)))}onConnectWallet(t){this.loading||a.R.push("ConnectingWalletConnect",{wallet:t})}};k([(0,n.n)()],R.prototype,"tabIdx",void 0),k([(0,n.r)()],R.prototype,"connectors",void 0),k([(0,n.r)()],R.prototype,"loading",void 0),R=k([(0,s.c)("w3m-connect-custom-widget")],R);var E=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let I=class extends o.e{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=a.C.state.connectors,this.unsubscribe.push(a.C.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.connectors.filter(t=>"EXTERNAL"===t.type).filter(a.b.showConnector).filter(t=>t.id!==a.f.CONNECTOR_ID.COINBASE_SDK);return t?.length?(0,o.x)`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(t=>(0,o.x)`
            <wui-list-wallet
              imageSrc=${(0,n.o)(a.c.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              data-testid=${`wallet-selector-external-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${(0,n.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){a.R.push("ConnectingExternal",{connector:t})}};E([(0,n.n)()],I.prototype,"tabIdx",void 0),E([(0,n.r)()],I.prototype,"connectors",void 0),I=E([(0,s.c)("w3m-connect-external-widget")],I);var T=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let O=class extends o.e{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?(0,o.x)`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(t=>(0,o.x)`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${(0,n.o)(a.c.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${(0,n.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){a.C.selectWalletConnector(t)}};T([(0,n.n)()],O.prototype,"tabIdx",void 0),T([(0,n.n)()],O.prototype,"wallets",void 0),O=T([(0,s.c)("w3m-connect-featured-widget")],O);var P=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let S=class extends o.e{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){let t=this.connectors.filter(a.b.showConnector);return 0===t.length?(this.style.cssText="display: none",null):(0,o.x)`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(t=>(0,o.x)`
            <wui-list-wallet
              imageSrc=${(0,n.o)(a.c.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${(0,n.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(t){a.C.setActiveConnector(t),a.R.push("ConnectingExternal",{connector:t})}};P([(0,n.n)()],S.prototype,"tabIdx",void 0),P([(0,n.n)()],S.prototype,"connectors",void 0),S=P([(0,s.c)("w3m-connect-injected-widget")],S);var j=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let A=class extends o.e{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=a.C.state.connectors,this.unsubscribe.push(a.C.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.connectors.filter(t=>"MULTI_CHAIN"===t.type&&"WalletConnect"!==t.name);return t?.length?(0,o.x)`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(t=>(0,o.x)`
            <wui-list-wallet
              imageSrc=${(0,n.o)(a.c.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${(0,n.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){a.C.setActiveConnector(t),a.R.push("ConnectingMultiChain")}};j([(0,n.n)()],A.prototype,"tabIdx",void 0),j([(0,n.r)()],A.prototype,"connectors",void 0),A=j([(0,s.c)("w3m-connect-multi-chain-widget")],A);var L=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let z=class extends o.e{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=a.C.state.connectors,this.loading=!1,this.unsubscribe.push(a.C.subscribeKey("connectors",t=>this.connectors=t)),a.a.isTelegram()&&a.a.isIos()&&(this.loading=!a.d.state.wcUri,this.unsubscribe.push(a.d.subscribeKey("wcUri",t=>this.loading=!t)))}render(){let t=a.S.getRecentWallets().filter(t=>!a.W.isExcluded(t)).filter(t=>!this.hasWalletConnector(t)).filter(t=>this.isWalletCompatibleWithCurrentChain(t));return t.length?(0,o.x)`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(t=>(0,o.x)`
            <wui-list-wallet
              imageSrc=${(0,n.o)(a.c.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${(0,n.o)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){this.loading||a.C.selectWalletConnector(t)}hasWalletConnector(t){return this.connectors.some(e=>e.id===t.id||e.name===t.name)}isWalletCompatibleWithCurrentChain(t){let e=a.g.state.activeChain;return!e||!t.chains||t.chains.some(t=>e===t.split(":")[0])}};L([(0,n.n)()],z.prototype,"tabIdx",void 0),L([(0,n.r)()],z.prototype,"connectors",void 0),L([(0,n.r)()],z.prototype,"loading",void 0),z=L([(0,s.c)("w3m-connect-recent-widget")],z);var B=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let W=class extends o.e{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,a.a.isTelegram()&&a.a.isIos()&&(this.loading=!a.d.state.wcUri,this.unsubscribe.push(a.d.subscribeKey("wcUri",t=>this.loading=!t)))}render(){let{connectors:t}=a.C.state,{customWallets:e,featuredWalletIds:i}=a.O.state,r=a.S.getRecentWallets(),s=t.find(t=>"walletConnect"===t.id),l=t.filter(t=>"INJECTED"===t.type||"ANNOUNCED"===t.type||"MULTI_CHAIN"===t.type).filter(t=>"Browser Wallet"!==t.name);if(!s)return null;if(i||e||!this.wallets.length)return this.style.cssText="display: none",null;let c=l.length+r.length,u=a.W.filterOutDuplicateWallets(this.wallets).slice(0,Math.max(0,2-c));return u.length?(0,o.x)`
      <wui-flex flexDirection="column" gap="xs">
        ${u.map(t=>(0,o.x)`
            <wui-list-wallet
              imageSrc=${(0,n.o)(a.c.getWalletImage(t))}
              name=${t?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${(0,n.o)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){if(this.loading)return;let e=a.C.getConnector(t.id,t.rdns);e?a.R.push("ConnectingExternal",{connector:e}):a.R.push("ConnectingWalletConnect",{wallet:t})}};B([(0,n.n)()],W.prototype,"tabIdx",void 0),B([(0,n.n)()],W.prototype,"wallets",void 0),B([(0,n.r)()],W.prototype,"loading",void 0),W=B([(0,s.c)("w3m-connect-recommended-widget")],W);var N=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let D=class extends o.e{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=a.C.state.connectors,this.connectorImages=a.h.state.connectorImages,this.unsubscribe.push(a.C.subscribeKey("connectors",t=>this.connectors=t),a.h.subscribeKey("connectorImages",t=>this.connectorImages=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(a.a.isMobile())return this.style.cssText="display: none",null;let t=this.connectors.find(t=>"walletConnect"===t.id);if(!t)return this.style.cssText="display: none",null;let e=t.imageUrl||this.connectorImages[t?.imageId??""];return(0,o.x)`
      <wui-list-wallet
        imageSrc=${(0,n.o)(e)}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${(0,n.o)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(t){a.C.setActiveConnector(t),a.R.push("ConnectingWalletConnect")}};N([(0,n.n)()],D.prototype,"tabIdx",void 0),N([(0,n.r)()],D.prototype,"connectors",void 0),N([(0,n.r)()],D.prototype,"connectorImages",void 0),D=N([(0,s.c)("w3m-connect-walletconnect-widget")],D);let U=(0,o.i)`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var M=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let _=class extends o.e{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=a.C.state.connectors,this.recommended=a.A.state.recommended,this.featured=a.A.state.featured,this.unsubscribe.push(a.C.subscribeKey("connectors",t=>this.connectors=t),a.A.subscribeKey("recommended",t=>this.recommended=t),a.A.subscribeKey("featured",t=>this.featured=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return(0,o.x)`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){let{custom:t,recent:e,announced:i,injected:r,multiChain:s,recommended:l,featured:c,external:u}=a.b.getConnectorsByType(this.connectors,this.recommended,this.featured);return a.b.getConnectorTypeOrder({custom:t,recent:e,announced:i,injected:r,multiChain:s,recommended:l,featured:c,external:u}).map(t=>{switch(t){case"injected":return(0,o.x)`
            ${s.length?(0,o.x)`<w3m-connect-multi-chain-widget
                  tabIdx=${(0,n.o)(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${i.length?(0,o.x)`<w3m-connect-announced-widget
                  tabIdx=${(0,n.o)(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${r.length?(0,o.x)`<w3m-connect-injected-widget
                  .connectors=${r}
                  tabIdx=${(0,n.o)(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return(0,o.x)`<w3m-connect-walletconnect-widget
            tabIdx=${(0,n.o)(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return(0,o.x)`<w3m-connect-recent-widget
            tabIdx=${(0,n.o)(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return(0,o.x)`<w3m-connect-featured-widget
            .wallets=${c}
            tabIdx=${(0,n.o)(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return(0,o.x)`<w3m-connect-custom-widget
            tabIdx=${(0,n.o)(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return(0,o.x)`<w3m-connect-external-widget
            tabIdx=${(0,n.o)(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return(0,o.x)`<w3m-connect-recommended-widget
            .wallets=${l}
            tabIdx=${(0,n.o)(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${t}`),null}})}};_.styles=U,M([(0,n.n)()],_.prototype,"tabIdx",void 0),M([(0,n.r)()],_.prototype,"connectors",void 0),M([(0,n.r)()],_.prototype,"recommended",void 0),M([(0,n.r)()],_.prototype,"featured",void 0),_=M([(0,s.c)("w3m-connector-list")],_);let q=(0,o.i)`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var K=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let V=class extends o.e{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,e)=>{let i=e===this.activeTab;return(0,o.x)`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(e)}
          data-active=${i}
          data-testid="tab-${t.label?.toLowerCase()}"
        >
          ${this.iconTemplate(t)}
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(t){return t.icon?(0,o.x)`<wui-icon size="xs" color="inherit" name=${t.icon}></wui-icon>`:null}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,e){let i=this.buttons[this.activeTab],r=this.buttons[t],o=i?.querySelector("wui-text"),n=r?.querySelector("wui-text"),a=r?.getBoundingClientRect(),s=n?.getBoundingClientRect();i&&o&&!e&&t!==this.activeTab&&(o.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),r&&a&&s&&n&&(t!==this.activeTab||e)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,r.animate([{width:`${a.width+s.width}px`}],{duration:e?0:500,fill:"forwards",easing:"ease"}),n.animate([{opacity:1}],{duration:e?0:125,delay:e?0:200,fill:"forwards",easing:"ease"}))}};V.styles=[a.r,a.e,q],K([(0,n.n)({type:Array})],V.prototype,"tabs",void 0),K([(0,n.n)()],V.prototype,"onTabChange",void 0),K([(0,n.n)({type:Array})],V.prototype,"buttons",void 0),K([(0,n.n)({type:Boolean})],V.prototype,"disabled",void 0),K([(0,n.n)()],V.prototype,"localTabWidth",void 0),K([(0,n.r)()],V.prototype,"activeTab",void 0),K([(0,n.r)()],V.prototype,"isDense",void 0),V=K([(0,s.c)("wui-tabs")],V);var H=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let F=class extends o.e{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.generateTabs();return(0,o.x)`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${t} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){let t=this.platforms.map(t=>"browser"===t?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===t?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===t?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===t?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===t?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:t})=>t),t}onTabChange(t){let e=this.platformTabs[t];e&&this.onSelectPlatfrom?.(e)}};H([(0,n.n)({type:Array})],F.prototype,"platforms",void 0),H([(0,n.n)()],F.prototype,"onSelectPlatfrom",void 0),F=H([(0,s.c)("w3m-connecting-header")],F);let Y=(0,o.i)`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var J=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let X={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},Q={lg:"paragraph-600",md:"small-600"},G={lg:"md",md:"md"},Z=class extends o.e{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;let t=this.textVariant??Q[this.size];return(0,o.x)`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){let t=G[this.size],e=this.disabled?X.disabled:X[this.variant];return(0,o.x)`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return(0,o.x)``}};Z.styles=[a.r,a.e,Y],J([(0,n.n)()],Z.prototype,"size",void 0),J([(0,n.n)({type:Boolean})],Z.prototype,"disabled",void 0),J([(0,n.n)({type:Boolean})],Z.prototype,"fullWidth",void 0),J([(0,n.n)({type:Boolean})],Z.prototype,"loading",void 0),J([(0,n.n)()],Z.prototype,"variant",void 0),J([(0,n.n)({type:Boolean})],Z.prototype,"hasIconLeft",void 0),J([(0,n.n)({type:Boolean})],Z.prototype,"hasIconRight",void 0),J([(0,n.n)()],Z.prototype,"borderRadius",void 0),J([(0,n.n)()],Z.prototype,"textVariant",void 0),Z=J([(0,s.c)("wui-button")],Z);let tt=(0,o.i)`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var te=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let ti=class extends o.e{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return(0,o.x)`
      <button ?disabled=${this.disabled} tabindex=${(0,n.o)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};ti.styles=[a.r,a.e,tt],te([(0,n.n)()],ti.prototype,"tabIdx",void 0),te([(0,n.n)({type:Boolean})],ti.prototype,"disabled",void 0),te([(0,n.n)()],ti.prototype,"color",void 0),ti=te([(0,s.c)("wui-link")],ti);let tr=(0,o.i)`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var to=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let tn=class extends o.e{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let t=this.radius>50?50:this.radius,e=36-t;return(0,o.x)`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${116+e} ${245+e}"
          stroke-dashoffset=${360+1.75*e}
        />
      </svg>
    `}};tn.styles=[a.r,tr],to([(0,n.n)({type:Number})],tn.prototype,"radius",void 0),tn=to([(0,s.c)("wui-loading-thumbnail")],tn);let ta=(0,o.i)`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var ts=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let tl=class extends o.e{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){let t="sm"===this.size?"small-600":"paragraph-600";return(0,o.x)`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?(0,o.x)`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};tl.styles=[a.r,a.e,ta],ts([(0,n.n)()],tl.prototype,"variant",void 0),ts([(0,n.n)()],tl.prototype,"imageSrc",void 0),ts([(0,n.n)({type:Boolean})],tl.prototype,"disabled",void 0),ts([(0,n.n)()],tl.prototype,"icon",void 0),ts([(0,n.n)()],tl.prototype,"size",void 0),ts([(0,n.n)()],tl.prototype,"text",void 0),tl=ts([(0,s.c)("wui-chip-button")],tl);let tc=(0,o.i)`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var tu=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let td=class extends o.e{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return(0,o.x)`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};td.styles=[a.r,a.e,tc],tu([(0,n.n)({type:Boolean})],td.prototype,"disabled",void 0),tu([(0,n.n)()],td.prototype,"label",void 0),tu([(0,n.n)()],td.prototype,"buttonLabel",void 0),td=tu([(0,s.c)("wui-cta-button")],td);let th=(0,o.i)`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var tp=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let tg=class extends o.e{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:t,app_store:e,play_store:i,chrome_store:r,homepage:n}=this.wallet,l=a.a.isMobile(),c=a.a.isIos(),u=a.a.isAndroid(),d=[e,i,n,r].filter(Boolean).length>1,h=s.U.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return d&&!l?(0,o.x)`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${()=>a.R.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!d&&n?(0,o.x)`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:e&&c?(0,o.x)`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&u?(0,o.x)`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&a.a.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&a.a.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&a.a.openHref(this.wallet.homepage,"_blank")}};tg.styles=[th],tp([(0,n.n)({type:Object})],tg.prototype,"wallet",void 0),tg=tp([(0,s.c)("w3m-mobile-download-links")],tg);let tw=(0,o.i)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var tf=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};class tb extends o.e{constructor(){super(),this.wallet=a.R.state.data?.wallet,this.connector=a.R.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=a.c.getWalletImage(this.wallet)??a.c.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=a.d.state.wcUri,this.error=a.d.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(a.d.subscribeKey("wcUri",t=>{this.uri=t,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),a.d.subscribeKey("wcError",t=>this.error=t)),(a.a.isTelegram()||a.a.isSafari())&&a.a.isIos()&&a.d.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),a.d.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,e=`Continue in ${this.name}`;return this.error&&(e="Connection declined"),(0,o.x)`
      <wui-flex
        data-error=${(0,n.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,n.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?(0,o.x)`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?(0,o.x)`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){a.d.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){let t=a.T.state.themeVariables["--w3m-border-radius-master"],e=t?parseInt(t.replace("px",""),10):4;return(0,o.x)`<wui-loading-thumbnail radius=${9*e}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(a.a.copyToClopboard(this.uri),a.i.showSuccess("Link copied"))}catch{a.i.showError("Failed to copy")}}}tb.styles=tw,tf([(0,n.r)()],tb.prototype,"isRetrying",void 0),tf([(0,n.r)()],tb.prototype,"uri",void 0),tf([(0,n.r)()],tb.prototype,"error",void 0),tf([(0,n.r)()],tb.prototype,"ready",void 0),tf([(0,n.r)()],tb.prototype,"showRetry",void 0),tf([(0,n.r)()],tb.prototype,"secondaryBtnLabel",void 0),tf([(0,n.r)()],tb.prototype,"secondaryLabel",void 0),tf([(0,n.r)()],tb.prototype,"isLoading",void 0),tf([(0,n.n)({type:Boolean})],tb.prototype,"isMobile",void 0),tf([(0,n.n)()],tb.prototype,"onRetry",void 0);let tm=class extends tb{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),a.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:t}=a.C.state,e=t.find(t=>"ANNOUNCED"===t.type&&t.info?.rdns===this.wallet?.rdns||"INJECTED"===t.type||t.name===this.wallet?.name);if(e)await a.d.connectExternal(e,e.chain);else throw Error("w3m-connecting-wc-browser: No connector found");a.M.close(),a.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(t){a.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}}};tm=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}([(0,s.c)("w3m-connecting-wc-browser")],tm);let tv=class extends tb{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),a.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:t,name:e}=this.wallet,{redirect:i,href:r}=a.a.formatNativeUrl(t,this.uri);a.d.setWcLinking({name:e,href:r}),a.d.setRecentWallet(this.wallet),a.a.openHref(i,"_blank")}catch{this.error=!0}}};tv=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}([(0,s.c)("w3m-connecting-wc-desktop")],tv);var ty=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let tx=class extends tb{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=a.O.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:t,link_mode:e,name:i}=this.wallet,{redirect:r,redirectUniversalLink:o,href:n}=a.a.formatNativeUrl(t,this.uri,e);this.redirectDeeplink=r,this.redirectUniversalLink=o,this.target=a.a.isIframe()?"_top":"_self",a.d.setWcLinking({name:i,href:n}),a.d.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?a.a.openHref(this.redirectUniversalLink,this.target):a.a.openHref(this.redirectDeeplink,this.target)}catch(t){a.E.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:t instanceof Error?t.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=a.j.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(a.d.subscribeKey("wcUri",()=>{this.onHandleURI()})),a.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){a.d.setWcError(!1),this.onConnect?.()}};ty([(0,n.r)()],tx.prototype,"redirectDeeplink",void 0),ty([(0,n.r)()],tx.prototype,"redirectUniversalLink",void 0),ty([(0,n.r)()],tx.prototype,"target",void 0),ty([(0,n.r)()],tx.prototype,"preferUniversalLinks",void 0),ty([(0,n.r)()],tx.prototype,"isLoading",void 0),tx=ty([(0,s.c)("w3m-connecting-wc-mobile")],tx);var tC,t$,tk,tR={},tE={},tI={};function tT(){let t;if(tk)return tI;tk=1;let e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return tI.getSymbolSize=function(t){if(!t)throw Error('"version" cannot be null or undefined');if(t<1||t>40)throw Error('"version" should be in range from 1 to 40');return 4*t+17},tI.getSymbolTotalCodewords=function(t){return e[t]},tI.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},tI.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');t=e},tI.isKanjiModeEnabled=function(){return"u">typeof t},tI.toSJIS=function(e){return t(e)},tI}var tO,tP={};function tS(){return tO||(tO=1,tP.L={bit:1},tP.M={bit:0},tP.Q={bit:3},tP.H={bit:2},tP.isValid=function(t){return t&&"u">typeof t.bit&&t.bit>=0&&t.bit<4},tP.from=function(t,e){if(tP.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return tP.L;case"m":case"medium":return tP.M;case"q":case"quartile":return tP.Q;case"h":case"high":return tP.H;default:throw Error("Unknown EC Level: "+t)}}(t)}catch{return e}}),tP}var tj,tA,tL,tz,tB,tW,tN,tD,tU={},tM={},t_={},tq={};function tK(){if(tD)return tq;tD=1;let t=tS(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return tq.getBlocksCount=function(i,r){switch(r){case t.L:return e[(i-1)*4+0];case t.M:return e[(i-1)*4+1];case t.Q:return e[(i-1)*4+2];case t.H:return e[(i-1)*4+3];default:return}},tq.getTotalCodewordsCount=function(e,r){switch(r){case t.L:return i[(e-1)*4+0];case t.M:return i[(e-1)*4+1];case t.Q:return i[(e-1)*4+2];case t.H:return i[(e-1)*4+3];default:return}},tq}var tV,tH,tF,tY,tJ,tX={},tQ={},tG={},tZ={},t0={};function t1(){return tJ||(tJ=1,t0.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}),t0}var t3,t2={};function t5(){if(t3)return t2;t3=1;let t="[0-9]+",e="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",i="(?:(?![A-Z0-9 $%*+\\-./:]|"+(e=e.replace(/u/g,"\\u"))+`)(?:.|[\r
]))+`;t2.KANJI=RegExp(e,"g"),t2.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t2.BYTE=RegExp(i,"g"),t2.NUMERIC=RegExp(t,"g"),t2.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let r=RegExp("^"+e+"$"),o=RegExp("^"+t+"$"),n=RegExp("^[A-Z0-9 $%*+\\-./:]+$");return t2.testKanji=function(t){return r.test(t)},t2.testNumeric=function(t){return o.test(t)},t2.testAlphanumeric=function(t){return n.test(t)},t2}function t4(){return t6||(t6=1,function(t){let e=t1(),i=t5();t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(t,i){if(!t.ccBits)throw Error("Invalid mode: "+t);if(!e.isValid(i))throw Error("Invalid version: "+i);return i>=1&&i<10?t.ccBits[0]:i<27?t.ccBits[1]:t.ccBits[2]},t.getBestModeForData=function(e){return i.testNumeric(e)?t.NUMERIC:i.testAlphanumeric(e)?t.ALPHANUMERIC:i.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(t){if(t&&t.id)return t.id;throw Error("Invalid mode")},t.isValid=function(t){return t&&t.bit&&t.ccBits},t.from=function(e,i){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}(e)}catch{return i}}}(tZ)),tZ}var t6,t8,t7,t9,et,ee,ei,er,eo,en,ea,es,el,ec,eu={},ed={},eh={},ep={};function eg(){return ec||(ec=1,function(t){function e(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw Error("Invalid hex color: "+t);(3===e.length||4===e.length)&&(e=Array.prototype.concat.apply([],e.map(function(t){return[t,t]}))),6===e.length&&e.push("F","F");let i=parseInt(e.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:255&i,hex:"#"+e.slice(0,6).join("")}}t.getOptions=function(t){t||(t={}),t.color||(t.color={});let i=typeof t.margin>"u"||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:i,color:{dark:e(t.color.dark||"#000000ff"),light:e(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},t.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},t.getImageWidth=function(e,i){let r=t.getScale(e,i);return Math.floor((e+2*i.margin)*r)},t.qrToImageData=function(e,i,r){let o=i.modules.size,n=i.modules.data,a=t.getScale(o,r),s=Math.floor((o+2*r.margin)*a),l=r.margin*a,c=[r.color.light,r.color.dark];for(let t=0;t<s;t++)for(let i=0;i<s;i++){let u=(t*s+i)*4,d=r.color.light;t>=l&&i>=l&&t<s-l&&i<s-l&&(d=c[n[Math.floor((t-l)/a)*o+Math.floor((i-l)/a)]?1:0]),e[u++]=d.r,e[u++]=d.g,e[u++]=d.b,e[u]=d.a}}}(ep)),ep}var ew,ef,eb={},em=function(){if(r)return tR;r=1;let t=(t$||(t$=1,tC=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}),tC),e=function(){if(el)return tE;el=1;let t=tT(),e=tS(),i=function(){if(tA)return tj;function t(){this.buffer=[],this.length=0}return tA=1,t.prototype={get:function(t){return(this.buffer[Math.floor(t/8)]>>>7-t%8&1)==1},put:function(t,e){for(let i=0;i<e;i++)this.putBit((t>>>e-i-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(t){let e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},tj=t}(),r=function(){if(tz)return tL;function t(t){if(!t||t<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}return tz=1,t.prototype.set=function(t,e,i,r){let o=t*this.size+e;this.data[o]=i,r&&(this.reservedBit[o]=!0)},t.prototype.get=function(t,e){return this.data[t*this.size+e]},t.prototype.xor=function(t,e,i){this.data[t*this.size+e]^=i},t.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},tL=t}(),o=(tB||(tB=1,function(t){let e=tT().getSymbolSize;t.getRowColCoords=function(t){if(1===t)return[];let i=Math.floor(t/7)+2,r=e(t),o=145===r?26:2*Math.ceil((r-13)/(2*i-2)),n=[r-7];for(let t=1;t<i-1;t++)n[t]=n[t-1]-o;return n.push(6),n.reverse()},t.getPositions=function(e){let i=[],r=t.getRowColCoords(e),o=r.length;for(let t=0;t<o;t++)for(let e=0;e<o;e++)0===t&&0===e||0===t&&e===o-1||t===o-1&&0===e||i.push([r[t],r[e]]);return i}}(tU)),tU),n=function(){if(tW)return tM;tW=1;let t=tT().getSymbolSize;return tM.getPositions=function(e){let i=t(e);return[[0,0],[i-7,0],[0,i-7]]},tM}(),a=(tN||(tN=1,function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(t){let i=t.size,r=0,o=0,n=0,a=null,s=null;for(let l=0;l<i;l++){o=n=0,a=s=null;for(let c=0;c<i;c++){let i=t.get(l,c);i===a?o++:(o>=5&&(r+=e.N1+(o-5)),a=i,o=1),(i=t.get(c,l))===s?n++:(n>=5&&(r+=e.N1+(n-5)),s=i,n=1)}o>=5&&(r+=e.N1+(o-5)),n>=5&&(r+=e.N1+(n-5))}return r},t.getPenaltyN2=function(t){let i=t.size,r=0;for(let e=0;e<i-1;e++)for(let o=0;o<i-1;o++){let i=t.get(e,o)+t.get(e,o+1)+t.get(e+1,o)+t.get(e+1,o+1);(4===i||0===i)&&r++}return r*e.N2},t.getPenaltyN3=function(t){let i=t.size,r=0,o=0,n=0;for(let e=0;e<i;e++){o=n=0;for(let a=0;a<i;a++)o=o<<1&2047|t.get(e,a),a>=10&&(1488===o||93===o)&&r++,n=n<<1&2047|t.get(a,e),a>=10&&(1488===n||93===n)&&r++}return r*e.N3},t.getPenaltyN4=function(t){let i=0,r=t.data.length;for(let e=0;e<r;e++)i+=t.data[e];return Math.abs(Math.ceil(100*i/r/5)-10)*e.N4},t.applyMask=function(e,i){let r=i.size;for(let o=0;o<r;o++)for(let n=0;n<r;n++)i.isReserved(n,o)||i.xor(n,o,function(e,i,r){switch(e){case t.Patterns.PATTERN000:return(i+r)%2==0;case t.Patterns.PATTERN001:return i%2==0;case t.Patterns.PATTERN010:return r%3==0;case t.Patterns.PATTERN011:return(i+r)%3==0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(r/3))%2==0;case t.Patterns.PATTERN101:return i*r%2+i*r%3==0;case t.Patterns.PATTERN110:return(i*r%2+i*r%3)%2==0;case t.Patterns.PATTERN111:return(i*r%3+(i+r)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,n,o))},t.getBestMask=function(e,i){let r=Object.keys(t.Patterns).length,o=0,n=1/0;for(let a=0;a<r;a++){i(a),t.applyMask(a,e);let r=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),r<n&&(n=r,o=a)}return o}}(t_)),t_),s=tK(),l=function(){if(tY)return tF;tY=1;let t=(tH||(tH=1,function(t){let e=function(){if(tV)return tQ;tV=1;let t=new Uint8Array(512),e=new Uint8Array(256);return function(){let i=1;for(let r=0;r<255;r++)t[r]=i,e[i]=r,256&(i<<=1)&&(i^=285);for(let e=255;e<512;e++)t[e]=t[e-255]}(),tQ.log=function(t){if(t<1)throw Error("log("+t+")");return e[t]},tQ.exp=function(e){return t[e]},tQ.mul=function(i,r){return 0===i||0===r?0:t[e[i]+e[r]]},tQ}();t.mul=function(t,i){let r=new Uint8Array(t.length+i.length-1);for(let o=0;o<t.length;o++)for(let n=0;n<i.length;n++)r[o+n]^=e.mul(t[o],i[n]);return r},t.mod=function(t,i){let r=new Uint8Array(t);for(;r.length-i.length>=0;){let t=r[0];for(let o=0;o<i.length;o++)r[o]^=e.mul(i[o],t);let o=0;for(;o<r.length&&0===r[o];)o++;r=r.slice(o)}return r},t.generateECPolynomial=function(i){let r=new Uint8Array([1]);for(let o=0;o<i;o++)r=t.mul(r,new Uint8Array([1,e.exp(o)]));return r}}(tX)),tX);function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(e){this.degree=e,this.genPoly=t.generateECPolynomial(this.degree)},e.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let i=new Uint8Array(e.length+this.degree);i.set(e);let r=t.mod(i,this.genPoly),o=this.degree-r.length;if(o>0){let t=new Uint8Array(this.degree);return t.set(r,o),t}return r},tF=e}(),d=(t8||(t8=1,function(t){let e=tT(),i=tK(),r=tS(),o=t4(),n=t1(),a=e.getBCHDigit(7973);function s(t,e){return o.getCharCountIndicator(t,e)+4}t.from=function(t,e){return n.isValid(t)?parseInt(t,10):e},t.getCapacity=function(t,r,a){if(!n.isValid(t))throw Error("Invalid QR Code version");typeof a>"u"&&(a=o.BYTE);let l=(e.getSymbolTotalCodewords(t)-i.getTotalCodewordsCount(t,r))*8;if(a===o.MIXED)return l;let c=l-s(a,t);switch(a){case o.NUMERIC:return Math.floor(c/10*3);case o.ALPHANUMERIC:return Math.floor(c/11*2);case o.KANJI:return Math.floor(c/13);case o.BYTE:default:return Math.floor(c/8)}},t.getBestVersionForData=function(e,i){let n;let a=r.from(i,r.M);if(Array.isArray(e)){if(e.length>1)return function(e,i){for(let r=1;r<=40;r++)if(function(t,e){let i=0;return t.forEach(function(t){let r=s(t.mode,e);i+=r+t.getBitsLength()}),i}(e,r)<=t.getCapacity(r,i,o.MIXED))return r}(e,a);if(0===e.length)return 1;n=e[0]}else n=e;return function(e,i,r){for(let o=1;o<=40;o++)if(i<=t.getCapacity(o,r,e))return o}(n.mode,n.getLength(),a)},t.getEncodedBits=function(t){if(!n.isValid(t)||t<7)throw Error("Invalid QR Code version");let i=t<<12;for(;e.getBCHDigit(i)-a>=0;)i^=7973<<e.getBCHDigit(i)-a;return t<<12|i}}(tG)),tG),h=function(){if(t7)return eu;t7=1;let t=tT(),e=t.getBCHDigit(1335);return eu.getEncodedBits=function(i,r){let o=i.bit<<3|r,n=o<<10;for(;t.getBCHDigit(n)-e>=0;)n^=1335<<t.getBCHDigit(n)-e;return(o<<10|n)^21522},eu}(),p=t4(),g=(es||(es=1,function(t){let e=t4(),i=function(){if(et)return t9;et=1;let t=t4();function e(e){this.mode=t.NUMERIC,this.data=e.toString()}return e.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){let e,i;for(e=0;e+3<=this.data.length;e+=3)i=parseInt(this.data.substr(e,3),10),t.put(i,10);let r=this.data.length-e;r>0&&(i=parseInt(this.data.substr(e),10),t.put(i,3*r+1))},t9=e}(),r=function(){if(ei)return ee;ei=1;let t=t4(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(e){this.mode=t.ALPHANUMERIC,this.data=e}return i.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let r=45*e.indexOf(this.data[i]);r+=e.indexOf(this.data[i+1]),t.put(r,11)}this.data.length%2&&t.put(e.indexOf(this.data[i]),6)},ee=i}(),o=function(){if(eo)return er;eo=1;let t=(0,c.r)(),e=t4();function i(i){this.mode=e.BYTE,"string"==typeof i&&(i=t(i)),this.data=new Uint8Array(i)}return i.getBitsLength=function(t){return 8*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){for(let e=0,i=this.data.length;e<i;e++)t.put(this.data[e],8)},er=i}(),n=function(){if(ea)return en;ea=1;let t=t4(),e=tT();function i(e){this.mode=t.KANJI,this.data=e}return i.getBitsLength=function(t){return 13*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let i;for(i=0;i<this.data.length;i++){let r=e.toSJIS(this.data[i]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[i]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(255&r),t.put(r,13)}},en=i}(),a=t5(),s=tT(),l=(0,u.r)();function d(t){return unescape(encodeURIComponent(t)).length}function h(t,e,i){let r;let o=[];for(;null!==(r=t.exec(i));)o.push({data:r[0],index:r.index,mode:e,length:r[0].length});return o}function p(t){let i,r;let o=h(a.NUMERIC,e.NUMERIC,t),n=h(a.ALPHANUMERIC,e.ALPHANUMERIC,t);return s.isKanjiModeEnabled()?(i=h(a.BYTE,e.BYTE,t),r=h(a.KANJI,e.KANJI,t)):(i=h(a.BYTE_KANJI,e.BYTE,t),r=[]),o.concat(n,i,r).sort(function(t,e){return t.index-e.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function g(t,a){switch(a){case e.NUMERIC:return i.getBitsLength(t);case e.ALPHANUMERIC:return r.getBitsLength(t);case e.KANJI:return n.getBitsLength(t);case e.BYTE:return o.getBitsLength(t)}}function w(t,a){let l;let c=e.getBestModeForData(t);if((l=e.from(a,c))!==e.BYTE&&l.bit<c.bit)throw Error('"'+t+'" cannot be encoded with mode '+e.toString(l)+`.
 Suggested mode is: `+e.toString(c));switch(l!==e.KANJI||s.isKanjiModeEnabled()||(l=e.BYTE),l){case e.NUMERIC:return new i(t);case e.ALPHANUMERIC:return new r(t);case e.KANJI:return new n(t);case e.BYTE:return new o(t)}}t.fromArray=function(t){return t.reduce(function(t,e){return"string"==typeof e?t.push(w(e,null)):e.data&&t.push(w(e.data,e.mode)),t},[])},t.fromString=function(i,r){let o=function(t,i){let r={},o={start:{}},n=["start"];for(let a=0;a<t.length;a++){let s=t[a],l=[];for(let t=0;t<s.length;t++){let c=s[t],u=""+a+t;l.push(u),r[u]={node:c,lastCount:0},o[u]={};for(let t=0;t<n.length;t++){let a=n[t];r[a]&&r[a].node.mode===c.mode?(o[a][u]=g(r[a].lastCount+c.length,c.mode)-g(r[a].lastCount,c.mode),r[a].lastCount+=c.length):(r[a]&&(r[a].lastCount=c.length),o[a][u]=g(c.length,c.mode)+4+e.getCharCountIndicator(c.mode,i))}}n=l}for(let t=0;t<n.length;t++)o[n[t]].end=0;return{map:o,table:r}}(function(t){let i=[];for(let r=0;r<t.length;r++){let o=t[r];switch(o.mode){case e.NUMERIC:i.push([o,{data:o.data,mode:e.ALPHANUMERIC,length:o.length},{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.ALPHANUMERIC:i.push([o,{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.KANJI:i.push([o,{data:o.data,mode:e.BYTE,length:d(o.data)}]);break;case e.BYTE:i.push([{data:o.data,mode:e.BYTE,length:d(o.data)}])}}return i}(p(i,s.isKanjiModeEnabled())),r),n=l.find_path(o.map,"start","end"),a=[];for(let t=1;t<n.length-1;t++)a.push(o.table[n[t]].node);return t.fromArray(a.reduce(function(t,e){let i=t.length-1>=0?t[t.length-1]:null;return i&&i.mode===e.mode?t[t.length-1].data+=e.data:t.push(e),t},[]))},t.rawSplit=function(e){return t.fromArray(p(e,s.isKanjiModeEnabled()))}}(ed)),ed);function w(t,e,i){let r,o;let n=t.size,a=h.getEncodedBits(e,i);for(r=0;r<15;r++)o=(a>>r&1)==1,r<6?t.set(r,8,o,!0):r<8?t.set(r+1,8,o,!0):t.set(n-15+r,8,o,!0),r<8?t.set(8,n-r-1,o,!0):r<9?t.set(8,15-r-1+1,o,!0):t.set(8,15-r-1,o,!0);t.set(n-8,8,1,!0)}return tE.create=function(c,u){if(typeof c>"u"||""===c)throw Error("No input text");let h=e.M,f,b;return"u">typeof u&&(h=e.from(u.errorCorrectionLevel,e.M),f=d.from(u.version),b=a.from(u.maskPattern),u.toSJISFunc&&t.setToSJISFunction(u.toSJISFunc)),function(e,c,u,h){let f;if(Array.isArray(e))f=g.fromArray(e);else if("string"==typeof e){let t=c;if(!t){let i=g.rawSplit(e);t=d.getBestVersionForData(i,u)}f=g.fromString(e,t||40)}else throw Error("Invalid data");let b=d.getBestVersionForData(f,u);if(!b)throw Error("The amount of data is too big to be stored in a QR Code");if(c){if(c<b)throw Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+b+`.
`)}else c=b;let m=function(e,r,o){let n=new i;o.forEach(function(t){n.put(t.mode.bit,4),n.put(t.getLength(),p.getCharCountIndicator(t.mode,e)),t.write(n)});let a=(t.getSymbolTotalCodewords(e)-s.getTotalCodewordsCount(e,r))*8;for(n.getLengthInBits()+4<=a&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);let c=(a-n.getLengthInBits())/8;for(let t=0;t<c;t++)n.put(t%2?17:236,8);return function(e,i,r){let o=t.getSymbolTotalCodewords(i),n=o-s.getTotalCodewordsCount(i,r),a=s.getBlocksCount(i,r),c=o%a,u=a-c,d=Math.floor(o/a),h=Math.floor(n/a),p=h+1,g=d-h,w=new l(g),f=0,b=Array(a),m=Array(a),v=0,y=new Uint8Array(e.buffer);for(let t=0;t<a;t++){let e=t<u?h:p;b[t]=y.slice(f,f+e),m[t]=w.encode(b[t]),f+=e,v=Math.max(v,e)}let x=new Uint8Array(o),C=0,$,k;for($=0;$<v;$++)for(k=0;k<a;k++)$<b[k].length&&(x[C++]=b[k][$]);for($=0;$<g;$++)for(k=0;k<a;k++)x[C++]=m[k][$];return x}(n,e,r)}(c,u,f),v=new r(t.getSymbolSize(c));return function(t,e){let i=t.size,r=n.getPositions(e);for(let e=0;e<r.length;e++){let o=r[e][0],n=r[e][1];for(let e=-1;e<=7;e++)if(!(o+e<=-1||i<=o+e))for(let r=-1;r<=7;r++)n+r<=-1||i<=n+r||(e>=0&&e<=6&&(0===r||6===r)||r>=0&&r<=6&&(0===e||6===e)||e>=2&&e<=4&&r>=2&&r<=4?t.set(o+e,n+r,!0,!0):t.set(o+e,n+r,!1,!0))}}(v,c),function(t){let e=t.size;for(let i=8;i<e-8;i++){let e=i%2==0;t.set(i,6,e,!0),t.set(6,i,e,!0)}}(v),function(t,e){let i=o.getPositions(e);for(let e=0;e<i.length;e++){let r=i[e][0],o=i[e][1];for(let e=-2;e<=2;e++)for(let i=-2;i<=2;i++)-2===e||2===e||-2===i||2===i||0===e&&0===i?t.set(r+e,o+i,!0,!0):t.set(r+e,o+i,!1,!0)}}(v,c),w(v,u,0),c>=7&&function(t,e){let i,r,o;let n=t.size,a=d.getEncodedBits(e);for(let e=0;e<18;e++)i=Math.floor(e/3),r=e%3+n-8-3,o=(a>>e&1)==1,t.set(i,r,o,!0),t.set(r,i,o,!0)}(v,c),function(t,e){let i=t.size,r=-1,o=i-1,n=7,a=0;for(let s=i-1;s>0;s-=2)for(6===s&&s--;;){for(let i=0;i<2;i++)if(!t.isReserved(o,s-i)){let r=!1;a<e.length&&(r=(e[a]>>>n&1)==1),t.set(o,s-i,r),-1==--n&&(a++,n=7)}if((o+=r)<0||i<=o){o-=r,r=-r;break}}}(v,m),isNaN(h)&&(h=a.getBestMask(v,w.bind(null,v,u))),a.applyMask(h,v),w(v,u,h),{modules:v,version:c,errorCorrectionLevel:u,maskPattern:h,segments:f}}(c,f,h,b)},tE}(),i=(ew||(ew=1,function(t){let e=eg();t.render=function(t,i,r){var o;let n=r,a=i;!(typeof n>"u")||i&&i.getContext||(n=i,i=void 0),i||(a=function(){try{return document.createElement("canvas")}catch{throw Error("You need to specify a canvas element")}}()),n=e.getOptions(n);let s=e.getImageWidth(t.modules.size,n),l=a.getContext("2d"),c=l.createImageData(s,s);return e.qrToImageData(c.data,t,n),o=a,l.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px",l.putImageData(c,0,0),a},t.renderToDataURL=function(e,i,r){let o=r;!(typeof o>"u")||i&&i.getContext||(o=i,i=void 0),o||(o={});let n=t.render(e,i,o),a=o.type||"image/png",s=o.rendererOpts||{};return n.toDataURL(a,s.quality)}}(eh)),eh),o=function(){if(ef)return eb;ef=1;let t=eg();function e(t,e){let i=t.a/255,r=e+'="'+t.hex+'"';return i<1?r+" "+e+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function i(t,e,i){let r=t+e;return"u">typeof i&&(r+=" "+i),r}return eb.render=function(r,o,n){let a=t.getOptions(o),s=r.modules.size,l=r.modules.data,c=s+2*a.margin,u=a.color.light.a?"<path "+e(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",d="<path "+e(a.color.dark,"stroke")+' d="'+function(t,e,r){let o="",n=0,a=!1,s=0;for(let l=0;l<t.length;l++){let c=Math.floor(l%e),u=Math.floor(l/e);c||a||(a=!0),t[l]?(s++,l>0&&c>0&&t[l-1]||(o+=a?i("M",c+r,.5+u+r):i("m",n,0),n=0,a=!1),c+1<e&&t[l+1]||(o+=i("h",s),s=0)):n++}return o}(l,s,a.margin)+'"/>',h='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+('viewBox="0 0 '+c)+" "+c+'" shape-rendering="crispEdges">'+u+d+`</svg>
`;return"function"==typeof n&&n(null,h),h},eb}();function n(i,r,o,n,a){let s=[].slice.call(arguments,1),l=s.length,c="function"==typeof s[l-1];if(!c&&!t())throw Error("Callback required as last argument");if(c){if(l<2)throw Error("Too few arguments provided");2===l?(a=o,o=r,r=n=void 0):3===l&&(r.getContext&&typeof a>"u"?(a=n,n=void 0):(a=n,n=o,o=r,r=void 0))}else{if(l<1)throw Error("Too few arguments provided");return 1===l?(o=r,r=n=void 0):2!==l||r.getContext||(n=o,o=r,r=void 0),new Promise(function(t,a){try{let a=e.create(o,n);t(i(a,r,n))}catch(t){a(t)}})}try{let t=e.create(o,n);a(null,i(t,r,n))}catch(t){a(t)}}return tR.create=e.create,tR.toCanvas=n.bind(null,i.render),tR.toDataURL=n.bind(null,i.renderToDataURL),tR.toString=n.bind(null,function(t,e,i){return o.render(t,i)}),tR}();let ev=(0,l.g)(em);function ey(t,e,i){return t!==e&&(t-e<0?e-t:t-e)<=i+.1}let ex={generate({uri:t,size:e,logoSize:i,dotColor:r="#141414"}){let n=[],a=function(t,e){let i=Array.prototype.slice.call(ev.create(t,{errorCorrectionLevel:"Q"}).modules.data,0),r=Math.sqrt(i.length);return i.reduce((t,e,i)=>(i%r==0?t.push([e]):t[t.length-1].push(e))&&t,[])}(t,0),s=e/a.length,l=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];l.forEach(({x:t,y:e})=>{let i=(a.length-7)*s*t,c=(a.length-7)*s*e;for(let t=0;t<l.length;t+=1){let e=s*(7-2*t);n.push((0,o.g)`
            <rect
              fill=${2===t?r:"transparent"}
              width=${0===t?e-5:e}
              rx= ${0===t?(e-5)*.45:.45*e}
              ry= ${0===t?(e-5)*.45:.45*e}
              stroke=${r}
              stroke-width=${0===t?5:0}
              height=${0===t?e-5:e}
              x= ${0===t?c+s*t+2.5:c+s*t}
              y= ${0===t?i+s*t+2.5:i+s*t}
            />
          `)}});let c=Math.floor((i+25)/s),u=a.length/2-c/2,d=a.length/2+c/2-1,h=[];a.forEach((t,e)=>{t.forEach((t,i)=>{!a[e][i]||e<7&&i<7||e>a.length-8&&i<7||e<7&&i>a.length-8||e>u&&e<d&&i>u&&i<d||h.push([e*s+s/2,i*s+s/2])})});let p={};return h.forEach(([t,e])=>{p[t]?p[t]?.push(e):p[t]=[e]}),Object.entries(p).map(([t,e])=>{let i=e.filter(t=>e.every(e=>!ey(t,e,s)));return[Number(t),i]}).forEach(([t,e])=>{e.forEach(e=>{n.push((0,o.g)`<circle cx=${t} cy=${e} fill=${r} r=${s/2.5} />`)})}),Object.entries(p).filter(([t,e])=>e.length>1).map(([t,e])=>{let i=e.filter(t=>e.some(e=>ey(t,e,s)));return[Number(t),i]}).map(([t,e])=>{e.sort((t,e)=>t<e?-1:1);let i=[];for(let t of e){let e=i.find(e=>e.some(e=>ey(t,e,s)));e?e.push(t):i.push([t])}return[t,i.map(t=>[t[0],t[t.length-1]])]}).forEach(([t,e])=>{e.forEach(([e,i])=>{n.push((0,o.g)`
              <line
                x1=${t}
                x2=${t}
                y1=${e}
                y2=${i}
                stroke=${r}
                stroke-width=${s/1.25}
                stroke-linecap="round"
              />
            `)})}),n}},eC=(0,o.i)`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var e$=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let ek=class extends o.e{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??"#3396ff"}
    `,(0,o.x)`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let t="light"===this.theme?this.size:this.size-32;return(0,o.g)`
      <svg height=${t} width=${t}>
        ${ex.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?(0,o.x)`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?(0,o.x)`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:(0,o.x)`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};ek.styles=[a.r,eC],e$([(0,n.n)()],ek.prototype,"uri",void 0),e$([(0,n.n)({type:Number})],ek.prototype,"size",void 0),e$([(0,n.n)()],ek.prototype,"theme",void 0),e$([(0,n.n)()],ek.prototype,"imageSrc",void 0),e$([(0,n.n)()],ek.prototype,"alt",void 0),e$([(0,n.n)()],ek.prototype,"color",void 0),e$([(0,n.n)({type:Boolean})],ek.prototype,"arenaClear",void 0),e$([(0,n.n)({type:Boolean})],ek.prototype,"farcaster",void 0),ek=e$([(0,s.c)("wui-qr-code")],ek);let eR=(0,o.i)`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var eE=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let eI=class extends o.e{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,(0,o.x)`<slot></slot>`}};eI.styles=[eR],eE([(0,n.n)()],eI.prototype,"width",void 0),eE([(0,n.n)()],eI.prototype,"height",void 0),eE([(0,n.n)()],eI.prototype,"borderRadius",void 0),eE([(0,n.n)()],eI.prototype,"variant",void 0),eI=eE([(0,s.c)("wui-shimmer")],eI);let eT=(0,o.i)`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`,eO=class extends o.e{render(){return(0,o.x)`
      <a
        data-testid="ux-branding-reown"
        href=${"https://reown.com"}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${["0","0","l","0"]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};eO.styles=[a.r,a.e,eT],eO=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}([(0,s.c)("wui-ux-by-reown")],eO);let eP=(0,o.i)`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`,eS=class extends tb{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),a.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(t=>t()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),(0,o.x)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let t=this.getBoundingClientRect().width-40,e=this.wallet?this.wallet.name:void 0;return a.d.setWcLinking(void 0),a.d.setRecentWallet(this.wallet),(0,o.x)` <wui-qr-code
      size=${t}
      theme=${a.T.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,n.o)(a.c.getWalletImage(this.wallet))}
      color=${(0,n.o)(a.T.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,n.o)(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let t=!this.uri||!this.ready;return(0,o.x)`<wui-link
      .disabled=${t}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};eS.styles=eP,eS=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}([(0,s.c)("w3m-connecting-wc-qrcode")],eS);let ej=class extends o.e{constructor(){if(super(),this.wallet=a.R.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");a.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return(0,o.x)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,n.o)(a.c.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};ej=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}([(0,s.c)("w3m-connecting-wc-unsupported")],ej);var eA=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let eL=class extends tb{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=a.j.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(a.d.subscribeKey("wcUri",()=>{this.updateLoadingState()})),a.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:t,name:e}=this.wallet,{redirect:i,href:r}=a.a.formatUniversalUrl(t,this.uri);a.d.setWcLinking({name:e,href:r}),a.d.setRecentWallet(this.wallet),a.a.openHref(i,"_blank")}catch{this.error=!0}}};eA([(0,n.r)()],eL.prototype,"isLoading",void 0),eL=eA([(0,s.c)("w3m-connecting-wc-web")],eL);var ez=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let eB=class extends o.e{constructor(){super(),this.wallet=a.R.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!a.O.state.siwx,this.remoteFeatures=a.O.state.remoteFeatures,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(a.O.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return(0,o.x)`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?(0,o.x)`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(t=!1){if(!("browser"===this.platform||a.O.state.manualWCControl&&!t))try{let{wcPairingExpiry:e,status:i}=a.d.state;(t||a.O.state.enableEmbedded||a.a.isPairingExpired(e)||"connecting"===i)&&(await a.d.connectWalletConnect(),this.isSiwxEnabled||a.M.close())}catch(t){a.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),a.d.setWcError(!0),a.i.showError(t.message??"Connection error"),a.d.resetWcConnection(),a.R.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;let{mobile_link:t,desktop_link:e,webapp_link:i,injected:r,rdns:o}=this.wallet,n=r?.map(({injected_id:t})=>t).filter(Boolean),s=[...o?[o]:n??[]],l=!a.O.state.isUniversalProvider&&s.length,c=a.d.checkInstalled(s),u=l&&c,d=e&&!a.a.isMobile();u&&!a.g.state.noAdapters&&this.platforms.push("browser"),t&&this.platforms.push(a.a.isMobile()?"mobile":"qrcode"),i&&this.platforms.push("web"),d&&this.platforms.push("desktop"),u||!l||a.g.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return(0,o.x)`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return(0,o.x)`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return(0,o.x)`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return(0,o.x)`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return(0,o.x)`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return(0,o.x)`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?(0,o.x)`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){let e=this.shadowRoot?.querySelector("div");e&&(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ez([(0,n.r)()],eB.prototype,"platform",void 0),ez([(0,n.r)()],eB.prototype,"platforms",void 0),ez([(0,n.r)()],eB.prototype,"isSiwxEnabled",void 0),ez([(0,n.r)()],eB.prototype,"remoteFeatures",void 0),eB=ez([(0,s.c)("w3m-connecting-wc-view")],eB);var eW=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let eN=class extends o.e{constructor(){super(...arguments),this.isMobile=a.a.isMobile()}render(){if(this.isMobile){let{featured:t,recommended:e}=a.A.state,{customWallets:i}=a.O.state,r=a.S.getRecentWallets(),n=t.length||e.length||i?.length||r.length;return(0,o.x)`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${n?(0,o.x)`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return(0,o.x)`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};eW([(0,n.r)()],eN.prototype,"isMobile",void 0),eN=eW([(0,s.c)("w3m-connecting-wc-basic-view")],eN);let eD=(0,o.i)`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var eU=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let eM=class extends o.e{constructor(){super(...arguments),this.inputElementRef=(0,c.e)(),this.checked=void 0}render(){return(0,o.x)`
      <label>
        <input
          ${(0,c.n)(this.inputElementRef)}
          type="checkbox"
          ?checked=${(0,n.o)(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};eM.styles=[a.r,a.e,a.k,eD],eU([(0,n.n)({type:Boolean})],eM.prototype,"checked",void 0),eM=eU([(0,s.c)("wui-switch")],eM);let e_=(0,o.i)`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var eq=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let eK=class extends o.e{constructor(){super(...arguments),this.checked=void 0}render(){return(0,o.x)`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${(0,n.o)(this.checked)}></wui-switch>
      </button>
    `}};eK.styles=[a.r,a.e,e_],eq([(0,n.n)({type:Boolean})],eK.prototype,"checked",void 0),eK=eq([(0,s.c)("wui-certified-switch")],eK);let eV=(0,o.i)`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var eH=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let eF=class extends o.e{constructor(){super(...arguments),this.icon="copy"}render(){return(0,o.x)`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};eF.styles=[a.r,a.e,eV],eH([(0,n.n)()],eF.prototype,"icon",void 0),eF=eH([(0,s.c)("wui-input-element")],eF);let eY=(0,o.i)`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var eJ=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let eX=class extends o.e{constructor(){super(...arguments),this.inputElementRef=(0,c.e)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){let t=`wui-padding-right-${this.inputRightPadding}`,e={[`wui-size-${this.size}`]:!0,[t]:!!this.inputRightPadding};return(0,o.x)`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${(0,c.n)(this.inputElementRef)}
        class=${(0,n.e)(e)}
        type=${this.type}
        enterkeyhint=${(0,n.o)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${(0,n.o)(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?(0,o.x)`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};eX.styles=[a.r,a.e,eY],eJ([(0,n.n)()],eX.prototype,"size",void 0),eJ([(0,n.n)()],eX.prototype,"icon",void 0),eJ([(0,n.n)({type:Boolean})],eX.prototype,"disabled",void 0),eJ([(0,n.n)()],eX.prototype,"placeholder",void 0),eJ([(0,n.n)()],eX.prototype,"type",void 0),eJ([(0,n.n)()],eX.prototype,"keyHint",void 0),eJ([(0,n.n)()],eX.prototype,"value",void 0),eJ([(0,n.n)()],eX.prototype,"inputRightPadding",void 0),eJ([(0,n.n)()],eX.prototype,"tabIdx",void 0),eX=eJ([(0,s.c)("wui-input-text")],eX);let eQ=(0,o.i)`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,eG=class extends o.e{constructor(){super(...arguments),this.inputComponentRef=(0,c.e)()}render(){return(0,o.x)`
      <wui-input-text
        ${(0,c.n)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let t=this.inputComponentRef.value?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};eG.styles=[a.r,eQ],eG=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}([(0,s.c)("wui-search-bar")],eG);let eZ=(0,o.g)`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,e0=(0,o.i)`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var e1=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let e3=class extends o.e{constructor(){super(...arguments),this.type="wallet"}render(){return(0,o.x)`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?(0,o.x)` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${eZ}`:(0,o.x)`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};e3.styles=[a.r,a.e,e0],e1([(0,n.n)()],e3.prototype,"type",void 0),e3=e1([(0,s.c)("wui-card-select-loader")],e3);let e2=(0,o.i)`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var e5=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let e4=class extends o.e{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&s.U.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&s.U.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&s.U.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&s.U.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&s.U.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&s.U.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&s.U.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&s.U.getSpacingStyles(this.margin,3)};
    `,(0,o.x)`<slot></slot>`}};e4.styles=[a.r,e2],e5([(0,n.n)()],e4.prototype,"gridTemplateRows",void 0),e5([(0,n.n)()],e4.prototype,"gridTemplateColumns",void 0),e5([(0,n.n)()],e4.prototype,"justifyItems",void 0),e5([(0,n.n)()],e4.prototype,"alignItems",void 0),e5([(0,n.n)()],e4.prototype,"justifyContent",void 0),e5([(0,n.n)()],e4.prototype,"alignContent",void 0),e5([(0,n.n)()],e4.prototype,"columnGap",void 0),e5([(0,n.n)()],e4.prototype,"rowGap",void 0),e5([(0,n.n)()],e4.prototype,"gap",void 0),e5([(0,n.n)()],e4.prototype,"padding",void 0),e5([(0,n.n)()],e4.prototype,"margin",void 0),e4=e5([(0,s.c)("wui-grid")],e4);let e6=(0,o.i)`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var e8=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let e7=class extends o.e{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let t=this.wallet?.badge_type==="certified";return(0,o.x)`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${(0,n.o)(t?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${t?(0,o.x)`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return(this.visible||this.imageSrc)&&!this.imageLoading?(0,o.x)`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,n.o)(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `:this.shimmerTemplate()}shimmerTemplate(){return(0,o.x)`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=a.c.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await a.c.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};e7.styles=e6,e8([(0,n.r)()],e7.prototype,"visible",void 0),e8([(0,n.r)()],e7.prototype,"imageSrc",void 0),e8([(0,n.r)()],e7.prototype,"imageLoading",void 0),e8([(0,n.n)()],e7.prototype,"wallet",void 0),e7=e8([(0,s.c)("w3m-all-wallets-list-item")],e7);let e9=(0,o.i)`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var it=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let ie="local-paginator",ii=class extends o.e{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!a.A.state.wallets.length,this.wallets=a.A.state.wallets,this.recommended=a.A.state.recommended,this.featured=a.A.state.featured,this.filteredWallets=a.A.state.filteredWallets,this.unsubscribe.push(a.A.subscribeKey("wallets",t=>this.wallets=t),a.A.subscribeKey("recommended",t=>this.recommended=t),a.A.subscribeKey("featured",t=>this.featured=t),a.A.subscribeKey("filteredWallets",t=>this.filteredWallets=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.paginationObserver?.disconnect()}render(){return(0,o.x)`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;let t=this.shadowRoot?.querySelector("wui-grid");t&&(await a.A.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,e){return[...Array(t)].map(()=>(0,o.x)`
        <wui-card-select-loader type="wallet" id=${(0,n.o)(e)}></wui-card-select-loader>
      `)}walletsTemplate(){let t=this.filteredWallets?.length>0?a.a.uniqueBy([...this.featured,...this.recommended,...this.filteredWallets],"id"):a.a.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return a.W.markWalletsAsInstalled(t).map(t=>(0,o.x)`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(t)}
          .wallet=${t}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:t,recommended:e,featured:i,count:r}=a.A.state,o=window.innerWidth<352?3:4,n=t.length+e.length,s=Math.ceil(n/o)*o-n+o;return s-=t.length?i.length%o:0,0===r&&i.length>0?null:0===r||[...i,...t,...e].length<r?this.shimmerTemplate(s,ie):null}createPaginationObserver(){let t=this.shadowRoot?.querySelector(`#${ie}`);t&&(this.paginationObserver=new IntersectionObserver(([t])=>{if(t?.isIntersecting&&!this.loading){let{page:t,count:e,wallets:i}=a.A.state;i.length<e&&a.A.fetchWalletsByPage({page:t+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){a.C.selectWalletConnector(t)}};ii.styles=e9,it([(0,n.r)()],ii.prototype,"loading",void 0),it([(0,n.r)()],ii.prototype,"wallets",void 0),it([(0,n.r)()],ii.prototype,"recommended",void 0),it([(0,n.r)()],ii.prototype,"featured",void 0),it([(0,n.r)()],ii.prototype,"filteredWallets",void 0),ii=it([(0,s.c)("w3m-all-wallets-list")],ii);let ir=(0,o.i)`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var io=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let ia=class extends o.e{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?(0,o.x)`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await a.A.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){let{search:t}=a.A.state,e=a.W.markWalletsAsInstalled(t);return t.length?(0,o.x)`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${e.map(t=>(0,o.x)`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(t)}
              .wallet=${t}
              data-testid="wallet-search-item-${t.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:(0,o.x)`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){a.C.selectWalletConnector(t)}};ia.styles=ir,io([(0,n.r)()],ia.prototype,"loading",void 0),io([(0,n.n)()],ia.prototype,"query",void 0),io([(0,n.n)()],ia.prototype,"badge",void 0),ia=io([(0,s.c)("w3m-all-wallets-search")],ia);var is=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let il=class extends o.e{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=a.a.debounce(t=>{this.search=t})}render(){let t=this.search.length>=2;return(0,o.x)`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?(0,o.x)`<w3m-all-wallets-search
            query=${this.search}
            badge=${(0,n.o)(this.badge)}
          ></w3m-all-wallets-search>`:(0,o.x)`<w3m-all-wallets-list badge=${(0,n.o)(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onClick(){if("certified"===this.badge){this.badge=void 0;return}this.badge="certified",a.i.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return a.a.isMobile()?(0,o.x)`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){a.R.push("ConnectingWalletConnect")}};is([(0,n.r)()],il.prototype,"search",void 0),is([(0,n.r)()],il.prototype,"badge",void 0),il=is([(0,s.c)("w3m-all-wallets-view")],il);let ic=(0,o.i)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var iu=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let id=class extends o.e{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return(0,o.x)`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${(0,n.o)(this.iconVariant)}
        tabindex=${(0,n.o)(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return(0,o.x)`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return(0,o.x)`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e="square-blue"===this.iconVariant?"mdl":"md",i=this.iconSize?this.iconSize:e;return(0,o.x)`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${i}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?(0,o.x)`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:(0,o.x)``}chevronTemplate(){return this.chevron?(0,o.x)`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};id.styles=[a.r,a.e,ic],iu([(0,n.n)()],id.prototype,"icon",void 0),iu([(0,n.n)()],id.prototype,"iconSize",void 0),iu([(0,n.n)()],id.prototype,"tabIdx",void 0),iu([(0,n.n)()],id.prototype,"variant",void 0),iu([(0,n.n)()],id.prototype,"iconVariant",void 0),iu([(0,n.n)({type:Boolean})],id.prototype,"disabled",void 0),iu([(0,n.n)()],id.prototype,"imageSrc",void 0),iu([(0,n.n)()],id.prototype,"alt",void 0),iu([(0,n.n)({type:Boolean})],id.prototype,"chevron",void 0),iu([(0,n.n)({type:Boolean})],id.prototype,"loading",void 0),id=iu([(0,s.c)("wui-list-item")],id);let ih=class extends o.e{constructor(){super(...arguments),this.wallet=a.R.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return(0,o.x)`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?(0,o.x)`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?(0,o.x)`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?(0,o.x)`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?(0,o.x)`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&a.a.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&a.a.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&a.a.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&a.a.openHref(this.wallet.homepage,"_blank")}};ih=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}([(0,s.c)("w3m-downloads-view")],ih)}}]);