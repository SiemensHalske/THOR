(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3181],{76914:function(e,n,r){Promise.resolve().then(r.bind(r,87073))},87073:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return er}});var t=r(57437),a=r(2265),i=r(11444),s=r(7999),o=r(83719),l=r(33037),d=r(75519),c=r(1052),u=r(23950),p=r(22988),m=r(44839),h=r(26259),x=r(90674),g=r(12272),Z=r(97594),b=r(95635),S=r(95875),v=r(69281),j=r(48024),f=r(34535),_=r(87542);function y(e){return(0,_.ZP)("MuiDialog",e)}let C=(0,f.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),N=a.createContext({});var M=r(64593),W=r(22960);let k=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],P=(0,j.ZP)(M.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,n)=>n.backdrop})({zIndex:-1}),w=e=>{let{classes:n,scroll:r,maxWidth:t,fullWidth:a,fullScreen:i}=e,s={root:["root"],container:["container","scroll".concat((0,g.Z)(r))],paper:["paper","paperScroll".concat((0,g.Z)(r)),"paperWidth".concat((0,g.Z)(String(t))),a&&"paperFullWidth",i&&"paperFullScreen"]};return(0,h.Z)(s,y,n)},D=(0,j.ZP)(Z.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,n)=>n.root})({"@media print":{position:"absolute !important"}}),T=(0,j.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,n)=>{let{ownerState:r}=e;return[n.container,n["scroll".concat((0,g.Z)(r.scroll))]]}})(e=>{let{ownerState:n}=e;return(0,p.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===n.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===n.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})}),R=(0,j.ZP)(S.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,n)=>{let{ownerState:r}=e;return[n.paper,n["scrollPaper".concat((0,g.Z)(r.scroll))],n["paperWidth".concat((0,g.Z)(String(r.maxWidth)))],r.fullWidth&&n.paperFullWidth,r.fullScreen&&n.paperFullScreen]}})(e=>{let{theme:n,ownerState:r}=e;return(0,p.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===r.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===r.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!r.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===r.maxWidth&&{maxWidth:"px"===n.breakpoints.unit?Math.max(n.breakpoints.values.xs,444):"max(".concat(n.breakpoints.values.xs).concat(n.breakpoints.unit,", 444px)"),["&.".concat(C.paperScrollBody)]:{[n.breakpoints.down(Math.max(n.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},r.maxWidth&&"xs"!==r.maxWidth&&{maxWidth:"".concat(n.breakpoints.values[r.maxWidth]).concat(n.breakpoints.unit),["&.".concat(C.paperScrollBody)]:{[n.breakpoints.down(n.breakpoints.values[r.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},r.fullWidth&&{width:"calc(100% - 64px)"},r.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,["&.".concat(C.paperScrollBody)]:{margin:0,maxWidth:"100%"}})}),A=a.forwardRef(function(e,n){let r=(0,v.Z)({props:e,name:"MuiDialog"}),i=(0,W.Z)(),s={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{"aria-describedby":o,"aria-labelledby":l,BackdropComponent:d,BackdropProps:c,children:h,className:g,disableEscapeKeyDown:Z=!1,fullScreen:j=!1,fullWidth:f=!1,maxWidth:_="sm",onBackdropClick:y,onClick:C,onClose:M,open:A,PaperComponent:B=S.Z,PaperProps:I={},scroll:F="paper",TransitionComponent:J=b.Z,transitionDuration:Y=s,TransitionProps:q}=r,E=(0,u.Z)(r,k),L=(0,p.Z)({},r,{disableEscapeKeyDown:Z,fullScreen:j,fullWidth:f,maxWidth:_,scroll:F}),X=w(L),H=a.useRef(),K=(0,x.Z)(l),O=a.useMemo(()=>({titleId:K}),[K]);return(0,t.jsx)(D,(0,p.Z)({className:(0,m.Z)(X.root,g),closeAfterTransition:!0,components:{Backdrop:P},componentsProps:{backdrop:(0,p.Z)({transitionDuration:Y,as:d},c)},disableEscapeKeyDown:Z,onClose:M,open:A,ref:n,onClick:e=>{C&&C(e),H.current&&(H.current=null,y&&y(e),M&&M(e,"backdropClick"))},ownerState:L},E,{children:(0,t.jsx)(J,(0,p.Z)({appear:!0,in:A,timeout:Y,role:"presentation"},q,{children:(0,t.jsx)(T,{className:(0,m.Z)(X.container),onMouseDown:e=>{H.current=e.target===e.currentTarget},ownerState:L,children:(0,t.jsx)(R,(0,p.Z)({as:B,elevation:24,role:"dialog","aria-describedby":o,"aria-labelledby":K},I,{className:(0,m.Z)(X.paper,I.className),ownerState:L,children:(0,t.jsx)(N.Provider,{value:O,children:h})}))})}))}))});function B(e){return(0,_.ZP)("MuiDialogTitle",e)}let I=(0,f.Z)("MuiDialogTitle",["root"]),F=["className","id"],J=e=>{let{classes:n}=e;return(0,h.Z)({root:["root"]},B,n)},Y=(0,j.ZP)(o.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,n)=>n.root})({padding:"16px 24px",flex:"0 0 auto"}),q=a.forwardRef(function(e,n){let r=(0,v.Z)({props:e,name:"MuiDialogTitle"}),{className:i,id:s}=r,o=(0,u.Z)(r,F),l=J(r),{titleId:d=s}=a.useContext(N);return(0,t.jsx)(Y,(0,p.Z)({component:"h2",className:(0,m.Z)(l.root,i),ownerState:r,ref:n,variant:"h6",id:null!=s?s:d},o))});function E(e){return(0,_.ZP)("MuiDialogContent",e)}(0,f.Z)("MuiDialogContent",["root","dividers"]);let L=["className","dividers"],X=e=>{let{classes:n,dividers:r}=e;return(0,h.Z)({root:["root",r&&"dividers"]},E,n)},H=(0,j.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:r}=e;return[n.root,r.dividers&&n.dividers]}})(e=>{let{theme:n,ownerState:r}=e;return(0,p.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},r.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((n.vars||n).palette.divider),borderBottom:"1px solid ".concat((n.vars||n).palette.divider)}:{[".".concat(I.root," + &")]:{paddingTop:0}})}),K=a.forwardRef(function(e,n){let r=(0,v.Z)({props:e,name:"MuiDialogContent"}),{className:a,dividers:i=!1}=r,s=(0,u.Z)(r,L),o=(0,p.Z)({},r,{dividers:i}),l=X(o);return(0,t.jsx)(H,(0,p.Z)({className:(0,m.Z)(l.root,a),ownerState:o,ref:n},s))});var O=r(23983);function z(e){return(0,_.ZP)("MuiDialogActions",e)}(0,f.Z)("MuiDialogActions",["root","spacing"]);let U=["className","disableSpacing"],G=e=>{let{classes:n,disableSpacing:r}=e;return(0,h.Z)({root:["root",!r&&"spacing"]},z,n)},Q=(0,j.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:r}=e;return[n.root,!r.disableSpacing&&n.spacing]}})(e=>{let{ownerState:n}=e;return(0,p.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!n.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})}),V=a.forwardRef(function(e,n){let r=(0,v.Z)({props:e,name:"MuiDialogActions"}),{className:a,disableSpacing:i=!1}=r,s=(0,u.Z)(r,U),o=(0,p.Z)({},r,{disableSpacing:i}),l=G(o);return(0,t.jsx)(Q,(0,p.Z)({className:(0,m.Z)(l.root,a),ownerState:o,ref:n},s))});var $=r(89893),ee=r(26285),en=r.n(ee),er=()=>{let e=(0,i.v9)(e=>e.sensor.sensors),n=(0,i.I0)(),[r,u]=(0,a.useState)(!1),[p,m]=(0,a.useState)({id:0,temperature:"",humidity:"",pressure:"",serialNumber:"",image:""}),[h,x]=(0,a.useState)(30),[g,Z]=(0,a.useState)(20),[b,S]=(0,a.useState)(50),[v,j]=(0,a.useState)(1013),f=()=>{u(!1)},_=e=>{let{name:n,value:r}=e.target;m(e=>({...e,[n]:r}))};return(0,t.jsxs)(s.Z,{className:en().container,children:[(0,t.jsx)(o.Z,{variant:"h4",className:en().header,children:"Sensor Management"}),(0,t.jsxs)(s.Z,{className:en().content,children:[(0,t.jsxs)(s.Z,{className:en().sensorRegistry,children:[(0,t.jsx)(o.Z,{variant:"h6",children:"Sensor Registry"}),(0,t.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,t.jsxs)(l.ZP,{item:!0,xs:6,children:[(0,t.jsx)(d.Z,{onClick:()=>{u(!0)},className:en().button,children:"Add Sensor"}),(0,t.jsx)(d.Z,{className:en().button,children:"Set Active"})]}),(0,t.jsxs)(l.ZP,{item:!0,xs:6,children:[(0,t.jsx)(d.Z,{className:en().button,children:"Remove Sensor"}),(0,t.jsx)(d.Z,{className:en().button,children:"Set Inactive"})]})]}),(0,t.jsxs)("table",{className:en().sensorTable,children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"ID"}),(0,t.jsx)("th",{children:"Temperature"}),(0,t.jsx)("th",{children:"Humidity"}),(0,t.jsx)("th",{children:"Pressure"}),(0,t.jsx)("th",{children:"Serial Number"}),(0,t.jsx)("th",{children:"Image"})]})}),(0,t.jsx)("tbody",{children:e.map((e,n)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.id}),(0,t.jsx)("td",{children:e.temperature}),(0,t.jsx)("td",{children:e.humidity}),(0,t.jsx)("td",{children:e.pressure}),(0,t.jsx)("td",{children:e.serialNumber}),(0,t.jsx)("td",{children:e.image})]},n))})]})]}),(0,t.jsxs)(s.Z,{className:en().sensorSettings,children:[(0,t.jsx)(o.Z,{variant:"h6",children:"Sensor Settings"}),(0,t.jsxs)(s.Z,{className:en().settingsContainer,children:[(0,t.jsxs)(s.Z,{className:en().buttonsContainer,children:[(0,t.jsx)(d.Z,{className:en().settings_button,children:"Start Monitoring"}),(0,t.jsx)(d.Z,{className:en().settings_button,children:"Run Calibration"}),(0,t.jsx)(d.Z,{className:en().settings_button,children:"Reset"})]}),(0,t.jsxs)(s.Z,{className:en().slidersContainer,children:[(0,t.jsxs)(o.Z,{children:["Update Interval: ",h,"s"]}),(0,t.jsx)(c.ZP,{value:h,onChange:(e,n)=>x(n),"aria-labelledby":"update-interval-slider",min:0,max:120}),(0,t.jsxs)(o.Z,{children:["Temperature Threshold: ",g]}),(0,t.jsx)(c.ZP,{value:g,onChange:(e,n)=>Z(n),"aria-labelledby":"temperature-threshold-slider",min:-50,max:50}),(0,t.jsxs)(o.Z,{children:["Humidity Threshold: ",b]}),(0,t.jsx)(c.ZP,{value:b,onChange:(e,n)=>S(n),"aria-labelledby":"humidity-threshold-slider",min:0,max:100}),(0,t.jsxs)(o.Z,{children:["Pressure Threshold: ",v]}),(0,t.jsx)(c.ZP,{value:v,onChange:(e,n)=>j(n),"aria-labelledby":"pressure-threshold-slider",min:900,max:1100})]})]}),(0,t.jsx)(s.Z,{className:en().marqueeContainer,children:(0,t.jsx)(o.Z,{variant:"body1",className:en().marquee,children:"Laufband f\xfcr Nachrichten zu den Sensoren"})})]})]}),(0,t.jsxs)(A,{open:r,onClose:f,children:[(0,t.jsx)(q,{className:en().dialogTitle,children:"Add a New Sensor"}),(0,t.jsxs)(K,{className:en().dialogContent,children:[(0,t.jsx)(O.Z,{autoFocus:!0,margin:"dense",label:"Temperature",name:"temperature",type:"number",fullWidth:!0,value:p.temperature,onChange:_}),(0,t.jsx)(O.Z,{margin:"dense",label:"Humidity",name:"humidity",type:"number",fullWidth:!0,value:p.humidity,onChange:_}),(0,t.jsx)(O.Z,{margin:"dense",label:"Pressure",name:"pressure",type:"number",fullWidth:!0,value:p.pressure,onChange:_}),(0,t.jsx)(O.Z,{margin:"dense",label:"Serial Number",name:"serialNumber",fullWidth:!0,value:p.serialNumber,onChange:_}),(0,t.jsx)(O.Z,{margin:"dense",label:"Image URL",name:"image",fullWidth:!0,value:p.image,onChange:_})]}),(0,t.jsxs)(V,{className:en().dialogActions,children:[(0,t.jsx)(d.Z,{onClick:f,className:en().dialogButton,children:"Cancel"}),(0,t.jsx)(d.Z,{onClick:()=>{let r={id:e.length+1,temperature:parseFloat(p.temperature),humidity:parseFloat(p.humidity),pressure:parseFloat(p.pressure),serialNumber:p.serialNumber,image:p.image};n((0,$.m)(r)),f()},className:en().dialogButton,children:"Add Sensor"})]})]})]})}},89893:function(e,n,r){"use strict";r.d(n,{m:function(){return a}});let t=(0,r(31116).oM)({name:"sensor",initialState:{sensors:[]},reducers:{addSensor:(e,n)=>{e.sensors.push(n.payload)}}}),{addSensor:a}=t.actions;n.Z=t.reducer},26285:function(e){e.exports={container:"SensorManagement_container__L_IJJ",header:"SensorManagement_header__zeAxj",content:"SensorManagement_content__SlDoJ",sensorRegistry:"SensorManagement_sensorRegistry__ivWKk",sensorSettings:"SensorManagement_sensorSettings__26YSS",button:"SensorManagement_button__IIsfQ",settings_button:"SensorManagement_settings_button__4ja_X",sensorTable:"SensorManagement_sensorTable__TxAyJ",dialogTitle:"SensorManagement_dialogTitle__XnEl3",dialogButton:"SensorManagement_dialogButton__jpFJK",sliderContainer:"SensorManagement_sliderContainer__9lb0t","MuiTypography-root":"SensorManagement_MuiTypography-root__5VuOL",settingsContainer:"SensorManagement_settingsContainer__roJyX",buttonsContainer:"SensorManagement_buttonsContainer__eDgGh",slidersContainer:"SensorManagement_slidersContainer__JYgvo",marqueeContainer:"SensorManagement_marqueeContainer__fUZ5b",marquee:"SensorManagement_marquee__0__YK"}}},function(e){e.O(0,[2916,3719,6086,3037,4462,6376,8884,9395,2263,3998,1116,2971,7023,1744],function(){return e(e.s=76914)}),_N_E=e.O()}]);