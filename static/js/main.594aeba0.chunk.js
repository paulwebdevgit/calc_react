(this["webpackJsonpdeploy-react"]=this["webpackJsonpdeploy-react"]||[]).push([[0],{122:function(e,t,a){},123:function(e,t,a){},401:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(14),s=a.n(r),c=a(116),l=a(110),i=a(111),m=a(118),u=a(117);var d=function(e){var t=e.resultExpenses,a=e.resultIncome,n=e.totalBalance;return o.a.createElement("section",{className:"total"},o.a.createElement("header",{className:"total__header"},o.a.createElement("h3",null,"Kontostand"),o.a.createElement("p",{className:"total__balance"},n," \u20ac")),o.a.createElement("div",{className:"total__main"},o.a.createElement("div",{className:"total__main-item total__income"},o.a.createElement("h4",null,"Einkommen"),o.a.createElement("p",{className:"total__money total__money-income"},a," \u20ac")),o.a.createElement("div",{className:"total__main-item total__expenses"},o.a.createElement("h4",null,"Verbrauch"),o.a.createElement("p",{className:"total__money total__money-expenses"},t,"\u20ac"))))},p=function(e){var t=e.transaction,a=e.delTransaction;return o.a.createElement("li",{className:"history__item ".concat(t.add?"history__item-plus":"history__item-minus")},t.description,o.a.createElement("span",{className:"history__money"},t.amount," \u20ac"),o.a.createElement("button",{className:"history__delete",onClick:function(){return a(t.id)}},"x"))},_=function(e){var t=e.transactions,a=e.delTransaction;return o.a.createElement("section",{className:"history"},o.a.createElement("h3",null,"Ums\xe4tze"),o.a.createElement("ul",{className:"history__list"},t.map((function(e){return o.a.createElement(p,{key:e.id,transaction:e,delTransaction:a})}))))},E=function(e){var t=e.addTransaction,a=e.addAmount,n=e.addDescription,r=e.description,s=e.amount;return o.a.createElement("section",{className:"operation"},o.a.createElement("h3",null,"Neue Transaktion"),o.a.createElement("form",{id:"form"},o.a.createElement("label",null,o.a.createElement("input",{type:"text",className:"operation__fields operation__name",placeholder:"Name der Transaktion",onChange:n,value:r})),o.a.createElement("label",null,o.a.createElement("input",{type:"number",className:"operation__fields operation__amount",placeholder:"Geben Sie den Betrag ein",onChange:a,value:s})),o.a.createElement("div",{className:"operation__btns"},o.a.createElement("button",{onClick:function(){return t(!1)},type:"button",className:"operation__btn operation__btn-subtract"},"VERBRAUCH"),o.a.createElement("button",{onClick:function(){return t(!0)},type:"button",className:"operation__btn operation__btn-add"},"EINKOMMEN"))))},h=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={transactions:JSON.parse(localStorage.getItem("calcMoney2"))||[],description:"",amount:"",resultIncome:0,resultExpenses:0,totalBalance:0},e.addTransaction=function(t){var a=Object(c.a)(e.state.transactions),n={id:"cmr".concat((+new Date).toString(16)),description:e.state.description,amount:parseFloat(e.state.amount),add:t};a.push(n),e.setState({transactions:a,description:"",amount:""},(function(){e.getTotalBalance()}))},e.addAmount=function(t){e.setState({amount:t.target.value})},e.addDescription=function(t){e.setState({description:t.target.value})},e.getIncome=function(){return e.state.transactions.reduce((function(e,t){return t.add?t.amount+e:e}),0)},e.getExpenses=function(){return e.state.transactions.reduce((function(e,t){return t.add?e:t.amount+e}),0)},e.getTotalBalance=function(){var t=e.getIncome(),a=e.getExpenses(),n=t-a;console.log(t),console.log(a),console.log(n),e.setState({resultIncome:t,resultExpenses:a,totalBalance:n})},e.delTransaction=function(t){var a=e.state.transactions.filter((function(e){return e.id!==t}));e.setState({transactions:a},e.getTotalBalance)},e}return Object(i.a)(a,[{key:"componentWillMount",value:function(){this.getTotalBalance()}},{key:"componentDidUpdate",value:function(){this.addStorage()}},{key:"addStorage",value:function(){localStorage.setItem("calcMoney2",JSON.stringify(this.state.transactions))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("h1",null,"Geldbeutel"),o.a.createElement("h2",null,"Kostenrechner")),o.a.createElement("main",null,o.a.createElement("div",{className:"container"},o.a.createElement(d,{resultExpenses:this.state.resultExpenses,resultIncome:this.state.resultIncome,totalBalance:this.state.totalBalance}),o.a.createElement(_,{transactions:this.state.transactions,delTransaction:this.delTransaction}),o.a.createElement(E,{addTransaction:this.addTransaction,addAmount:this.addAmount,addDescription:this.addDescription,description:this.state.description,amount:this.state.amount}))))}}]),a}(n.Component);a(122),a(123),a(124);s.a.render(o.a.createElement(h,null),document.getElementById("root"))}},[[401,1,2]]]);
//# sourceMappingURL=main.594aeba0.chunk.js.map