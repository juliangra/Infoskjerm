(this.webpackJsonpinfoskjerm=this.webpackJsonpinfoskjerm||[]).push([[0],{30:function(e,t,n){e.exports=n(72)},35:function(e,t,n){},36:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(28),c=n.n(r),o=(n(35),n(36),function(){return l.a.createElement("h1",null,"Infoskjerm")}),i=n(4),s=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1").then((function(e){return e.json()})).then((function(e){return r(e.data.children[0].data)}))}),[]),l.a.createElement("div",{className:"DadJoke"},l.a.createElement("h2",null,"Dad Joke"),l.a.createElement("p",null,n.title),l.a.createElement("p",null,n.selftext))},u=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("https://gbfs.urbansharing.com/trondheimbysykkel.no/station_status.json").then((function(e){return e.json()})).then((function(e){return r(e.data.stations[48])}))}),[]),l.a.createElement("div",{className:"BySykkel"},l.a.createElement("h2",null,"Bysykler"),l.a.createElement("h3",null,"Skansen"),l.a.createElement("p",null,"Ledige sykler: ",n.num_bikes_available),l.a.createElement("p",null,"Ledige plasser: ",n.num_docks_available))},m=n(29),f=n.n(m)()({clientName:"grande-infoskjerm"}),d=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){f.getBikeRentalStationsByPosition({latitude:63.430315,longitude:10.366376},500).then((function(e){return r(e)}))}),[]),l.a.createElement("div",{className:"bikes"},n.map((function(e){return l.a.createElement(h,{key:e.id,station:e})})))},h=function(e){var t=e.station,n=t.name,a=t.bikesAvailable,r=t.spacesAvailable;return l.a.createElement("div",{className:"Station"},l.a.createElement("h2",null,"Bysykler 2.0"),l.a.createElement("h3",null,n),l.a.createElement("p",null,"Ledige sykler: ",a),l.a.createElement("p",null,"Ledige plasser: ",r))};var E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o,null),l.a.createElement(s,null),l.a.createElement(u,null),l.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.35354327.chunk.js.map