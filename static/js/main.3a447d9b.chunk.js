(this["webpackJsonpimage-scanner"]=this["webpackJsonpimage-scanner"]||[]).push([[0],{37:function(e,t,a){e.exports=a(73)},42:function(e,t,a){},43:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),i=a.n(r),c=(a(42),a(30)),l=a(31),s=a(34),d=a(35),u=(a(43),a(32)),m=a.n(u),p=a(91),h=a(90),g=a(92),f=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){if(e.target.files[0]){var t=[];for(var a in e.target.files)if(e.target.files.hasOwnProperty(a)){var o=e.target.files[a];t.push(URL.createObjectURL(o))}n.setState({uploads:t})}else n.setState({uploads:[]})},n.generateText=function(){for(var e=n.state.uploads,t=0;t<e.length;t++)m.a.recognize(e[t],"eng",{logger:function(e){return console.log(e)}}).then((function(e){var t=e.data.text;n.setState({loading:!1,documents:t})})).catch((function(e){console.log(e)}))},n.copyCodeToClipboard=function(){n.textArea.select(),document.execCommand("copy")},n.state={uploads:[],documents:!1,loading:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"Image to Text")),o.a.createElement("section",{className:"hero"},o.a.createElement("label",{className:"fileUploaderContainer"},"Click here to upload documents",o.a.createElement("input",{type:"file",id:"fileUploader",onChange:this.handleChange,multiple:!0})),o.a.createElement("div",null,this.state.uploads.map((function(e,t){return o.a.createElement("img",{key:t,src:e,width:"100px"})}))),o.a.createElement(p.a,{onClick:function(){e.setState({loading:!0}),e.generateText()},variant:"contained",color:"primary",style:{width:"100%"}},"Generate")),this.state.loading&&o.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:"2rem"}},o.a.createElement(h.a,{color:"secondary"})),this.state.documents&&o.a.createElement("div",{style:{margin:"3rem 15vw",background:"white",padding:"1rem",borderRadius:"12px"}},o.a.createElement(p.a,{onClick:function(){return e.copyCodeToClipboard()},variant:"contained",color:"primary"},"Copy to Clipboard"),o.a.createElement(g.a,{style:{width:"100%",marginTop:"1rem"},ref:function(t){return e.textArea=t},value:this.state.documents}))," ")}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.3a447d9b.chunk.js.map