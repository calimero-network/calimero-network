"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[620],{6226:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=i(6070),o=i(5710);const r={id:"terminology",title:"Terminology"},s=void 0,a={id:"learn/terminology",title:"Terminology",description:"As projects grow, it's important to have a shared vocabulary to help communicate effectively. This page provides a list of terms used in the documentation and throughout the codebase.",source:"@site/docs/02-learn/02-terminology.mdx",sourceDirName:"02-learn",slug:"/learn/terminology",permalink:"/calimero-network/learn/terminology",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1718190659e3,sidebarPosition:2,frontMatter:{id:"terminology",title:"Terminology"},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/calimero-network/learn/architecture"},next:{title:"Identity",permalink:"/calimero-network/learn/core-concepts/identity"}},c={},l=[];function d(e){const t={li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"As projects grow, it's important to have a shared vocabulary to help communicate effectively. This page provides a list of terms used in the documentation and throughout the codebase."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Node"})," is any individual device or computer that participates in the network. To avoid confusion with network layer used in the protocol, instead of network we are using term ",(0,n.jsx)(t.strong,{children:"Context"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Peer"})," is a specific instance of a node within a P2P network that interacts with other peers. Peer represents user."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Peer Id"})," is a unique identifier assigned to each peer in the network. It is used to distinguish between different peers and ensure that messages are delivered to the correct recipient."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Context"})," is the core of the Calimero ecosystem. It is an application specific network designed to enable direct communication between users, eliminating the need for intermediaries"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Application"})," is a software program designed to perform specific tasks or solve particular problems. To ensure compatibility and functionality, it should be developed according to the protocol SDK instructions provided. Once developed, the application should be published in a format that others can use during runtime, specifically in WebAssembly (WASM) format. Developer can also build frontend for an application, deployed separately, allowing users to interact with an app directly. This user interface facilitates interaction with the underlying software, making the application accessible and user-friendly."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Root key"})," is the public part of a wallet cryptographic key pair used to verify the signature of sensitive actions. This public key is used to ensure that any data or actions signed with the corresponding private key can be trusted. Essentially, the root key serves as a trust anchor, enabling users to validate the authenticity and integrity of operations or communications associated with the node. It does not grant direct control over the node but ensures that actions authenticated with the private part of the root key are legitimate."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Client key"})," is a cryptographic key tailored for each user session, acting as a session key or token. Each client key must be signed with the root key to be valid which is done automatically during login. This ensures that only sessions authenticated by the trusted root key can interact with the node."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Specialized node"})," is third-party node that augment a context's capacity and reliability. It participates in a context but have additional capabilities, providing various services while maintaining the decentralized nature of the network."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5710:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(758);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);