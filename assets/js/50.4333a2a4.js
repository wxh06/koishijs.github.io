(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{382:function(t,o,a){"use strict";a.r(o);var s=a(25),e=Object(s.a)({},(function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"接入-gitlab-webhook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接入-gitlab-webhook"}},[t._v("#")]),t._v(" 接入 GitLab Webhook "),a("Badge",{attrs:{text:"beta",type:"warn"}})],1),t._v(" "),a("p",[t._v("koishi-plugin-gitlab-webhook 支持接收 "),a("a",{attrs:{href:"https://gitlab.com/help/user/project/integrations/webhooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitLab Webhook"),a("OutboundLink")],1),t._v(" 并转发到 QQ。")]),t._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("这个插件的配置与 "),a("RouterLink",{attrs:{to:"/plugins/other/github-webhook.html"}},[t._v("koishi-plugin-github-webhook")]),t._v(" 类似，首先你需要在配置文件或传入 App 的选项中加一个 "),a("code",[t._v("gitlabWebhook")]),t._v(" 属性，它用来控制服务器信息；而插件的选项则表示接收哪些仓库的 webhook 并转发到哪些群。下面是一个例子：")],1),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:"koishi.config.js"}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#66D9EF"}},[t._v("module")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(".")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("exports")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 这里是默认值，secret 不能留空")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  gitlabWebhook: {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    path: ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'/'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(",")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    port: ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("12140")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(",")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    secret: ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("''")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(",")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  },")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  plugins: [[")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'gitlab-webhook'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 当检测到 user/repo1 发生的事件时转发到 123，456 两个群")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'user/repo1'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(": [")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("123")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("456")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("],")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  }]],")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("}")])])])])],1)}),[],!1,null,null,null);o.default=e.exports}}]);