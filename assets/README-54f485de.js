import{d as e,o,c as n,b as t}from"./index-0afa1053.js";const c={class:"markdown-body"},s=t("h2",null,"Usage",-1),p=t("pre",null,[t("code",{class:"language-html"},`<mcw-top-app-bar class="main-toolbar">
  <div class="mdc-top-app-bar__row">
    <section
      class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
    >
      <button
        class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button"
        aria-label="Open navigation menu"
      >
        menu
      </button>
      <span class="mdc-top-app-bar__title">vue material adapter</span>
    </section>

    <section
      class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
    >
      <button
        target="_blank"
        title="vue-material-adapter"
        class="mdc-top-app-bar__action-item mdc-icon-button material-icons"
        aria-label="Help"
        @click="showHelp"
      >
        help
      </button>

      <button
        target="_blank"
        title="vue-material-adapter"
        class="mdc-top-app-bar__action-item mdc-icon-button"
        aria-label="Open github project"
        @click="goto('https://github.com/pgbross/vue-material-adapter')"
      >
        <img :src="githubLogo" />
      </button>
    </section>
  </div>
</mcw-top-app-bar>
`)],-1),r=t("pre",null,[t("code",{class:"language-javascript"},`var vm = new Vue({
  methods: {
    showHelp() {
      console.log('show help');
    },

    goto(href) {
      window.open(href, '_blank');
    },
  },
});
`)],-1),i=t("h3",null,"Reference",-1),l=t("ul",null,[t("li",null,[t("a",{href:"https://github.com/material-components/material-components-web/tree/master/packages/mdc-top-app-bar"},"https://github.com/material-components/material-components-web/tree/master/packages/mdc-top-app-bar")])],-1),m=[s,p,r,i,l],h={},g="",v=e({__name:"README",setup(_,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(d,b)=>(o(),n("div",c,m))}});export{v as default,g as excerpt,h as frontmatter};
