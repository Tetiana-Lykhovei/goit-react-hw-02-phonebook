(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={element:"ContactList_element__3Lwh4",btn:"ContactList_btn__1UHET"}},,,function(e,t,n){e.exports={wrapper:"ContactForm_wrapper__1B5GG"}},function(e,t,n){e.exports={wrapper:"Filter_wrapper__2WXNe"}},,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),o=(n(17),n(12)),s=n(2),u=n(3),l=n(5),b=n(4),m=n(22),j=n(9),h=n(10),d=n.n(h),p=n(0),f=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleSubmit=function(t){t.preventDefault();var n=e.state;n.name,n.number;e.props.onSubmit(e.state),e.resetForm()},e.handleInputChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(j.a)({},a,r))},e.resetForm=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(p.jsxs)("form",{className:d.a.wrapper,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{children:["Name:",Object(p.jsx)("input",{type:"text",name:"name",value:t,onChange:this.handleInputChange})]}),Object(p.jsxs)("label",{children:["Phone:",Object(p.jsx)("input",{type:"text",name:"number",value:n,onChange:this.handleInputChange})]}),Object(p.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=n(7),x=n.n(O),C=function(e){var t=e.contactList,n=e.onDeleteContact;return Object(p.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(p.jsxs)("li",{className:x.a.element,children:[Object(p.jsxs)("p",{children:[a,": "]}),Object(p.jsx)("p",{children:r}),Object(p.jsx)("button",{className:x.a.btn,type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})},v=n(11),w=n.n(v),g=function(e){var t=e.filterValue,n=e.onFilter;return Object(p.jsx)("form",{className:w.a.wrapper,children:Object(p.jsxs)("label",{children:["Find contacts by name"," ",Object(p.jsx)("input",{type:"text",value:t,onChange:n})]})})};n(19);Object(m.a)();var y=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.submitHandler=function(t){var n=t.name,a=t.number,r=e.state.contacts,c={id:Object(m.a)(),name:n,number:a};r.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts")):e.setState((function(e){return{contacts:[c].concat(Object(o.a)(e.contacts))}}))},e.filterChange=function(t){e.setState({filter:t.currentTarget.value})},e.renderFilteredContacts=function(){var t=e.state,n=t.contacts,a=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.submitHandler,n=this.filterChange,a=this.renderFilteredContacts,r=this.deleteContact,c=a();return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{className:"title",children:"Phonebook"}),Object(p.jsx)(f,{onSubmit:t}),Object(p.jsx)("h2",{className:"title",children:"Contacts"}),Object(p.jsx)(g,{filterValue:e,onFilter:n}),Object(p.jsx)(C,{contactList:c,onDeleteContact:r})]})}}]),n}(a.Component);i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.dfe62222.chunk.js.map