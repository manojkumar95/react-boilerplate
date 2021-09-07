webpackJsonp([0],{381:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r,u,i,o,c=l(984),f=n(c),d=l(63),s=n(d),m=l(13),p=n(m),y=l(64),v=n(y),h=l(14),E=n(h),b=l(15),g=n(b),_=l(0),N=n(_),x=l(2),M=n(x),S=l(142),A=l(21),k=l(221),w=n(k),F=l(220),I=l(972),V=n(I),O=l(986),q=n(O),j=(a=(0,S.provideHooks)({fetch:function(e){return(0,e.store.inject)({survey:V.default})}}),r=(0,A.connect)(function(){return{}},{initialize:F.initialize}),a(u=r((o=i=function(e){function t(){var e,l,n,a;(0,p.default)(this,t);for(var r=arguments.length,u=Array(r),i=0;i<r;i++)u[i]=arguments[i];return l=n=(0,E.default)(this,(e=t.__proto__||(0,s.default)(t)).call.apply(e,[this].concat(u))),n.handleSubmit=function(e){window.alert("Data submitted! "+(0,f.default)(e)),n.props.initialize("survey",{})},n.handleInitialize=function(){n.props.initialize("survey",{name:"Little Bobby Tables",email:"bobby@gmail.com",occupation:"Redux Wizard",currentlyEmployed:!0,sex:"male"})},a=l,(0,E.default)(n,a)}return(0,g.default)(t,e),(0,v.default)(t,[{key:"render",value:function(){return N.default.createElement("div",{className:"container"},N.default.createElement("h1",null,"Survey"),N.default.createElement(w.default,{title:"Survey"}),N.default.createElement("p",null,'This is an example of a form in redux in which all the state is kept within the redux store. All the components are pure "dumb" components.'),N.default.createElement("p",null,"Things to notice:"),N.default.createElement("ul",null,N.default.createElement("li",null,"No validation errors are shown initially."),N.default.createElement("li",null,"Validation errors are only shown onBlur"),N.default.createElement("li",null,"Validation errors are hidden onChange when the error is rectified"),N.default.createElement("li",null,N.default.createElement("code",null,"valid"),", ",N.default.createElement("code",null,"invalid"),", ",N.default.createElement("code",null,"pristine")," and ",N.default.createElement("code",null,"dirty")," flags are passed with each change"),N.default.createElement("li",null,N.default.createElement("em",null,"Except")," when you submit the form, in which case they are shown for all invalid fields."),N.default.createElement("li",null,"If you click the Initialize Form button, the form will be prepopupated with some values and the"," ",N.default.createElement("code",null,"pristine")," and ",N.default.createElement("code",null,"dirty")," flags will be based on those values.")),N.default.createElement("p",null,"Pardon the use of ",N.default.createElement("code",null,"window.alert()"),", but I wanted to keep this component stateless."),N.default.createElement("div",{style:{textAlign:"center",margin:15}},N.default.createElement("button",{className:"btn btn-primary",onClick:this.handleInitialize},N.default.createElement("i",{className:"fa fa-pencil"})," Initialize Form")),N.default.createElement("p",null,"The circles to the left of the inputs correspond to flags provided by ",N.default.createElement("code",null,"redux-form"),": Touched, Visited, Active, and Dirty."),N.default.createElement(q.default,{onSubmit:this.handleSubmit}))}}]),t}(_.Component),i.propTypes={initialize:M.default.func.isRequired},u=o))||u)||u);t.default=j,e.exports=t.default},962:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){if(!E(e)&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e))return"Invalid email address"}function r(e){if(E(e))return"Required"}function u(e){return function(t){if(!E(t)&&t.length<e)return"Must be at least "+e+" characters"}}function i(e){return function(t){if(!E(t)&&t.length>e)return"Must be no more than "+e+" characters"}}function o(e){if(!E(e)&&!(0,h.default)(Number(e)))return"Must be an integer"}function c(e){return function(t){if(!e.includes(t))return"Must be one of: "+e.join(", ")}}function f(e){return function(t,l){if(l&&t!==l[e])return"Do not match"}}function d(e,t){return function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={};return(0,y.default)(e).forEach(function(a){var r=b([].concat(e[a])),u=r(l[a],l,(0,m.default)({key:a},t));u&&(n[a]=u)}),n}}Object.defineProperty(t,"__esModule",{value:!0});var s=l(8),m=n(s),p=l(143),y=n(p),v=l(963),h=n(v);t.email=a,t.required=r,t.minLength=u,t.maxLength=i,t.integer=o,t.oneOf=c,t.match=f,t.createValidator=d;var E=function(e){return void 0===e||null===e||""===e},b=function(e){return function(t,l,n){return e.map(function(e){return e(t,l,n)}).filter(function(e){return!!e})[0]}}},963:function(e,t,l){e.exports={default:l(964),__esModule:!0}},964:function(e,t,l){l(965),e.exports=l(9).Number.isInteger},965:function(e,t,l){var n=l(22);n(n.S,"Number",{isInteger:l(966)})},966:function(e,t,l){var n=l(41),a=Math.floor;e.exports=function(e){return!n(e)&&isFinite(e)&&a(e)===e}},967:function(e,t,l){"use strict";t.__esModule=!0;var n=l(968),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=a.default},968:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return 1===e?(0,s.default)(t):(0,f.default)(e,t)}function r(e,t){var l=t?(0,o.default)(e,t):e;return function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n+=1)if(!l(e[n],t[n]))return!1;return!0}}function u(){for(var e=1,t=function(e,t){return e===t},l=!1,n=arguments.length,u=Array(n),i=0;i<n;i++)u[i]=arguments[i];"number"==typeof u[0]&&(e=u.shift()),"function"==typeof u[0]?t=u.shift():void 0===u[0]&&u.shift(),"boolean"==typeof u[0]&&(l=u[0]);var o=a(e,r(t,l));return function(e){return function(){for(var t=arguments.length,l=Array(t),n=0;n<t;n++)l[n]=arguments[n];var a=o.get(l);return void 0===a&&(a=e.apply(e,l),o.put(l,a)),a}}}t.__esModule=!0,t.default=u;var i=l(969),o=n(i),c=l(970),f=n(c),d=l(971),s=n(d)},969:function(e,t,l){"use strict";function n(e,t){function l(n,u){if(e(n,u))return!0;if(Array.isArray(n))return!(!Array.isArray(u)||n.length!==u.length)&&!!n.every(function(e,t){return l(e,u[t])});if(Array.isArray(u))return!1;if("object"===(void 0===n?"undefined":a(n))){if("object"!==(void 0===u?"undefined":a(u)))return!1;var i=null===n,o=null===u;if(i||o)return i===o;var c=Object.keys(n),f=Object.keys(u);if(c.length!==f.length)return!1;var d=t?l:e;return!!c.every(function(e){return r(n,e)&&r(u,e)&&d(n[e],u[e])})}return!1}return l}t.__esModule=!0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n;var r=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},970:function(e,t,l){"use strict";function n(e,t){function l(e){var l=a.findIndex(function(l){return t(e,l.key)});if(l>-1){var n=a[l];return l>0&&(a.slice(l,1),a.unshift(n)),n.value}}function n(t,n){l(t)||(a.unshift({key:t,value:n}),a.length>e&&a.pop())}var a=[];return{get:l,put:n}}t.__esModule=!0,t.default=n},971:function(e,t,l){"use strict";function n(e){var t=void 0;return{get:function(l){if(t&&e(l,t.key))return t.value},put:function(e,l){t={key:e,value:l}}}}t.__esModule=!0,t.default=n},972:function(e,t,l){"use strict";function n(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:o}function a(e){return{types:[r,u,i],promise:function(t){return t.client.post("/survey/isValid",e)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,t.isValidEmail=a;var r="redux-example/survey/IS_VALID",u="redux-example/survey/IS_VALID_SUCCESS",i="redux-example/survey/IS_VALID_FAIL",o={}},984:function(e,t,l){e.exports={default:l(985),__esModule:!0}},985:function(e,t,l){var n=l(9),a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},986:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return e.email?t((0,I.isValidEmail)(e)):x.default.resolve()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,u,i,o,c,f=l(63),d=n(f),s=l(13),m=n(s),p=l(64),y=n(p),v=l(14),h=n(v),E=l(15),b=n(E),g=l(8),_=n(g),N=l(105),x=n(N),M=l(0),S=n(M),A=l(2),k=n(A),w=l(220),F=l(21),I=l(972),V=l(987),O=n(V),q=function(e){var t=e.input,l=e.label,n=e.type,a=e.showAsyncValidating,r=e.className,u=e.styles,i=e.meta,o=i.touched,c=i.error,f=i.dirty,d=i.active,s=i.visited,m=i.asyncValidating;return S.default.createElement("div",{className:"form-group "+(c&&o?"has-error":"")},S.default.createElement("label",{htmlFor:t.name,className:"col-sm-2"},l),S.default.createElement("div",{className:"col-sm-8 "+u.inputGroup},a&&m&&S.default.createElement("i",{className:"fa fa-cog fa-spin "+u.cog}),S.default.createElement("input",(0,_.default)({},t,{type:n,className:r,id:t.name})),c&&o&&S.default.createElement("div",{className:"text-danger"},c),S.default.createElement("div",{className:u.flags},f&&S.default.createElement("span",{className:u.dirty,title:"Dirty"},"D"),d&&S.default.createElement("span",{className:u.active,title:"Active"},"A"),s&&S.default.createElement("span",{className:u.visited,title:"Visited"},"V"),o&&S.default.createElement("span",{className:u.touched,title:"Touched"},"T"))))};q.propTypes=w.fieldPropTypes;var j=(r=(0,w.reduxForm)({form:"survey",validate:O.default,asyncValidate:a,asyncBlurFields:["email"]}),u=(0,F.connect)(function(e){return{active:e.form.survey.active}}),r(i=u((c=o=function(e){function t(){return(0,m.default)(this,t),(0,h.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,b.default)(t,e),(0,y.default)(t,[{key:"render",value:function(){var e=this.props,t=e.asyncValidating,n=e.dirty,a=e.active,r=e.handleSubmit,u=e.invalid,i=e.reset,o=e.pristine,c=e.valid,f=l(988);return S.default.createElement("div",null,S.default.createElement("form",{className:"form-horizontal",onSubmit:r},S.default.createElement(w.Field,{name:"name",type:"text",component:q,label:"Full Name",className:"form-control",styles:f}),S.default.createElement(w.Field,{name:"email",type:"text",component:q,label:"Email",className:"form-control",styles:f,asyncValidating:t}),S.default.createElement(w.Field,{name:"occupation",type:"text",component:q,label:"Occupation",className:"form-control",styles:f}),S.default.createElement(w.Field,{name:"currentlyEmployed",type:"checkbox",component:q,label:"Currently Employed?",styles:f}),S.default.createElement("div",{className:"form-group"},S.default.createElement("label",{htmlFor:"sex",className:"col-sm-2"},"Sex"),S.default.createElement("div",{className:"col-sm-8"},S.default.createElement("label",{htmlFor:"sex-male",className:f.radioLabel},S.default.createElement(w.Field,{name:"sex",component:"input",type:"radio",id:"sex-male",value:"male"})," Male"),S.default.createElement("label",{htmlFor:"sex-female",className:f.radioLabel},S.default.createElement(w.Field,{name:"sex",component:"input",type:"radio",id:"sex-female",value:"female"})," Female"))),S.default.createElement("div",{className:"form-group"},S.default.createElement("div",{className:"col-sm-offset-2 col-sm-10"},S.default.createElement("button",{className:"btn btn-success",onClick:r},S.default.createElement("i",{className:"fa fa-paper-plane"})," Submit"),S.default.createElement("button",{className:"btn btn-warning",type:"button",onClick:i,style:{marginLeft:15}},S.default.createElement("i",{className:"fa fa-undo"})," Reset")))),S.default.createElement("h4",null,"Props from redux-form"),S.default.createElement("table",{className:"table table-striped"},S.default.createElement("tbody",null,S.default.createElement("tr",null,S.default.createElement("th",null,"Active Field"),S.default.createElement("td",null,a)),S.default.createElement("tr",null,S.default.createElement("th",null,"Dirty"),S.default.createElement("td",{className:n?"success":"danger"},n?"true":"false")),S.default.createElement("tr",null,S.default.createElement("th",null,"Pristine"),S.default.createElement("td",{className:o?"success":"danger"},o?"true":"false")),S.default.createElement("tr",null,S.default.createElement("th",null,"Valid"),S.default.createElement("td",{className:c?"success":"danger"},c?"true":"false")),S.default.createElement("tr",null,S.default.createElement("th",null,"Invalid"),S.default.createElement("td",{className:u?"success":"danger"},u?"true":"false")))))}}]),t}(M.Component),o.propTypes={active:k.default.string,asyncValidating:k.default.oneOfType([k.default.bool,k.default.string]).isRequired,dirty:k.default.bool.isRequired,handleSubmit:k.default.func.isRequired,reset:k.default.func.isRequired,invalid:k.default.bool.isRequired,pristine:k.default.bool.isRequired,valid:k.default.bool.isRequired},o.defaultProps={active:null},i=c))||i)||i);t.default=j,e.exports=t.default},987:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(967),a=function(e){return e&&e.__esModule?e:{default:e}}(n),r=l(962),u=(0,r.createValidator)({name:[r.required,(0,r.maxLength)(10)],email:[r.required,r.email],occupation:(0,r.maxLength)(20)});t.default=(0,a.default)(10)(u),e.exports=t.default},988:function(e,t){e.exports={inputGroup:"_29ZfzwlqZUjBbULYGvqciA",flags:"_3awRuvqykIXYuFJkfjNWHo",active:"_29OEIM8_pkcmJJ7LGxFhlA",dirty:"_2wgW4cjm22pBmgNEUSWbuM",visited:"_1Kp6XIgfvfBGR3o-WXj00P",touched:"_3MctRcXq3qmM9G-gRhkefC",radioLabel:"rU5C78efs3SAsOSOyhk5X",cog:"_3zevke3GLFQ8RP0M1JPv04"}}});