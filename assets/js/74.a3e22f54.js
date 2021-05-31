(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{481:function(s,t,a){"use strict";a.r(t);var e=a(20),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("ul",[a("li",[a("a",{attrs:{href:"#%E6%AD%A5%E9%AA%A4"}},[s._v("步骤")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E5%A5%BD%E5%A4%84"}},[s._v("好处")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E5%88%AB%E5%90%8D"}},[s._v("别名")])])]),s._v(" "),a("h2",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[s._v("#")]),s._v(" 步骤")]),s._v(" "),a("p",[s._v("我们可以看到远程仓库中还有一个 SSH 的地址，因此我们也可以使用 SSH 实现免密码登录！")]),s._v(" "),a("p",[s._v("进入 C:\\Users\\Administrator.ssh 目录生成公钥")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("ssh-keygen -t rsa\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行后会生成两个文件")]),s._v(" "),a("p",[s._v("复制 "),a("code",[s._v("id_rsa.pub")]),s._v(" 文件内容")]),s._v(" "),a("p",[s._v("Gitee：设置 ->SSH公钥")]),s._v(" "),a("p",[s._v("GitHub：点击用户头像→Settings→SSH and GPG keys")]),s._v(" "),a("p",[s._v("这俩平台 ssh 可设置同一个")]),s._v(" "),a("h2",{attrs:{id:"好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#好处"}},[s._v("#")]),s._v(" 好处")]),s._v(" "),a("p",[s._v("GitHub 服务器在国外，我们用 https 对仓库进行拉取、提交有时会链接不上，导致失败。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/20210520131856.png",alt:"image-20210520131847003"}})]),s._v(" "),a("p",[s._v("这时我们可以用 ssh 对项目就行管理")]),s._v(" "),a("p",[s._v("以 Gitee 为例：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/20210520132022.png",alt:"image-20210520132020687"}})]),s._v(" "),a("h2",{attrs:{id:"别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#别名"}},[s._v("#")]),s._v(" 别名")]),s._v(" "),a("p",[s._v("对于用 https 已经克隆在本地的仓库，我们可以加个“别名”来进行 SSH 链接")]),s._v(" "),a("p",[a("strong",[s._v("1）基本语法")])]),s._v(" "),a("p",[a("code",[s._v("git remote -v")]),s._v(" 查看当前所有远程地址别名")]),s._v(" "),a("p",[a("code",[s._v("git remote add")]),s._v(" 别名 远程地址")]),s._v(" "),a("p",[a("strong",[s._v("2）案例")])]),s._v(" "),a("p",[s._v("我们提交到远程仓库的指令是：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push 远程仓库地址 分支\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个地址可以是 https 也可以是 ssh")]),s._v(" "),a("p",[s._v("但由于地址太长了，可以用“别名”代替地址！")]),s._v(" "),a("p",[s._v("添加别名：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" git@github.com:oddfar/docs.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("推送到远程仓库：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("hr"),s._v(" "),a("p",[s._v("我们 clone 项目，默认有个“别名” "),a("code",[s._v("origin")]),s._v(" 指向我们 clone 时的远程仓库地址（https或ssh...）")])])}),[],!1,null,null,null);t.default=r.exports}}]);