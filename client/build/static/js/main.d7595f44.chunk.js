(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(12),r=a.n(o),i=(a(23),a(13)),s=a(14),c=a(15),m=a(17),p=a(16),u=a(2),h=a.n(u),d=(a(41),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:"",author:"",type:"",pages:0,volume:0,method:"",participants:"",year:2020,field_1:"title",field_2:"any",field_3:"",posts:[]},e.componentDidMount=function(){e.getBlogPost()},e.getBlogPost=function(){h.a.get("/api").then((function(t){var a=t.data;e.setState({posts:a}),console.log("Data has been received!!")})).catch((function(){alert("Error retrieving data!!!")}))},e.handleChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(i.a)({},n,l))},e.submit=function(t){t.preventDefault();var a={title:e.state.title,author:e.state.author,type:e.state.type,pages:e.state.pages,volume:e.state.volume,method:e.state.method,participants:e.state.participants,year:e.state.year};h()({url:"/api/save",method:"POST",data:a}).then((function(){console.log("Data has been sent to the server"),e.resetUserInputs(),alert("Success!")})).catch((function(){console.log("Internal server error")}))},e.search=function(t){t.preventDefault(),h.a.get("/api/search".concat("/",e.state.field_1,"/",e.state.field_2,"/",e.state.field_3)).then((function(t){var a=t.data;e.setState({posts:a}),console.log("Data has been received!!")})).catch((function(){alert("Error retrieving data!!!")}))},e.findall=function(t){t.preventDefault(),e.getBlogPost()},e.resetUserInputs=function(){e.setState({title:"",author:"",type:"",pages:0,volume:0,method:"",participants:"",year:0})},e.displayBlogPost=function(e){return e.length?e.map((function(e,t){return l.a.createElement("div",{key:t,className:"blog-post__display"},l.a.createElement("p",null,e.title),l.a.createElement("p",null,e.author),l.a.createElement("p",null,e.type),l.a.createElement("p",null,e.pages),l.a.createElement("p",null,e.volume),l.a.createElement("p",null,e.method),l.a.createElement("p",null,e.participants),l.a.createElement("p",null,e.year))})):null},e}return Object(c.a)(a,[{key:"render",value:function(){return console.log("State: ",this.state),l.a.createElement("div",{className:"app"},l.a.createElement("h2",null,"snack Submission"),l.a.createElement("form",{onSubmit:this.submit},l.a.createElement("div",{className:"form-input"},l.a.createElement("input",{type:"text",name:"title",placeholder:"title",value:this.state.title,onChange:this.handleChange})),l.a.createElement("div",{className:"form-input"},l.a.createElement("input",{type:"text",name:"author",placeholder:"author",value:this.state.author,onChange:this.handleChange})),l.a.createElement("div",{className:"form-input"},l.a.createElement("input",{type:"text",name:"type",placeholder:"type",value:this.state.type,onChange:this.handleChange})),l.a.createElement("div",{className:"form-input"},l.a.createElement("input",{type:"text",name:"pages",placeholder:"pages",value:this.state.pages,onChange:this.handleChange})),l.a.createElement("div",{className:"form-input"},l.a.createElement("input",{type:"text",name:"volume",placeholder:"volume",value:this.state.volume,onChange:this.handleChange})),l.a.createElement("div",{className:"form-input"},l.a.createElement("input",{type:"text",name:"method",placeholder:"method",value:this.state.method,onChange:this.handleChange})),l.a.createElement("div",{className:"form-input"},l.a.createElement("input",{type:"text",name:"participants",placeholder:"participants",value:this.state.participants,onChange:this.handleChange})),l.a.createElement("div",{className:"form-input"},l.a.createElement("input",{type:"text",name:"year",placeholder:"year",value:this.state.year,onChange:this.handleChange})),l.a.createElement("button",null,"Submit")),l.a.createElement("form",{onSubmit:this.search},l.a.createElement("div",{className:"form-input"},l.a.createElement("label",{for:"field_1"},"Choose a type for search:"),l.a.createElement("select",{id:"field_1",name:"field_1",type:"field_1",value:this.state.field_1,onChange:this.handleChange},l.a.createElement("option",{value:"title"},"title"),l.a.createElement("option",{value:"author"},"author"),l.a.createElement("option",{value:"type"},"type"),l.a.createElement("option",{value:"pages"},"pages"),l.a.createElement("option",{value:"volume"},"volume"),l.a.createElement("option",{value:"method"},"method"),l.a.createElement("option",{value:"participants"},"participants"),l.a.createElement("option",{value:"year"},"year"))),l.a.createElement("div",{className:"form-input"},l.a.createElement("label",{for:"field_2"},"Choose operator for search:"),l.a.createElement("select",{id:"field_2",name:"field_2",type:"field_2",value:this.state.field_2,onChange:this.handleChange},l.a.createElement("option",{value:"any"},"any"),l.a.createElement("option",{value:"contains"},"contains"),l.a.createElement("option",{value:"is"},"is"),l.a.createElement("option",{value:"greater"},"greater"),l.a.createElement("option",{value:"smaller"},"smaller"))),l.a.createElement("div",{className:"form-input"},l.a.createElement("input",{type:"field_3",name:"field_3",placeholder:"information here",value:this.state.field_3,onChange:this.handleChange})),l.a.createElement("button",null,"search")),l.a.createElement("div",{className:"blog-"},this.displayBlogPost(this.state.posts)))}}]),a}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.d7595f44.chunk.js.map