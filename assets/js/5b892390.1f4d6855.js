"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[725],{5635:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(6070),s=t(5710);const a={id:"runtime",title:"Runtime"},r=void 0,o={id:"learn/core-concepts/node/runtime",title:"Runtime",description:"The runtime environment in the Calimero Network is essential for executing decentralized applications (DApps). It acts as a bridge between the application logic, the network, and storage layers, ensuring seamless operation and integration. The runtime ensures secure, isolated, and efficient execution of applications by managing resources effectively, supporting real-time event handling, enabling scalability, and providing robust storage and transaction management.",source:"@site/docs/02-learn/03-core-concepts/02-node/02-runtime.mdx",sourceDirName:"02-learn/03-core-concepts/02-node",slug:"/learn/core-concepts/node/runtime",permalink:"/calimero-network/learn/core-concepts/node/runtime",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1718190659e3,sidebarPosition:2,frontMatter:{id:"runtime",title:"Runtime"},sidebar:"tutorialSidebar",previous:{title:"Client Node",permalink:"/calimero-network/learn/core-concepts/node/client-node"},next:{title:"Server",permalink:"/calimero-network/learn/core-concepts/node/server"}},c={},l=[{value:"Core Capabilities",id:"core-capabilities",level:3}];function d(e){const n={h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The runtime environment in the Calimero Network is essential for executing decentralized applications (DApps). It acts as a bridge between the application logic, the network, and storage layers, ensuring seamless operation and integration. The runtime ensures secure, isolated, and efficient execution of applications by managing resources effectively, supporting real-time event handling, enabling scalability, and providing robust storage and transaction management."}),"\n",(0,i.jsx)(n.h3,{id:"core-capabilities",children:"Core Capabilities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Security and Isolation"}),": The runtime provides a secure execution environment for Calimero applications using WebAssembly (WASM). Each application is sandboxed in the WASM VM, ensuring proper isolation and preventing interference between applications. This setup also ensures that applications cannot access unauthorized resources, maintaining a secure environment."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Multi-Application Support"}),": The runtime allows multiple applications to run concurrently on the same node and supports multiple instances (contexts) of the same application, each with its own state. This capability enhances the flexibility and scalability of the network."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scoped Storage"}),": The runtime manages storage by partitioning it and governing where each context stores its state. These implementation details are abstracted from the app developer, ensuring that storage management is handled seamlessly and securely."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Atomic Transactions"}),": The runtime guarantees atomic transactions, ensuring that if a transaction fails, it is completely rolled back with no state updates or side effects detected. This guarantees consistency and reliability in the application's state and any connected clients."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Log Collection and Relaying Events"}),": The runtime facilitates log collection and relays events emitted by the applications to connected clients, enabling real-time monitoring and interaction."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Resource Management"}),": The runtime defines resource limits for applications to ensure fair usage and prevent malicious behavior. This includes limiting CPU, memory, and network usage to prevent any single application from monopolizing system resources or compromising the host system."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Task Management and Performance"}),": The runtime keeps track of WASM instances up to a defined threshold, effortlessly queueing transactions to reuse live instances and shutting down stale ones to reclaim system resources. These optimizations ensure efficient resource utilization and improved performance."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(758);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);