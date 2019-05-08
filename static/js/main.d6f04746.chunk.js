(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){e.exports={container:"BookListItem_container__27Be0",main:"BookListItem_main__NXdHc",description:"BookListItem_description__1FPbg",image:"BookListItem_image__1C2E7",info:"BookListItem_info__zn1JO"}},12:function(e,t,n){e.exports={container:"SearchForm_container__3aFpz"}},13:function(e,t,n){e.exports={container:"BookList_container__2XHaw"}},14:function(e){e.exports=["fantasy","thriller","drama","mystery","horror","satire","computers"]},15:function(e,t,n){e.exports={error:"ErrorFetch_error__3SLo2"}},16:function(e,t,n){e.exports=n(36)},22:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),i=n.n(o),c=(n(22),n(2)),l=n(3),s=n(5),u=n(4),m=n(6),p=n(8),h=n.n(p),g=n(9),d=n.n(g),f=n(11),v=n(12),b=n.n(v),E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",genre:""},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(f.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.genre,r=t.query;(0,n.props.onSubmit)(r,a)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.genres,t=this.state,n=t.genre,a=t.query;return r.a.createElement("div",{className:b.a.container},r.a.createElement("form",null,r.a.createElement("input",{name:"query",type:"text",value:a,onChange:this.handleChange}),r.a.createElement("select",{name:"genre",value:n,onChange:this.handleChange,onBlur:function(){return null}},r.a.createElement("option",{value:"",disabled:!0},"Choose here"),e.map(function(e){return r.a.createElement("option",{key:e,value:e},e)})),r.a.createElement("input",{type:"submit",value:"Search",onClick:this.handleSubmit})))}}]),t}(r.a.Component),_=n(13),k=n.n(_),y=n(1),N=n.n(y),S=function(e){var t=e.title,n=e.image,a=e.description,o=e.author,i=e.publisher,c=e.publishedDate,l=e.pageCount,s=e.rating;return r.a.createElement("div",{className:N.a.container},r.a.createElement("div",{className:N.a.main},r.a.createElement("div",{className:N.a.image},r.a.createElement("img",{src:n,alt:""})),r.a.createElement("div",{className:N.a.info},r.a.createElement("h1",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",t),r.a.createElement("p",null,"\u0410\u0432\u0442\u043e\u0440: ",o),r.a.createElement("p",{className:N.a.description},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",a))),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"\u0418\u0437\u0434\u0430\u0442\u0435\u043b\u044c: "),i,r.a.createElement("strong",null," \u0413\u043e\u0434: "),c),r.a.createElement("p",null,r.a.createElement("strong",null,"\u041a\u043e\u043b-\u0432\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446: "),l," ",r.a.createElement("strong",null,"\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ")," ",s)))};S.defaultProps={description:"",rating:"N/A",pageCount:"N/A",publishedDate:"N/A",publisher:""};var j=S,B=function(e){var t=e.items;return r.a.createElement("div",{className:k.a.container},0===t.length?r.a.createElement("p",null,"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"):t.map(function(e){return r.a.createElement(j,Object.assign({key:e.id},e))}))};B.defaultProps={items:[]};var C=B,O=n(14),x=n(15),w=n.n(x),L=function(e){var t=e.text;return r.a.createElement("p",{className:w.a.error},t)};console.log(h.a);var I="https://cdn.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png",A=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],isLoading:!1,error:null},n.handleSubmit=function(e,t){n.setState({isLoading:!0}),n.fetchBooks(e,t)},n.fetchBooks=function(e,t){var a="https://www.googleapis.com/books/v1/volumes?q=".concat(e,"+subject:").concat(t),r=function(e){var t=e.volumeInfo,n=t.authors,a=t.imageLinks,r="No name",o=I;return n&&(r=n.join(", ")),a&&a.smallThumbnail&&(o=a.smallThumbnail),{id:e.id,title:t.title,publisher:t.publisher,publishedDate:t.publishedDate,pageCount:t.pageCount,rating:t.averageRating,description:t.description,author:r,image:o}};fetch(a).then(function(e){return e.json()}).then(function(e){var t=e.items?e.items.map(r):[];n.setState({items:t})}).catch(function(e){return n.setState({error:e})}).finally(function(){return n.setState({isLoading:!1})})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.items,n=e.isLoading,a=e.error;return r.a.createElement("div",{className:d.a.container},r.a.createElement(E,{genres:O,onSubmit:this.handleSubmit}),a?r.a.createElement(L,{text:a.message}):null,n?r.a.createElement(h.a,{className:d.a.loading,color:"#26A65B",size:"16px",margin:"4px"}):r.a.createElement(C,{items:t}))}}]),t}(r.a.Component);i.a.render(r.a.createElement(A,null),document.getElementById("root"))},9:function(e,t,n){e.exports={container:"BookSearch_container__3IK0_",loading:"BookSearch_loading__3mA8l"}}},[[16,1,2]]]);
//# sourceMappingURL=main.d6f04746.chunk.js.map