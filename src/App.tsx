import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useImperativeHandle,
  useContext,
  useReducer
} from 'react';

interface IUser {
  name: string;
  login: string;
  avatar_url: string;
}

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useState<[IUser]>();
  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', []);
  const greeting = useCallback((user: IUser) => alert(`Hello ${user.name}`), []);

  function focusOnInput(){
    inputRef.current?.focus();
  }

  return (
    <form>
      <input type="text" ref={inputRef}/>
    </form>
  );
}

export default App;
