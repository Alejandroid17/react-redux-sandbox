(this["webpackJsonpreact-redux-sandbox"]=this["webpackJsonpreact-redux-sandbox"]||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){},108:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),c=a.n(r),l=a(23),s=a(39),i=a(33),u=a(27),m=a(41),p="saveOCR",h=function(e){return{type:p,payload:e}},d={savedOCR:[]};var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case p:var o=e.savedOCR;return o.push(n),e.savedOCR=o,e;default:return e}},g=function(){try{var e=window.localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),f=Object(m.b)({ocr:b,snackbar:u.snackbarReducer}),v=Object(m.c)(f,g);v.subscribe((function(){!function(e){try{var t=JSON.stringify(e);window.localStorage.setItem("state",t)}catch(a){console.log(a)}}(v.getState())}));var x=v,E=a(20),O=a(14),C=a(28),y=a(29),S=a(12),j=a(32),R=a(152),k=a(150),T=a(151),w=a(34),N=a(71),L=a.n(N),G=a(165),A=a(69),U=a.n(A),B=a(81),F=a(149),I=(a(101),function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(C.a)(this,Object(y.a)(t).call(this,e))).state={isOpen:!1},a}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.suggestions,n=t.onChangeText,r=t.onChangeSelection,c=t.text,l=this.state.isOpen;return o.a.createElement("div",{className:"main-container"},o.a.createElement("div",{className:"container-icon"},o.a.createElement(U.a,null)),o.a.createElement(G.a,{placeholder:"Search\u2026",value:c,style:{width:"100%"},onChange:function(t){var a=t.target.value;n(a),!l&&a?e.setState({isOpen:!0}):l&&!a&&e.setState({isOpen:!1})},onBlur:function(){setTimeout((function(){return e.setState({isOpen:!1})}),100)},onFocus:function(){c&&e.setState({isOpen:!0})},onKeyPress:function(e){"Enter"===e.key&&c&&r(c)}}),l&&o.a.createElement(B.a,{className:"container-results",square:!0},a.map((function(t){return o.a.createElement(F.a,{key:t.id,component:"div",onClick:function(){r(t.title),e.setState({isOpen:!1})}},t.title)}))))}}]),t}(n.Component));a(103);var J=function(e){var t=e.title,a=e.hasAutocomplete,n=e.text,r=e.suggestions,c=e.onChangeText,l=e.onChangeSelection,s=e.printGlobalState,i=void 0!==t?t:"React Redux SandBox",u=void 0===a||a;return o.a.createElement(k.a,{position:"static"},o.a.createElement(T.a,{className:"appbar"},o.a.createElement(w.a,{variant:"h6",color:"inherit"},i),u&&o.a.createElement(I,{text:n,suggestions:r,onChangeText:c,onChangeSelection:l}),o.a.createElement(L.a,{onClick:s})))},z=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(C.a)(this,Object(y.a)(t).call(this,e))).printGlobalState=function(){console.log(a.props)},a.state={text:""},a.onChangeText=a.onChangeText.bind(Object(S.a)(a)),a.onChangeSelection=a.onChangeSelection.bind(Object(S.a)(a)),a.printGlobalState=a.printGlobalState.bind(Object(S.a)(a)),a}return Object(j.a)(t,e),Object(O.a)(t,[{key:"onChangeText",value:function(e){this.setState({text:e})}},{key:"onChangeSelection",value:function(e){this.setState({text:e}),this.props.history.push("/results")}},{key:"render",value:function(){var e=this.state.text,t=this.props,a=t.title,n=t.hasAutocomplete;return o.a.createElement(J,{printGlobalState:this.printGlobalState,hasAutocomplete:n,title:a,text:e,onChangeText:this.onChangeText,onChangeSelection:this.onChangeSelection})}}]),t}(n.Component),P=Object(i.g)(Object(l.connect)((function(e){return{suggestions:e.suggestions,ocr:e.ocr}}),{})(z)),q=a(73),K=a(153),D=a(164),H=a(114),M=a(154),Q=a(155),V=a(156),W=a(157),X=a(42),Y=a.n(X),Z=a(49),$=a.n(Z),_=a(76),ee=a.n(_),te=(a(108),Object(q.a)((function(e){return{root:{flexGrow:1,padding:"1rem"}}})));var ae=function(e){var t=te(),a=e.savedOCR,r=e.copyText,c=0===a.length;return o.a.createElement(n.Fragment,null,o.a.createElement(R.a,null),o.a.createElement(P,{title:"Storage",hasAutocomplete:!1}),o.a.createElement(K.a,{container:!0,className:t.root,spacing:2},o.a.createElement(K.a,{item:!0,xs:12},c?o.a.createElement(w.a,{variant:"h5",component:"h3",className:"page-message"},"No items saved"):a.map((function(e,t){return o.a.createElement(D.a,{boxShadow:3,key:t},o.a.createElement(H.a,null,o.a.createElement(M.a,null,o.a.createElement(Q.a,null,o.a.createElement(Y.a,null))),o.a.createElement(V.a,{primary:e.filename,secondary:e.text}),o.a.createElement($.a,{text:e.text,onCopy:r},o.a.createElement(W.a,{color:"primary"},o.a.createElement(ee.a,null)))))})))))},ne=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(C.a)(this,Object(y.a)(t).call(this,e))).copyText=function(){a.props.showSnack("copy-text-id",{label:"Copied!",timeout:2e3})},a.copyText=a.copyText.bind(Object(S.a)(a)),a}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props.ocr;return o.a.createElement(ae,{savedOCR:e.savedOCR,copyText:this.copyText})}}]),t}(n.Component),oe={showSnack:u.showSnack},re=Object(i.g)(Object(l.connect)((function(e){return{ocr:e.ocr}}),oe)(ne)),ce=a(77),le=a.n(ce),se=a(158),ie=a(159),ue=a(160),me=a(161),pe=a(162),he=a(163),de=a(80),be=(a(112),Object(q.a)((function(e){return{root:{flexGrow:1},paper:{height:140,width:100},paperLeft:{marginRight:2,marginLeft:25,marginTop:20,padding:e.spacing(4),height:"88vh"},paperRight:{overflow:"auto",marginRight:25,marginLeft:2,marginTop:20,padding:e.spacing(4),height:"88vh"},cardRoot:{marginBottom:"1.5rem"},listRoot:{marginTop:"1rem",width:"100%",backgroundColor:e.palette.background.paper}}})));var ge=function(e){var t=be(),a=e.handleChange,r=e.generateText,c=e.copyText,l=e.uploads,s=e.documents,i=e.saveOCR;return o.a.createElement(n.Fragment,null,o.a.createElement(R.a,null),o.a.createElement(P,{title:"OCR",hasAutocomplete:!1}),o.a.createElement(K.a,{container:!0,className:t.root,spacing:2},o.a.createElement(K.a,{item:!0,xs:6},o.a.createElement(B.a,{className:t.paperLeft},o.a.createElement(K.a,{container:!0},o.a.createElement(K.a,{item:!0,xs:12},o.a.createElement(de.a,{onChange:a,acceptedFiles:["image/*"],dropzoneClass:"dropzone-area",showAlerts:!1}),o.a.createElement(W.a,{variant:"contained",color:"primary",onClick:r,className:"button ocr-button-generate"},"Generate")),o.a.createElement(K.a,{item:!0,xs:12},o.a.createElement(se.a,{className:t.listRoot},l.map((function(e,t){return o.a.createElement(D.a,{boxShadow:3,key:t},o.a.createElement(H.a,null,o.a.createElement(M.a,null,o.a.createElement(Q.a,null,o.a.createElement(Y.a,null))),o.a.createElement(V.a,{primary:e.name})))}))))))),o.a.createElement(K.a,{item:!0,xs:6},o.a.createElement(B.a,{className:t.paperRight},s.map((function(e,a){var n=o.a.createElement("div",null,o.a.createElement("strong",{className:"ocr-confidence-score-text"},"Confidence score:"),o.a.createElement("span",null,e.confidence));return o.a.createElement(ie.a,{key:a,className:"ocr-card ".concat(t.cardRoot)},o.a.createElement(ue.a,{title:e.filename,avatar:o.a.createElement(Q.a,null,o.a.createElement(Y.a,null)),subheader:n}),o.a.createElement(me.a,{src:e.objectURL,component:"img"}),o.a.createElement(pe.a,null,o.a.createElement(w.a,{variant:"body2",color:"textSecondary",component:"p"},e.text)),o.a.createElement(he.a,null,o.a.createElement($.a,{text:e.text,onCopy:c},o.a.createElement(W.a,{variant:"contained",color:"primary",className:"button ocr-button-copy-text"},"Copy to clipboard")),o.a.createElement(W.a,{onClick:function(){return i(e.filename,e.text)},variant:"contained",color:"primary",className:"button ocr-button-save-text"},"Save text")))}))))))},fe=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(C.a)(this,Object(y.a)(t).call(this,e))).copyText=function(){a.props.showSnack("copy-text-id",{label:"Copied!",timeout:2e3})},a.saveOCR=function(e,t){a.props.ocr.savedOCR.some((function(t){return t.filename===e}))?a.props.showSnack("already-save-text-ocr",{label:"It was already saved!",timeout:2e3}):(a.props.saveOCR({filename:e,text:t}),a.props.showSnack("save-text-ocr",{label:"Saved!",timeout:2e3}))},a.generateText=function(){for(var e=a.state.uploads,t=function(t){le.a.recognize(e[t].objectURL,{lang:"spa"}).catch((function(e){console.log(e)})).then((function(n){var o=n.confidence,r=n.text,c=n.text.match(/\b\w{10,10}\b/g);a.setState({patterns:a.state.patterns.concat(c),documents:a.state.documents.concat({objectURL:e[t].objectURL,filename:e[t].name,pattern:c,text:r,confidence:o})})}))},n=0;n<e.length;n++)t(n)},a.handleChange=function(e){if(e[0]){var t=[],n=function(n){if(!e.hasOwnProperty(n))return"continue";var o=e[n];a.state.uploads.some((function(e){return e.name===o.name}))?a.props.showSnack("duplicate-file",{label:"A file with the same name already exists, only the first one will be processed.",timeout:2e3}):(t.push({objectURL:URL.createObjectURL(o),name:e[n].name}),a.setState({uploads:t}))};for(var o in e)n(o)}else a.setState({uploads:[]})},a.state={uploads:[],patterns:[],documents:[],savedOCR:[]},a.handleChange=a.handleChange.bind(Object(S.a)(a)),a.generateText=a.generateText.bind(Object(S.a)(a)),a.saveOCR=a.saveOCR.bind(Object(S.a)(a)),a.copyText=a.copyText.bind(Object(S.a)(a)),a}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.uploads,n=t.documents,r=t.patterns;return o.a.createElement(ge,{handleChange:this.handleChange,generateText:this.generateText,saveOCR:this.saveOCR,copyText:this.copyText,uploads:a,documents:n,patterns:r,goTo:function(t){e.props.history.push(t)}})}}]),t}(n.Component),ve={showSnack:u.showSnack,saveOCR:h},xe=Object(i.g)(Object(l.connect)((function(e){return{ocr:e.ocr}}),ve)(fe)),Ee=o.a.createElement(l.Provider,{store:x},o.a.createElement(s.a,{basename:"/react-redux-sandbox"},o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"/react-redux-sandbox/ocr",component:xe}),o.a.createElement(i.b,{path:"/react-redux-sandbox/storage",component:re}),o.a.createElement(i.a,{from:"/",to:"/react-redux-sandbox/ocr"}))),o.a.createElement(u.Snackbar,null));c.a.render(Ee,document.getElementById("root"))},89:function(e,t,a){e.exports=a(113)}},[[89,1,2]]]);
//# sourceMappingURL=main.ac2d74f5.chunk.js.map