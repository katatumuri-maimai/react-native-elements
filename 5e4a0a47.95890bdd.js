(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(284)),s={id:"testing",title:"Testing"},i={unversionedId:"testing",id:"version-1.2.0/testing",isDocsHomePage:!1,title:"Testing",description:"We are using tests to make sure components keep their functionality between versions and edits.",source:"@site/versioned_docs/version-1.2.0/testing.md",slug:"/testing",permalink:"/docs/1.2.0/testing",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-1.2.0/testing.md",version:"1.2.0",sidebar:"version-1.2.0/docs",previous:{title:"Contributing",permalink:"/docs/1.2.0/contributing"},next:{title:"Label Guide",permalink:"/docs/1.2.0/labels"}},c=[{value:"Snapshot Testing",id:"snapshot-testing",children:[]},{value:"Functional Testing",id:"functional-testing",children:[]}],u={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We are using tests to make sure components keep their functionality between versions and edits.\nThey're many testing libraries for JavaScript and React Native, depending on what type of testing you're doing."),Object(o.b)("p",null,"The type of tests we use on React Native Elements are ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#snapshot-testing"}),"Snapshot"),"\nand ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#functional-testing"}),"Functional")," tests."),Object(o.b)("h2",{id:"snapshot-testing"},"Snapshot Testing"),Object(o.b)("p",null,"Snapshot testing sounds exactly like what it does! It takes snapshot of the structure of a rendered\ncomponent the props, and their values and saves it. Whenever a change is made it'll compare it to the original snapshot -\njust to be super sure the change you wanted to make had the desired outcome.\nIf the outcomes is what you expected, then you need to ",Object(o.b)("strong",{parentName:"p"},"update the snapshot"),", so that your changes will be the new\nstandard to compare to for changes in the future."),Object(o.b)("p",null,"To update the snapshots run this command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# yarn\nyarn test -u\n\n# npm\nnpm run test -u\n")),Object(o.b)("p",null,"For Snapshot Testing, we use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/"}),"Jest"),"."),Object(o.b)("p",null,"You can read more about snapshot testing ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/snapshot-testing.html"}),"here"),"."),Object(o.b)("h2",{id:"functional-testing"},"Functional Testing"),Object(o.b)("p",null,"Functional tests ensures that a component functions the way it should(",Object(o.b)("em",{parentName:"p"},"simplified"),"). This is important\nfor making changes to components, as it makes sure we don't break how something worked previously."),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-md"}),"If a user touches on a button in the button group, then the button selected should be highlighted\nand the previous one un-highlighted.\n")),Object(o.b)("p",null,"For Functional Testing, we use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://airbnb.io/enzyme/"}),"Enzyme"),"."),Object(o.b)("p",null,"You can read more about functional testing ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.guru99.com/functional-testing.html"}),"here"),"."))}p.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,h=l["".concat(s,".").concat(d)]||l[d]||b[d]||o;return n?a.a.createElement(h,i(i({ref:t},u),{},{components:n})):a.a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);