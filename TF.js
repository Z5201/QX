// ==UserScript==
// @ScriptName        TFDownload
// @Author            @id77, Modified by Cuttlefish
// @TgChannel         https://t.me/ddgksf2021
// @WechatID          公众号墨鱼手记
// @UpdateTime        2022-02-15
// @Function          解决国区TF中无法下载某些应用（QX、小火箭、LOON）的问题
// @Attention         对于普通TF应用的更新应该没有啥影响，具体事项未测试
// @ScriptURL         https://github.com/ddgksf2013/Rewrite/raw/master/Function/TFDownload.conf
// ==/UserScript==

hostname = testflight.apple.com

^https?:\/\/testflight\.apple\.com\/v2\/accounts\/.*\/apps\/\d*/builds/\d*/install url request-body storefrontId" : ".*" request-body storefrontId" : "143441-1,29"
