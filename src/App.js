import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import { useState } from 'react';
import Gallery from './Gallery';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//          <Welcome name="React Developer" />
//       </header>
//     </div>
//   );
// }

// export default App;

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function MyButton() {
   const [count, setCount] = useState(0);
  // 定义事件处理函数
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={handleClick}>
      我是一个按钮{count}
    </button>
  );
}

function AdminPanel(){
  return (
    <div>
      AdminPanel
    </div>
  )
}

function LoginForm(){
  return(
    <div>
      LoginForm
    </div>
  )
}


// 使用大括号{}

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'zh-CN',
    { weekday: 'long' }
  ).format(date);
}

export function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}



export default function MyApp() {
  let content;
  const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
  ];  

  if(true){
    content=<AdminPanel/>
  }else{
    content=<LoginForm/>
  }

  const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
  );

  const products2 = [
  { title: '卷心菜', isFruit: false, id: 1 },
  { title: '大蒜', isFruit: false, id: 2 },
  { title: '苹果', isFruit: true, id: 3 },
  ];

  const listItems2 =products2.map(product=>
  <li
    key={product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}>
    {product.title}
  </li>)

  return (
    <>
      <h1 className="avatar">欢迎来到{user.name}的应用</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <MyButton />
      <MyButton />
      <div>
        {content}
      </div>
      <ul>{listItems}</ul>
      <ul>{listItems2}</ul>
      <Gallery/>
      <TodoList/>
    </>
  );

}