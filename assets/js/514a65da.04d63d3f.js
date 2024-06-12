"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[182],{9830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(6070),a=n(5710);const i={id:"storage",title:"Storage"},r=void 0,o={id:"learn/core-concepts/node/storage",title:"Storage",description:"The storage component in the Calimero Network is essential for managing and maintaining the data generated and utilized by decentralized applications (DApps). It ensures data integrity, security, and efficient access, enabling seamless operation of applications within the network.",source:"@site/docs/02-learn/03-core-concepts/02-node/04-storage.mdx",sourceDirName:"02-learn/03-core-concepts/02-node",slug:"/learn/core-concepts/node/storage",permalink:"/learn/core-concepts/node/storage",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1718189423e3,sidebarPosition:4,frontMatter:{id:"storage",title:"Storage"},sidebar:"tutorialSidebar",previous:{title:"Server",permalink:"/learn/core-concepts/node/server"},next:{title:"Network",permalink:"/learn/core-concepts/node/network"}},c={},l=[{value:"Core Capabilities",id:"core-capabilities",level:3}];function d(e){const t={h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The storage component in the Calimero Network is essential for managing and maintaining the data generated and utilized by decentralized applications (DApps). It ensures data integrity, security, and efficient access, enabling seamless operation of applications within the network."}),"\n",(0,s.jsx)(t.h3,{id:"core-capabilities",children:"Core Capabilities"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Generic Storage Interface"}),": Calimero provides a flexible storage interface that allows app developers to choose their preferred database. By default, Calimero uses RocksDB, but it can also support LevelDB, Sled, TigerBeetle, SQLite, or even cloud storage solutions like S3."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Context State Storage"}),": The context state is backed by a Patricia-Trie structure flattened into the key-value map of the datastore. This structure ensures efficient state management and retrieval."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Data Blobs"}),": The storage system handles non-state-transitional, encrypted blobs of data, similar to BitTorrent or IPFS. Nodes can lazily share these data blobs without needing centralized storage, ensuring efficient and secure data distribution across the network. By default, the blobstore is the local filesystem, but it can be configured to use any cloud storage option or content-addressed storage like IPFS."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Data Encryption"}),": All data stored within the network is encrypted at rest, ensuring that sensitive information remains protected. This includes both state-transitional data and non-state-transitional data like attached files in DMs or collaborative document assets."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Efficient Data Operations"}),": The storage component is optimized for quick data operations, ensuring that applications can access, retrieve, and update the data they need promptly. Caching mechanisms are employed to further improve data access speeds."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Garbage Collection"}),": The system includes mechanisms for garbage collection using reference counting for trie data, allowing for the cleanup of obsolete or redundant data. This helps in maintaining optimal storage performance and resource utilization."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Metrics and Monitoring"}),": The storage component provides detailed metrics on storage usage, including total usage and breakdowns by context. This allows for effective monitoring and management of storage resources."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5710:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(758);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);