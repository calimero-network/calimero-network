"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[229],{4007:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=i(6070),s=i(5710);const a={id:"applications",title:"Applications"},o=void 0,r={id:"learn/core-concepts/applications",title:"Applications",description:"Applications in Calimero define the core logic governing how peers interact within a decentralized network. Developers can programmatically augment the protocol to create customized functionalities, supporting a wide range of applications tailored to various use cases, from direct messaging and communication channels to interactive games and collaborative editing.",source:"@site/docs/02-learn/03-core-concepts/03-applications.mdx",sourceDirName:"02-learn/03-core-concepts",slug:"/learn/core-concepts/applications",permalink:"/calimero-network/learn/core-concepts/applications",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1718190659e3,sidebarPosition:3,frontMatter:{id:"applications",title:"Applications"},sidebar:"tutorialSidebar",previous:{title:"Admin Client API",permalink:"/calimero-network/learn/core-concepts/node/admin-client-api"},next:{title:"Contexts",permalink:"/calimero-network/learn/core-concepts/contexts"}},l={},c=[{value:"Examples of Applications",id:"examples-of-applications",level:3},{value:"Benefits of Decentralized Applications",id:"benefits-of-decentralized-applications",level:3},{value:"Security and Data Management",id:"security-and-data-management",level:3},{value:"Building Applications",id:"building-applications",level:3}];function d(e){const n={h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Applications in Calimero define the core logic governing how peers interact within a decentralized network. Developers can programmatically augment the protocol to create customized functionalities, supporting a wide range of applications tailored to various use cases, from direct messaging and communication channels to interactive games and collaborative editing."}),"\n",(0,t.jsx)(n.h3,{id:"examples-of-applications",children:"Examples of Applications"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Communication Platforms"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Direct Messages and Channels"}),": Support for private, encrypted messaging between users and group communications in shared, secure spaces. This setup can scale from one-on-one conversations to large group discussions, similar to Slack channels or Discord communities."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Community Platforms"}),": Decentralized alternatives to platforms like Reddit or Hacker News, enabling independent contexts for different purposes, fostering discussions, and sharing content securely."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Interactive Games"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Privacy-Focused Games"}),": These games require the privacy of each player's moves until both have played, ensuring fair play and maintaining the confidentiality of strategies. Examples include:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Rock-Paper-Scissors"}),": Players' choices are revealed simultaneously after both have made their moves."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Battleship"}),": The positions of ships are kept secret until revealed through gameplay."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Non-Privacy Games"}),": These games do not require concealment of moves and allow all actions to be visible to both players. Examples include:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Chess"}),": A strategy game where all moves are visible to both players, with game logic running locally."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Checkers"}),": Another strategy game where all moves are open and visible to both players."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Collaborative Work"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Document Collaboration"}),": Real-time collaboration on documents, akin to Google Docs, but decentralized and secure."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Creative Projects"}),": Shared canvases or environments for drawing, designing, or working on various creative projects, where all contributions are securely encrypted."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"benefits-of-decentralized-applications",children:"Benefits of Decentralized Applications"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Resilience"}),": Distributed application logic ensures the system functions smoothly even if some devices go offline."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Autonomy"}),": Users control their data and activities without relying on a central authority."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Scalability"}),": The system scales effectively as more users join due to optimistic execution, with state being conflict-free and eventually reconciled."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Privacy"}),": Keeping data local and encrypted prevents exposure to third parties, crucial for sensitive information."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"security-and-data-management",children:"Security and Data Management"}),"\n",(0,t.jsx)(n.p,{children:"All non-state-transitional data, such as attached files in DMs, collaborative document assets, and game resources, inherit the same level of security as state-transitional transactions. This ensures that all forms of data within the Calimero network are encrypted and secure."}),"\n",(0,t.jsx)(n.p,{children:"Calimero also functions as a decentralized filesystem for these non-state-transitional, encrypted blobs of data. Similar to BitTorrent or IPFS, nodes can lazily share the data without needing any centralized storage options. This decentralized approach allows for efficient and secure data distribution across the network."}),"\n",(0,t.jsx)(n.h3,{id:"building-applications",children:"Building Applications"}),"\n",(0,t.jsx)(n.p,{children:"Developers can leverage Calimero's framework to programmatically build and augment a wide range of applications using provided tools and documentation. This includes setting up the development environment and deploying applications within the network."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Development Tools"}),"\nCalimero offers the Rust SDK and intuitive APIs, enabling developers to create applications that integrate seamlessly with the network."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Documentation and Support"}),"\nComprehensive documentation and community support assist developers in every step of the application development process, ensuring that they can build and deploy high-quality, secure applications efficiently."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5710:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(758);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);