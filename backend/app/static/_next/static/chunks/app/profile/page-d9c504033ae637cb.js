(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4178],{29:function(e,t,r){Promise.resolve().then(r.bind(r,70529))},96797:function(e,t,r){"use strict";r.d(t,{$:function(){return i}});var n=r(22988),o=r(37087);function i(e,t,r){return void 0===e||(0,o.X)(e)?t:(0,n.Z)({},t,{ownerState:(0,n.Z)({},t.ownerState,r)})}},80317:function(e,t,r){"use strict";function n(e,t=[]){if(void 0===e)return{};let r={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&"function"==typeof e[r]&&!t.includes(r)).forEach(t=>{r[t]=e[t]}),r}r.d(t,{_:function(){return n}})},37087:function(e,t,r){"use strict";function n(e){return"string"==typeof e}r.d(t,{X:function(){return n}})},79042:function(e,t,r){"use strict";r.d(t,{L:function(){return l}});var n=r(22988),o=r(44839),i=r(80317);function a(e){if(void 0===e)return{};let t={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t])).forEach(r=>{t[r]=e[r]}),t}function l(e){let{getSlotProps:t,additionalProps:r,externalSlotProps:l,externalForwardedProps:s,className:c}=e;if(!t){let e=(0,o.Z)(null==r?void 0:r.className,c,null==s?void 0:s.className,null==l?void 0:l.className),t=(0,n.Z)({},null==r?void 0:r.style,null==s?void 0:s.style,null==l?void 0:l.style),i=(0,n.Z)({},r,s,l);return e.length>0&&(i.className=e),Object.keys(t).length>0&&(i.style=t),{props:i,internalRef:void 0}}let u=(0,i._)((0,n.Z)({},s,l)),d=a(l),f=a(s),v=t(u),p=(0,o.Z)(null==v?void 0:v.className,null==r?void 0:r.className,c,null==s?void 0:s.className,null==l?void 0:l.className),m=(0,n.Z)({},null==v?void 0:v.style,null==r?void 0:r.style,null==s?void 0:s.style,null==l?void 0:l.style),h=(0,n.Z)({},v,r,f,d);return p.length>0&&(h.className=p),Object.keys(m).length>0&&(h.style=m),{props:h,internalRef:v.ref}}},26805:function(e,t,r){"use strict";function n(e,t,r){return"function"==typeof e?e(t,r):e}r.d(t,{x:function(){return n}})},35349:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(23950),o=r(22988),i=r(2265),a=r(44839),l=r(26259),s=r(84166),c=r(48024),u=r(59018),d=r(57437),f=(0,u.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),v=r(34535),p=r(87542);function m(e){return(0,p.ZP)("MuiAvatar",e)}(0,v.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var h=r(76830);let Z=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],g=(0,s.U)("MuiAvatar"),x=e=>{let{classes:t,variant:r,colorDefault:n}=e;return(0,l.Z)({root:["root",r,n&&"colorDefault"],img:["img"],fallback:["fallback"]},m,t)},y=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(e=>{let{theme:t}=e;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,o.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:(0,o.Z)({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]}}),S=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),j=(0,c.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});var b=i.forwardRef(function(e,t){let r=g({props:e,name:"MuiAvatar"}),{alt:l,children:s,className:c,component:u="div",slots:f={},slotProps:v={},imgProps:p,sizes:m,src:b,srcSet:P,variant:w="circular"}=r,N=(0,n.Z)(r,Z),k=null,R=function(e){let{crossOrigin:t,referrerPolicy:r,src:n,srcSet:o}=e,[a,l]=i.useState(!1);return i.useEffect(()=>{if(!n&&!o)return;l(!1);let e=!0,i=new Image;return i.onload=()=>{e&&l("loaded")},i.onerror=()=>{e&&l("error")},i.crossOrigin=t,i.referrerPolicy=r,i.src=n,o&&(i.srcset=o),()=>{e=!1}},[t,r,n,o]),a}((0,o.Z)({},p,{src:b,srcSet:P})),M=b||P,A=M&&"error"!==R,z=(0,o.Z)({},r,{colorDefault:!A,component:u,variant:w}),_=x(z),[D,E]=(0,h.Z)("img",{className:_.img,elementType:S,externalForwardedProps:{slots:f,slotProps:{img:(0,o.Z)({},p,v.img)}},additionalProps:{alt:l,src:b,srcSet:P,sizes:m},ownerState:z});return k=A?(0,d.jsx)(D,(0,o.Z)({},E)):s||0===s?s:M&&l?l[0]:(0,d.jsx)(j,{ownerState:z,className:_.fallback}),(0,d.jsx)(y,(0,o.Z)({as:u,ownerState:z,className:(0,a.Z)(_.root,c),ref:t},N,{children:k}))})},95875:function(e,t,r){"use strict";r.d(t,{Z:function(){return Z}});var n=r(23950),o=r(22988),i=r(2265),a=r(44839),l=r(26259),s=r(10317),c=r(48024),u=e=>((e<1?5.11916*e**2:4.5*Math.log(e+1)+2)/100).toFixed(2),d=r(69281),f=r(74287),v=r(57437);let p=["className","component","elevation","square","variant"],m=e=>{let{square:t,elevation:r,variant:n,classes:o}=e;return(0,l.Z)({root:["root",n,!t&&"rounded","elevation"===n&&"elevation".concat(r)]},f.J,o)},h=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,"elevation"===r.variant&&t["elevation".concat(r.elevation)]]}})(e=>{var t;let{theme:r,ownerState:n}=e;return(0,o.Z)({backgroundColor:(r.vars||r).palette.background.paper,color:(r.vars||r).palette.text.primary,transition:r.transitions.create("box-shadow")},!n.square&&{borderRadius:r.shape.borderRadius},"outlined"===n.variant&&{border:"1px solid ".concat((r.vars||r).palette.divider)},"elevation"===n.variant&&(0,o.Z)({boxShadow:(r.vars||r).shadows[n.elevation]},!r.vars&&"dark"===r.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,s.Fq)("#fff",u(n.elevation)),", ").concat((0,s.Fq)("#fff",u(n.elevation)),")")},r.vars&&{backgroundImage:null==(t=r.vars.overlays)?void 0:t[n.elevation]}))});var Z=i.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiPaper"}),{className:i,component:l="div",elevation:s=1,square:c=!1,variant:u="elevation"}=r,f=(0,n.Z)(r,p),Z=(0,o.Z)({},r,{component:l,elevation:s,square:c,variant:u}),g=m(Z);return(0,v.jsx)(h,(0,o.Z)({as:l,ownerState:Z,className:(0,a.Z)(g.root,i),ref:t},f))})},74287:function(e,t,r){"use strict";r.d(t,{J:function(){return i}});var n=r(34535),o=r(87542);function i(e){return(0,o.ZP)("MuiPaper",e)}let a=(0,n.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);t.Z=a},59018:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(22988),o=r(2265),i=r(23950),a=r(44839),l=r(26259),s=r(12272),c=r(69281),u=r(48024),d=r(34535),f=r(87542);function v(e){return(0,f.ZP)("MuiSvgIcon",e)}(0,d.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var p=r(57437);let m=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],h=e=>{let{color:t,fontSize:r,classes:n}=e,o={root:["root","inherit"!==t&&"color".concat((0,s.Z)(t)),"fontSize".concat((0,s.Z)(r))]};return(0,l.Z)(o,v,n)},Z=(0,u.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,"inherit"!==r.color&&t["color".concat((0,s.Z)(r.color))],t["fontSize".concat((0,s.Z)(r.fontSize))]]}})(e=>{var t,r,n,o,i,a,l,s,c,u,d,f,v;let{theme:p,ownerState:m}=e;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:m.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(t=p.transitions)||null==(r=t.create)?void 0:r.call(t,"fill",{duration:null==(n=p.transitions)||null==(n=n.duration)?void 0:n.shorter}),fontSize:({inherit:"inherit",small:(null==(o=p.typography)||null==(i=o.pxToRem)?void 0:i.call(o,20))||"1.25rem",medium:(null==(a=p.typography)||null==(l=a.pxToRem)?void 0:l.call(a,24))||"1.5rem",large:(null==(s=p.typography)||null==(c=s.pxToRem)?void 0:c.call(s,35))||"2.1875rem"})[m.fontSize],color:null!=(u=null==(d=(p.vars||p).palette)||null==(d=d[m.color])?void 0:d.main)?u:({action:null==(f=(p.vars||p).palette)||null==(f=f.action)?void 0:f.active,disabled:null==(v=(p.vars||p).palette)||null==(v=v.action)?void 0:v.disabled,inherit:void 0})[m.color]}}),g=o.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiSvgIcon"}),{children:l,className:s,color:u="inherit",component:d="svg",fontSize:f="medium",htmlColor:v,inheritViewBox:g=!1,titleAccess:x,viewBox:y="0 0 24 24"}=r,S=(0,i.Z)(r,m),j=o.isValidElement(l)&&"svg"===l.type,b=(0,n.Z)({},r,{color:u,component:d,fontSize:f,instanceFontSize:e.fontSize,inheritViewBox:g,viewBox:y,hasSvgAsChild:j}),P={};g||(P.viewBox=y);let w=h(b);return(0,p.jsxs)(Z,(0,n.Z)({as:d,className:(0,a.Z)(w.root,s),focusable:"false",color:v,"aria-hidden":!x||void 0,role:x?"img":void 0,ref:t},P,S,j&&l.props,{ownerState:b,children:[j?l.props.children:l,x?(0,p.jsx)("title",{children:x}):null]}))});function x(e,t){function r(r,o){return(0,p.jsx)(g,(0,n.Z)({"data-testid":"".concat(t,"Icon"),ref:o},r,{children:e}))}return r.muiName=g.muiName,o.memo(o.forwardRef(r))}g.muiName="SvgIcon"},76830:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(22988),o=r(23950),i=r(72367),a=r(26805),l=r(79042),s=r(96797);let c=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],u=["component","slots","slotProps"],d=["component"];function f(e,t){let{className:r,elementType:f,ownerState:v,externalForwardedProps:p,getSlotOwnerState:m,internalForwardedProps:h}=t,Z=(0,o.Z)(t,c),{component:g,slots:x={[e]:void 0},slotProps:y={[e]:void 0}}=p,S=(0,o.Z)(p,u),j=x[e]||f,b=(0,a.x)(y[e],v),P=(0,l.L)((0,n.Z)({className:r},Z,{externalForwardedProps:"root"===e?S:void 0,externalSlotProps:b})),{props:{component:w},internalRef:N}=P,k=(0,o.Z)(P.props,d),R=(0,i.Z)(N,null==b?void 0:b.ref,t.ref),M=m?m(k):{},A=(0,n.Z)({},v,M),z="root"===e?w||g:w,_=(0,s.$)(j,(0,n.Z)({},"root"===e&&!g&&!x[e]&&h,"root"!==e&&!x[e]&&h,k,z&&{as:z},{ref:R}),A);return Object.keys(M).forEach(e=>{delete _[e]}),[j,_]}},84166:function(e,t,r){"use strict";r.d(t,{U:function(){return o}});var n=r(69281);function o(e){return n.Z}},99969:function(e,t,r){"use strict";function n(e,t){"function"==typeof e?e(t):e&&(e.current=t)}r.d(t,{Z:function(){return n}})},72367:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(2265),o=r(99969);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.useMemo(()=>t.every(e=>null==e)?null:e=>{t.forEach(t=>{(0,o.Z)(t,e)})},t)}},70529:function(e,t,r){"use strict";r.r(t);var n=r(57437);r(2265);var o=r(62197),i=r(35349),a=r(95875),l=r(83719),s=r(7999),c=r(33037),u=r(96154),d=r(87138),f=r(63225),v=r.n(f);let p=(0,u.Z)(o.Z)(e=>{let{theme:t}=e;return{marginTop:t.spacing(4),textAlign:"center"}}),m=(0,u.Z)(i.Z)(e=>{let{theme:t}=e;return{width:t.spacing(15),height:t.spacing(15),margin:"auto"}}),h=(0,u.Z)(a.Z)(e=>{let{theme:t}=e;return{padding:t.spacing(3),textAlign:"center",cursor:"pointer",transition:"transform 0.2s","&:hover":{transform:"scale(1.05)"}}});t.default=()=>(0,n.jsxs)(p,{maxWidth:"md",children:[(0,n.jsx)(m,{alt:"Profile Picture",src:"/profile-pic.jpg"}),(0,n.jsx)(l.Z,{variant:"h4",className:v().profileName,children:"John Doe"}),(0,n.jsx)(l.Z,{variant:"h6",className:v().profileTitle,children:"Software Engineer"}),(0,n.jsx)(s.Z,{mt:5,children:(0,n.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,n.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,n.jsx)(d.default,{href:"/profile/edit-profile",passHref:!0,children:(0,n.jsxs)(h,{elevation:3,children:[(0,n.jsx)(l.Z,{variant:"h6",children:"Edit Profile"}),(0,n.jsx)(l.Z,{variant:"body2",className:v().cardDescription,children:"Update your personal information and profile picture."})]})})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,n.jsx)(d.default,{href:"/profile/account-settings",passHref:!0,children:(0,n.jsxs)(h,{elevation:3,children:[(0,n.jsx)(l.Z,{variant:"h6",children:"Account Settings"}),(0,n.jsx)(l.Z,{variant:"body2",className:v().cardDescription,children:"Manage your account settings and password."})]})})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,n.jsx)(d.default,{href:"/profile/notification-settings",passHref:!0,children:(0,n.jsxs)(h,{elevation:3,children:[(0,n.jsx)(l.Z,{variant:"h6",children:"Notification Settings"}),(0,n.jsx)(l.Z,{variant:"body2",className:v().cardDescription,children:"Customize your notification preferences."})]})})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,n.jsx)(d.default,{href:"/profile/security-settings",passHref:!0,children:(0,n.jsxs)(h,{elevation:3,children:[(0,n.jsx)(l.Z,{variant:"h6",children:"Security Settings"}),(0,n.jsx)(l.Z,{variant:"body2",className:v().cardDescription,children:"Enhance the security of your account."})]})})})]})})]})},63225:function(e){e.exports={profileName:"profile_profileName__giPh4",profileTitle:"profile_profileTitle__wqT0u",cardDescription:"profile_cardDescription__0O3QW"}}},function(e){e.O(0,[9736,3719,3037,231,3109,2971,7023,1744],function(){return e(e.s=29)}),_N_E=e.O()}]);