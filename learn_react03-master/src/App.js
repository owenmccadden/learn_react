import { useState, useEffect } from 'react';

import './App.css';
import Button from './Button';
import Table from './Table';

function App() {

  const base_url = 'https://jsonplaceholder.typicode.com/';
  const [items, setItems] = useState([]);
  const [reqType, setReqType] = useState('users');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await (await fetch(`${base_url}${reqType}`)).json();
        setItems(response);
      } catch (err) {
        console.log(err);
      }
    }

    fetchItems();
  }, [reqType])

  return (
    <div className="App">
      <header>
        <Button
          className="button"
          text="users"
          reqType={reqType}
          setReqType={setReqType}
        />
        <Button
          className="button"
          text="posts"
          reqType={reqType}
          setReqType={setReqType}
        />
        <Button
          className="button"
          text="comments"
          reqType={reqType}
          setReqType={setReqType}
        />
      </header>
      <main>
        <Table
          className="table"
          reqType={reqType}
          items={items}
        />
      </main>
    </div>
  );
}

export default App;
