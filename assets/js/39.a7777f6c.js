(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{414:function(t,s,a){"use strict";a.r(s);var o=a(25),l=Object(o.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"处理请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理请求"}},[t._v("#")]),t._v(" 处理请求")]),t._v(" "),a("h2",{attrs:{id:"处理好友申请、加群邀请和申请"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理好友申请、加群邀请和申请"}},[t._v("#")]),t._v(" 处理好友申请、加群邀请和申请")]),t._v(" "),a("p",[t._v("当使用了 koishi-plugin-common 并配置了数据库时，默认情况下 Koishi 会通过所有 1 级以上用户的好友申请，忽略所有群申请。你可以手动设置忽略和通过的函数：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:"koishi.config.js"}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#66D9EF"}},[t._v("module")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(".")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("exports")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  plugins: [[")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'common'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    handleFriend: ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("true")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 通过所有好友申请")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    handleGroupAdd: ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("undefined")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 忽略所有加群申请（当然这没必要写出来）")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("async")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("handleGroupInvite")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("meta")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("      ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 拒绝所有来自 1 级以下，通过所有来自 3 级或以上权限用户的加群邀请，其他不处理")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("      ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" user ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("await")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ctx.database.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("getUser")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(meta.userId, ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("0")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", [")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'authority'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("])")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("      ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("if")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (user.authority ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v(">=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("3")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("        ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("return")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("true")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("      } ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("else")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("if")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (user.authority ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("<=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("1")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("        ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("return")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("false")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("      }")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    },")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  }]],")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("}")])])])]),a("p",[t._v("在上面的例子中，"),a("code",[t._v("handleFriend")]),t._v(", "),a("code",[t._v("handleGroupAdd")]),t._v(" 和 "),a("code",[t._v("handleGroupInvite")]),t._v(" 分别用于处理好友申请，加群申请和加群邀请。每个选项的值都可以是下面几种类型：")]),t._v(" "),a("ul",[a("li",[t._v("true: 表示通过申请")]),t._v(" "),a("li",[t._v("false: 表示拒绝申请")]),t._v(" "),a("li",[t._v("undefined: 表示不做处理")]),t._v(" "),a("li",[t._v("字符串\n"),a("ul",[a("li",[t._v("如果是好友申请，则表示通过，并使用该字符串作为该好友的备注名")]),t._v(" "),a("li",[t._v("如果是群申请或邀请，则表示拒绝，并使用该字符串作为拒绝的理由")])])]),t._v(" "),a("li",[t._v("函数: 将传入两个参数，第一个是请求对应的元信息 Meta 对象，第二个是所在的 App 实例，返回值同样可以是 true, false, undefined, 字符串或对应的 Promise，将按照上面所说的方式来解读")])]),t._v(" "),a("h2",{attrs:{id:"欢迎新成员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#欢迎新成员"}},[t._v("#")]),t._v(" 欢迎新成员")]),t._v(" "),a("p",[t._v("welcome 选项可以用于欢迎群中的新成员。欢迎信息默认是“欢迎新大佬 @XXX！”。你也可以手动设置欢迎信息的内容：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#66D9EF"}},[t._v("module")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(".")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("exports")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  plugins: [[")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'common'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 传入一个 Meta 对象")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 返回值应该是 string | Promise<string>")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("welcomeMessage")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(": ({ ")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("userId")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" }) ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("`欢迎新大佬 [CQ:at,qq=${userId}]！群地位-1`")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(",")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  }]],")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("}")])])])])],1)}),[],!1,null,null,null);s.default=l.exports}}]);