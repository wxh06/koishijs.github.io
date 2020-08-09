(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{392:function(t,s,a){"use strict";a.r(s);var e=a(25),o=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用 (App)")]),t._v(" "),a("p",[a("strong",[t._v("应用 (App)")]),t._v(" 是 "),a("RouterLink",{attrs:{to:"/api/context.html"}},[t._v("Context")]),t._v(" 的一个子类，它是程序的入口，管理着全部机器人的信息。除了 Context 中已有的属性和方法以外，App 还提供了下面的属性和方法：")],1),t._v(" "),a("h2",{attrs:{id:"new-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-app"}},[t._v("#")]),t._v(" new App(options)")]),t._v(" "),a("p",[t._v("创建一个 App 实例。")]),t._v(" "),a("h3",{attrs:{id:"options-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-type"}},[t._v("#")]),t._v(" options.type")]),t._v(" "),a("p",[t._v("机器人的通信方式，目前支持 "),a("code",[t._v("'http'")]),t._v(" 和 "),a("code",[t._v("'ws'")]),t._v(" 两种。特别地，如果这个配置缺省，Koishi 也会读取你的 "),a("code",[t._v("server")]),t._v(" 选项，根据你配置的服务器 URL 进行适配。相关 CQHTTP 配置："),a("code",[t._v("use_http")]),t._v(", "),a("code",[t._v("use_ws")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"options-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-port"}},[t._v("#")]),t._v(" options.port")]),t._v(" "),a("p",[t._v("服务器监听的端口。相关 CQHTTP 配置："),a("code",[t._v("post_url")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"options-secret"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-secret"}},[t._v("#")]),t._v(" options.secret")]),t._v(" "),a("p",[t._v("接收信息时用于验证的字段，应与 CQHTTP 的 "),a("code",[t._v("secret")]),t._v(" 配置保持一致。")]),t._v(" "),a("h3",{attrs:{id:"options-bots"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-bots"}},[t._v("#")]),t._v(" options.bots")]),t._v(" "),a("h3",{attrs:{id:"options-bots-selfid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-bots-selfid"}},[t._v("#")]),t._v(" options(.bots[]).selfId")]),t._v(" "),a("p",[t._v("机器人自己的 QQ 号。这个选项通常是可选的，因为 Koishi 在大部分情况下可以自动获取机器人的 QQ 号。但我们仍然建议你手动配置这个选项。")]),t._v(" "),a("h3",{attrs:{id:"options-bots-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-bots-server"}},[t._v("#")]),t._v(" options(.bots[]).server")]),t._v(" "),a("p",[t._v("如果使用了 HTTP，则该配置将作为发送信息的服务端；如果使用了 WebSocket，则该配置将作为监听事件和发送信息的服务端。")]),t._v(" "),a("p",[t._v("相关 CQHTTP 配置："),a("code",[t._v("host")]),t._v(", "),a("code",[t._v("port")]),t._v(", "),a("code",[t._v("ws_host")]),t._v(", "),a("code",[t._v("ws_port")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"options-bots-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-bots-token"}},[t._v("#")]),t._v(" options(.bots[]).token")]),t._v(" "),a("p",[t._v("发送信息时用于验证的字段，应与 CQHTTP 的 "),a("code",[t._v("access_token")]),t._v(" 配置保持一致。")]),t._v(" "),a("h3",{attrs:{id:"options-nickname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-nickname"}},[t._v("#")]),t._v(" options.nickname")]),t._v(" "),a("p",[t._v("机器人的昵称，可以是字符串或字符串数组。将用于指令前缀的匹配。例如，如果配置该选项为 "),a("code",[t._v("'恋恋'")]),t._v("，则你可以通过 "),a("code",[t._v("恋恋，help")]),t._v(" 来进行 help 指令的调用。参见 "),a("RouterLink",{attrs:{to:"/api/command-system.html#指令前缀"}},[a("strong",[t._v("指令前缀")])]),t._v(" 一节。")],1),t._v(" "),a("h3",{attrs:{id:"options-prefix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-prefix"}},[t._v("#")]),t._v(" options.prefix")]),t._v(" "),a("p",[t._v("指令前缀字符，可以是字符串或字符串数组。将用于指令前缀的匹配。例如，如果配置该选项为 "),a("code",[t._v(".")]),t._v("，则你可以通过 "),a("code",[t._v(".help")]),t._v(" 来进行 help 指令的调用。参见 "),a("RouterLink",{attrs:{to:"/api/command-system.html#指令前缀"}},[a("strong",[t._v("指令前缀")])]),t._v(" 一节。")],1),t._v(" "),a("h3",{attrs:{id:"options-maxlisteners"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-maxlisteners"}},[t._v("#")]),t._v(" options.maxListeners")]),t._v(" "),a("p",[t._v("每种钩子的最大数量。如果超过这个数量，Koishi 会认定为发生了内存泄漏，将产生一个错误事件，并停止新钩子的安装。默认值为 "),a("code",[t._v("64")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"options-queuedelay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-queuedelay"}},[t._v("#")]),t._v(" options.queueDelay")]),t._v(" "),a("h3",{attrs:{id:"options-prompttimeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-prompttimeout"}},[t._v("#")]),t._v(" options.promptTimeout")]),t._v(" "),a("h3",{attrs:{id:"options-similaritycoefficient"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-similaritycoefficient"}},[t._v("#")]),t._v(" options.similarityCoefficient")]),t._v(" "),a("p",[t._v("用于模糊匹配的相似系数，应该是一个 0 到 1 之间的数值。数值越高，模糊匹配越严格。设置为 1 可以完全禁用模糊匹配。参见 "),a("RouterLink",{attrs:{to:"/api/command-system.html#模糊匹配"}},[a("strong",[t._v("模糊匹配")])]),t._v(" 一节。")],1),t._v(" "),a("h3",{attrs:{id:"options-quickoperationtimeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-quickoperationtimeout"}},[t._v("#")]),t._v(" options.quickOperationTimeout")]),t._v(" "),a("p",[t._v("快捷操作的时间限制，单位为毫秒。如果配置了这个选项且使用了 HTTP 通信方式，则在这段时间内的首次调用 "),a("code",[t._v("meta.$send()")]),t._v(" 或类似的方法将不产生新的 HTTP 请求。默认值为 "),a("code",[t._v("0")]),t._v("。参见 "),a("RouterLink",{attrs:{to:"/api/message.html#快捷操作"}},[a("strong",[t._v("快捷操作")])]),t._v(" 一节。")],1),t._v(" "),a("h2",{attrs:{id:"app-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-options"}},[t._v("#")]),t._v(" app.options")]),t._v(" "),a("p",[t._v("当前 App 创建时传入的配置。参见 "),a("RouterLink",{attrs:{to:"/guide/config-file.html"}},[t._v("配置文件")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"app-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-server"}},[t._v("#")]),t._v(" app.server")]),t._v(" "),a("p",[t._v("当前 App 绑定的 Server 对象。")]),t._v(" "),a("h3",{attrs:{id:"server-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-app"}},[t._v("#")]),t._v(" server.app")]),t._v(" "),a("p",[t._v("当前 Server 对象所在的 App 实例。")]),t._v(" "),a("h3",{attrs:{id:"server-bots"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-bots"}},[t._v("#")]),t._v(" server.bots")]),t._v(" "),a("p",[t._v("当前 Server 对象所绑定的全部 "),a("RouterLink",{attrs:{to:"/api/bot.html"}},[t._v("Bot")]),t._v(" 实例。你可以将其当做一个 Bot 数组，也可以直接使用 QQ 号作为其索引：")],1),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("server.bots[")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("0")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("].selfId                       ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 123456789")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("server.bots[")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("123456789")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("] ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("===")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" server.bots[")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("0")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("]   ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// true")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("server.bots.length                          ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 1")])])])]),a("h3",{attrs:{id:"server-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-router"}},[t._v("#")]),t._v(" server.router")]),t._v(" "),a("p",[t._v("如果你使用了 http 或 ws-reverse 模式，则这个属性将作为一个 "),a("a",{attrs:{href:"https://github.com/koajs/router/blob/master/API.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Koa-Router"),a("OutboundLink")],1),t._v(" 实例。你可以在上面自定义新的路由：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("app.server.router.")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("get")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'/path'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", (")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("ctx")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("next")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// handle request")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("})")])])])]),a("h2",{attrs:{id:"app-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-status"}},[t._v("#")]),t._v(" app.status")]),t._v(" "),a("p",[t._v("当前 App 的运行状态。它可能是下列数值中的一个：")]),t._v(" "),a("ul",[a("li",[t._v("Status.closed = 0")]),t._v(" "),a("li",[t._v("Status.opening = 1")]),t._v(" "),a("li",[t._v("Status.open = 2")]),t._v(" "),a("li",[t._v("Status.closing = 3")])]),t._v(" "),a("h2",{attrs:{id:"app-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-start"}},[t._v("#")]),t._v(" app.start()")]),t._v(" "),a("p",[t._v("启动此应用。")]),t._v(" "),a("ul",[a("li",[t._v("返回值: "),a("code",[t._v("Promise<void>")])])]),t._v(" "),a("h2",{attrs:{id:"app-stop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-stop"}},[t._v("#")]),t._v(" app.stop()")]),t._v(" "),a("p",[t._v("停止此应用。")]),t._v(" "),a("ul",[a("li",[t._v("返回值: "),a("code",[t._v("Promise<void>")])])]),t._v(" "),a("h2",{attrs:{id:"app-getselfids"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-getselfids"}},[t._v("#")]),t._v(" app.getSelfIds()")]),t._v(" "),a("p",[t._v("获取所有机器人的 QQ 号。已经获取到的将不再获取。无法连接的服务器的账号将不会返回。")]),t._v(" "),a("ul",[a("li",[t._v("返回值: "),a("code",[t._v("Promise<number[]>")]),t._v(" 所有机器人的 QQ 号")])])],1)}),[],!1,null,null,null);s.default=o.exports}}]);