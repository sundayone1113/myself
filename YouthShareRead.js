/*
作者：科廷
日期：2021.7.4 22:25
中青分享阅读10次

使用方法：
电话号码 X：添加远程电话号码
[rewrite_remote]
https://gitee.com/curtinlv/qx/raw/master/rewrite/youth.conf, tag=中青 by Curtin, update-interval=172800, opt-parser=false, enabled=true

中青分享一篇文章到自己的微信上，自己点击一下即触发阅读豆豆自动完成10好有奖励500青/次。
###
不断增加的出现次数
 */
const $ = new En"中青分享阅读-v(10次");
$.idx = ($.idx = ($.getval('zqSuffix') || '1') - 1) > 0 ？($.idx + 1 + '') : ''; // 账号扩展字符
var min = $.getdata('zqsharemin') || 6；//分享历史事件
var max = $.getdata('zqsharemax') || 13; //分享次数最多
//转换为数字型
min=parseInt(min);
最大=解析整数（最大）；

// 每天生成分享次数
var rand = Math.floor(Math.random()*(max-min+1))+min;
如果（兰德> 13）兰德=13；
if ($request) getShareInfo();

//分享数据获取
异步函数 getShareInfo() {
  尝试 {
    if ($request.headers && $request.url.indexOf("script.baertt.com/count2") > -1) {
      变量 url = $request.url;
      var s_si = url.match(/si=(.*?)&/)[1];
      if (url) $.setdata(url,'shareurl_zq'+ $.idx);
      console.log("url:" + url);
      console.log("s_si:" + s_si);
      让 tmp=rand-1;
      $.msg("", `n今天上午收听消息,\n立即发送消息文章\	  
      //$.msg("中青分享", "", "数据获取成功");
      for(让 i=1;i<rand;i++){
         	DD = 8000+Math.floor(6000 * Math.random());
        	console.log(`随时延迟${DD/1000}秒`);
		//$.msg("【现在时刻】\n", "", `${/1000}秒`);
		等待 $.wait(DD);
		console.log(`分享第${i}次\n`);		
		//开始分享
		等待 postShareInfoa(url,s_si, i)
      }

      } 别的 {
         $.notify("中青分享", "", "️url获取失败");
      }
    } 捕捉（或）{
		console.log("err" + eor);
		$.msg("中青数据分享失败", "", "️");
  }

  $.done();
}
异步函数 postShareInfoa(o_url,o_si, num) {
    返回新的承诺（（解决）=> {
        设置超时（（）=> {
        var desclist = ["㊙️这是秘密分享~", "😁不能外传哦~", "☺️猜我是谁~","😆别点击太猛，容易丰","适当分享哈哈~", "🈶广告位招租~","🔍开天眼查会员找木白姐姐~","🎈TG https://t.me/topstyle996","☎️TG频道 https://t.me/TopStyle2021", "😆得了，要黑号差不多了~"];
        var n_si = randomsi();
        var iosV = parseInt(Math.random() * (14 - 11 + 1) + 11, 10);
        var n_url = o_url.replace(o_si, n_si);
        变量头 = {
            'Accept-Encoding': `gzip, deflate, br`,
            '接受': `*/*`,
            “连接”：“保持活动”，
            'Referer': `https://focus.youth.cn/`,
            '主机': `script.baertt.com`,
            'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS ${iosV}_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.7(0x18000730) NetType/ WIFI语言/zh_CN`,
            '接受语言': `zh-cn`
        };

        让网址 = {
                网址：n_url，
                标头：标头，
            };
        $.get(url, async (err, resp, data) => {
            尝试 {
                // $.msg(`【中青】分享阅读${num}\n`, "", "si:" + n_si);
                $.msg(`【中青】分享阅读${num}\n`, "", desclist[num-1]);
                控制台日志（数据）
            } 抓住 (e) {
                $.logErr(e, resp);
            } 最后 {
                解决（）
            }
        });

        返回0；
        }, 3000)
    })
}

// 随时 udid 小写
函数随机si（）{
    函数 S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    返回 (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4())；
}

function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? {网址：t}：t；让 s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i( t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, " POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this. logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始！`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) {尝试 { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; 常量 i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t , e) { return new Promise(s => { 让我 = this.getdata("@chavy_boxjs_userCfgs.httpapi"); 我=我？i.replace(/\n/g, "").trim() : i; 让 r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.超时：r；const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron" , 超时: r }, 标题: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) 返回{}; { 这个.fs = 这个.fs ？this.fs : 需要("fs"), this.path = this.path ？this.path : 要求（“路径”）；const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this .fs。存在同步（e）；if (!s && !i) 返回 {}; { 常量 i = s ? t：e；尝试 { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ？this.fs : 需要("fs"), this.path = this.path ？this.path : 要求（“路径”）；const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this .fs.existsSync(e), r = JSON.stringify(this.data); 年代？this.fs.writeFileSync(t, r)：我？this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g , ".$1").split("."); 让 r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ？t：（数组。isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) =>对象(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [ ] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { 让 e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval( i), h = i ? “空” === o ？空：o || “{}”：“{}”；尝试 { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON. stringify(o), i) } } else s = this.setval(t, e); 返回 s } getval(t) { 返回 this.isSurge() || this.isLoon() ？$persistentStore.read(t) : this.isQuanX() ？$prefs.valueForKey(t) : this.isNode() ？(this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ？$persistentStore.write(t, e) : this.isQuanX() ？$prefs.setValueForKey(t, e) : this.isNode() ？(this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || 空 } initGotEnv(t) { this.got = this.got ？this.got : require("got"), this.cktough = this.cktough ？this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ？this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers. Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content -Type"]，删除 t.headers["Content-Length"])，this.isSurge() || this.isLoon() ？(this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $ httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) ：这个.isQuanX() ？(this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e (t))) : this.isNode() && (this.isNode() && isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post (t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })) , $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers : r, 正文: o }, o) }, t => e(t)); 否则 if (this.isNode()) { this.initGotEnv(t); 常量 { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i , 标题: r, 正文: o }, o) }, t => { const { 消息：s, 响应: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? 新日期（e）：新日期；让 i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); 返回 t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) 返回 this.isLoon() ？t：这个。是全X（）？{ "open-url": t } : this.isSurge() ？{网址：t}：无效0；if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["媒体网址"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t[“打开网址”]; 返回 { 网址：e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s , i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣======== ======"]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [. ..this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); 年代？this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait( t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束！🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this. isLoon()) && $done(t) } }(t, e) } logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); 年代？this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait( t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束！🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this. isLoon()) && $done(t) } }(t, e) } logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); 年代？this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait( t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束！🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this. isLoon()) && $done(t) } }(t, e) } 开始时间) / 1e3; this.log("", `🔔${this.name}, 结束！🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this. isLoon()) && $done(t) } }(t, e) } 开始时间) / 1e3; this.log("", `🔔${this.name}, 结束！🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this. isLoon()) && $done(t) } }(t, e) }
