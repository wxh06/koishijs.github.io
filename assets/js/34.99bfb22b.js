(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{417:function(t,s,a){"use strict";a.r(s);var o=a(25),c=Object(o.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"接收和发送信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接收和发送信息"}},[t._v("#")]),t._v(" 接收和发送信息")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("这里是"),a("strong",[t._v("正在施工")]),t._v("的 koishi v2 的文档。要查看 v1 版本的文档，请前往"),a("a",{attrs:{href:"https://koishijs.github.io/v1/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("这里")]),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("p",[t._v("从本节开始，我们开始深入研究如何利用 Koishi 的来接收和发送信息。如果你不是一个插件开发者，你可以选择跳过本节和接下来的几个章节。但如果你对如何开发 Koishi 感兴趣，那么真正有趣的部分才刚刚开始。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("接下来的教程可能会涉及对 Koishi API 的调用。如果你不知道如何用这些 API 运行你的机器人，你可能需要查看 "),a("RouterLink",{attrs:{to:"/guide/getting-started.html#调用-koishi"}},[t._v("调用 Koishi")]),t._v(" 一节。如果你想获得某个 API 的具体用法，你可以参考 "),a("RouterLink",{attrs:{to:"/api/"}},[t._v("API 文档")]),t._v(" 。")],1)]),t._v(" "),a("h2",{attrs:{id:"接收消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接收消息"}},[t._v("#")]),t._v(" 接收消息")]),t._v(" "),a("p",[t._v("在 Koishi 中接收消息的语法非常简单：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#75715E"}},[t._v("// 如果收到“人有多大胆”，就回应“地有多大产”")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("app.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("on")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'message'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", (")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("meta")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("if")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (meta.message ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("===")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'人有多大胆'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    meta.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("$send")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'地有多大产'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  }")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("})")])])])]),a("p",[t._v("在这个简单的示例中，这里有两件事你需要了解：")]),t._v(" "),a("p",[t._v("上面的 "),a("code",[t._v("meta")]),t._v(" 对象被称为"),a("strong",[t._v("元信息")]),t._v("。元信息具有通用的结构，只要是来自 "),a("a",{attrs:{href:"https://cqhttp.cc/docs/4.15/#/Post",target:"_blank",rel:"noopener noreferrer"}},[t._v("CQHTTP 的事件"),a("OutboundLink")],1),t._v("，无论类型都会被解析成这个统一结构。你可以在本节的最后查看 "),a("a",{attrs:{href:"#%E6%B7%B1%E5%85%A5-meta-%E5%AF%B9%E8%B1%A1"}},[t._v("Meta 对象的详细结构")]),t._v("。")]),t._v(" "),a("p",[t._v("上面的 "),a("code",[t._v("message")]),t._v(" 字符串被称为"),a("strong",[t._v("事件名称")]),t._v("。Koishi 的事件名和 "),a("code",[t._v("meta.postType")]),t._v(" 字段进行对应。同时，根据 postType 的不同，Koishi 会相应地添加二级事件。二级事件和一级事件会被同时触发，因此你只需要根据具体的需求监听其中的一个即可。例如，一个 postType 为 "),a("code",[t._v("notice")]),t._v("，noticeType 为 "),a("code",[t._v("group_upload")]),t._v(" 的事件会同时触发 "),a("code",[t._v("notice")]),t._v(" 和 "),a("code",[t._v("notice/group_upload")]),t._v(" 两个监听器。")]),t._v(" "),a("p",[t._v("除去由 CQHTTP 提供的事件外，Koishi 自身也提供了一批事件，你可以在 "),a("RouterLink",{attrs:{to:"/api/event.html"}},[a("strong",[t._v("事件")])]),t._v(" 一章中看到目前支持的所有事件名。")],1),t._v(" "),a("h2",{attrs:{id:"发送消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发送消息"}},[t._v("#")]),t._v(" 发送消息")]),t._v(" "),a("p",[t._v("一个 "),a("strong",[t._v("Bot 实例")]),t._v(" 封装了一套 "),a("a",{attrs:{href:"https://cqhttp.cc/docs/4.12/#/API",target:"_blank",rel:"noopener noreferrer"}},[t._v("CQHTTP API"),a("OutboundLink")],1),t._v("。你可以像这样调用它：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#75715E"}},[t._v("// 向服务器发送消息")]),t._v("\n"),a("span",{staticStyle:{color:"#F92672"}},[t._v("await")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" meta.$bot.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("sendPrivateMsg")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("123456789")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'Hello world'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 从服务器获取信息")]),t._v("\n"),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" groupInfo ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("await")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" meta.$bot.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("getGroupInfo")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("987654321")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")])])])]),a("p",[t._v("如果你熟悉 CQHTTP API 的话，这对你一定不陌生。没错，这套接口和 CQHTTP 提供的接口是一一对应的。除此以外，由于 Koishi 全部使用 TypeScript 编写，我们还提供了完整的类型定义，让你在编写代码时再也无需查看 CQHTTP 文档。你可以在 "),a("RouterLink",{attrs:{to:"/api/bot.html"}},[a("strong",[t._v("机器人")])]),t._v(" 一章中看到完整的 Sender API。")],1),t._v(" "),a("h3",{attrs:{id:"异步调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步调用"}},[t._v("#")]),t._v(" 异步调用")]),t._v(" "),a("p",[t._v("CQHTTP 提出了"),a("strong",[t._v("异步调用")]),t._v("的概念，当 CQHTTP 服务器受到异步调用请求时，如果调用正确，将直接返回 200。这样做的好处是，如果某些操作有较长的耗时（例如发送含有大量图片的消息或清空数据目录等）或你不关心调用结果，使用异步调用可以有效防止阻塞。下面说明了异步调用和普通调用的关系：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/async-method.png",alt:"async-method"}})]),t._v(" "),a("p",[t._v("但是另一方面，你也无法得知异步调用是否成功被执行。与此同时，没有副作用的异步调用也毫无意义（因为这些调用本身就是为了获取某些信息，但是异步调用是无法获取调用结果的）。因此，Koishi 为除此以外的所有异步调用都提供了 API，它们的调用接口与非异步的版本除了在方法后面加了一个 "),a("code",[t._v("Async")]),t._v(" 外没有任何区别：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#75715E"}},[t._v("// 普通版本")]),t._v("\n"),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" messageId ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("await")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" app.sender.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("sendPrivateMsg")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("123456789")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'Hello world'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 异步版本，无法获得调用结果")]),t._v("\n"),a("span",{staticStyle:{color:"#F92672"}},[t._v("await")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" app.sender.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("sendPrivateMsgAsync")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("123456789")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'Hello world'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")])])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("虽然异步调用方法的名字以 Async 结尾，但是其他方法也是"),a("strong",[t._v("异步函数")]),t._v("，它们都会返回一个 "),a("code",[t._v("Promise")]),t._v(" 对象。取这样的名字只是为了与 CQHTTP 保持一致。")])]),t._v(" "),a("h3",{attrs:{id:"快捷回复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快捷回复"}},[t._v("#")]),t._v(" 快捷回复")]),t._v(" "),a("p",[t._v("Meta 对象还提供了一个快捷回复方法 "),a("code",[t._v("meta.$send")]),t._v("，调用它可以快速实现对原消息的回复。快捷操作的响应速度会高于普通的 Sender API 调用，但是默认情况下这种操作同上面的异步调用一样，这些操作也是无法获得调用结果的。完整的快捷操作列表参见 "),a("a",{attrs:{href:"#koishi-%E6%B7%BB%E5%8A%A0%E7%9A%84%E5%B1%9E%E6%80%A7"}},[t._v("Koishi 添加的属性")]),t._v("。")]),t._v(" "),a("p",[t._v("这里也简单介绍一下快捷操作的原理。当正常使用 HTTP 模式时，每个事件上报和 API 调用都使用了不同的连接。那么快捷操作则相当于将 API 调用作为事件上报的响应。当然，这种做法有着很多限制，例如对 WebSocket 无效，同一个事件只能响应一次，以及需要手动处理响应超时的问题。因此，默认情况下这种优化是不开启的。如果手动配置了 "),a("code",[t._v("quickOperationTimeout")]),t._v("，则会将这个配置项作为时间限制，在这个时间限制内第一个调用快捷操作的会享受这种优化（事实上大部分操作都只有一个响应，所以这种优化对 HTTP 往往是非常有效的），之后的所有快捷操作调用都会自动转化为异步调用，这样可以保证快捷操作永远都是可用的。")]),t._v(" "),a("p",[t._v("下面这张图比较了使用 HTTP 时，快捷操作与默认机制的区别：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/quick-operation.png",alt:"quick-operation"}})]),t._v(" "),a("h2",{attrs:{id:"中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件"}},[t._v("#")]),t._v(" 中间件")]),t._v(" "),a("p",[t._v("有了接收和发送消息的能力，似乎你就能完成一切工作了——很多机器人框架也的确是这么想的。但是从 Koishi 的角度，这还远远不够。当载入的功能越来越多后，另一些严重的问题将逐渐浮现出来：如何限制消息能触发的应答次数？如何进行权限管理？如何提高机器人的性能？这些问题的答案将我们引向另一套更高级的系统——这也就是"),a("strong",[t._v("中间件")]),t._v("的由来。")]),t._v(" "),a("p",[t._v("中间件是对消息事件处理流程的再封装。你注册的所有中间件将会由一个事件监听器进行统一管理，数据流向下游，控制权流回上游——这可以有效确保了任意消息都只被处理一次。被认定为无需继续处理的消息不会进入下游的中间件——这让我们能够轻易地实现权限管理。与此同时，Koishi 的中间件也支持异步调用，这使得你可以在中间件函数中实现任何逻辑。事实上，相比更加底层地调用接收器，"),a("strong",[t._v("使用中间件处理消息才是 Koishi 更加推荐的做法")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("在你阅读下面的内容之前，你首先应该了解中间件是为了"),a("strong",[t._v("处理消息")]),t._v("而设计的。因此，如果你要处理的是 notice 或者 request 类型的元信息，那么你还是应该使用接收器来处理。")])]),t._v(" "),a("p",[t._v("中间件的本质是下面的函数。看起来挺简单的，不是吗？我们将在下面详细介绍它的运作方式。")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#66D9EF"}},[t._v("type")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("NextFunction")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("next")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("?:")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("NextFunction")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("any")]),t._v("\n"),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("type")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("Middleware")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("meta")]),a("span",{staticStyle:{color:"#F92672"}},[t._v(":")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("Meta")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("next")]),a("span",{staticStyle:{color:"#F92672"}},[t._v(":")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("NextFunction")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("any")])])])]),a("h3",{attrs:{id:"注册和取消中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册和取消中间件"}},[t._v("#")]),t._v(" 注册和取消中间件")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("app.middleware")]),t._v(" 注册中间件。这个方法接受一个回调函数，其第一个参数为一个 Meta 对象，第二个参数是 "),a("code",[t._v("next")]),t._v(" 函数，只有调用了它才会进入接下来的流程。如果自始至终都没有调用 "),a("code",[t._v("next")]),t._v(" 函数的话，之后的中间件都将不会被执行。")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("app.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("middleware")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("((")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("meta")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("next")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 仅当接收到的消息包含 at 机器人时才继续处理")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("if")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (meta.$parsed.atMe) ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("return")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("next")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("})")])])])]),a("p",[t._v("这个函数的返回值是一个新的函数，调用这个函数就可以完成取消上述中间件：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" dispose ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" app.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("middleware")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(callback)")]),t._v("\n"),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("dispose")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("() ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 取消中间件")])])])]),a("p",[t._v("你也可以直接通过 "),a("code",[t._v("app.removeMiddleware")]),t._v(" 取消一个中间件：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#75715E"}},[t._v("// callback 是上面的回调函数")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("app.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("removeMiddleware")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(callback)")])])])]),a("h3",{attrs:{id:"注册异步中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册异步中间件"}},[t._v("#")]),t._v(" 注册异步中间件")]),t._v(" "),a("p",[t._v("下面给出一个异步的中间件作为示例：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("app.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("middleware")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("async")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("meta")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("next")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 获取数据库中的用户信息")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 这里只是示例，事实上 Koishi 会自动获取数据库中的信息并存放在 meta.$user 中")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" user ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("await")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" app.database.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("getUser")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(meta.userId)")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("if")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (user.authority ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("===")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("0")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("return")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" meta.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("$send")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'抱歉，你没有权限访问机器人。'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  } ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("else")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("return")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("next")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  }")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("})")])])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("上述代码中 next 前面的 return 是必须的。如果删去将可能会导致时序错误，这在 Koishi 中将会抛出一个运行时警告。")])]),t._v(" "),a("h3",{attrs:{id:"注册前置中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册前置中间件"}},[t._v("#")]),t._v(" 注册前置中间件")]),t._v(" "),a("p",[t._v("从上面的两个例子中不难看出，中间件是一种消息过滤的利器。但是反过来，当你需要的恰恰是捕获全部消息时，中间件反而不会是最佳选择——因为前置的中间件可能会将消息过滤掉，导致你注册的回调函数根本不被执行。因此在这种情况下，我们更推荐使用接收器。然而，还存在着这样一种情况：你既需要捕获全部的消息，又要对其中的一些加以回复，这又该怎么处理呢？")]),t._v(" "),a("p",[t._v("听起来这种需求有些奇怪，让我们举个具体点例子吧：假如你写的是一个复读插件，它需要在每次连续接收到 3 条相同消息时进行复读。我们不难使用接收器实现这种逻辑：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#66D9EF"}},[t._v("let")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" times ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("0")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 复读次数")]),t._v("\n"),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("let")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" message ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("''")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 当前消息")]),t._v("\n\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("app.receiver.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("on")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'message'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", (")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("meta")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 这里其实有个小问题，因为来自不同群的消息都会触发这个回调函数")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 因此理想的做法应该是分别记录每个群的当前消息和复读次数")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 但这里我们假设机器人只处理一个群，这样可以简化逻辑")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("if")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (meta.message ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("===")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" message) {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    times ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("+=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("1")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("if")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (times ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("===")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("3")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") meta.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("$send")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(message)")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  } ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("else")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    times ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("0")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    message ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" meta.message")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  }")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("})")])])])]),a("p",[t._v("但是这样写出的机器人就存在所有用接收器写出的机器人的通病——如果这条消息本身可以触发其他回应，机器人就会多次回应。更糟糕的是，你无法预测哪一次回应先发生，因此这样写出的机器人就会产生延迟复读的迷惑行为。为了避免这种情况发生，Koishi 对这种情况也有对应的解决方案，那就是前置中间件：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#66D9EF"}},[t._v("let")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" times ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("0")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 复读次数")]),t._v("\n"),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("let")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" message ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("''")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 当前消息")]),t._v("\n\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("app.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("prependMiddleware")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("((")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("meta")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("next")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("if")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (meta.message ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("===")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" message) {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    times ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("+=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("1")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("if")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (times ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("===")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("3")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("return")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" meta.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("$send")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(message)")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  } ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("else")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    times ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("0")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    message ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" meta.message")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("return")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("next")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  }")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("})")])])])]),a("h3",{attrs:{id:"注册临时中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册临时中间件"}},[t._v("#")]),t._v(" 注册临时中间件")]),t._v(" "),a("p",[t._v("有的时候，你也可能需要实现这样一种逻辑：你的中间件产生了一个响应，但你认为这个响应优先级较低，希望等后续中间件执行完毕后，如果信号仍然未被截取，就执行之前的响应。这当然可以通过注册新的中间件并取消的方法来实现，但是由于这个新注册的中间件可能不被执行，你需要手动处理许多的边界情况。")]),t._v(" "),a("p",[t._v("为了应对这种问题 Koishi 提供了更加方便的写法：你只需要在调用 "),a("code",[t._v("next")]),t._v(" 时再次传入一个回调函数即可！这个回调函数只接受一个 "),a("code",[t._v("next")]),t._v(" 参数，且只会加入当前的中间件执行队列；无论这个回调函数执行与否，在本次中间件解析完成后，它都会被清除。下面是一个例子：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("app.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("middleware")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("((")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("meta")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("next")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("if")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (meta.message ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("===")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'hlep'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 如果该 meta 没有被截获，则这里的回调函数将会被执行")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("return")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("next")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(() ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" meta.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("$send")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'你想说的是 help 吗？'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("))")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  } ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("else")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("return")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("next")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  }")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("})")])])])]),a("p",[t._v("除此以外，临时中间件还有下面的用途。让我们先回到上面介绍的前置中间件。它虽然能够成功解决问题，但是如果有两个插件都注册了类似的前置中间件，就仍然可能发生一个前置中间件截获了消息，导致另一个前置中间件获取不到消息的情况发生。但是，借助临时中间件，我们便有了更好的解决方案：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#66D9EF"}},[t._v("let")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" times ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("0")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 复读次数")]),t._v("\n"),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("let")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" message ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("''")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 当前消息")]),t._v("\n\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("app.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("prependMiddleware")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("((")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("meta")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("next")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("if")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (meta.message ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("===")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" message) {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    times ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("+=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("1")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("if")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (times ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("===")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("3")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("return")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("next")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(() ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" meta.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("$send")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(message))")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  } ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("else")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    times ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("0")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    message ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" meta.message")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("return")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("next")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  }")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("})")])])])]),a("p",[t._v("搭配使用上面几种中间件，你的机器人便拥有了无限可能。在 "),a("code",[t._v("koishi-plugin-common")]),t._v(" 库中，就有着一个官方实现的复读功能，它远比上面的示例所显示的更加强大。如果想深入了解中间件机制，可以去研究一下这个功能的 "),a("a",{attrs:{href:"https://github.com/koishijs/koishi/blob/master/packages/plugin-common/src/repeater.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("源代码"),a("OutboundLink")],1),t._v("。")])],1)}),[],!1,null,null,null);s.default=c.exports}}]);